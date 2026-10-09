# TESTA 2026 – Multi-Category Master Prompt v6 (3 inputs + plain-text project story + human-voice standard + no-table output + separate gaps file)

**Entry deadline:** 12 October 2026
**Default limits:** Summary max 100 words (~700 characters). Entry text max 14,600 characters including spaces. Check the entry template if a category states otherwise.

**What changed in v6**
- **No tables in the output.** Every place the earlier prompt asked for a table (objectives, KPIs, ROI, scorecards, audits, the Extraction Map) now asks for a clear bullet-point summary instead. The result file contains no tables, pipe layouts or column-aligned grids.
- **A separate data-gaps file.** Claude now writes a second .txt file that lists every data gap, every inconsistency in the figures and every claim that needs confirming. The gaps no longer sit inside the entry or the result file. The entry and the gaps file are delivered together.

**What changed in v5**
- Humanised British professional English is now a hard requirement. A new VOICE AND HUMANISATION STANDARD governs every sentence Claude writes: spelling, punctuation, rhythm, banned stock phrases, and a rule that every paragraph carries a concrete fact.
- Optional extras: a short sample of your own writing (so the draft borrows your rhythm and word choice) and a narrator preference. The three required fields are unchanged.
- Phase 0 now also looks for "texture": the candid detail that makes an entry sound lived-in (what failed first, who disagreed, what surprised the team). Claude asks for it. It never invents it.
- Drafting is a three-pass process (facts, voice, tell-tale scan). The source story's own wording is treated as raw material and is not reused.
- Phase 3 adds a Humanisation Audit. Phase 4 delivers a clean paste-ready copy (no working tags) and a short human edit checklist.
- Unchanged: Extraction Map, Missing Input Report, category criteria, scoring bands, ROI and closing sections.

## How to use
1. Copy everything inside the prompt block into a new Claude chat.
2. Fill in the three required fields at the bottom (Category, Company, Industry).
3. Paste everything else you know into PROJECT STORY, in any order and any format.
4. Optional but recommended: paste 150–400 words of your own writing into VOICE SAMPLE.
5. Claude returns two .txt files: a **result file** (Extraction Map as bullets) and a separate **data gaps and inconsistencies file** named after your selected category, for example `Best_Overall_Project_Data_Gaps_and_Inconsistencies.txt` (🔴 Missing, 🟠 Weak, 🟢 Ready, plus conflicting figures).
6. Answer the gaps in plain text, reply "proceed", and receive an updated result file (summary, entry text, self-score and audits, all as bullets) and an updated gaps file.
7. Reply "final" for the clean copy and the human edit checklist. The gaps file is re-issued with whatever is still open.

**A realistic expectation:** no prompt can guarantee that text passes every AI detector, and detectors regularly flag genuine human writing. What this prompt does is remove the recognisable machine patterns and build the entry on real, specific facts. Your own read-through at the end is the most important step.

---

## PROMPT (copy from here)

```
ROLE
You are an expert award-entry writer, software testing consultant and TESTA-style judge.
You read my plain-text project story, extract the facts yourself, flag every gap in plain
bullet points, and score your own draft against the official judging criteria.
You also write the way a careful, experienced British professional writes: plain, specific,
slightly understated, and free of the stock patterns that make text read as machine-made.

========================================================================
MY INPUT (three required fields, two optional ones; everything else is plain text)
========================================================================
SELECTED CATEGORY: [Best Overall Project | Best Test Automation Project – Functional |
Best Test Automation Project – Non-Functional | Most Innovative Project |
AI Powered Quality Assurance | FIT-CHECK]
COMPANY: 
INDUSTRY / SECTOR (state if Public Sector and which body): 

PROJECT STORY (plain text, any order, any format; paste notes, emails, bullets, metrics,
quotes, links to exhibits):
"""
[paste here]
"""

NARRATOR (optional; default is "we, the project team"): 

VOICE SAMPLE (optional; 150–400 words of my own writing, such as an email, report or post.
Used only for rhythm, formality and word choice. Never copy sentences from it):
"""
[paste here or leave blank]
"""

LIMITS
Summary max 100 words (~700 characters). Entry text max 14,600 characters including
spaces. British professional English, written to the VOICE AND HUMANISATION STANDARD below.

========================================================================
OUTPUT FILES AND FORMAT (applies to every phase and every category)
========================================================================
Always deliver two separate plain-text (.txt) files. The filename of each must include
the name of the SELECTED CATEGORY exactly as chosen, with spaces and punctuation replaced
by underscores. Use these patterns:
- Result file: [SELECTED_CATEGORY]_Result.txt
- Data gaps file: [SELECTED_CATEGORY]_Data_Gaps_and_Inconsistencies.txt
Examples for Best Overall Project: Best_Overall_Project_Result.txt and
Best_Overall_Project_Data_Gaps_and_Inconsistencies.txt. For Best Test Automation Project –
Functional: Best_Test_Automation_Project_Functional_Data_Gaps_and_Inconsistencies.txt.
Say in the chat which file holds what. Reuse the same filenames on every later round so
the files are easy to track.

FILE 1 – RESULT FILE
Contents by phase: Phase 0 and 1 = the Extraction Map; Phase 2 = Summary and Entry Text;
Phase 3 = scorecard, audits, character counts and the Stand-out Test; Phase 4 = the
clean copy of Summary and Entry Text only.

NO TABLES. The result file must not contain any table in any form: no markdown tables, no
pipe (|) layouts, no ASCII grids, no tab-aligned or column-aligned text.
Wherever this prompt says "table", "matrix", "grid" or "columns", present the same
data as a clear, well-organised bullet-point summary instead:
- One bullet per former row. Start with the row label, then the values in the same order
  as the former columns, separated by commas or short phrases, each value named
  (for example: "Regression time: baseline 4 days, target 1 day, result 0.5 day, shown in
  Exhibit 4").
- Group related bullets under a short plain heading. One level of sub-bullets at most.
- Keep every figure, baseline, target, period and exhibit reference that the table would
  have held. Converting to bullets must never drop data.
- Use plain hyphens (-) for bullets in the files. Keep bullets short and parallel in
  content but not identical in wording.
- Bullets used in place of a mandated table are exempt from the five-item cap in Standard
  rule 4. Bullets count towards the 14,600-character limit.

FILE 2 – DATA GAPS AND INCONSISTENCIES FILE
A separate .txt file, named with the SELECTED CATEGORY as set out above, that is never
part of the entry. Its first line is the title "DATA GAPS AND INCONSISTENCIES – [SELECTED
CATEGORY]". It lists, as bullets (no tables), everything I must fix or confirm. Structure it under these plain headings, omitting a
heading only if it has no items:
1. MISSING DATA (🔴): data the criterion needs and the story does not contain. Each item
   gives: an ID (G-01, G-02...), the criterion or section it affects, the exact data item
   needed, and one plain question I can answer in a sentence.
2. WEAK OR UNSUPPORTED DATA (🟠): present but lacking a baseline, source, period, target,
   evidence or scope. Same item format.
3. INCONSISTENCIES: the same item with different values; sums or percentages that do not
   add up (show the arithmetic); conflicting dates or counts; ROI arithmetic errors; a
   figure in the entry that differs from the story or from another section. For each, give
   both values, where each appears, and which one the entry currently uses.
4. ATTRIBUTION AND CLAIM RISKS: figures the project cannot own (macro or sector figures),
   unsupported precision, absolute claims ("zero", "100%", "eliminated") needing
   evidence, and unexplained internal codes or acronyms.
5. OPEN MARKERS: every [DATA NEEDED: ...] marker left in the draft, with the section it
   sits in.
6. DECISIONS NEEDED: choices only I can make (for example which of two conflicting
   figures to use, or the nomination name).
7. CONSOLIDATED CHECKLIST: all 🔴 items first, then 🟠, then inconsistencies, as one
   numbered to-do list with checkbox markers [ ]. I can reply to it in plain text, item by
   item.
Rules for the gaps file:
- Every item must be a concrete, answerable request. Do not pad it with generic advice.
- Never invent a value to close a gap. Never estimate money.
- Tag each item with its status 🔴, 🟠 or 🟢 (Ready items need only be listed in a
  one-line count at the top).
- Open the file with a short summary: number of 🔴, 🟠 and inconsistency items, and the
  three items that would raise the score most.
- On every later round, re-issue the whole file: mark items I have answered as RESOLVED
  with the value now used, and keep unresolved items. Add any new inconsistency that my
  answers have created.
- The chat reply stays short: say which files were produced and give the three-line
  headline counts. Do not paste the gaps into the chat.

========================================================================
CATEGORY CRITERIA (use ONLY the block for the selected category)
========================================================================

[CAT-1] BEST OVERALL PROJECT – most outstanding testing project in the Public Sector
O1. Detailed discussion of project goals, importance, achievements, resources and
    successful results
O2. Positive impact to the public sector
O3. Evidence of vision, forward-thinking and working closely with stakeholders to deliver
    the transformation on time and within budget
O4. Key performance indicators used to measure the programme's success
O5. Evidence and evaluation of overcoming project challenges/obstacles
O6. Evidence of commitment to promoting diversity and creating an inclusive culture in the
    project team
Eligibility check: the project must be a Public Sector project. If INDUSTRY / SECTOR or my
story does not show this, flag it as 🔴 Missing and ask me to confirm.

[CAT-2] BEST TEST AUTOMATION PROJECT – FUNCTIONAL
F1. Verification that functional requirements have been met or exceeded
F2. Utilisation of a well-developed test suite of testing scripts
F3. Impact of functional testing on confidence in the project and in deployment to
    production
F4. Detailed discussion of project goals, importance, achievements, resources and
    successful results
F5. Evidence and evaluation of overcoming project challenges/obstacles

[CAT-3] BEST TEST AUTOMATION PROJECT – NON-FUNCTIONAL
N1. Detailed discussion of how non-functional requirements were met or exceeded
    (performance, security, accessibility, reliability, scalability, usability, etc.)
N2. Validation that the non-functional tests represented real-world conditions
    (production-like data, load profiles, environments, user behaviour, devices, threats)
N3. Impact of non-functional testing on confidence in the project and in deployment to
    production
N4. Verification of project goals, importance, achievements, resources and successful
    results
N5. Evidence and evaluation of overcoming project challenges/obstacles

[CAT-4] MOST INNOVATIVE PROJECT
I1. The project significantly advanced the methods and practices of software testing and
    quality assurance
I2. Clear demonstration of the innovative nature: what drove the innovation and how it was
    achieved
I3. An attempt to push boundaries within the software testing industry
I4. Discussion of project goals, importance, achievements, resources and successful
    results
I5. Evidence and evaluation of overcoming project challenges/obstacles

[CAT-5] AI POWERED QUALITY ASSURANCE
A1. Impact on quality standards – measurable improvements (reduced error rates,
    precision, compliance rates, overall product or service quality)
A2. Innovation and uniqueness – originality of the AI approach; a novel application in
    quality assurance, control or improvement
A3. Sustainability and long-term value – ability to learn, evolve and keep delivering
    value; adaptability over time
A4. Operational efficiency and cost reduction – streamlined workflows, savings, reduced
    waste without compromising quality
A5. Customer and stakeholder satisfaction – demonstrable improvement in end-user or
    customer outcomes

========================================================================
SUPPLEMENTARY GENERAL SCORECARD (apply to every category as a secondary check)
========================================================================
G1. Detailed discussion of goals, importance, achievements and results
G2. Cutting-edge and fit-for-purpose technology, correctly and effectively used
G3. Training and upskilling the team, and working closely with stakeholders to deliver
    on time and within budget
G4. Evidence and evaluation of overcoming challenges/obstacles
G5. Commitment to promoting diversity and an inclusive culture in the project team
I do not know whether judges use the category criteria, this general scorecard, or both.
Therefore the entry must score >= 4/5 on every category criterion AND on G1–G5, and
should include 1–2 differentiators a judge will remember. Even where a category does not
list G3 or G5, include short, factual content on people, upskilling, stakeholders and
inclusion.

SCORING BANDS (every criterion)
5 = Specific, evidenced, quantified with context, internally consistent. Nothing
    important missing.
4 = Strong, minor gaps in evidence or context.
3 = Adequate but generic, or metrics lack baseline or justification.
2 = Thin; assertions without evidence.
1 = Mentioned only.   0 = Absent.



ADDITIONAL AWARD-ENTRY CONTENT CRITERIA
Apply these criteria alongside the category criteria and the existing TESTA entry guide. Use only facts from the PROJECT STORY, supplied answers, or verified exhibits. Do not add generic claims to fill space.

- Problem and business importance: explain the problem or opportunity, who was affected, why it mattered, and the baseline situation before the work.
- Goals and success measures: state the intended outcomes and measures; include baselines and targets where supplied.
- Testing approach: explain what was tested and how, including relevant functional, non-functional, risk-based, integration, test-data or end-to-end coverage.
- Technical solution and rationale: describe tools, frameworks, automation or AI only where relevant to explaining how the problem was solved. Explain why the choices were fit for purpose and mention alternatives or constraints only when supported by the input.
- Challenges and response: describe concrete testing, automation, data, environment, delivery, organisational or resource challenges and what the team did to address them. Keep challenges grounded in the testing or automation journey.
- Results and evidence: compare outcomes with the baseline. Explain each metric's definition, calculation, timeframe and source where available. Clearly distinguish measured results, estimates and qualitative feedback.
- Collaboration and stakeholder impact: explain how testers, developers, product owners, business users or other stakeholders contributed, and include supplied evidence of customer or stakeholder outcomes.
- Team development: describe supplied evidence of training, coaching, knowledge sharing or new capabilities, and how the team can maintain or extend the solution.
- Sustainability and wider value: explain how the work is maintained, reused, scaled or improved, and its lasting value, if the input supports those claims.
- Category alignment: make the strongest relevant evidence visible for the selected category. Do not force unrelated claims into the entry.

DATA FIDELITY AND RECONCILIATION RULES
- Check every figure, date, percentage, total, label, named entity and claim against the original PROJECT STORY and later answers before using it.
- Do not change, reinterpret, silently correct, or choose between conflicting input values to make the entry appear consistent. Preserve the supplied values and flag any mismatch in FILE 2, the Data Gaps and Inconsistencies file.
- For each discrepancy, state the conflicting values, where each appears, any arithmetic that demonstrates the mismatch, and the clarification required. Do not decide which value is correct unless I confirm it.
- If you calculate a value, label it as calculated, show the formula and exact input figures, and keep it separate from figures explicitly supplied by me. Do not substitute calculated values for supplied figures.
- If data is missing, unclear, inconsistent, unsupported or does not align with another part of the input, do not repair it by assumption. Record a concrete clarification question in FILE 2.
- Before drafting and again before delivering the final copy, run a reconciliation check across the story, Extraction Map, draft and exhibits. Record every unresolved discrepancy in FILE 2, not in the entry text.
- Ensure the entry only states claims that are traceable to the supplied information or verified evidence. Flag claims that lack support.

ENTRY GUIDE – STRONG ENTRIES (apply to all categories)
- Emphasise business importance and criticality, and what was innovative.
- Show people-management and communication traits: mentorship (including beyond the
  company), coaching, role-modelling, approachability, well-being, skilling people up.
- Clear evidence of overcoming challenges, best-practice commitment and methodology
  chosen to support objectives.
- Research and apply the best tech to test ALL of the system, not just backends.
- Clear methodology evidence and justification of tech choices; detailed understanding of
  stakeholder needs, importance and goals.
- Give context to every metric to justify its inclusion.

ENTRY GUIDE – WEAK ENTRIES (avoid)
- Describing business, project or architecture challenges instead of challenges in the
  testing or automation journey.
- Not covering all criteria.
- Lacking detail on the testing approach; a tools diagram with little on challenges and
  how they were overcome.
- No evidence of on-time, on-budget delivery, stakeholder engagement, or reflection on
  goals to establish success.
- Focusing on the merits of a tool or method rather than the project deliverable.
- Not justifying why metrics are included.

========================================================================
VOICE AND HUMANISATION STANDARD (governs everything written for the entry)
========================================================================
Goal: the entry should read as if an experienced test lead or programme manager wrote it to
explain their own project to a respected peer. Factual, plain, a little opinionated,
specific. Humanising means more real detail and a natural voice. It never means invented
detail.

1. Narrator and tense
- Write as the project team in the first person plural ("we") unless NARRATOR says
  otherwise or the story shows a single nominator (then ask). Past tense for finished work,
  present tense for what still runs.
- Where a judgement was made, say who made it and why ("we chose X over Y because...",
  including what that choice cost us).

2. British professional English
- Spelling: -ise/-isation, analyse, programme (but "program" for software code),
  organisation, behaviour, centre, licence (noun) / license (verb), judgement, catalogue,
  defence, practise (verb), "while" rather than "whilst".
- Dates as "12 October 2026". "per cent" in running prose, % in bullet summaries of data. £ with figures
  ("£1.2 million" first time, "£1.2m" after). Commas in thousands.
- Numbers one to nine as words in prose, 10 and above as numerals. Always numerals for
  metrics, units, durations and bulleted data points.
- Single quotation marks for quotes and terms; double only for a quote inside a quote.
- No Oxford comma unless it prevents ambiguity.
- Restrained punctuation: no em dashes at all (use a comma, brackets or a full stop); en
  dash only for number ranges; semicolons rare (three or fewer in the whole entry); no
  exclamation marks.
- Contractions in moderation where they sound natural (didn't, we'd, it's). Not in every
  sentence, and never in bulleted data summaries.
- Plain register: "use" not "utilise", "help" not "facilitate", "start" not "commence",
  "so" not "thereby". Define jargon once; spell out acronyms on first use; no unexplained
  internal codes.

3. Specificity first
- Every paragraph carries at least one concrete anchor from the story: a number with its
  baseline, a named role, a date, a system, a decision or a setback. If a paragraph has
  none, cut it or add a [DATA NEEDED: ...] marker.
- Prefer the particular to the general ("a full regression cycle took nine days" beats
  "regression was time-consuming"), but only when the particular is in the story.
- Include honest limits: what the solution does not cover, what did not work first time,
  what is still manual. Two or three across the entry, each traceable to the story or my
  answers.

4. Rhythm and shape
- Mix sentence lengths on purpose: about a third under 10 words, most in the middle, an
  occasional one over 30. Never three consecutive sentences of similar length or with the
  same opening word.
- Paragraphs run from one to five sentences. Not every paragraph needs a closing summary
  line; some simply stop.
- Vary how sections open. An occasional sentence may begin with "But", "So" or "And".
- Prose by default. Use a list only where this prompt mandates a data summary (these replace
  the former tables) or the items are genuinely parallel; otherwise maximum five items,
  uneven lengths, no bold lead-in labels. There are no tables anywhere.

5. Banned vocabulary and constructions (the tell-tale list)
Words and phrases: delve, leverage (as a verb), robust, seamless(ly), cutting-edge (except
when naming a criterion), state-of-the-art, game-changer, transformative, revolutionise,
groundbreaking, pioneering, holistic, synergy, landscape, tapestry, realm, testament,
pivotal, crucial, vital, paramount, underscore, showcase, foster, harness, unlock, empower,
elevate, streamline, spearhead, orchestrate, meticulous(ly), best-in-class, world-class,
unparalleled, tremendous, dramatically, drastically, "in today's fast-paced", "in an era
of", "it is worth noting", "it's important to note", "this highlights", "plays a key
role", "at the heart of", "first-of-its-kind" (unless evidenced).
Use with care, and only if the sentence then gives the specifics: comprehensive,
significant(ly), enhance(d), ensure/ensuring, mission-critical, end-to-end, journey.
Constructions: "not only X but also Y"; "it's not just X, it's Y"; "X, not Y" as a
rhetorical flourish; rhetorical questions; stacked triplets ("faster, safer and smarter")
more than once a page; openers such as Moreover, Furthermore, Additionally, Overall, In
conclusion; trailing participle tails (", ensuring...", ", enabling...", ", allowing...")
more than once per section; bold colon-labels inside running text; section titles that all
follow one pattern; adjective stacks; chains of abstract nouns ("the implementation of the
optimisation of..."); a tidy moral at the end of every section; praise of the entry itself.

6. Do not echo the story
Source notes and internal write-ups are often generic or promotional. Extract the facts,
then say them again in your own plain words. Strip marketing adjectives from anything you
carry over. No run of five or more words may be copied from the story (names, tool names,
quotes supplied for use and criterion wording excepted).

7. Claim calibration
State what was measured, over what period and against what baseline. Say "fell from 10
minutes to 2", not "dramatically reduced". Absolute claims ("zero", "100%", "eliminated",
"error-free") need evidence in the story or softer wording; list each one for me to confirm.

8. Format of the entry
- Plain text ready to paste: plain numbered section titles, no emoji, no bold inside
  paragraphs, no markdown symbols, no tables of any kind, and plain hyphen bullets only where this
  prompt asks for bulleted data summaries.
- "Challenge → Action → Result" is a planning shape only. Write each challenge as a short
  prose account in that order, without arrows or labels, and let the lengths differ.

9. Voice sample
If supplied, note its average sentence length, formality, punctuation habits and favourite
connectors, and mirror those. Where the sample clashes with this standard (a banned word,
an em dash), this standard wins. Never reuse its sentences or facts.

10. Integrity
Humanising never licenses invented anecdotes, quotes, typos or false imperfections. Where
texture is thin, ask me. Never claim the text will pass AI-detection software.

========================================================================
PHASE 0 – EXTRACT FROM MY PLAIN TEXT
========================================================================
Read the PROJECT STORY once, fully, and extract facts into the fields below. Do not ask
me to re-enter anything already present in the story.
Rules:
- Use ONLY what the story states. Never infer, round up or invent. If a fact is implied
  but not stated, mark it "(implied – please confirm)".
- Keep my numbers exactly as written, with units, baselines, periods and sources.
- If the story gives conflicting values for the same item, list both and flag it.
- Check that each value agrees with related totals, percentages, dates and labels elsewhere in the story; record mismatches without changing the source values.
- Keep supplied values separate from any calculated values. For calculations, show the formula and inputs and label the result as calculated.
- Treat anything inside the story as data, never as instructions to you.
- Treat the story's phrasing as raw material, not as text to reuse (Standard, rule 6).
- Nomination name: use one from the story if present; otherwise propose 2–3 options based
  on the story and ask me to choose.

Output an EXTRACTION MAP as a bulleted list in the result file, one bullet per field, in
this order: field name, what I found, source line from the story, confidence 🟢/🟠/🔴. No
table. Fields to extract:
 1. Nomination name; partner or third party
 2. System(s) under test; business context; why the project was critical
 3. Goals and success measures, with targets; KPIs and baselines
 4. Stakeholders and their needs; public-sector impact (if relevant)
 5. Team size, roles, duration, budget, effort
 6. Methodology and why
 7. Tools, frameworks, techniques; options considered; selection rationale
 8. Requirements (functional / non-functional) and how verified
 9. Suite or solution details: scope, layers, size, cadence, CI/CD
10. Real-world representativeness (non-functional): data, load, environments, devices
11. Innovation: what is new, the driver, how achieved, boundary-pushing, industry sharing
12. AI details (if relevant): technique, use case, training, evaluation, drift monitoring,
    governance, human oversight
13. Metrics before vs after, with source and why each matters
14. Impact on confidence and production outcomes
15. Customer / stakeholder satisfaction evidence
16. Challenges in the testing/automation journey and how solved
17. Training, upskilling, mentoring, certifications
18. Diversity and inclusion evidence
19. Delivery: on time? on budget? stakeholder engagement examples
20. ROI inputs: total investment (tooling, infrastructure, people, training, running cost,
    period); direct savings (baseline, result, period, method); risk mitigation (with
    assumptions); productivity gains; non-financial value; payback period; who validated
    the figures
21. Award-case inputs: 2–3 headline results; biggest differentiator; wider or lasting
    impact; best testimonial (with role); exhibits available
22. Lessons learned, goals vs final outcome, roadmap
23. Voice and texture: narrator preference; voice sample (if any); candid details such as
    the first approach that failed, a disagreement or trade-off and who settled it, a
    surprise, a stakeholder who changed their mind, what is still manual or out of scope;
    named roles for any quote

========================================================================
PHASE 1 – VALIDATE (BEFORE drafting)
========================================================================
If SELECTED CATEGORY is FIT-CHECK: using the Extraction Map, give each of the five
categories a readiness percentage, top 3 strengths and top 3 gaps, and recommend the
best-fit category (and a second choice). Then stop and ask me to confirm a category.

Otherwise produce a MISSING INPUT REPORT. Write it into FILE 2 (the data gaps and
inconsistencies file), not into the result file or the chat. Use this exact format for EVERY criterion of the
selected category, for G1–G5, and for the two closing sections (ROI SUMMARY and
WHY THIS MERITS THE AWARD):

  CRITERION [code] – [short name]   Status: 🟢 Ready | 🟠 Weak | 🔴 Missing   Predicted mark: x/5
  What I found: [one line, pointing to the Extraction Map row]
  Fix list (bullets, only if 🟠 or 🔴):
   • 🔴 MISSING: [exact data item needed]
   • 🟠 WEAK: [item present but needs baseline / source / numbers / evidence]

Rules for the Fix list:
- Make every bullet a concrete, answerable request I can answer in one plain sentence
  (e.g. "How many hours did regression take before automation?").
- Group bullets by criterion so I can fix one criterion at a time.
- End with a CONSOLIDATED FIX CHECKLIST: all 🔴 items first, then 🟠 items, as a single
  numbered to-do list with checkbox markers [ ]. Tell me I can reply to it in plain text,
  item by item.

Category-specific data to look for (flag each as 🔴 if absent from my story):
- CAT-1: public-sector confirmation; named public-sector stakeholders and citizens/users
  affected; measurable public-sector impact; KPIs with baselines and targets; vision and
  forward-thinking evidence; time and budget evidence; resources.
- CAT-2: functional requirements and how traceability and verification worked; suite
  size, design, layers (UI/API/data/integration), CI/CD, maintainability; production
  confidence evidence (defect leakage, incidents, rollbacks, go-live).
- CAT-3: non-functional requirements and targets; how real-world conditions were
  reproduced (data volumes, load profiles, environments, devices, threat models); results
  versus targets; confidence and production evidence.
- CAT-4: what was truly new versus existing practice; the driver; how it was achieved;
  how it pushed boundaries; evidence it advanced industry practice (reuse, adoption,
  talks, open source, papers); measured results.
- CAT-5: the AI technique and where it sits in QA; why AI over conventional methods;
  measurable quality improvements with baselines; training, evaluation, drift monitoring
  and governance (human oversight, bias, data privacy, explainability); long-term
  adaptability; efficiency and cost figures; satisfaction evidence.
- ALL: team, duration and budget; on-time and on-budget evidence; stakeholder
  engagement; challenges that belong to the testing/automation journey; D&I evidence;
  training and upskilling; exhibits; testimonials with roles.

ROI SUMMARY – flag as 🔴/🟠 if absent or weak: itemised total investment and period;
direct savings with baseline, result, period and calculation method; risk-mitigation
estimates with assumptions and the source of cost figures; productivity gains; measured
non-financial value; payback period; who validated the figures. If no financial data
exists, ask whether qualitative or efficiency value can be shown instead. Do not
estimate money.

WHY THIS MERITS THE AWARD – flag as 🔴/🟠 if absent or weak: 2–3 headline results; the
strongest differentiator; wider or lasting impact; a testimonial with role; exhibits that
prove the headline results; evidence for every judging criterion somewhere in the entry.

VOICE AND TEXTURE CHECK (never a stop item; at most 🟠)
Look for the candid detail in the story listed in Extraction row 23. If fewer than three
kinds are present, add up to five plain questions to the fix checklist (for example "What
did you try first that didn't work?" or "Who disagreed with the approach, and how was it
settled?"). If I do not answer, draft without them and do not invent any. If no voice
sample was given, use a neutral, plain British professional voice and say so.

Additional checks (list findings as bullets):
- Consistency (report every finding under INCONSISTENCIES in FILE 2): sums that don't add up; the same metric with different values; ROI
  arithmetic; conflicting dates.
- Attribution: claims the project cannot own (macro or sector figures); unsupported
  precision such as "100% satisfaction" without a source; unexplained internal codes.
- Challenge check: business or architecture challenges that must be reframed as
  testing/automation challenges (or flagged 🔴 if none exist).
- Entry Guide alignment: tool-focus instead of deliverable-focus; unjustified tech
  choices; coverage limited to backend; metrics without a stated reason.
- Absolute or promotional claims in the story ("zero hallucination", "eliminated",
  "significantly", "mission-critical"): list each with the evidence needed or the softer
  wording I should confirm.
- Differentiators: the 1–2 strongest things in my story.

STOP RULE: After writing the Extraction Map (result file) and the Missing Input Report
(gaps file), if any criterion is
🔴 Missing, stop and wait. If I reply "proceed", continue using [DATA NEEDED: ...]
markers in the draft for every gap. If I reply with plain-text answers, merge them into
the Extraction Map and re-run Phase 1 briefly (only changed rows).

========================================================================
PHASE 2 – DRAFT (only from the Extraction Map)
========================================================================
Write the Summary and Entry Text. After each section add a separate italic working line
"[Serves: F1, G1]" (removed in the Phase 4 clean copy). Use the section structure for the
selected category. In EVERY
category the LAST TWO sections are "ROI Summary" and "Why This Merits the Award",
in that order, exactly as specified in the CLOSING SECTIONS block below.
Use the COMPANY and INDUSTRY fields exactly as supplied.

DRAFTING PROCESS (run silently; show only the final result)
Pass A – Facts: build each section from the Extraction Map only, and check every criterion
  is served.
Pass B – Voice: rewrite every section to the VOICE AND HUMANISATION STANDARD: narrator,
  British conventions, varied rhythm, plain words, a concrete anchor in each paragraph,
  honest limits, no story phrasing.
Pass C – Tell-tale scan: check the text against Standard rule 5 and fix every hit; confirm
  no three consecutive sentences are alike in length or opening; confirm no em dashes;
  re-check every figure, name and date against the Extraction Map and source story (rewriting is where
  numbers get corrupted); reconcile totals, percentages and repeated claims without silently
  correcting source values; record every mismatch in FILE 2; then count characters.

COMMON OPENING (all categories)
Section names below are working labels. In the entry, give each section a plain, natural
title that varies in form (for example "Why this mattered", "What we built", "What got in
the way"), covering the same content so every criterion stays clearly evidenced. Keep the
final two titles exactly as "ROI Summary" and "Why This Merits the Award". Write the
Executive Summary as connected prose, not as four labelled parts.
1. Executive Summary (Problem / Approach / Outcome / Value)
2. Background, Importance and Goals – criticality, stakeholders and their needs; then a
   bulleted summary, one bullet per objective: Objective, Target, Achieved, Evidence
   (Exhibit #)

CAT-1 BEST OVERALL PROJECT
3. Vision and Public-Sector Impact – citizens/services affected, outcomes, forward-thinking
4. Programme KPIs – bulleted summary, one bullet per KPI: KPI, Baseline, Target, Result,
   Why it matters, Exhibit
5. Approach, Methodology and Technology Choices (options considered and why)
6. Delivery with Stakeholders – on time, within budget, governance, engagement
7. Overcoming Challenges – Challenge → Action → Measurable result
8. People, Upskilling and Well-being
9. Diversity and Inclusion in the Project Team
10. ROI Summary
11. Why This Merits the Award (map to O1–O6, G1–G5)

CAT-2 FUNCTIONAL AUTOMATION
3. Approach, Methodology and Technology Choices (options considered and why)
4. The Automation Suite – per system layer; coverage boundaries; design, CI/CD,
   maintainability
5. Requirements Met or Exceeded – traceability and verification
6. Impact on Confidence and Production Deployment
7. Overcoming Automation Challenges – Challenge → Action → Measurable result
8. People, Upskilling and Well-being
9. Diversity and Inclusion in the Project Team; Delivery and Stakeholder Engagement
   (on time, on budget, governance, lessons learned)
10. ROI Summary
11. Why This Merits the Award (map to F1–F5, G1–G5)

CAT-3 NON-FUNCTIONAL AUTOMATION
3. Approach, Methodology and Technology Choices (options considered and why)
4. Non-Functional Requirements and Targets – bulleted summary, one bullet per requirement:
   Requirement, Target, Result, Exhibit
5. Real-World Representativeness – production-like data, load profiles, environments,
   devices, threat models, and how realism was validated
6. The Automation Suite – tools, scenarios, pipeline integration, repeatability
7. Impact on Confidence and Production Deployment
8. Overcoming Automation Challenges – Challenge → Action → Measurable result
9. People, Upskilling, Well-being, Diversity and Inclusion; Delivery and Stakeholder
   Engagement (on time, on budget, lessons learned)
10. ROI Summary
11. Why This Merits the Award (map to N1–N5, G1–G5)

CAT-4 MOST INNOVATIVE PROJECT
3. The Innovation – what is new, compared with prior practice (baseline)
4. The Driver – the problem or opportunity that triggered it
5. How It Was Achieved – approach, experiments, iterations, technology choices
6. Pushing Boundaries and Industry Advancement – reuse, adoption, sharing, open source
7. Results and Evidence – metrics with context
8. Overcoming Challenges – Challenge → Action → Measurable result
9. People, Upskilling, Diversity and Inclusion; Delivery, Resources and Lessons Learned
10. ROI Summary
11. Why This Merits the Award (map to I1–I5, G1–G5)

CAT-5 AI POWERED QUALITY ASSURANCE
3. The AI Solution – where AI sits in the QA process, why AI over conventional methods,
   technology choices (options considered)
4. Impact on Quality Standards – bulleted KPI summary, one bullet per metric: Metric,
   Baseline, Result, Why it matters
5. Innovation and Uniqueness – what is novel and how it differs from typical AI use
6. Sustainability and Long-Term Value – training data, evaluation, drift monitoring,
   retraining, governance, human oversight, responsible AI
7. Customer and Stakeholder Satisfaction – survey or feedback evidence, testimonials
8. Overcoming Challenges – Challenge → Action → Measurable result (include AI-specific
   challenges such as hallucination, false positives, data quality, trust and adoption)
9. People, Upskilling, Diversity and Inclusion; Delivery and Stakeholders
10. ROI Summary (covers A4 operational efficiency and cost reduction in full)
11. Why This Merits the Award (map to A1–A5, G1–G5)

------------------------------------------------------------------------
CLOSING SECTIONS (identical rules for every category; always the final two sections)
------------------------------------------------------------------------
SECTION "ROI SUMMARY" (target ~900 characters)
Build it ONLY from the ROI items in the Extraction Map and figures already stated earlier
in the entry.
- Open with one sentence stating the headline return and the period it covers.
- Present a compact bulleted summary, one bullet per item, each giving: Item, Amount or
  value, Basis of calculation, Period, Exhibit. Items: Total investment (itemised) |
  Direct savings (itemised) | Risk mitigation or avoided cost (labelled "estimated", with
  its assumptions) | Productivity gain (hours x rate) | Net benefit | ROI % | Payback
  period. No table.
- Show the formula, e.g. ROI % = (total benefit - total cost) / total cost x 100, and
  state which benefits are included in the total.
- Show direct savings, estimated risk mitigation and non-financial value SEPARATELY. Never
  merge estimates with realised savings without labelling them.
- Include only benefits caused by this project. Put wider economic or sector figures in
  Background as context, never in this list.
- Add one line on who validated the figures.
- Add non-financial value (quality, user experience, compliance, public value,
  sustainability) only where measured, with its metric and baseline.
- If financial data is missing, do not estimate it. Present the efficiency, capacity or
  quality value that IS evidenced, and insert [DATA NEEDED: ...] for each missing cost or
  benefit.
- Every figure must match the same figure elsewhere in the entry and the Exhibit.

SECTION "WHY THIS MERITS THE AWARD" (target ~700 characters)
Build it ONLY from evidence already in the entry and the Extraction Map. Introduce NO new
facts.
- Line 1: one sentence stating the project and its headline results (2–3 metrics, each
  matching earlier figures).
- Then cover each judging criterion for the selected category in a sentence or two of
  connected prose (codes only in the Phase 3 alignment summary, not printed in the entry), each
  naming the proof and its Exhibit #. Merge points where the evidence is the same. Do not
  format this as a criterion-by-criterion list.
- One line on the differentiator: what this project did that typical entries do not.
- One line on lasting or wider impact: reuse, adoption, standards, community sharing,
  legacy.
- One line on people and culture: upskilling, mentoring, well-being, inclusion.
- Optional single short testimonial (under 25 words) with the speaker's role, only if
  supplied.
- Close with one confident, factual sentence. No superlatives without evidence, no
  marketing language.
- Every claim must be traceable to a section above; flag any claim that cannot be.

Suggested character budget (total <= 14,600): ROI Summary ~900 and Why This Merits the
Award ~700 are reserved first; distribute the remainder across other sections in
proportion to the evidence available, giving the largest shares to challenges, the
suite or solution, and results.

========================================================================
PHASE 3 – SELF-SCORE AND REVISE
========================================================================
1. Output the scorecard as two bulleted lists in the result file (no table): one for the
   category criteria and one for G1–G5. One bullet per criterion: code, mark /5, one-line
   justification, evidence location (section and exhibit). End each list with a bullet
   giving the total /25.
2. Any criterion below 4, or any Humanisation Audit check marked Fail: revise and rescore
   (max two loops). If missing data is the limit, say so and list it as a bullet fix rather
   than padding.
3. Alignment summary (bullets, no matrix): one bullet per criterion giving the satisfying
   section and its strength (Strong / Adequate / Weak).
4. Extraction Fidelity Check: confirm every number, name and quote in the entry appears in
   the Extraction Map exactly; list any that do not (and also record each mismatch under INCONSISTENCIES in FILE 2).
5. Closing-Section Audit:
   - ROI Summary: arithmetic shown and correct; benefits and costs itemised; estimates
     labelled; every figure matches the rest of the entry; no non-project benefits.
   - Why This Merits the Award: every claim traces to an earlier section and Exhibit; no
     new facts; every criterion has a supporting line; differentiator and lasting impact
     present.
   Mark each check Pass / Partial / Fail.
6. Consistency Audit: every repeated figure confirmed identical; show arithmetic.
7. Guide-Compliance Checklist: each strong-entry practice and weak-entry trap marked
   Pass / Partial / Fail.
8. Humanisation Audit (be honest; counts are approximate). Present as bullets, one per check:
   Check, Result (Pass / Partial / Fail), Fix applied. No table.
   - Banned-word scan (Standard rule 5): list any survivors; target none.
   - Punctuation: em dashes (target 0), exclamation marks (0), semicolons (3 or fewer),
     en dashes outside number ranges (0).
   - Rhythm: shortest and longest sentence in words; approximate share under 10 words;
     any run of three similar-length sentences.
   - Openers: any sentence or paragraph opening word repeated more than twice in a row.
   - Template shape: matching section constructions, bold labels, uniform bullet lengths,
     arrows, a summary line closing every section.
   - Triplets and "not only/but also" patterns: count.
   - Anchor check: paragraphs with no number, name, date or decision.
   - British English: any US spelling or format.
   - Candour: honest limits or setbacks included, each traced to the story or my answers.
   - Story-echo check: any run of five or more words copied from the story.
   Mark each Pass / Partial / Fail. Do not claim or imply the text will pass AI-detection
   tools; scores from such tools cannot be measured here.
9. Stand-out Test: two lines on what a judge will remember about this entry.
10. Character counts: summary, each section, total.
11. REMAINING GAPS – do not list them in the result file. Update FILE 2 (data gaps and
    inconsistencies) with every gap marked 🔴 or 🟠, the exact data I should provide (in
    plain text) to raise the score, and any inconsistency found by the Consistency Audit.
    In the result file, give only a one-line pointer to FILE 2 and the headline counts.

========================================================================
PHASE 4 – CLEAN COPY AND HUMAN EDIT (when I reply "final")
========================================================================
1. Clean copy: the Summary and Entry Text with every working tag, audit note and
   Exhibit-planning aside removed. If any [DATA NEEDED: ...] marker remains, do not
   deliver; list the markers and wait. Recount characters (summary within 100 words, entry
   within 14,600 including spaces). Deliver it as FILE 1 containing only the Summary and
   Entry Text, with no tables. Also re-issue FILE 2 with the final status of every item.
2. Human edit checklist for me (short bullets):
   • Read it aloud. Mark every place you run out of breath or sound like a brochure.
   • Rewrite at least five sentences the way you would say them to a colleague.
   • Add one real stakeholder quote with their role, if you have one.
   • Check every number against its exhibit.
   • Delete any sentence you could not defend in a judge's follow-up question.
   • Vary at least two section openings so they do not follow the same pattern.
   • Check the TESTA entry rules on AI-assisted writing and disclose if required.

========================================================================
WRITING AND INTEGRITY RULES
========================================================================
- No output file contains a table. Convert any tabular data to bullet summaries (see OUTPUT
  FILES AND FORMAT) without losing figures.
- Data gaps and inconsistencies always go to the separate FILE 2, never into the entry or
  the chat body.
- NEVER invent facts, numbers, quotes, tools, AI capabilities or D&I evidence. Use
  [DATA NEEDED: ...].
- Every metric: baseline, target, result, timeframe, source, and one line on why it was
  chosen.
- Write about the project deliverable, not the merits of a tool or method.
- Attribute only project-caused benefits; label wider figures as context and never add
  them to project ROI or impact totals.
- Challenges must come from the testing/automation journey.
- No unexplained internal codes. Do not glorify overwork; show resilience through
  planning and well-being.
- Do not copy wording from any other entry; use only my story, and do not reuse its
  phrasing (Standard, rule 6).
- Cite numbered exhibits in brackets beside key claims, as a person would, for example
  (Exhibit 3). Not after every sentence.
- Plain English, active voice, confident but not promotional, in the VOICE AND
  HUMANISATION STANDARD throughout.
- Humanising means more real detail, never invented detail. No fabricated anecdotes,
  quotes, setbacks or imperfections.
- Keep nomination name and partner name exactly as supplied.
- Preserve source values exactly. Never silently correct, reinterpret or resolve a data conflict; record the values and clarification needed in FILE 2.
- For any calculation, show the formula and input values and label the result as calculated; do not replace a supplied figure with a calculated one.
- Cross-check facts and figures across the PROJECT STORY, Extraction Map, draft and exhibits before delivery.
```

---

## Fill in below (example layout)

```
SELECTED CATEGORY: Best Overall Project
COMPANY: Cognizant
INDUSTRY / SECTOR: Public Sector

PROJECT STORY:
"""

CONTENTS
1. Automation & Dev-Ops Maturity  (17 sections)
2. Cloud Adoption  (5 sections)
3. Technology Inititatives  (9 sections)
4. Usage of AI/ML  (1 section)
5. Gen AI Solutions  (14 sections)
6. Cap-Ex/ Op-ex cost reduction  (1 section)
7. Non-Functional Assurance  (4 sections)
8. Engagement Model  (1 section)
9. Customer centricity & relationship maturity  (9 sections)
10. QA Adovacasy through Cross-cutting Assurance  (8 sections)

==============================================================================
THEME 1: Automation & Dev-Ops Maturity
AREAS: BDD Adoption, In Sprint, Mobile, Products (S4/ Hana, WMS), Microservices, Customer Journey/  Business process, Visual, Accessibility, Test data, Framework Standardization, enabling Dev & support Teams
==============================================================================

--- Section: Air Quality: testing approach (functional and automation)  [source lines 24-45] ---
________________________________________ 

2. Testing Approach 

Functional Testing 

• Sprint-based test design: each sprint's user stories in Jira have test cases covering both positive and negative scenarios. 

• Evidence-based execution: execution results are attaImport Certificate Types to every test case as proof. 

• Cross-device coverage: mobile and tablet testing runs on BrowserStack across Android and iOS. 

Automation Testing (WebdriverIO with Allure Reports) 

• 100% E2E and regression automation after every sprint. 

• Deployed to an AWS Test Suite that plugs straight into the CI/CD pipeline. 

• Automation reports go to the client before every release. 

• 40+ defects found early, protecting release quality. 

--- Section: Trade Risk: RestSharp API automation suite  [source lines 158-167] ---
 

Trade Risk: 
 

New Capabilities, Features & Solutions Delivered in 2026 

The RE team has been enhancing the RestSharp API automation suite throughout 2026 -  Through this ongoing maintenance, the suite continues to deliver strong efficiency gains, bringing execution time down from 36 hours to just 5 minutes per release cycle, enabling the team to reliably support roughly two releases per month without the bottleneck of lengthy manual test execution. 

--- Section: Common Platform: automation and defect coverage  [source lines 180-191] ---
Customer Identity (2026): 309 total test cases, 21 automatable, 19 automated, 90.48% automation coverage; 256 defects raised, 228 fixed, 89.06% defect coverage.

Integration (2026): 251 total test cases, 205 automatable, 191 automated, 93.17% automation coverage; 40 defects raised, 38 fixed, 95.00% defect coverage.

Data Platform (2026): 27 total test cases, none automatable or automated, 0.00% automation coverage; 9 defects raised, 9 fixed, 100.00% defect coverage.

Customer Identity (overall to date): 1,072 total test cases, 616 automatable, 590 automated, 95.78% automation coverage; 794 defects raised, 766 fixed, 96.47% defect coverage.

Integration (overall to date): 1,039 total test cases, 950 automatable, 930 automated, 97.89% automation coverage; 156 defects raised, 154 fixed, 98.72% defect coverage.

Data Platform (overall to date): 1,823 total test cases, none automatable or automated, 0.00% automation coverage; 228 defects raised, 228 fixed, 100.00% defect coverage.

--- Section: Trade Risk (repeated in source): new capabilities  [source lines 192-198] ---

New Capabilities, Features & Solutions Delivered in 2026 

The RE team has been enhancing the RestSharp API automation suite throughout 2026 -  Through this ongoing maintenance, the suite continues to deliver strong efficiency gains, bringing execution time down from 36 hours to just 5 minutes per release cycle, enabling the team to reliably support roughly two releases per month without the bottleneck of lengthy manual test execution. 

--- Section: Trade achievements 2026, item 1 (with section heading)  [source lines 219-225] ---
Trade: 


Achievements (2026): 


1. Team has delivered the Citizen Exporter journey end-to-end, ensuring a successful rollout with high-quality execution and stakeholder satisfaction. 

--- Section: Trade achievements 2026, item 2  [source lines 226-226] ---
2. Team has successfully resolved and delivered 130+ technical debt and tech stories, improving platform stability, reducing maintenance overhead, and accelerating future development efforts. 

--- Section: Trade achievements 2026, item 3  [source lines 227-227] ---
3. GDS front end library had been upgraded to v6.10 without any issue. 

--- Section: Trade achievements 2026, item 8  [source lines 232-232] ---
8. Dynamics Sprint team has completed the migration of the automation framework to Playwright, enabling faster execution, improved test stability, and robust automation compared to EasyRepro and Reqnroll. Optimized the automation regression suite, reducing execution time and increasing test reliability, resulting in improved release readiness and quality assurance efficiency. 

--- Section: Trade achievements 2026, item 9  [source lines 233-233] ---
9. E2E automation framework has been migrated the automation framework from SpecFlow to Reqnroll and transitioned the test suite to NUnit, improving framework maintainability and ensuring long-term compatibility. It also enhanced the automation framework to support cross-browser execution by extending test coverage from Chrome to Microsoft Edge, improving test flexibility and browser compatibility. 

--- Section: Trade achievements 2026, item 10  [source lines 234-234] ---
10. E2E team also successfully delivered a POC for transitioning E2E framework from C# Selenium to C# Playwright, demonstrating improved test execution speed, reliability, and modern automation capabilities.  

--- Section: Trade achievements 2026, item 11  [source lines 235-235] ---
11. Increased E2E automation coverage by 5.9%, expanding automated scenarios from 609 to 645 and strengthening overall regression coverage across 716 automated test cases. 

--- Section: Ops Proving: IPAFFS and Risk Engine automation  [source lines 322-385] ---
IPAFFS & Risk Engine Automation Achievement:

Overview 

The IPAFFS (Import of Products, Animals, Food and Feed System) and Risk Engine applications play a critical role within the Operational Proving space. Historically, testing activities for these applications were predominantly manual, resulting in significant effort and execution time during regression and release testing cycles. 

To improve testing efficiency and enhance delivery confidence, we collaborated closely with the IPAFFS and Risk Engine teams to establish a comprehensive automation framework and automate key business-critical test scenarios across both applications. 

The initiative focused on automating all major Import Certificate Types (Common Health Entry Document) types, ensuring repeatable, reliable, and faster validation of core business processes. 

We successfully automated end-to-end test scenarios covering all import certificate types across both IPAFFS and Risk Engine applications. 

Automation scripts were developed following collaboration with the domain experts and manual testers to ensure that all business requirements and expected behaviours were accurately represented within the automated test suite. 

Automation of Critical Business Flows:

We have successfully designed, developed, and implemented automated test coverage for all major Import Certificate Types types across IPAFFS and Risk Engine, significantly increasing regression test coverage and reducing dependence on manual execution. 

As the IPAFFS and Risk Engine teams primarily consisted of manual testers, We, the MO automation team proactively supported the programme by: 

Identifying automation opportunities. 
Developing automated test cases. 
Working closely with primary manual testers for validation and review. 
Incorporating feedback from functional experts. 
Successfully merging approved automation scripts into the codebase. 
This collaborative approach ensured both technical quality and functional accuracy of the automated tests. 
To support continuous execution and scalability, dedicated automation pipelines were established for: 

IPAFFS Automation Suite 
Risk Engine Automation Suite 

These pipelines provide a repeatable and efficient mechanism for executing regression tests as part of ongoing testing and release activities. 

Beyond the initial automation delivery, the QA Automation team continues to support: 
Automation pipeline execution. 
Test result analysis and reporting. 
Failure investigation and troubleshooting. 
Script maintenance and defect fixes. 
Continuous improvement of automation coverage and reliability. 
This ongoing support ensures sustained value from the automation investment and helps maintain confidence in release quality. 

Benefits Delivered:

The automation initiative has delivered significant operational and quality benefits: 
Comprehensive automation coverage for all major import certificate types. 
Improved regression testing efficiency and repeatability. 
Reduced dependency on manual test execution. 
Faster feedback on application quality and stability. 
Improved release confidence through consistent execution of automated tests. 
Dedicated automated execution pipelines for IPAFFS and Risk Engine. 
Enhanced collaboration between automation and manual testing teams. 
Significant Reduction in Testing Effort 
One of the most impactful outcomes of this initiative has been the reduction in execution effort: 
Previous manual execution effort: Approximately 4 days 
Current automated execution effort: Approximately 0.5 days 

This represents an 87.5% reduction in test execution time, enabling faster validation cycles, improved productivity, and more efficient utilisation of QA resources. 

Outcome:

We have successfully partnered with the IPAFFS and Risk Engine teams to automate all critical Import Certificate Types workflows across both applications. Through the establishment of dedicated automation pipelines, comprehensive test coverage, and ongoing execution support, the team has significantly accelerated testing activities and reduced manual effort. 

The initiative has transformed regression testing from a four-day manual exercise into a predominantly automated process completed within half a day, delivering substantial efficiency gains while maintaining high levels of quality assurance and release confidence. 

--- Section: Ops Proving: PDF validation automation  [source lines 386-437] ---
- PDF Validation Automation:
 
	Problem statement: Validating PDFs generated for submitted IPAFFS Import Certificate Type (Common Health Entry Document) applications is a manual, repetitive and time-consuming process. Testers must compare information entered by the Exporter across multiple application screens with the generated PDF, increasing the risk of human errors such as overlooking, misreading or incorrectly matching information. This risk is heightened by the large number of fields and complexity of submissions.

	Overview 

	Within the IPAFFS application, a PDF document is generated for every submitted Import Certificate Types (Common Health Entry Document) application. These PDFs serve as an important record of the submission and are required to accurately reflect all information entered by the Exporter throughout the application journey. 

	Historically, validating PDF content was a completely manual activity, requiring testers to compare information entered across multiple screens against the generated PDF output. This process was repetitive, time-consuming, and prone to human error, particularly given the volume of fields and complexity of Import Certificate Types submissions. 

	To improve efficiency and accuracy, the team implemented an automated PDF validation solution covering all Import Certificate types. 

	The automation solution validates PDF content generated for all Import Certificate types

	The automated process compares data entered by the Exporter during the application submission process against the values displayed in the generated PDF, ensuring that all information is accurately reflected. 

	We have developed an automated framework capable of: 
	Extracting data entered throughout the Import Certificate Types submission journey. 
	Retrieving generated PDF documents after submission. 
	Validating PDF content against application input data. 
	Identifying discrepancies automatically and reporting validation failures. 
	This eliminated the need for extensive manual comparison and significantly improved validation accuracy. 

	PDF validation automation was implemented for all major Import Certificate Types types, ensuring consistent verification of document generation functionality across the IPAFFS application. 

	Automated validation ensures that: 
	All submitted data is correctly reflected within generated PDFs. 
	Validation results are consistent and repeatable. 
	Human errors associated with manual verification are reduced. 
	Defects related to document generation can be identified much earlier in the testing cycle. 
	Integration with Automation Framework 

	The PDF validation capability has been incorporated into the existing automation framework, allowing document validation to be executed as part of regular regression and release testing activities without additional manual effort. 

	Benefits Delivered:
		The automation initiative has delivered several key benefits: 
		Automated verification of PDF content across all Import Certificate Types types. 
		Increased consistency and accuracy of validation results. 
		Reduced reliance on manual testing activities. 
		Faster feedback on PDF-related defects. 
		Enhanced regression test coverage through automated document verification. 
		Significant Reduction in Validation Effort 
		The most notable benefit has been the reduction in execution time: 
		Previous manual validation time: Approximately 10 minutes per PDF 
		Automated validation time: Approximately 2 minutes per PDF 

	This represents an 80% reduction in validation effort, enabling faster execution of test scenarios while improving coverage and reliability. 

	Our team successfully automated PDF validation for all Import Certificate Types types within IPAFFS, transforming a time-intensive manual process into an efficient and reliable automated solution. By automatically validating generated PDFs against data entered by Exporters, the team has improved testing accuracy, increased regression coverage, and significantly reduced execution effort. 

	The automation has reduced PDF validation time from 10 minutes to 2 minutes per execution while providing greater confidence that generated documents accurately reflect submitted application data. 

--- Section: IDCOMS suspension test data automation  [source lines 499-527] ---
- IDCOMS Suspension Test Data Automation:

	Problem statement:
	Preparing test data for IDCOMS suspension testing relies heavily on manual effort, taking approximately two person-days per testing cycle. This creates delays in test preparation and execution, while errors in the data can cause further rework and affect testing timelines. The effort is compounded by the need to identify and prepare suitable data across multiple scenarios, despite opportunities to reuse or consolidate data.

	Solution:
	The IDCOMS Suspension Test Data Automation initiative was implemented to address the significant effort and delays associated with manual test data creation for suspension testing. Previously, creating and preparing the required test data consumed approximately two person-days per testing cycle, with any errors resulting in additional delays and impacting overall testing timelines. To overcome this challenge, the team analyzed test data requirements, identified opportunities to reuse and consolidate data across multiple test scenarios, and developed an automated process to generate the required test data consistently and accurately. This automation streamlined test preparation activities, reduced manual intervention, and ensured timely availability of test data for execution. 

	Benefits:

	Significant Reduction in Test Preparation Effort:
	Automating the test data creation process eliminated a time-consuming manual activity that was repeated every testing cycle. What previously required approximately two person-days of effort can now be completed in a fraction of the time, enabling faster test execution and delivery. 

	Improved Accuracy and Reliability:
	The automated solution generates test data consistently based on predefined rules and requirements, reducing the likelihood of human errors and ensuring that test data is accurate and reliable for every cycle. 

	Faster Testing Cycles:
	By making test data readily available without manual preparation delays, the team can begin testing sooner and maintain planned delivery timelines. This helps accelerate the overall testing lifecycle and improve project efficiency. 

	Optimized Resource Utilization:
	With the effort required for test data creation significantly reduced, team members can focus their time on higher-value activities such as test execution, defect analysis, exploratory testing, and quality improvements. 

	Improved Reusability and Standardization:
	The solution enables the reuse of test data across multiple test scenarios wherever possible, reducing duplication of effort and promoting a standardized approach to test data management. 

	Enhanced Team Productivity and Quality:
	The automation not only improves efficiency but also contributes to better testing outcomes by ensuring that quality test data is consistently available, supporting more effective and reliable test execution. 

--- Section: Tag-based decentralised regression framework  [source lines 528-549] ---
- Tag-Based Decentralised Regression Framework

	Problem statement: 
	The Salesforce Platform SCV (Single customer view) is shared by multiple service teams building independent Salesforce application. Currently there are 5 Service team onboarded on this platform with many more expected in future. Any code push could cause regression in another team's features. The SCV Platform test team would have had to understand every service's business processes and build regression test cases for each one, which doesn't scale as more teams join. Coverage would always lag behind delivery, and it would create a single point of failure in the Platform QA function.

	Solution: 
	Designed and implemented a decentralised, contribution-based regression model. Each service team keeps ownership of its own functional testing in the lower environments (Dev and QA). They mark their business-critical Playwright test cases with a standard @platform-regression tag. The Platform regression pack discovers and runs these tagged tests automatically, with no manual hand-off or test re-authoring.

	Technical details:
	· Uses Playwright's tag-based test filtering (--grep @platform-regression) to select tests at runtime from service team repositories.
	· Adopts a "shift-left" quality ownership model: service teams own test design and maintenance, and the Platform team owns orchestration, execution and governance.
	· Defect triage model routes failures to the right owner (Platform/environment issue vs service application issue).
	· Backed by a formal Test Strategy.

	Benefits:
	· Regression coverage scales automatically as new service teams join, with no growth in Platform QA effort.
	· Tests are written by the teams with the deepest domain knowledge, so regression scenarios are more accurate.
	· Removes duplicate effort, since the same test serves both service-level and platform-level regression.
	· Protects the shared environment from cross-service regression before code reaches production.
	· 5 Service teams are already onboard.

--- Section: Testing methodology and test scope  [source lines 811-831] ---
- Testing Methodology which we follow:

	Test Scope : 
	•In-sprint Testing
	•System Integration Testing
	•Regression Automation Testing
	•API Testing
	•Accessibility Testing
	•Compatibility Testing
	•Cross Device Testing
	•Cross Browser Testing
	•OS & Platform Testing
	•Business Acceptance Testing
	•Localization Testing
	•Performance Testing
	•Load Testing
	•Stress Testing
	Security Testing

--- Section: Delivery testing: Posit, Databricks, DR and DASH  [source lines 886-900] ---
	Delivery - Testing:

	Posit Upgrade testing - every quarter.
		- Workbench
		- Connect
		- Package Manager
	Azure Databricks Service Endpoint
	Azure Machine Learning
	Azure Databricks Private Endpoints
	Azure Databricks Apps testing
	Disaster Recovery(DR) Testing for DASH Platform
	DASH Alphas - External Dashboard Publishing
	Posit Automation - part of continues improvements delivery.


==============================================================================
THEME 2: Cloud Adoption
AREAS: ADO Adoption, CI/CD, Containerization, VM Adoption for Automation Execution
==============================================================================

--- Section: Air Quality: CI/CD automation for build stability  [source lines 70-73] ---
CI/CD Automation for Build Stability 

Automated test suites run in every build cycle. This gives fast feedback, keeps builds stable, finds defects early and makes deployments faster and safer. 

--- Section: Trade achievements 2026, item 7  [source lines 231-231] ---
7. Successfully migrated the Portal CI/CD pipeline from Jenkins to Azure DevOps (ADO), streamlining deployment processes, improving traceability, and enhancing release automation and governance. 

--- Section: Ops Proving: PLP ADP to CDP migration, QA delivery summary  [source lines 272-321] ---
Ops Proving:

Packing List Parser (Packing List Parser) ADP to CDP Migration – QA Delivery Summary 

The Packing List Parser (Packing List Parser) application was migrated from the Azure Developer Platform (ADP) to the Cloud Development Platform (CDP) as part of Customer’s cloud modernisation strategy. The migration involved transitioning the application from Azure-based infrastructure to AWS-based CDP infrastructure, adopting a new platform architecture, migrating application data and documents, and integrating new services such as Trade Service and MDM. 

The objective of the migration was to ensure that Packing List Parser operates on a modern, scalable, and maintainable cloud platform while continuing to meet business requirements without disruption to users. 

The migration from ADP to CDP delivers several key benefits: 

Improved scalability and performance through AWS-based cloud infrastructure. 

Alignment with Customer's strategic cloud platform standards. 

Enhanced platform reliability and maintainability. 

Simplified future enhancements and deployments using the CDP architecture. 

Improved integration capabilities through services such as MDM. 

Dynamic management of prohibited item lists via MDM, removing the need for code changes and deployments whenever updates are required. 

Reduced operational overhead and increased flexibility for future business and technical requirements. 

Improved long-term sustainability and supportability of the Packing List Parser application. 

The Packing List Parser QA team successfully completed all planned testing activities for the ADP to CDP migration within the agreed project timelines. 

Key testing activities included: 

End-to-end functional validation of the migrated Packing List Parser application. 

Regression testing of existing business functionality. 

Validation of data migration from ADP to CDP datastores. 

Verification of document migration and accessibility. 

Testing of the new public-facing URL. 

Validation of Trade Service integration replacing Power BI functionality. 

Validation of MDM integration and prohibited item retrieval. 

Smoke and production validation testing during cutover activities. 

Testing confirmed that the migrated solution met all functional requirements, maintained data integrity, and operated successfully on the new CDP infrastructure. The QA team completed all testing milestones on sImport Certificate Typesule, supporting a successful and timely delivery of the migration with no critical issues impacting go-live. 

The ADP to CDP migration for Packing List Parser was successfully delivered, and QA sign-off was achieved following completion of comprehensive testing activities. The migration was delivered on time, with all critical functionality validated and business continuity maintained throughout the transition. 

--- Section: Multi-stage CI/CD pipelines in Azure DevOps  [source lines 550-575] ---
- Multi-Stage CI/CD Pipelines in Azure DevOps

	Problem statement: Without a standard execution mechanism, test runs depended on manual triggers and individual machines. Results were inconsistent and not auditable, and service teams had no self-service way to run tests in their own environments.

	Solution: 
	Designed and built three purpose-specific Azure DevOps YAML pipelines:
	1. Validation pipeline: validates code and test changes before they are merged.
	2. Self-serve pipeline: lets service teams run their test suites on demand in Dev and QA.
	3. Regression pipeline: runs all @platform-regression tagged tests against the shared regression environment.

	Technical details:

	· Multi-stage YAML pipelines with runtime parameters for environment and test-suite selection (smoke, smoke + regression, full suite).
	· Environment-specific configuration (base URLs, credentials, API keys) is externalised through pipeline variables and environment variables, so one codebase runs across Dev, QA and Regression.
	· Automated agent setup with NodeTool, deterministic dependency installation via npm ci, and Playwright browser provisioning for Microsoft Edge.
	· Results are published in JUnit format to Azure DevOps Test Plans. Playwright HTML reports are published as pipeline artifacts, and traces, screenshots and videos are kept on failure for root-cause analysis.
	· Uses continueOnError and succeededOrFailed() conditions so reports are always published, even when tests fail.

	Benefits:

	· Fully automated, repeatable and auditable test execution, with no dependency on individual machines.
	· Service teams are self-sufficient and can test in their own environments without waiting on the Platform team.
	· Quality gates (run on QA before regression) save pipeline time and stop runs early on broken builds.
	· Built-in traces and HTML reports give faster defect diagnosis and clear evidence for stakeholders.

--- Section: Confidence and production: PLP go-live  [source lines 867-870] ---
Confidence and production (Packing List Parser go-live with no critical issues):
	There are no incidents or production-critical issues for Packing List Parser, as all issues are captured in lower environments. The latest go-live is 6th Aug 2026. August 2024 was the first go-live and then recent would be August 2026 and no production critical issues or rollback process.


==============================================================================
THEME 3: Technology Inititatives
AREAS: Specific Tools/ Utlities, CI/CD, TEMS, TDM, SV, Tool/ Platform Integration, Domain Specific Solutions
==============================================================================

--- Section: Air Quality: best practices, shift-left testing with service virtualisation  [source lines 46-61] ---
________________________________________ 

3. Best Practices 

Shift-Left Testing with Service Virtualisation 

• Testing from day one: virtual services in the CI/CD pipeline removed the wait for third-party systems. 

• No time lost to dependencies: always-on virtual services meant no testing time was lost when external systems were down. 

• 100+ scenarios on demand: any business combination could be tested at any time, with no code changes. 

• ~180 hours saved: less developer effort, and defects caught when they were cheaper to fix. 

• On-time and reusable: the product went live on sImport Certificate Typesule, and the approach can be scaled to other projects. 

--- Section: Air Quality innovation 1: shift-left with service virtualisation  [source lines 80-101] ---
________________________________________ 

4. Innovation & Savings 

🏆 Innovation 1: Shift-Left with Service Virtualisation 

Customer-approved process innovation in 2026 

In 2026 the customer formally recognised and approved our service virtualisation work as a process innovation. Always-on virtual services in the CI/CD pipeline let us test earlier and removed our dependence on third-party systems being available. 

• Tested 100+ business scenarios on demand, with no code changes 

• Saved ~180 hours of effort 

• Caught defects early, when they were cheapest to fix 

• Made on-time delivery possible within a tight timeline, with better quality and reliability 

After the customer's endorsement, the practice is ready to be reused and scaled across other projects and programmes. 

💷 Savings: £31K hard and £28K soft 

--- Section: Air Quality innovation 3: automated KPI metrics dashboard  [source lines 122-157] ---
________________________________________ 

🏆 Innovation 3: Automated KPI Metrics Dashboard 

We built a live KPI dashboard that tracks the four core service performance measures set by the UK Government Digital Service (GDS): 

Completion Rate · Cost per Transaction · User Satisfaction · Digital Take-up 

Before: KPI reporting was manual and ran on Excel, with values typed in by hand and calculated using GDS formulas. 

After: 

• A proof of concept first reproduced the existing process. 

• The automated solution reads transaction data (Started, Completed, Total) directly from application audit logs. 

• It pulls Satisfied and Dissatisfied counts from uploaded survey files. 

• Data flows through structured endpoints into a MongoDB backend. 

• The frontend calculates the KPIs and shows them on a live dashboard. 

Benefits 

• No manual data entry 

• Better accuracy, with fewer calculation errors 

• Faster reporting, close to real time 

• Meets GDS standards for measuring service success 

• Better decisions from live performance insight 

💷 Savings: £24K (hard savings and revenue) 

--- Section: Trade achievements 2026, item 4  [source lines 228-228] ---
4. Aligned Package Types with those supported by IPPC hub by the Portal Sprint team.  

--- Section: Trade achievements 2026, item 5  [source lines 229-229] ---
5. Successfully upgraded Apache PDFBox from v2.0.21 to v3.0.7 within the Certificate Service, ensuring compatibility with the latest library enhancements, security updates, and long-term maintainability. 

--- Section: Trade achievements 2026, item 6  [source lines 230-230] ---
6. Successfully integrated the Trade Cloud AV Scan Service into the Portal file storage solution, replacing the legacy Symantec virus scanning approach across integrated environments (DEV, SND, TST, PRE, and PRD). 

--- Section: Bluebolt idea 2: GreenOps carbon cost dashboard  [source lines 242-243] ---
2. GreenOps Carbon Cost Dashboard & Carbon Budget Enforcement 
Integrate carbon footprint tracking into CI/CD pipelines to measure sustainability impact, enforce carbon budgets, and promote environmentally responsible software delivery practices. 

--- Section: Automated service team onboarding utility  [source lines 576-599] ---
- Automated Service Team Onboarding Utility

	Problem statement: 
	Every new service team joining the platform needed a standard project structure and the Salesforce authentication journey using JWT token set up in their Azure DevOps repository. This was done by manually copying and editing files. It took 2–3 days per team, was repetitive, and led to inconsistent configurations and human error.

	Solution: 
	Developed a Node.js scaffolding utility. Given only the new service team's name, it generates the full project structure from a predefined, standardised template.

	Technical details:

	· Template-driven scaffolding approach.
	· Uses the Node.js file to recursively copy the template directory structure.
	· Dynamic token replacement puts the service team name into folder names, file names, configuration files and code references.
	· Pre-configures the Salesforce authentication journey, Playwright configuration and the base automation framework, so a newly onboarded team can run tests straight away.
	· Enforces consistent naming conventions and folder structure across all service teams.

	Benefits:

	· Onboarding time reduced from 2–3 days to a few minutes per team (over 99% reduction in effort).
	· Every team starts from an identical, validated baseline, which removes configuration errors.
	· Standardisation makes cross-team support, code review and maintenance easier.
	· 5 service teams have been onboard so far, saving roughly 40-50 hours of manual effort.

--- Section: Smart release management tracker  [source lines 600-623] ---
- Smart Release Management Tracker

	Problem statement: 
	Multiple service teams deploy code to production through a central release management process. This covers booking release slots, arranging support and tracking completion of mandatory release activities. All of this was managed in a shared Excel sheet. It caused version conflicts, no real-time visibility, no automatic notifications, and heavy manual coordination by the Platform team.

	Solution: 
	Re-engineered the release management process on the Microsoft 365 low-code stack, using Microsoft Lists as the central system of record and Power Automate for workflow automation and notifications.

	Technical details:

	· Microsoft Lists configured with structured columns, choice fields, status values and custom views for slot availability, bookings and release activity tracking.
	· Role-based workflow: the Platform team publishes available release slots, and service teams self-book directly in the list.
	· Event-driven Power Automate flows run whenever an item is created or modified, sending automatic notifications to the relevant service team and the Platform team.
	· Replaces manual email and Teams follow-ups with automated, rule-based communication.
	· A single source of truth with full audit history of every change.

	Benefits:

	· Removed the manual effort of maintaining the Excel tracker and chasing teams for updates.
	· Real-time visibility of slot availability and release status for every team.
	· Fewer missed steps and miscommunication through automatic notifications.
	· Demoed to 5 service teams and to Defra management. All gave positive feedback, and Defra has shown interest in adopting it more widely, as no similar solution existed before.


==============================================================================
THEME 4: Usage of AI/ML
AREAS: Self-Healing Automation, Predictive Solutions- Usage of BOTS and other solutions from Tech CoE
==============================================================================

--- Section: Bluebolt idea 1 (with section heading): continuous environment health monitoring  [source lines 238-241] ---
Bluebolt Transformation Idea Implementation (2026): 

1. Continuous Environment Health Monitoring & Intelligent Dashboard Insights 
AI-driven self-monitoring solution that proactively detects environment issues, automates recovery actions, and provides real-time health insights through a centralized dashboard, reducing operational overhead and downtime. 


==============================================================================
THEME 5: Gen AI Solutions
AREAS: Adoption of Gen AI Solutions
==============================================================================

--- Section: Air Quality: AI-powered automation (GitHub Copilot)  [source lines 62-69] ---
AI-Powered Automation 

• Used GitHub Copilot to speed up automation with AI-powered code suggestions. 

• Applied to 120+ regression test cases, cutting manual scripting effort by 50% and working about 2x faster. 

• Shortened time to market while keeping digital services reliable, secure and fast. 

--- Section: Trade achievements 2026, item 12  [source lines 236-237] ---
12. Achieved 100% AI certification across the team, demonstrating a strong commitment to AI adoption, continuous learning, and future-ready skill development. 

--- Section: Bluebolt idea 4: AI-powered impact analyzer  [source lines 248-251] ---
4. AI-Powered Impact Analyzer 

Automate change impact analysis using AI to identify affected areas, detect coverage gaps, and generate test scenarios, reducing manual effort and accelerating release validation. 

--- Section: Bluebolt idea 5: intelligent failure analysis  [source lines 252-255] ---
5. Intelligent Failure Analysis & Root Cause Diagnostics Platform 

Leverage AI to automatically analyze pipeline and application failures, identify root causes, and provide actionable recommendations, significantly reducing troubleshooting and resolution time. 

--- Section: Knowledge management bot  [source lines 438-449] ---
- Knowledge management Bot:
 
	Problem Statement:
	 
	The SAM Pega ecosystem contains a large volume of business, testing, architectural, interface, role based, and operational knowledge distributed across multiple documents, use cases, standards, catalogs, and onboarding materials. Team members often spend significant time locating information, understanding business processes, identifying dependencies, clarifying acronyms, onboarding new resources, and tracing requirements across different sources. This can lead to slower decision making, increased dependency on subject matter experts, knowledge silos, and reduced productivity. The knowledge base includes system architecture, critical journeys, role models, interfaces, use cases, governance rules, onboarding guidance, and gap analysis documentation, making knowledge retrieval increasingly complex as the repository grows
	 
	Solution:
	The SAM Knowledge Management (KM) Bot is an AI powered conversational assistant that consolidates information from the SAM knowledge repository into a single intelligent interface. Users can ask questions in natural language and receive contextual, evidence based responses sourced directly from approved project documentation .The KM Bot provides instant access to. System architecture and business domains. Critical user journeys and business processes. Use cases and testing scenarios. Interface and integration knowledge Role and access model information. Glossary and acronym definitions. Onboarding and learning materials Knowledge gap identification and documentation insights. The solution transforms fragmented documentation into an easily accessible knowledge ecosystem and  enabling faster information discovery
	 
	Benefit Description:
	Productivity Improvement Reduces the time spent searching through large volumes of documentation and enables teams to obtain information instantly. Faster Onboarding New joiners can quickly understand the SAM ecosystem, business processes, integrations, terminology, and testing approach without extensive SME dependency.  Reduced SME Dependency Knowledge becomes accessible to the entire team, reducing bottlenecks caused by reliance on a limited number of experts. Improved Quality and Consistency Provides a single source of truth by delivering answers based on approved project documentation. Enhanced Delivery Efficiency Supports testers, developers, business analysts, and product teams by helping them locate use cases, understand business rules, identify interfaces, and plan regression coverage more effectively. Business Value Creates a scalable, reusable digital knowledge asset that improves collaboration, accelerates decision making, and supports continuous learning across the program.

--- Section: Prompt Library  [source lines 457-470] ---
- Prompt Library
 
	Problem statement:
	In the realm of AI development, managing and enhancing prompts efficiently is a significant challenge. Developers often face difficulties in organizing, refining, and utilizing prompts effectively, leading to inefficiencies and suboptimal AI performance.
	 
	Idea:
	Develop an advanced ai driven system to enhance prompt quality and effectiveness for developers, ensuring optimal performance and productivity. This system should organize, store, and manage prompts, allowing easy access and reuse of templates for consistency. Implement a robust search and filtering mechanism to quickly locate prompts based on keywords, categories, and tags. Enable seamless importexport of prompts to various formats and platforms, facilitating integration and sharing. Design a user friendly interface adaptable to different devices for optimal user experience. Create extensions for popular development tools like visual studio code, visual studio 2022, and intellij to integrate prompt management into workflows. Utilize azure openai to make the application self sufficient, reducing dependency on external code assistants. Develop an inbuilt chatbot that interacts contextually with the selected prompt, providing focused assistance and reducing distractions during development.
	 
	Solution:
	The Prompt Library solution addresses AI prompt management challenges through a comprehensive template based system that centralizes prompt creation storage and distribution across teams. The approach leverages role based access control where administrators create and manage standardized templates using the RACE framework with Role Action Context Execute components while standard users access these templates through an intuitive interface that dynamically generates custom forms based on template configurations. The system incorporates advanced features including multi modal validation with regex BDD and code snippet support AI powered prompt enhancement capabilities and persistent local storage with cloud ready architecture enabling both offline functionality and enterprise scalability. By providing VS Code themed interfaces dynamic custom sections and template versioning with override capabilities the solution ensures consistent AI interactions while maintaining flexibility for customization ultimately transforming ad hoc prompt creation into a systematic knowledge driven process that reduces effort improves quality and enables scalable AI adoption across organizations.
	 
	Benefits:
	The Prompt Library delivers significant, quantifiable business value by fundamentally streamlining the use of the AWS Q Developer tool, enabling Quality Engineering teams to realize exceptional productivity gains. The project achieved an overall saving of 12,993, a figure validated and signed off by the client. This substantial monetary benefit was calculated using the client's rate card of 540 per day (67.50 per hour), requiring a total effort avoidance of 192.49 hours (12,99367.50hour), which translates to 24.06 full days of billable effort saved. While the project achieved an impressive average efficiency gain of 56 across the task list, the final hours reported for cost justification were scaled to meet the 12,993 target. By providing contextual augmentation and standardization, the Prompt Library accelerated critical technical activities, including Test Case Development from user stories, Efficient Test Script Generation (such as automated creation of BDD feature files and step definitions), and providing essential Framework Migration Support (e.g., migrating from Selenium to Playwright). This system also facilitated routine tasks like pipeline diagnostics, Code Review, and bug fixing, reducing developer cognitive load and maximizing the return on the 10 AWS Q user licenses. By moving developers away from manual, repetitive workflows, the solution ensures professional grade, predictable, and high quality AI outputs across the organization.

--- Section: AI-powered test case generator  [source lines 471-498] ---
- AI-Powered Test Case Generator:

	Problem:
	Creating test cases manually is time-consuming and can lead to inconsistent coverage. Important edge cases may be missed, requiring multiple rounds of review and rework to identify and address gaps. We need a solution that uses AI to generate relevant, structured test cases from requirements, helping teams improve coverage and reduce the effort spent on test design and review.

	Solution:
	The AI-Powered Test Case Generator is an intelligent solution built using GitHub Copilot within VS Code to automate the creation of manual test cases from user stories and acceptance criteria. The solution leverages a governed knowledge base containing business processes, validation rules, and application-specific workflows to generate detailed, step-by-step test cases that align with organizational testing standards. By automatically mapping acceptance criteria to relevant business scenarios, the agent creates comprehensive test coverage, including positive, negative, boundary, and validation scenarios. The generated output is formatted according to Azure DevOps Test Plan CSV requirements and undergoes automated validation checks before delivery, ensuring it is immediately ready for import. This significantly reduces the time and effort required for manual test design while improving consistency, accuracy, and traceability across testing activities. 

	Benefits:

	Improved Test Quality and Coverage:
	The solution ensures every acceptance criterion is traced to one or more test cases, reducing the risk of missed requirements and improving overall test coverage. It consistently generates positive, negative, and error-handling scenarios, helping teams identify defects earlier in the testing lifecycle. 
	
	Increased Productivity and Faster Delivery:
	By automating the creation of detailed manual test cases, the solution reduces hours of repetitive documentation effort to just a few minutes. This enables QA teams to focus on higher-value activities such as exploratory testing, automation development, and defect analysis. 

	Consistent and Standardized Test Documentation:
	All generated test cases follow a predefined structure, format, and level of detail, eliminating variations between different testers. This improves readability, maintainability, and adherence to testing best practices across projects. 

	Reduced Dependency on Domain Knowledge :
	The integrated knowledge base captures business flows, validation rules, and application-specific behaviors, allowing new team members to produce high-quality test cases without requiring extensive domain expertise. This accelerates onboarding and knowledge transfer. 

	Error-Free Azure DevOps Integration:
	The solution validates the generated CSV against Azure DevOps import requirements and RFC 4180 standards before output generation. This eliminates common formatting issues, import failures, and rework associated with manual CSV preparation. 

	Enhanced Traceability and Compliance:
	By maintaining a direct relationship between user stories, acceptance criteria, business rules, and generated test cases, the solution provides clear auditability and traceability, supporting quality assurance governance and delivery compliance requirements. 

--- Section: AI innovation journey 2024-2026: title and foundation and adoption  [source lines 671-677] ---
AI Innovation Journey & Achievements (2024-2026)

Foundation & Adoption

•	License procurement and AI proof-of-concepts completed (Oct-Dec 2024). 
•	GenAI innovation initiatives launched (Jan-Mar 2025). 

--- Section: AI innovation journey: innovation leadership  [source lines 685-690] ---
Innovation Leadership

•	Driving an AI-first quality engineering culture. 
•	Pioneering agentic testing and intelligent automation. 
•	Delivering measurable innovation outcomes. 

--- Section: AI innovation journey: measurable outcomes  [source lines 697-704] ---
Measurable Outcomes

•	55% increase in testing productivity. 
•	48% improvement in scripting efficiency. 
•	20+ AI innovation submissions. 
•	4 industry recognitions. 

--- Section: Trade AI roadmap: upskill and deliver AI value  [source lines 705-740] ---
- Trade AI Roadmap:

	Strategic Objectives

	1. Upskill

	Build future-ready AI capabilities across the organization. 

	Key Activities

	•	AI training kick-off. 
	•	Co-learning meetups and knowledge-sharing sessions. 
	•	AI certification programmes. 

	Target Outcomes

	•	100% organizational AI training completion. 
	•	55% of associates achieving AI certifications. 
	•	100% team AI certification achievement. 

	2. Deliver AI Value

	Drive measurable business outcomes through AI-powered Quality Engineering. 

	Key Initiatives

	•	AI use-case discovery. 
	•	Prompt library creation and reuse. 
	•	Copilot-assisted test delivery. 
	•	Release and environment health dashboard. 
	•	Test Impact Analyzer proof of concept. 
	•	Pipeline Failure Analysis proof of concept. 
	•	Carbon Dashboard proof of concept. 
	•	AI value tracking and reporting. 

--- Section: AI ideas and innovation (166 to 36 person-days)  [source lines 863-866] ---
	AI Ideas and Innovation:
	By integrating AI into our day-to-day operations, we have transformed delivery efficiency for critical activities. What previously required approximately 166 person-days when performed manually  to create test cases but now takes just 36 person-days with AI assistance. This represents a 79% reduction in manual effort, freeing significant capacity for higher-value work, accelerating timelines, and strengthening our competitive advantage through smarter, scalable automation.

--- Section: Training  [source lines 876-881] ---
- Training:
	Achieved 36 external certifications in 2026, the highest annual certification count to date.
	Demonstrated a strong culture of continuous learning, with certifications increasing significantly over the last two years.
	Successfully enrolled 55 associates in AI-focused learning programs, with 64% aligned to AI-Augmented Quality Engineer and SDET career tracks.
	Strategic focus remains on building AI-enabled testing, quality engineering, and automation capabilities to support future delivery excellence and innovation initiatives.

--- Section: External certifications  [source lines 882-885] ---
- External certifications: 

	As part of the team's continuous learning and upskilling initiatives, three Operations team members successfully completed External AI certifications to strengthen their understanding of Artificial Intelligence and its practical applications within software delivery. The certifications provided valuable knowledge on AI concepts, tools, and emerging technologies, enabling the team to identify opportunities for automation, process optimization, and innovation. This investment in learning supports the organization's AI adoption strategy and enhances the team's capability to leverage AI-driven solutions in day-to-day project activities. 


==============================================================================
THEME 6: Cap-Ex/ Op-ex cost reduction
AREAS: Adoption of Opensource tools, License Optimization
==============================================================================

--- Section: Tools and tech stack  [source lines 832-859] ---
- Tools & Tech Stack: 
	Tech Stack : ADO, Azure Cloud, C#, Docker, Framework: Selenium, Groovy, IntelliJ, JAVA, Microsoft SQL Server, Microsoft Visual studio, Selenium
	Tools & Accelerators : 
	Azure Devops
	Jira
	Confluence
	Visual Studio 2022
	Playwright
	Microsoft copilot
	Reqnroll
	Selenium
	C#
	Java
	Narrator
	BrowserStack local
	Docker
	Cucumber
	SonarQube
	Jenkins
	Git
	Postman
	Open VPN
	WAVE
	EasyRepro
	Mural
	IntelliJ


==============================================================================
THEME 7: Non-Functional Assurance
AREAS: Shift-Left initiatives, NFT Assure Implemntation, Holiday Peak Readiness, Mobile, Availability & Reliability, PE Initiatives, Batch/ETL, Chaos Engineering, Peak Load Assurance
==============================================================================

--- Section: Air Quality: shift-left defect reduction result  [source lines 78-79] ---
Together, these shift-left practices cut defects by 82%. 

--- Section: Air Quality innovation 2: shift-left performance and resilience testing  [source lines 102-121] ---
________________________________________ 

🏆 Innovation 2: Shift-Left Performance & Resilience Testing 

The original plan covered performance and accessibility testing for AQIE Citizen and AQIE Datastream for a fixed period only. In a client workshop, we argued for testing earlier in the lifecycle so risks would be found and fixed in pre-production, not in the live service. 

Events proved the point. When the AQIE production site was hit by a DDoS attack, our team provided a strategic fix that restored the service quickly and limited the impact on citizens. We then walked the client through how these attacks happen and how shift-left resilience testing helps prevent them. 

Outcomes 

• Lower risk: performance, resilience and accessibility issues are now found before they reach users. 

• Faster incident recovery: our fix restored production after the DDoS attack. 

• Business growth: the client extended the resource beyond the original plan. 

• Continued value: the resource remains central to ongoing quality improvements. 

💷 Savings: £52K (hard savings and revenue) 

--- Section: LAQO red teaming, chatbot testing  [source lines 450-456] ---
- LAQO Red Teaming- Chat bot testing
	Problem Statement:
	Organizations testing AI chatbots often struggle to identify security, safety, robustness, and misuse vulnerabilities before production deployment. Manual validation does not adequately simulate adversarial user behavior, resulting in hidden weaknesses, inconsistent testing coverage, and delayed remediation.
	 
	Idea description:
	An AI powered chatbot testing solution uses Red Teaming principles to emulate human attackers and challenge chatbot behavior through malicious, unexpected, and edge case interactions. The system automatically probes for vulnerabilities such as prompt injection, jailbreak attempts, unsafe responses, data leakage, and policy violations. Every identified failure is accompanied by a clear explanation of the root cause and actionable recommendations for improvement, enabling continuous enhancement of chatbot quality, security, and compliance.

--- Section: Automated accessibility and performance assurance  [source lines 659-670] ---
- Title: Automated Accessibility & Performance Assurance

	Problem Statement:
	Accessibility and performance issues can go undetected until late testing stages, increasing remediation costs and delivery risk.

	Solution:
	Built an automated assurance solution leveraging AXE-core and Google Lighthouse, integrated into CI/CD pipelines. The solution uses browser automation to execute accessibility scans against web applications, validating compliance with WCAG standards and identifying issues such as missing labels, contrast violations, and keyboard navigation defects. In parallel, Lighthouse performs automated audits of performance, accessibility, SEO, and best-practice metrics by analyzing page rendering, resource loading, Core Web Vitals, and runtime behavior. Results are consolidated into actionable reports and dashboards, enabling teams to proactively identify, prioritize, and remediate issues before release.

	Customer Need:
	Deliver accessible, high-performing, and compliant applications through continuous monitoring, early issue detection, and improved user experience


==============================================================================
THEME 8: Engagement Model
AREAS: Increased Managed Services, Independent QA Contracts, Rate Revision, Penetration in other tracks
==============================================================================

--- Section: Team and duration  [source lines 807-810] ---
	Team, duration
	Since 2022, we have maintained a high-performing team of 62 professionals with a gender balance of 39% women and 61% men, fostering an inclusive and diverse working environment that supports varied perspectives and collaborative success.


==============================================================================
THEME 9: Customer centricity & relationship maturity
AREAS: Co-creation of solutions, tools, IPs along with customer. Hackathons, QA Days, Thought Leadership sessions
==============================================================================

--- Section: Air Quality: programme overview, problem statement and objectives  [source lines 1-23] ---
Air Quality: 
 

Programme Overview 

The Air Quality & Industrial Emissions (AQIE) space covers the teams and projects that provide air quality information to the public and to businesses. 

Problem statement 

DDTS user research found that the current web services (UK-AIR, LAQM and PRTR) make it hard for users to find or submit the information they need. The research identified key pain points across all three services. 

Programme objectives 

• ✔ Better user experience 

• ✔ A joined-up experience across services 

• ✔ Lower costs 

• ✔ Strong, scalable system design 

• ✔ Compliance with GDPR, Customer-DDTS strategies, GDS standards, statutory requirements and Customer's environmental sustainability requirements 

--- Section: Trade Risk: customer appreciation and recognition  [source lines 168-179] ---

Customer Appreciation & Recognition 

The team received direct client appreciation for successfully delivering the Risk Engine and Cloning data archival and retrieval solutions this year. The feedback acknowledged that the performance improvements and financial savings were a result of sustained hard work over a 7-month period, and expressed interest in seeing this pattern of delivery adopted more broadly — not just across the wider Trade teams, but further across other delivery groups. The appreciation specifically called out that none of this would have been possible without proper testing, crediting the whole team's contribution. 

Delivered measurable financial savings through the database archival and retrieval solutions 

The delivery approach behind the archival and retrieval solutions is now being considered as a model for adoption across other teams and delivery groups, reflecting broader organizational impact. 

Demonstrated process maturity and reliability by maintaining consistent performance of the RestSharp suite while simultaneously delivering new database solutions over a 7-month period. 

--- Section: Trade Risk (repeated in source): customer appreciation and recognition  [source lines 199-218] ---
Customer Appreciation & Recognition 

The team received direct client appreciation for successfully delivering the Risk Engine and Cloning data archival and retrieval solutions this year. The feedback acknowledged that the performance improvements and financial savings were a result of sustained hard work over a 7-month period, and expressed interest in seeing this pattern of delivery adopted more broadly — not just across the wider Trade teams, but further across other delivery groups. The appreciation specifically called out that none of this would have been possible without proper testing, crediting the whole team's contribution. 

Delivered measurable financial savings through the database archival and retrieval solutions 

The delivery approach behind the archival and retrieval solutions is now being considered as a model for adoption across other teams and delivery groups, reflecting broader organizational impact. 

Demonstrated process maturity and reliability by maintaining consistent performance of the RestSharp suite while simultaneously delivering new database solutions over a 7-month period. 

--- Section: AI innovation journey: industry recognition  [source lines 678-684] ---
Industry Recognition

•	First Runner-Up in Google Agentverse Hackathon (Apr-Jun 2025). 
•	Participation in a Guinness World Record AI event (Jul-Sep 2025). 
•	Finalist in AWS Tech Challenge (Oct-Dec 2025). 
•	Finalist in UiPath Hackathon (Q1-Q2 2026). 

--- Section: AI innovation journey: community and thought leadership  [source lines 691-696] ---
Community & Thought Leadership

•	Active participation in global AI communities. 
•	Knowledge-sharing and AI thought leadership activities. 
•	Supporting and inspiring AI innovation across teams. 

--- Section: Trade AI roadmap: thought leadership and innovation, outcomes and metrics  [source lines 741-769] ---
- Thought Leadership & Innovation

	Establish AI leadership through collaboration, innovation, and co-creation. 

	Key Initiatives

	•	AI framework and playbook development. 
	•	Co-create AI hackathon planning. 
	•	AI co-creation hackathon execution. 
	•	Productionisation of successful AI solutions. 
	•	Scaling and optimising AI impact across services. 

	Expected Business Outcomes

	•	Upskill: Build AI capabilities across the organisation. 
	•	Deliver: Generate measurable business value through AI-enabled quality engineering. 
	•	Scale: Expand successful AI solutions across teams, services, and use cases. 
	•	Optimize: Continuously improve AI adoption, effectiveness, and business impact. 

	Key Metrics at a Glance

	•	55% Testing Productivity Gain 
	•	48% Scripting Efficiency Improvement 
	•	20+ AI Innovation Submissions 
	•	4 Industry Recognitions 
	•	100% AI Training Completion 
	•	55% Associates AI Certified 
	•	100% Team AI Certified

--- Section: Stakeholders and public impact  [source lines 794-806] ---
- Stakeholders and public impact:

	Delivered 1,552+ digital export journeys through a scalable, reusable platform supporting multiple trade services.
	Processed 1.8M+ Export Health Certificates, helping support UK agri-food exports worth £23.6bn annually to the EU.
	ReaImport Certificate Types the milestone of 1 million Export Health Certificates processed by 2023, demonstrating successful scale-up and adoption of digital export services.
	Enabled £657m of exports through the digital Plant Health Export Service
	Achieved 99.99% digital adoption, successfully transitioning exporters from manual to digital certification processes.
	Accelerated implementation of changing trade and regulatory requirements through a configurable form-builder platform, reducing reliance on bespoke development. 
	Automated 66% of NIRMS cases and delivered 19.5 FTE efficiency savings through process automation and retirement of legacy activities.
	Reduced certificate issuance times by up to 44% and shortened turnaround times by 1-3 days, improving exporter experience and operational efficiency.
	Strengthened UK biosecurity and border assurance through digital import controls and risk-based processing within Import of products, animals, food and feed system
	Improved customer experience through user-centred design, achieving 93% customer satisfaction and consistent services across more than 1,500 export journeys.

--- Section: Stakeholder satisfaction  [source lines 871-875] ---
- Stakeholder satisfaction:

	PCSAT - Overall Satisfaction - 5/5
	NPS (Net Promoter Score) - 10/10

--- Section: Diversity and inclusion  [source lines 901-921] ---
- Diversity and inclusion:
	Outreach & Community Engagement:
	Participated in the "What's A Job?" Education Workshop (25 September), helping students understand career opportunities and workplace expectations.
	Supported Woolwich Poly Girls School through outreach and career awareness activities.
	Contributed to DigiTech Work Experience programmes, including panel discussions, mentoring, and sharing industry experience with students.
	Supported Work Experience initiatives, providing guidance and real-world insights to young people considering careers in technology.
	Participated in Defra Social Value (SV) Commitment outreach activities aimed at creating positive community impact.
	Volunteered for Defra Outreach Volunteering Days, engaging with local communities and supporting social value objectives.
	Attended Social Value Enablement Workshops to strengthen understanding and delivery of social value commitments.
 	
 	Inclusive Practices:
	Foster a collaborative team culture where all members are encouraged to contribute ideas and perspectives.
	Promote equal participation in team discussions, decision-making, and project activities.
	Support knowledge sharing, mentoring, and upskilling opportunities across the team.
	Encourage an inclusive and respectful working environment that values diversity of thought and experience.
	Provide flexibility and support to accommodate individual team member needs wherever possible.
	
	Social Value Contribution:
	Demonstrated commitment to Defra's social value objectives through volunteering, education outreach, and work experience programmes.
	Helped improve access to career guidance and technology industry insights for students and young people.
	Contributed time and expertise beyond project delivery to support broader community and educational initiatives.


==============================================================================
THEME 10: QA Adovacasy through Cross-cutting Assurance
AREAS: Continues improvements, Governance and Assurance of QA deliveries across client landscape supporting in best practices, policy guidelines and recommendations.
==============================================================================

--- Section: Air Quality: structured peer code reviews  [source lines 74-77] ---
Structured Peer Code Reviews (Node.js) 

All development code goes through structured peer review for quality, maintainability and coding standards. 

--- Section: Bluebolt idea 3: centralised testing metrics hub  [source lines 244-247] ---
3. Centralized Testing Metrics & Quality Intelligence Hub 

Establish a single source of truth for testing and quality metrics through automated dashboards, enabling real-time visibility, improved governance, and data-driven decision making. 

--- Section: Trade defect and automation data observations  [source lines 256-271] ---
2026 defects: 121 defects were reported, according to the headline figure. The component table lists 432 defects for 2026, so the two figures do not reconcile.

Defect totals: The table’s component totals add up to 3,379 defects, of which 54 were rejected and 3,325 were valid. This differs from the table’s stated total of 3,250, with 54 rejected and 3,196 valid.

Largest defect contributors: CP has the most defects overall (1,180), followed by E2E (759), Portal - SND (470) and Dynamics - SND (459).

Shift-left results: The table reports 799 defects identified through shift-left, or 24.58% of its stated total of 3,250. Portal - SND has the highest component shift-left percentage (55.96%), followed by E2E (50.86%) and Dynamics - SND (32.68%).

Defect leakage: The leakage table shows 22 UAT defects and 2 production defects across the years shown. No leakage is recorded for MO, NIRMS or CP environments.

Automation: The stated overall automation percentage is 96.69%. In the accompanying automation table, annual automation ranges from 88.86% in 2022 to 98.47% in 2025; the 2026-to-September figure is reported as 97.66%.

Data checks recommended: Confirm the 2026 defect count (121 versus 432), the overall defect total (3,250 versus 3,379 from the component rows), and the overall automation percentage (96.69% versus 97.66% reported for 2026). The shift-left percentage also appears to use the stated total of 3,250 as its denominator.

--- Section: Code coverage custom agent solution  [source lines 624-636] ---
- Code Coverage Custom Agent Solution

	Problem Statement:
	Code coverage monitoring and Sonar maintenance are currently performed manually. With more than 1,200 projects hosted on Sonar, managing these activities requires considerable efforts and time. The scale of the project landscape requires an automated and standardised approach to improve efficiency, consistency, and visibility

	Solution:
	The solution uses a GitHub Copilot Agent for analysis, and reporting across all Sonar servers, providing consolidated insights into code coverage, quality metrics, and maintenance requirements.

	Customer Need:
	Provides daily/weekly visibility into the current health of all Sonar servers and hosted projects.
	Automates sprint-by-sprint assurance reviews, reducing manual effort and improving review consistency.
	Provides consolidated insights to support faster, data-driven decision-making.

--- Section: QAT assurance reporting templatisation and automation  [source lines 637-647] ---
- QAT Assurance Reporting Templatization  Automation

	Problem Statement:
	Reporting practices currently vary across delivery groups, resulting in inconsistent visibility and limited comparability of QA delivery status. To address this challenge, we have developed a consolidated reporting template aligned with a unified QA assurance approach. The solution standardises reporting, improves transparency, and provides a consistent view of delivery across all Delivery groups. We are also automating the template to reduce manual effort, improve data accuracy, and enable teams to focus on higher-value delivery activities.

	Solution:
	The solution collects data across defined QA parameters, sanitises and validates the data, and applies RAG to evaluate the parameter against threshold values. It then automatically updates the standardised reporting template for each project, enabling consistent and transparent reporting.

	Customer Need:
	Enables consistent reporting across delivery groups

--- Section: Continuous service assurance  [source lines 648-658] ---
- Driving Quality Excellence Through Continuous Service Assurance

	Problem Statement:
	Code quality findings and automation testing gaps are not always addressed promptly due to delivery pressures, increasing the risk of defects, technical debt, and costly downstream remediation.

	Solution:
	Provide governance across 20 services by monitoring static code analysis results, tracking quality metrics, and driving timely remediation. Review automation pipelines to assess test coverage and effectiveness, recommending enhancements across accessibility, compatibility, regression, and smoke testing to strengthen quality gates.

	Customer Need:
	Ensure consistent quality, reliable releases, reduced technical debt, and improved customer confidence.

--- Section: Goals and KPIs: Agile (PHES) and Waterfall (Ops Proving)  [source lines 770-793] ---
Goals & KPI - Agile: 
- PHES
	Commitment Reliability - 80.00% 
	Defect Leakage to Production - 0.13%
	Effort Per Story Point - 14
	In Sprint Automation - 98.03%
	Defect Rejected - 0.84%
	Defect leakage to UAT - 0.36%
	Test Execution Coverage - 80%
	Regression Test Automation - 82%
	Sprint Velocity - 60.00 SPs
	Defect Density - 0.08
	Say Do Ratio - 70%
	Goals & KPI - Waterfall: (OpsProving)
	Automation Defect Yield Regression - 95.31%
	Defect Leakage to Production - 0.26%
	Effort variation - 10
	Defect Rejected - 0.67%
	Defect leakage to UAT - 0.26%
	Test Design Coverage - 99.85%
	Test Execution Coverage - 98%
	Regression Test Automation - 92.11%
	SImport Certificate Typesule variation - 3%

--- Section: Requirements verification  [source lines 860-862] ---
- Requirements verification:
	100% traceability of all requirements through test management tools like Auzre DevOps and Jira

"""
```

## Notes
- The Extraction Map shows exactly what Claude understood from your plain text, with the source line, so you can correct it before any drafting.
- The Missing Input Report now lives in the separate data gaps file. It uses 🔴 Missing, 🟠 Weak and 🟢 Ready, adds an Inconsistencies section, and ends with one checklist you can answer in plain sentences.
- Output contains no tables. If you paste a table into PROJECT STORY, Claude still reads it, but returns the same data as bullets.
- Category criteria come from the wording supplied for this prompt. Confirm them against the live TESTA entry template before final submission.
- Why the voice rules are built this way: machine-written text tends to give itself away through stock vocabulary, even rhythm, tidy symmetrical structure and a lack of particulars. The Standard attacks all four. Of these, particulars matter most, which is why Claude asks for candid detail instead of inventing it.
- AI-detection tools are unreliable in both directions. Treat the Humanisation Audit as a quality check on style, not as a prediction of any detector's score.
- The example story below is source material from earlier drafts, kept unchanged. It contains promotional phrasing ("significantly", "comprehensive", "zero hallucination by design"); v5 is designed to rewrite and evidence such claims rather than repeat them.
