# Native-engine demonstration evidence

Executed locally on 11 October 2026 using synthetic inputs. These are actual bounded runtime observations. They are not client results, complete application recordings or a completed AI-led improvement lifecycle.

| Reference | Observed before → after | Scope |
| --- | --- | --- |
| [A11 IntelliA11y](A11_IntelliA11y_Runtime/REPORT.txt) | 3 → 0 confirmed findings; 11 → 5 review-required findings, repeated twice | Direct DOM engine. Overlapping input findings; five review items remain. LLM disabled; optional RAG unavailable. |
| [A12 IntelliSec](A12_IntelliSec_Runtime/report.txt) | 1 → 0 predictable-token findings | Selected native PHP detector on synthetic code; several analysis stages disabled. |
| [A13 Inteliperf](A13_Inteliperf_Runtime/REPORT.txt) | 3/3 → 0/3 per-step assertion errors | Real local HTTP requests through InternalRunner; storage/auth/status seams isolated. HTTP errors were zero throughout. |
| [A14 IntelliA11y hand-off](A14_IntelliA11y_Handoff_Status.txt) | Installed consumer machinery identified; no completed linked run found | Read-only source and safe aggregate inspection. No ADO actions performed. |

The evidence author deliberately changed each fixture. These results do not demonstrate autonomous remediation, fine-tuning, accuracy across a benchmark, 85% automation, 90% effort savings or improved performance. Three Inteliperf samples per phase cannot support a latency claim.

Each folder includes the reproduction harness and structured outputs. A11 requires an isolated migrated database because importing the application database module initiates startup checks. A12 requires the IntelliSec checkout and dependencies. A13 opens a temporary loopback target and substitutes only the documented integration seams. Use the repository environment variables described in the reports when running from a different checkout layout. Preserve these captured files before rerunning, because the harnesses overwrite their outputs.

The Inteliperf public outputs alias the temporary loopback target and private paths; provenance records original and published hashes. The current portable harness has post-run path/redaction changes, with executed and current hashes distinguished. Original private logs, credentials, application URLs and confidential records are excluded.

## Recording status

No application video has been recorded. The browser-control tool returned no browsers and failed to initialise its native connection. Permission to use Playwright as an alternative recording method has been requested. The API/core-engine results above were obtained independently of that recording blocker; they must not be presented as visible dashboard results.

The three paper texts are unchanged. These records are supplemental technical evidence.
