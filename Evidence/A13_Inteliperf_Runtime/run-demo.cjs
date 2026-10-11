/* Isolated real-HTTP InternalRunner demonstration. No shared DB or UI writes. */
const fs = require('fs');
const path = require('path');
const http = require('http');
const Module = require('module');
const crypto = require('crypto');
const assert = require('assert');
const out = __dirname;
const repo = process.env.INTELIPERF_REPO ? path.resolve(process.env.INTELIPERF_REPO) : path.resolve(out, '../../../../aegis-test');
const backend = path.join(repo, 'packages/backend');
const source = path.join(backend, 'src/services/InternalRunner.ts');
const originalLoad = Module._load;
const blocked = [];
const storageCalls=[];
let authCleanups=0;
const logs = [];
const originalFetch = global.fetch;
let targetPort;
const privateDir=path.join(out,'private');
fs.mkdirSync(privateDir,{recursive:true});
const publish=(name,data)=>{
  const raw=JSON.stringify(data,null,2);
  fs.writeFileSync(path.join(privateDir,name),raw);
  const clean=raw.replace(/http:\/\/127\.0\.0\.1:\d+/g,'fixture://synthetic-target').split(repo).join('<INTELIPERF_REPO>').split(out).join('<EVIDENCE_DIR>');
  fs.writeFileSync(path.join(out,name),clean);
};
const denied = name => () => { blocked.push(name); throw new Error('Excluded integration invoked: ' + name); };
const log = Object.fromEntries(['info','warn','error','debug'].map(k => [k,(...args) => logs.push({level:k,args})]));
// Integration seams only: core runner, metrics, assertions, scheduling and safety are untouched.
const stubs = {
  '../db/pgDb': {pool:{query:async(sql)=>{storageCalls.push({operation:String(sql).trim().split(/\s+/)[0]});return {rows:[],rowCount:0};}},getAuthProfile:denied('auth lookup'),insertRequestLog:denied('request DB write')},
  '../routes/scans': {registerRunningScan:denied('global scan registration'),unregisterRunningScan:denied('global scan deregistration')},
  './ScanStatusStream': {publishScan:denied('shared status stream')},
  '../lib/logger': {log},
  './AuthenticationExecutor': {executeAuthentication:denied('authentication'),getAuthHeaders:denied('auth headers'),refreshSessionIfNeeded:denied('auth refresh'),clearVuSession:()=>{authCleanups++;}},
  './RequestRewritingService': {RequestRewritingService:{rewriteRequest:denied('request rewriting'),updateRewriteLog:denied('rewrite persistence')}},
  './ScanLifecycleManager': {ScanLifecycleManager:{trackMutation:denied('mutation persistence')}},
};
Module._load = function(request, parent, isMain) {
  if (parent?.filename.startsWith(backend) && Object.hasOwn(stubs,request)) return stubs[request];
  return originalLoad.apply(this,arguments);
};
global.fetch = async (input, options) => {
  const u = new URL(String(input));
  assert.equal(u.hostname,'127.0.0.1','Only synthetic loopback target permitted');
  assert.equal(Number(u.port),targetPort,'Only the private demo port permitted');
  assert.equal(u.pathname,'/synthetic-check','Only the synthetic path permitted');
  assert.equal(options?.method,'GET');
  return originalFetch(input,options);
};
require(path.join(backend,'node_modules/ts-node')).register({transpileOnly:true,project:path.join(backend,'tsconfig.json')});
const {InternalRunner}=require(source);
const receipts=[];
let phase='before';
const server=http.createServer((req,res)=>{
  assert.equal(req.method,'GET');
  assert.equal(req.url,'/synthetic-check');
  receipts.push({phase,at:new Date().toISOString(),method:req.method,path:req.url,status:200,value:phase==='before'?'incorrect':'correct'});
  res.writeHead(200,{'Content-Type':'application/json'});
  res.end(JSON.stringify({value:phase==='before'?'incorrect':'correct'}));
});
const watchdog=setTimeout(()=>{ console.error('Harness hard time limit reached'); process.exit(2); },15000);
(async()=>{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  targetPort=server.address().port;
  const plan={
    planId:'synthetic-local-plan',projectId:'synthetic-local-project',name:'Isolated correctness demonstration',goal:'CUSTOM',
    target:{baseUrl:`http://127.0.0.1:${targetPort}`,allowedDomains:['127.0.0.1']},
    scenarios:[{id:'synthetic-scenario',type:'api',weight:1,steps:[{id:'synthetic-step',name:'Expected JSON value',request:{method:'GET',path:'/synthetic-check'},assertions:[{type:'status',op:'eq',value:200,description:'HTTP status is 200'},{type:'jsonPathValue',subject:'$.value',op:'eq',value:'correct',description:'JSON value is correct'}]}]}],
    loadProfiles:[{id:'bounded-profile',type:'vus',vus:1,durationSec:2}],
    safetyPolicy:{safeMode:true,maxVus:1,maxRps:5,maxDurationSec:2,methodAllowlist:['GET']},
  };
  const results={};
  for(phase of ['before','after']) {
    const runner=new InternalRunner({scanId:'synthetic-'+phase,plan:structuredClone(plan),publishUpdates:false,maxIterations:3,safetyMode:'safe',calibrationConfig:{enabled:false,durationSec:1,rampSteps:1,saturationCpuThreshold:95,saturationMemThreshold:85},publishProgress:()=>{},onHeartbeat:async()=>{},onRegisterScan:()=>{},onUnregisterScan:()=>{}});
    results[phase]={startedAt:new Date().toISOString(),result:await runner.run(),endedAt:new Date().toISOString()};
  }
  publish('attempt-debug.json',{results,receipts,blocked,logs});
  assert.equal(blocked.length,0,'No excluded integration may be invoked');
  assert.equal(results.before.result.metrics.overall.requests,3);
  assert.equal(results.after.result.metrics.overall.requests,3);
  assert.equal(results.before.result.metrics.byStep[0].errors,3);
  assert.equal(results.after.result.metrics.byStep[0].errors,0);
  assert.equal(results.before.result.metrics.overall.errors,0); // HTTP success differs from assertion correctness.
  assert.equal(results.after.result.metrics.overall.errors,0);
  assert.equal(receipts.length,8); // Three measured requests plus one preflight probe per phase.
  const hashes={};
  for(const file of ['InternalRunner.ts','LoadControlEngine.ts','RuntimeSafetyMonitor.ts','CalibrationService.ts']) hashes[file]=crypto.createHash('sha256').update(fs.readFileSync(path.join(backend,'src/services',file))).digest('hex');
  publish('raw-results.json',{scope:'isolated synthetic localhost HTTP; not client, UI, DB or worker validation; public copy aliases private loopback target',sourceHashes:hashes,scriptSha256:crypto.createHash('sha256').update(fs.readFileSync(__filename)).digest('hex'),plan,results,receipts,excludedIntegrationCalls:blocked,storageAdapterCalls:storageCalls,authCleanupNoops:authCleanups});
  publish('runner-log.json',logs);
  console.log(JSON.stringify({before:results.before.result.metrics.byStep[0],after:results.after.result.metrics.byStep[0],receipts:receipts.length,excludedIntegrationCalls:blocked.length},null,2));
})().catch(err=>{fs.writeFileSync(path.join(privateDir,'failure.txt'),err.stack+'\n');fs.writeFileSync(path.join(out,'failure.txt'),String(err.stack).split(repo).join('<INTELIPERF_REPO>').split(out).join('<EVIDENCE_DIR>')+'\n');console.error(err.message);process.exitCode=1;}).finally(()=>{clearTimeout(watchdog);server.closeAllConnections();server.close();});
