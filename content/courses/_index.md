---
title: "UAS Training Courses | Forge and Flight Academy"
description: "Ten professional UAS training programs across FPV tactical drone, electronic warfare, AI/autonomy, and field sustainment. DoD, academic, and commercial pricing."
layout: "list"
---

## Professional UAS Training Programs

Ten courses across four capability domains. All programs emphasize hands-on proficiency development — operators leave able to perform, not just recite.

---

<div id="course-finder" style="background:#0f172a; border-radius:8px; padding:2.5rem; margin-bottom:2.5rem;">
  <div style="text-align:center; margin-bottom:2rem;">
    <div style="font-size:0.75rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#f59e0b; margin-bottom:0.5rem;">Not Sure Where to Start?</div>
    <h2 style="color:white; font-size:1.6rem; margin-bottom:0.5rem;">Find Your Course</h2>
    <p style="color:rgba(255,255,255,0.7); font-size:0.9rem; max-width:480px; margin:0 auto;">Three questions. Specific recommendation.</p>
  </div>

  <!-- Step 1 -->
  <div id="step-1" class="finder-step">
    <p style="color:rgba(255,255,255,0.85); font-weight:600; margin-bottom:1rem; text-align:center;">What best describes your organization?</p>
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:0.75rem;">
      <button class="finder-btn" onclick="selectAnswer(1,'dod')">DoD / Military Unit</button>
      <button class="finder-btn" onclick="selectAnswer(1,'university')">University / Research</button>
      <button class="finder-btn" onclick="selectAnswer(1,'contractor')">Contractor / Agency</button>
    </div>
  </div>

  <!-- Step 2 -->
  <div id="step-2" class="finder-step" style="display:none;">
    <p style="color:rgba(255,255,255,0.85); font-weight:600; margin-bottom:1rem; text-align:center;">What is your primary training need?</p>
    <div id="step-2-options" style="display:grid; grid-template-columns:repeat(2,1fr); gap:0.75rem;"></div>
  </div>

  <!-- Step 3 -->
  <div id="step-3" class="finder-step" style="display:none;">
    <p style="color:rgba(255,255,255,0.85); font-weight:600; margin-bottom:1rem; text-align:center;">What is the team's current experience level?</p>
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:0.75rem;">
      <button class="finder-btn" onclick="selectAnswer(3,'none')">No prior experience</button>
      <button class="finder-btn" onclick="selectAnswer(3,'some')">Some flight experience</button>
      <button class="finder-btn" onclick="selectAnswer(3,'advanced')">Experienced operators</button>
    </div>
  </div>

  <!-- Result -->
  <div id="finder-result" style="display:none; background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.15); border-radius:6px; padding:1.75rem; margin-top:0.5rem;">
    <div style="font-size:0.75rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#f59e0b; margin-bottom:0.5rem;">Recommended Program</div>
    <div id="result-code" style="font-size:1.1rem; font-weight:700; color:white; margin-bottom:0.25rem;"></div>
    <div id="result-name" style="font-size:1rem; color:rgba(255,255,255,0.85); margin-bottom:0.75rem;"></div>
    <div id="result-reason" style="font-size:0.875rem; color:rgba(255,255,255,0.7); line-height:1.6; margin-bottom:1.25rem;"></div>
    <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
      <a id="result-link" href="/courses/" class="btn btn-primary" style="font-size:0.9rem; padding:0.6rem 1.25rem;">View Program Details</a>
      <button onclick="resetFinder()" style="background:none; border:1px solid rgba(255,255,255,0.3); color:rgba(255,255,255,0.7); padding:0.6rem 1.25rem; border-radius:4px; cursor:pointer; font-size:0.9rem;">Start Over</button>
    </div>
  </div>

  <!-- Progress -->
  <div id="finder-progress" style="display:flex; gap:0.5rem; justify-content:center; margin-top:1.5rem;">
    <div class="progress-dot active" id="dot-1"></div>
    <div class="progress-dot" id="dot-2"></div>
    <div class="progress-dot" id="dot-3"></div>
  </div>
</div>

<style>
.finder-btn {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.85);
  padding: 0.85rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: inherit;
  transition: all 0.15s;
  text-align: center;
  line-height: 1.4;
}
.finder-btn:hover {
  background: rgba(255,255,255,0.13);
  border-color: #f59e0b;
  color: white;
}
.finder-btn.selected {
  background: rgba(245,158,11,0.2);
  border-color: #f59e0b;
  color: #f59e0b;
}
.progress-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  transition: background 0.2s;
}
.progress-dot.active { background: #f59e0b; }
.progress-dot.done   { background: rgba(255,255,255,0.5); }
@media (max-width: 600px) {
  .finder-btn { font-size: 0.8rem; padding: 0.7rem 0.5rem; }
  #step-2-options, div[style*="grid-template-columns:repeat(3"] { grid-template-columns: 1fr !important; }
}
</style>

<script>
(function(){
  var answers = {};

  var step2Options = {
    dod: [
      { val:'fpv',         label:'FPV systems &amp; tactical drone employment' },
      { val:'ew',          label:'Electronic warfare &amp; RF operations' },
      { val:'sustainment', label:'Field repair &amp; organic sustainment' },
      { val:'trainer',     label:'Build an internal training pipeline' },
      { val:'ai',          label:'AI, autonomy &amp; edge computing' },
      { val:'commander',   label:'Executive overview for commanders/staff' }
    ],
    university: [
      { val:'research',    label:'Research platform operations &amp; safety' },
      { val:'ai',          label:'AI, autonomy &amp; edge computing' },
      { val:'sustainment', label:'Platform repair &amp; maintenance capability' },
      { val:'assessment',  label:'Validate operator proficiency (assessment)' }
    ],
    contractor: [
      { val:'trainer',     label:'Train-the-trainer for platform fielding' },
      { val:'assessment',  label:'Third-party assessment &amp; validation' },
      { val:'fpv',         label:'Operator training for government customer' },
      { val:'custom',      label:'Custom curriculum development' }
    ]
  };

  var recommendations = {
    dod_fpv_none:         { code:'FFF-401', name:'Advanced FPV Systems Integration &amp; Field Sustainment', reason:'Zero to operational in 10 days. Covers complete aircraft build, Betaflight configuration, simulator training, and tactical employment. No experience required — designed for exactly this starting point.', link:'/courses/fff-401/' },
    dod_fpv_some:         { code:'FFF-401', name:'Advanced FPV Systems Integration &amp; Field Sustainment', reason:'Even with flight experience, FFF-401 delivers the sustainment and tactical employment skills that separate operators from self-sufficient units. The build-from-scratch component applies regardless of prior flight time.', link:'/courses/fff-401/' },
    dod_fpv_advanced:     { code:'FFF-402', name:'FPV Master Trainer Certification', reason:'Your operators are already proficient. The next step is building internal training capability so you stop depending on contractors to maintain that proficiency. FFF-402 certifies an internal instructor.', link:'/courses/fff-402/' },
    dod_ew_none:          { code:'FFR-201', name:'Tactical RF Fundamentals for UAS Operators', reason:'The most lethal gap in current drone operations — addressed from the ground up. No technical background needed. HackRF + PortaPack provided. Built on Ukrainian combat lessons learned.', link:'/courses/ffr-201/' },
    dod_ew_some:          { code:'FFR-201', name:'Tactical RF Fundamentals for UAS Operators', reason:'FFR-201 moves fast and assumes nothing — even with some RF background, the tactical application and real-time EW diagnosis component is distinct from theoretical knowledge.', link:'/courses/ffr-201/' },
    dod_ew_advanced:      { code:'FFR-301', name:'Advanced Electronic Warfare for UAS Operations', reason:'Spectrum operations planning, EW countermeasures execution, and direct S-6/G-6 coordination. For operators who have FFR-201 fundamentals and need the advanced employment layer.', link:'/courses/ffr-301/' },
    dod_sustainment_none: { code:'FFF-201', name:'Electronics Repair for Deployed Operators', reason:'Field-level electronics repair from scratch — no background needed. Soldering, component replacement, and diagnostic techniques for austere environments. Return platforms to service without evacuation.', link:'/courses/fff-201/' },
    dod_sustainment_some: { code:'FFF-201', name:'Electronics Repair for Deployed Operators', reason:'FFF-201 builds practical repair proficiency regardless of prior electronics exposure. The course is built around what fails in the field, not lab theory.', link:'/courses/fff-201/' },
    dod_sustainment_advanced: { code:'FFF-301', name:'Additive Manufacturing for UAS Sustainment', reason:'If repair fundamentals are solid, the next layer is forward-deployed manufacturing capability — printing structural replacement parts on-site and eliminating parts resupply dependency.', link:'/courses/fff-301/' },
    dod_trainer_none:     { code:'FFF-401', name:'Advanced FPV Systems Integration &amp; Field Sustainment', reason:'Build operator proficiency first. Once your unit has trained operators, FFF-402 (train-the-trainer) is the natural next step to make that capability self-replicating.', link:'/courses/fff-401/' },
    dod_trainer_some:     { code:'FFF-402', name:'FPV Master Trainer Certification', reason:'15-day certification program. Graduates can deliver FFF-401-equivalent training internally — eliminating contractor dependency for ongoing operator development.', link:'/courses/fff-402/' },
    dod_trainer_advanced: { code:'FFF-402', name:'FPV Master Trainer Certification', reason:'With experienced operators in the unit, FFF-402 is the direct path to sustainable internal training capability. Certify one instructor, train indefinitely.', link:'/courses/fff-402/' },
    dod_ai_none:          { code:'FFA-401', name:'Operational Edge Computing for UAS', reason:'No ML background needed. Deploy real-time AI target recognition on Jetson hardware and configure autonomous decision pipelines for disconnected operations. Built for operators, not data scientists.', link:'/courses/ffa-401/' },
    dod_ai_some:          { code:'FFA-401', name:'Operational Edge Computing for UAS', reason:'FFA-401 is the right entry point regardless of prior exposure — it bridges the gap between theoretical AI knowledge and operational edge deployment on real hardware.', link:'/courses/ffa-401/' },
    dod_ai_advanced:      { code:'FFA-501', name:'Advanced Autonomy Employment &amp; Mission Planning', reason:'Complex autonomous missions, swarm coordination, and BVLOS configuration. For operators with FFA-401-level edge computing skills who need the advanced mission planning layer.', link:'/courses/ffa-501/' },
    dod_commander_none:   { code:'FFR-101', name:'RF Awareness for Non-Technical Personnel', reason:'2-day executive overview for O-4 and above. Spectrum basics, EW threats, and coordination requirements. No technical background needed. Make informed decisions about spectrum-contested operations.', link:'/courses/ffr-101/' },
    dod_commander_some:   { code:'FFA-201', name:'AI Fundamentals for Non-Technical Personnel', reason:'2-day executive overview covering AI/ML capabilities and limitations for commanders and program managers. Evaluate AI-enabled UAS claims critically and make informed acquisition decisions.', link:'/courses/ffa-201/' },
    dod_commander_advanced: { code:'FFR-101', name:'RF Awareness for Non-Technical Personnel', reason:'Even with operational experience, the spectrum-specific commander overview course provides structured framework for EW decision-making and S-6 coordination that transfers directly to contested UAS employment.', link:'/courses/ffr-101/' },
    university_research_none:     { code:'FFA-401', name:'Operational Edge Computing for UAS', reason:'Gives research operators the platform and AI payload competency to run experiments independently. Jetson Orin Nano included. No ML background needed — designed for operators, not computer scientists.', link:'/courses/ffa-401/' },
    university_research_some:     { code:'FFA-401', name:'Operational Edge Computing for UAS', reason:'FFA-401 closes the gap between research theory and operational platform competency. Students leave able to execute flight test protocols and run AI payloads without manufacturer hand-holding.', link:'/courses/ffa-401/' },
    university_research_advanced: { code:'FFA-501', name:'Advanced Autonomy Employment &amp; Mission Planning', reason:'For labs with operational platform proficiency that need multi-vehicle coordination, BVLOS capability, and complex autonomous mission execution for research programs.', link:'/courses/ffa-501/' },
    university_ai_none:           { code:'FFA-401', name:'Operational Edge Computing for UAS', reason:'The right starting point for AI research programs — builds hardware proficiency alongside edge AI deployment on Jetson. Students can run experiments without waiting on technical staff for every flight.', link:'/courses/ffa-401/' },
    university_ai_some:           { code:'FFA-401', name:'Operational Edge Computing for UAS', reason:'FFA-401 bridges theory and hardware. Even with AI background, the operational deployment layer on Jetson hardware in a flight context is a distinct competency.', link:'/courses/ffa-401/' },
    university_ai_advanced:       { code:'FFA-501', name:'Advanced Autonomy Employment &amp; Mission Planning', reason:'Advanced autonomous mission planning and multi-vehicle coordination. For researchers with solid edge AI foundations who need the complex mission execution capability.', link:'/courses/ffa-501/' },
    university_sustainment_none:  { code:'FFF-201', name:'Electronics Repair for Deployed Operators', reason:'Labs running high-cycle research operations can\'t afford manufacturer RMA wait times. FFF-201 builds in-house repair capability — reducing downtime from weeks to hours.', link:'/courses/fff-201/' },
    university_sustainment_some:  { code:'FFF-201', name:'Electronics Repair for Deployed Operators', reason:'FFF-201 builds practical repair proficiency regardless of prior electronics exposure. Course is structured around what actually fails in high-cycle operations.', link:'/courses/fff-201/' },
    university_sustainment_advanced: { code:'FFF-301', name:'Additive Manufacturing for UAS Sustainment', reason:'If repair fundamentals are covered, additive manufacturing adds the capability to fabricate structural replacement parts in-lab — eliminating dependency on parts availability timelines.', link:'/courses/fff-301/' },
    university_assessment_none:   { code:'assessment', name:'Individual Operator Proficiency Assessment', reason:'Third-party proficiency validation across five domains provides documented, defensible ratings useful for lab safety protocols, IRB requirements, and grant reporting. No prior training needed to assess current baseline.', link:'/assessment/' },
    university_assessment_some:   { code:'assessment', name:'Individual Operator Proficiency Assessment', reason:'Objective third-party assessment documents your operators\' current capability level — useful for safety reviews, grant deliverables, and identifying specific gaps before investing in training.', link:'/assessment/' },
    university_assessment_advanced: { code:'assessment', name:'Unit Readiness Assessment', reason:'For labs with established operator programs — unit-level assessment validates the program effectiveness, identifies collective gaps, and produces defensible capability documentation for institutional requirements.', link:'/assessment/' },
    contractor_trainer_none:      { code:'FFF-401', name:'Advanced FPV Systems Integration &amp; Field Sustainment', reason:'Build the operator baseline first. Once your customer\'s team has completed FFF-401, FFF-402 (train-the-trainer) converts one of those operators into an internal instructor — eliminating your ongoing support obligation.', link:'/courses/fff-401/' },
    contractor_trainer_some:      { code:'FFF-402', name:'FPV Master Trainer Certification', reason:'Certify an internal instructor within your customer\'s organization. Reduces your lifecycle support costs, strengthens your platform delivery proposal, and gives your customer sustainable training capability.', link:'/courses/fff-402/' },
    contractor_trainer_advanced:  { code:'FFF-402', name:'FPV Master Trainer Certification', reason:'With experienced operators available, FFF-402 is the direct path. Certify one as an internal trainer and your customer\'s training program becomes self-sustaining without contractor dependency.', link:'/courses/fff-402/' },
    contractor_assessment_none:   { code:'assessment', name:'Operator Capability Assessment', reason:'Third-party objective proficiency validation carries more weight with government acceptance testers than vendor self-certification. Our 1-5 scale assessments produce defensible, audit-ready deliverables for contract compliance.', link:'/assessment/' },
    contractor_assessment_some:   { code:'assessment', name:'Operator Capability Assessment', reason:'Independent assessment services validate your training program effectiveness and provide objective capability documentation — useful for program acceptance testing and government customer deliverable reporting.', link:'/assessment/' },
    contractor_assessment_advanced: { code:'assessment', name:'Unit Readiness Assessment', reason:'Unit-level readiness validation for program acceptance, platform fielding documentation, and government customer readiness reporting. Defensible third-party methodology for acquisition file requirements.', link:'/assessment/' },
    contractor_fpv_none:          { code:'FFF-401', name:'Advanced FPV Systems Integration &amp; Field Sustainment', reason:'Platform-specific initial operator qualification for your government customers. Zero to operationally proficient in 10 days. SOCOM-aligned curriculum, full equipment included.', link:'/courses/fff-401/' },
    contractor_fpv_some:          { code:'FFF-401', name:'Advanced FPV Systems Integration &amp; Field Sustainment', reason:'FFF-401 delivers complete sustainment capability alongside flight proficiency — operators leave able to maintain and repair platforms, not just fly them. Appropriate even with prior flight experience.', link:'/courses/fff-401/' },
    contractor_fpv_advanced:      { code:'FFF-402', name:'FPV Master Trainer Certification', reason:'Experienced operators are ready to build internal training capability. FFF-402 certifies a trainer within your customer organization — reducing your long-term support obligation.', link:'/courses/fff-402/' },
    contractor_custom_none:       { code:'contact', name:'Custom Curriculum Development', reason:'If you\'re fielding a non-FPV platform or need training tailored to a specific system, we develop custom curriculum under a separate agreement. Contact us with your platform specs and timeline.', link:'/contact/' },
    contractor_custom_some:       { code:'contact', name:'Custom Curriculum Development', reason:'Custom training development for specialized platforms, sensor payloads, or mission-specific requirements. Contact us with your platform documentation and we\'ll scope the engagement.', link:'/contact/' },
    contractor_custom_advanced:   { code:'contact', name:'Custom Curriculum Development', reason:'Custom curriculum development and train-the-trainer programs for advanced platforms. Contact us — we\'ve built training for fixed-wing VTOL, Group 2/3 platforms, and specialized sensor payloads.', link:'/contact/' },
  };

  window.selectAnswer = function(step, val) {
    answers['step'+step] = val;
    document.querySelectorAll('#step-'+step+' .finder-btn').forEach(function(b){ b.classList.remove('selected'); });
    event.target.classList.add('selected');

    setTimeout(function(){
      if(step === 1){
        document.getElementById('step-1').style.display = 'none';
        document.getElementById('dot-1').classList.remove('active');
        document.getElementById('dot-1').classList.add('done');
        buildStep2(val);
        document.getElementById('step-2').style.display = 'block';
        document.getElementById('dot-2').classList.add('active');
      } else if(step === 2){
        document.getElementById('step-2').style.display = 'none';
        document.getElementById('dot-2').classList.remove('active');
        document.getElementById('dot-2').classList.add('done');
        document.getElementById('step-3').style.display = 'block';
        document.getElementById('dot-3').classList.add('active');
      } else if(step === 3){
        document.getElementById('step-3').style.display = 'none';
        document.getElementById('dot-3').classList.remove('active');
        document.getElementById('dot-3').classList.add('done');
        showResult();
      }
    }, 200);
  };

  function buildStep2(org){
    var opts = step2Options[org] || [];
    var container = document.getElementById('step-2-options');
    container.innerHTML = '';
    opts.forEach(function(opt){
      var btn = document.createElement('button');
      btn.className = 'finder-btn';
      btn.innerHTML = opt.label;
      btn.onclick = function(){ selectAnswer(2, opt.val); };
      container.appendChild(btn);
    });
  }

  function showResult(){
    var key = answers.step1 + '_' + answers.step2 + '_' + answers.step3;
    var rec = recommendations[key];
    if(!rec){
      // Fallback — route to courses page
      rec = { code:'Browse All Courses', name:'View All Training Programs', reason:'Based on your selections, we recommend reviewing our full course catalog to find the best match. Contact us and we\'ll point you directly.', link:'/courses/' };
    }
    document.getElementById('result-code').textContent = rec.code;
    document.getElementById('result-name').innerHTML = rec.name;
    document.getElementById('result-reason').innerHTML = rec.reason;
    document.getElementById('result-link').href = rec.link;
    document.getElementById('finder-result').style.display = 'block';
    document.getElementById('finder-progress').style.display = 'none';
  }

  window.resetFinder = function(){
    answers = {};
    ['step-1','step-2','step-3'].forEach(function(id){
      var el = document.getElementById(id);
      if(el){ el.style.display = id==='step-1'?'block':'none'; }
    });
    document.getElementById('finder-result').style.display = 'none';
    document.getElementById('finder-progress').style.display = 'flex';
    document.querySelectorAll('.progress-dot').forEach(function(d,i){
      d.className = 'progress-dot' + (i===0?' active':'');
    });
    document.querySelectorAll('.finder-btn').forEach(function(b){ b.classList.remove('selected'); });
    document.getElementById('step-2-options').innerHTML = '';
  };
})();
</script>



<a name="fpv-tactical"></a>
## FPV & Tactical Drone Employment

Build it. Configure it. Fly it. Fix it. The complete FPV operator and trainer pipeline.

<div class="grid grid-2" style="margin-top: 1.5rem;">

<div class="card" style="border-top: 3px solid #f59e0b;">
<span class="course-code">FFF-401 — FLAGSHIP</span>
<h3>Advanced FPV Systems Integration & Field Sustainment</h3>
<p><strong>Duration:</strong> 10 days &nbsp;|&nbsp; Zero experience required</p>
<p><strong>After this course, operators can:</strong> Build a complete FPV aircraft from components, configure Betaflight for tactical employment, fly precision maneuvers in operational scenarios, and perform field repairs without contractor support.</p>
<p style="font-size:0.85rem; color:#6b7280;">Equipment included — students keep all hardware. SOCOM-aligned curriculum. Army UALC standards.</p>
<a href="/courses/fff-401/" class="btn btn-primary">Program Details →</a>
</div>

<div class="card">
<span class="course-code">FFF-402</span>
<h3>FPV Master Trainer Certification</h3>
<p><strong>Duration:</strong> 15 days &nbsp;|&nbsp; FFF-401 recommended prerequisite</p>
<p><strong>After this course, organizations have:</strong> A certified internal instructor capable of delivering FFF-401-equivalent training organically — eliminating recurring contractor dependency and building a sustainable unit training pipeline.</p>
<p style="font-size:0.85rem; color:#6b7280;">Full equipment package included. FAA Part 107 exam covered. Curriculum licensing included.</p>
<a href="/courses/fff-402/" class="btn btn-primary">Program Details →</a>
</div>

</div>

---

<a name="electronic-warfare"></a>
## Electronic Warfare & RF Operations

The most lethal capability gap in current drone warfare. Operators who can't diagnose and overcome EW threats don't survive the first contested mission.

<div class="grid grid-2" style="margin-top: 1.5rem;">

<div class="card" style="border-top: 3px solid #dc2626;">
<span class="course-code">FFR-201</span>
<h3>Tactical RF Fundamentals for UAS Operators</h3>
<p><strong>Duration:</strong> 5 days &nbsp;|&nbsp; No technical background required</p>
<p><strong>After this course, operators can:</strong> Diagnose EW interference in real-time, adapt link configurations under active jamming, and maintain mission continuity in degraded RF environments.</p>
<p style="font-size:0.85rem; color:#6b7280;">HackRF One + PortaPack per student. Ukrainian combat lessons learned integrated throughout.</p>
<a href="/courses/ffr-201/" class="btn btn-primary">Program Details →</a>
</div>

<div class="card">
<span class="course-code">FFR-301</span>
<h3>Advanced Electronic Warfare for UAS Operations</h3>
<p><strong>Duration:</strong> 5 days &nbsp;|&nbsp; FFR-201 recommended</p>
<p><strong>After this course, operators can:</strong> Plan spectrum operations, execute EW countermeasures, and coordinate directly with S-6/G-6 electronic warfare officers in support of joint UAS missions.</p>
<p style="font-size:0.85rem; color:#6b7280;">BladeRF 2.0 micro xA4 per student. Advanced spectrum analysis and countermeasures.</p>
<a href="/courses/ffr-301/" class="btn btn-primary">Program Details →</a>
</div>

<div class="card">
<span class="course-code">FFR-101</span>
<h3>RF Awareness for Non-Technical Personnel</h3>
<p><strong>Duration:</strong> 2 days &nbsp;|&nbsp; No prerequisites</p>
<p><strong>After this course, commanders and staff can:</strong> Understand EW threats to UAS operations, ask the right questions of technical staff, and make informed decisions about spectrum-contested mission planning.</p>
<p style="font-size:0.85rem; color:#6b7280;">Executive overview format. No technical background required. Ideal for O-4 and above.</p>
<a href="/courses/ffr-101/" class="btn btn-primary">Program Details →</a>
</div>

</div>

---

<a name="ai-autonomy"></a>
## AI, Autonomy & Edge Computing

Autonomous systems at the tactical edge — for operators, not data scientists.

<div class="grid grid-2" style="margin-top: 1.5rem;">

<div class="card" style="border-top: 3px solid #2563eb;">
<span class="course-code">FFA-401</span>
<h3>Operational Edge Computing for UAS</h3>
<p><strong>Duration:</strong> 5 days &nbsp;|&nbsp; No ML background required</p>
<p><strong>After this course, operators can:</strong> Deploy real-time AI target recognition, configure autonomous decision pipelines on Jetson hardware, and operate edge computing payloads on disconnected networks without a data scientist in the loop.</p>
<p style="font-size:0.85rem; color:#6b7280;">Jetson Orin Nano per student. ArduPilot/PX4 integration. Hands-on model deployment.</p>
<a href="/courses/ffa-401/" class="btn btn-primary">Program Details →</a>
</div>

<div class="card">
<span class="course-code">FFA-501</span>
<h3>Advanced Autonomy Employment & Mission Planning</h3>
<p><strong>Duration:</strong> 5 days &nbsp;|&nbsp; FFA-401 recommended</p>
<p><strong>After this course, operators can:</strong> Plan and execute complex autonomous missions, coordinate multi-aircraft operations, and configure BVLOS flight profiles using ArduPilot/PX4 advanced parameters.</p>
<p style="font-size:0.85rem; color:#6b7280;">Academy platforms used. Swarm coordination and autonomous mission execution focus.</p>
<a href="/courses/ffa-501/" class="btn btn-primary">Program Details →</a>
</div>

<div class="card">
<span class="course-code">FFA-201</span>
<h3>AI Fundamentals for Non-Technical Personnel</h3>
<p><strong>Duration:</strong> 2 days &nbsp;|&nbsp; No prerequisites</p>
<p><strong>After this course, commanders and staff can:</strong> Evaluate AI capability claims critically, understand the real constraints of autonomous systems, and make informed decisions about AI-enabled UAS employment — without being misled by vendor marketing.</p>
<p style="font-size:0.85rem; color:#6b7280;">Executive overview format. Ideal for O-4 and above, acquisition officers, and program managers.</p>
<a href="/courses/ffa-201/" class="btn btn-primary">Program Details →</a>
</div>

</div>

---

<a name="fabrication-sustainment"></a>
## Field Fabrication & Sustainment

Organic repair. Zero contractor dependency. Keep platforms flying after attrition.

<div class="grid grid-2" style="margin-top: 1.5rem;">

<div class="card" style="border-top: 3px solid #16a34a;">
<span class="course-code">FFF-201</span>
<h3>Electronics Repair for Deployed Operators</h3>
<p><strong>Duration:</strong> 5 days &nbsp;|&nbsp; No prerequisites</p>
<p><strong>After this course, operators can:</strong> Diagnose and repair field-level electronics failures, perform IPC-standard soldering under austere conditions, replace components, and return platforms to service without evacuation to a maintenance facility.</p>
<p style="font-size:0.85rem; color:#6b7280;">Practice PCBs and components included. Soldering, diagnostics, and field repair techniques.</p>
<a href="/courses/fff-201/" class="btn btn-primary">Program Details →</a>
</div>

<div class="card">
<span class="course-code">FFF-301</span>
<h3>Additive Manufacturing for UAS Sustainment</h3>
<p><strong>Duration:</strong> 3 days &nbsp;|&nbsp; No prerequisites</p>
<p><strong>After this course, operators can:</strong> Design and print field-replacement structural components, select appropriate materials for load-bearing applications, and maintain a forward-deployed printing capability that eliminates dependency on parts resupply timelines.</p>
<p style="font-size:0.85rem; color:#6b7280;">FDM/FFF techniques, material selection, and design for printability. Filament and consumables included.</p>
<a href="/courses/fff-301/" class="btn btn-primary">Program Details →</a>
</div>

</div>

---

## Course Bundles

Purpose-built training pathways for complete capability development.

<div class="grid grid-2" style="margin-top: 1.5rem;">

<div class="card">
<h3>Tactical FPV Complete Operator Package</h3>
<p>FFF-401 + FFR-201 + FFF-201. Full FPV operator pipeline — fly it, protect it from EW, fix it in the field. The complete self-sufficient operator.</p>
<a href="/contact/" class="btn btn-primary">Request Information</a>
</div>

<div class="card">
<h3>Unit Training Package</h3>
<p>FFF-401 + FFF-402 + Assessment Services. Stand up organic training capability. Graduate operators and a certified internal instructor in a single program.</p>
<a href="/contact/" class="btn btn-primary">Request Information</a>
</div>

<div class="card">
<h3>Advanced Operator Pathway</h3>
<p>FFR-201 + FFR-301 + FFA-401. Electronic warfare literacy combined with AI edge computing — for operators expected to operate in the most contested environments.</p>
<a href="/contact/" class="btn btn-primary">Request Information</a>
</div>

<div class="card">
<h3>Sustainment & Assessment Package</h3>
<p>FFF-201 + FFF-301 + Unit Readiness Assessment. Build organic repair capability and validate it against objective proficiency standards.</p>
<a href="/contact/" class="btn btn-primary">Request Information</a>
</div>

</div>

---

## Training Investment

All programs are priced on a **per-student, cohort-based model.** Pricing is tailored to customer type (DoD/Government, Commercial, Academic), course duration, and cohort size.

<div class="grid grid-2" style="margin-top: 2rem;">

<div class="card">
<h3>How Pricing Is Structured</h3>
<ul style="margin: 0.75rem 0 0; padding-left: 1.25rem; line-height: 1.8; color: #374151;">
<li>Per-student pricing based on course duration and equipment</li>
<li>Optimal cohort size: 8 students</li>
<li>Custom cohort sizes available (minimum 4, maximum 12)</li>
<li>Tiered rates for DoD/Government, Commercial, and Academic customers</li>
<li>Bundle discounts for multi-course packages</li>
<li>Unit Training Packages available for full organizational standup</li>
</ul>
</div>

<div class="card">
<h3>What's Included</h3>
<ul style="margin: 0.75rem 0 0; padding-left: 1.25rem; line-height: 1.8; color: #374151;">
<li>All course materials, manuals, and reference cards</li>
<li>Hardware and consumables (hands-on build courses)</li>
<li>Lead and assistant instructor labor</li>
<li>Facility, equipment, and software licensing</li>
<li>Certification upon demonstrated proficiency</li>
<li>Post-course support period (varies by program)</li>
</ul>
</div>

</div>

<div class="card" style="margin-top: 1.5rem; background: #f0f9ff; border-left: 4px solid #2563eb;">
<h3>Government Contracting</h3>
<p>Forge and Flight Academy LLC holds an active SAM.gov registration (UEI: YV8UNYJWZHV1 | CAGE: 1A6J3 | CAGE: 1A6J3). Training services are available through standard DoD contracting vehicles including simplified acquisition, GPC, and MIPR. We respond to RFQs within 48 hours.</p>
</div>

<div style="margin-top: 2rem; text-align: center;">
<p style="font-size: 1.05rem; color: #374151; margin-bottom: 1.25rem;">Contact us with your course of interest, customer type, and desired cohort size — we'll return a proposal within 48 hours.</p>
<a href="/contact/" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2rem;">Request a Pricing Proposal</a>
</div>

---

## Ready to Schedule Training?

<div style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
<a href="/contact/" class="btn btn-primary">Request Training Proposal</a>
<a href="/assessment/" class="btn btn-secondary">Assessment Services</a>
<a href="/about/five-pillars/" class="btn btn-secondary">Five-Pillar Framework</a>
</div>
