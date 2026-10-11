// Execute from TESTA; no UI automation, no target requests, no source edits.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
if (!process.env.INTELLIA11Y_API || !process.env.DATABASE_URL) throw new Error('Set INTELLIA11Y_API and DATABASE_URL for an isolated, migrated local demonstration database.');
const api=path.resolve(process.env.INTELLIA11Y_API);
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
process.env.NODE_ENV='test'; process.env.LOG_LEVEL='error';
process.env.DB_SSL_MODE='disable';
require('module').createRequire(path.join(api,'package.json'))('tsx/cjs');
(async()=>{
 const {ruleEngine}=require(path.join(api,'src/services/rule-engine.ts'));
 ruleEngine.setOptions({enableLLM:false,wcagVersion:'2.2',wcagLevel:'AA',includeBestPractices:false});
 const before='<!doctype html><html><head><title>Synthetic accessibility regression</title></head><body><main><h1>Sample service</h1><p>Book a demonstration slot.</p><form><input id="visitor-name" type="text"><button type="submit"></button></form></main></body></html>';
 const after='<!doctype html><html lang="en"><head><title>Synthetic accessibility regression</title></head><body><main><h1>Sample service</h1><p>Book a demonstration slot.</p><form><label for="visitor-name">Visitor name</label><input id="visitor-name" type="text"><button type="submit">Book slot</button></form></main></body></html>';
 const rows=[];
 for(const [phase,html] of [['before',before],['after',after],['before_repeat',before],['after_repeat',after]]){
  const started=new Date().toISOString(), r=await ruleEngine.analyze(html);
  const select=x=>({ruleId:x.ruleId,title:x.title,severity:x.severity,elementSelector:x.elementSelector,detectedBy:x.detectedBy,tier:x.tier,evidence:x.evidence});
  rows.push({phase,started,finished:new Date().toISOString(),fixtureSha256:sha(html),score:r.score,summary:r.summary,confirmed:r.confirmedIssues.map(select),needsReview:r.needsReviewIssues.map(select),advisory:r.advisoryIssues.map(select),issues:r.issues.map(select)});
 }
 fs.writeFileSync(path.join(__dirname,'before.html'),before); fs.writeFileSync(path.join(__dirname,'after.html'),after);
 const sourceFiles=['src/services/rule-engine.ts','src/services/rules/engine.ts','src/services/rules/index.ts'];
 const record={generatedAt:new Date().toISOString(),scope:'Direct native-engine execution on synthetic HTML. No browser probes, LLM, ADO workflow or client benefit claim. Fixture corrections made by the evidence author; not autonomous product remediation.',sourceFiles:sourceFiles.map(file=>({file,sha256:sha(fs.readFileSync(path.join(api,file)))})),options:{enableLLM:false,wcagVersion:'2.2',wcagLevel:'AA',includeBestPractices:false},runs:rows};
 fs.writeFileSync(path.join(__dirname,'results.json'),JSON.stringify(record,null,2));
 console.log(JSON.stringify(rows.map(x=>({phase:x.phase,summary:x.summary,confirmed:x.confirmed.map(i=>i.ruleId),needsReview:x.needsReview.map(i=>i.ruleId)}))));
 process.exit(0);
})().catch(e=>{console.error(e.message);process.exit(1)});
