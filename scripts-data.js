/* ================= TAB FLOWS ================= */
const tabFlows = {
  "RL enquiry": {labels: {1: "1", 2: "2", 3: "LTA", 4: "FTA", 5: "4", 6: "APP"}, 
        1: ['intro_RetirementLine','dataprotection','ri_RetirementLine','guidance',nextToTab({tabNumber: 2, tabText: "2", tabColour: "#007bff"})], 

        2: ['objectives','options','datagathering','annuityoptions',nextToTab([{tabNumber: 3, tabText: "LTA", tabColour: "#69ae53"},{tabNumber: 4, tabText: "FTA", tabColour: "#f47e3c"}])], 
        3: ['lta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})], 
        4: ['fta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})],
        5: ['outro',nextToTab({tabNumber: 6, tabText: "APP", tabColour: "#007bff"})],
        6: ['app']},

  "Annuity UK": {labels: {1: "1", 2: "2", 3: "LTA", 4: "FTA", 5: "4", 6: "APP"}, 
        1: ['intro_AnnuityUK','dataprotection','ri_AnnuityUK','guidance',nextToTab({tabNumber: 2, tabText: "2", tabColour: "#007bff"})], 
        2: ['objectives','options','datagathering','annuityoptions',nextToTab([{tabNumber: 3, tabText: "LTA", tabColour: "#69ae53"},{tabNumber: 4, tabText: "FTA", tabColour: "#f47e3c"}])], 
        3: ['lta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})], 
        4: ['fta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})],
        5: ['outro',nextToTab({tabNumber: 6, tabText: "APP", tabColour: "#007bff"})],
        6: ['app']},

  "Annuity Line": {labels: {1: "1", 2: "2", 3: "LTA", 4: "FTA", 5: "4", 6: "APP"}, 
        1: ['intro_AnnuityLine','dataprotection','ri_AnnuityLine','guidance',nextToTab({tabNumber: 2, tabText: "2", tabColour: "#007bff"})], 
        2: ['objectives','options','datagathering','annuityoptions',nextToTab([{tabNumber: 3, tabText: "LTA", tabColour: "#69ae53"},{tabNumber: 4, tabText: "FTA", tabColour: "#f47e3c"}])], 
        3: ['lta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})], 
        4: ['fta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})],
        5: ['outro',nextToTab({tabNumber: 6, tabText: "APP", tabColour: "#007bff"})],
        6: ['app']},

  "Tesco": {labels: {1: "1", 2: "2", 3: "LTA", 4: "FTA", 5: "4", 6: "APP"}, 
        1: ['intro_Tesco','dataprotection','ri_Tesco','guidance_Tesco',nextToTab({tabNumber: 2, tabText: "2", tabColour: "#007bff"})], 
        2: ['objectives','options','datagathering','annuityoptions',nextToTab([{tabNumber: 3, tabText: "LTA", tabColour: "#69ae53"},{tabNumber: 4, tabText: "FTA", tabColour: "#f47e3c"}])], 
        3: ['lta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})], 
        4: ['fta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})],
        5: ['outro',nextToTab({tabNumber: 6, tabText: "APP", tabColour: "#007bff"})],
        6: ['app']},

  "NEST": {labels: {1: "1", 2: "2", 3: "LTA", 4: "FTA", 5: "4", 6: "APP"}, 
        1: ['intro_NEST','dataprotection','ri_NEST','guidance',nextToTab({tabNumber: 2, tabText: "2", tabColour: "#007bff"})], 
        2: ['objectives','options','datagathering','annuityoptions',nextToTab([{tabNumber: 3, tabText: "LTA", tabColour: "#69ae53"},{tabNumber: 4, tabText: "FTA", tabColour: "#f47e3c"}])], 
        3: ['lta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})], 
        4: ['fta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})],
        5: ['outro',nextToTab({tabNumber: 6, tabText: "APP", tabColour: "#007bff"})],
        6: ['app']},

  "Lloyds": {labels: {1: "1", 2: "2", 3: "LTA", 4: "FTA", 5: "4", 6: "APP"}, 
        1: ['intro_Lloyds','dataprotection_Lloyds','ri_Lloyds','guidance',nextToTab({tabNumber: 2, tabText: "2", tabColour: "#007bff"})], 
        2: ['objectives','options','datagathering','annuityoptions',nextToTab([{tabNumber: 3, tabText: "LTA", tabColour: "#69ae53"},{tabNumber: 4, tabText: "FTA", tabColour: "#f47e3c"}])], 
        3: ['lta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})], 
        4: ['fta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})],
        5: ['outro',nextToTab({tabNumber: 6, tabText: "APP", tabColour: "#007bff"})],
        6: ['app']},

  "Virgin": {labels: {1: "1", 2: "2", 3: "LTA", 4: "FTA", 5: "4", 6: "APP"}, 
        1: ['intro_Virgin','dataprotection','ri_Virgin','guidance',nextToTab({tabNumber: 2, tabText: "2", tabColour: "#007bff"})], 
        2: ['objectives','options','datagathering','annuityoptions',nextToTab([{tabNumber: 3, tabText: "LTA", tabColour: "#69ae53"},{tabNumber: 4, tabText: "FTA", tabColour: "#f47e3c"}])], 
        3: ['lta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})], 
        4: ['fta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})],
        5: ['outro',nextToTab({tabNumber: 6, tabText: "APP", tabColour: "#007bff"})],
        6: ['app']},

  "Wesleyan": {labels: {1: "1", 2: "2", 3: "LTA", 4: "FTA", 5: "4", 6: "APP"}, 
        1: ['intro_Wesleyan','dataprotection','ri_Wesleyan','guidance',nextToTab({tabNumber: 2, tabText: "2", tabColour: "#007bff"})], 
        2: ['objectives','options', 'warning_Wesleyan', 'datagathering','annuityoptions',nextToTab([{tabNumber: 3, tabText: "LTA", tabColour: "#69ae53"},{tabNumber: 4, tabText: "FTA", tabColour: "#f47e3c"}])], 
        3: ['lta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})], 
        4: ['warning_Wesleyan','fta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})],
        5: ['outro',nextToTab({tabNumber: 6, tabText: "APP", tabColour: "#007bff"})],
        6: ['app']},

  "MoneyService": {labels: {1: "1", 2: "2", 3: "LTA", 4: "FTA", 5: "4", 6: "APP"}, 
        1: ['intro_MoneyService','dataprotection','ri_MoneyService','guidance',nextToTab({tabNumber: 2, tabText: "2", tabColour: "#007bff"})], 
        2: ['objectives','options','datagathering','annuityoptions',nextToTab([{tabNumber: 3, tabText: "LTA", tabColour: "#69ae53"},{tabNumber: 4, tabText: "FTA", tabColour: "#f47e3c"}])], 
        3: ['lta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})], 
        4: ['fta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})],
        5: ['outro',nextToTab({tabNumber: 6, tabText: "APP", tabColour: "#007bff"})],
        6: ['app']},

  "IFA Introduced": {labels: {1: "1", 2: "2", 3: "LTA", 4: "FTA", 5: "4", 6: "APP"}, 
        1: ['intro_IFA','dataprotection','ri_IFA','guidance',nextToTab({tabNumber: 2, tabText: "2", tabColour: "#007bff"})], 
        2: ['objectives','options','datagathering','annuityoptions',nextToTab([{tabNumber: 3, tabText: "LTA", tabColour: "#69ae53"},{tabNumber: 4, tabText: "FTA", tabColour: "#f47e3c"}])], 
        3: ['lta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})], 
        4: ['fta',nextToTab({tabNumber: 5, tabText: "OUTRO", tabColour: "#007bff"})],
        5: ['outro',nextToTab({tabNumber: 6, tabText: "APP", tabColour: "#007bff"})],
        6: ['app']},

  "WPSA": {labels: {1: "1", 2: "2", 3: "APP"}, 
        1: ['intro_WPSA','dataprotection','ri_WPSA',nextToTab({tabNumber: 2, tabText: "2", tabColour: "#007bff"})], 
        2: ['wps_main'], 
        3: ['wps_app']}
};

/* ================= SCRIPT BLOCKS ================= */
const blocks = {

  /* --- INTRODUCTION BLOCKS --- */
  intro_RetirementLine: `<div class="script-block">
    <input type="text" placeholder="Client name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateVar('client-name', this.value, '(name)', this)">
    <p>∎ Good <span class="time-greeting"></span>. Please could I speak with <mark><span class="client-name">(name)</span></mark>?</p>
    <p>∎ Hello <mark><span class="client-name">(name)</span></mark>, my name is Johnathon Davis, I'm an Annuity Specialist with Retirement Line and I'm calling regarding <mark>your enquiry made on our website</mark>.</p>
    <p>∎ Is it convenient to talk for a few minutes?</p>
  </div>`,

  intro_AnnuityUK: `<div class="script-block">
    <input type="text" placeholder="Client name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateVar('client-name', this.value, '(name)', this)">
    <p>∎ Good <span class="time-greeting"></span>. Please could I speak with <mark><span class="client-name">(name)</span></mark>?</p>
    <p>∎ Hello <mark><span class="client-name">(name)</span></mark>, my name is Johnathon Davis, I'm an Annuity Specialist with Retirement Line and I'm calling regarding <mark>your enquiry made on the Annuity UK website</mark>.</p>
    <p>∎ Is it convenient to talk for a few minutes?</p>
  </div>`,

  intro_AnnuityLine: `<div class="script-block">
    <input type="text" placeholder="Client name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateVar('client-name', this.value, '(name)', this)">
    <p>∎ Good <span class="time-greeting"></span>. Please could I speak with <mark><span class="client-name">(name)</span></mark>?</p>
    <p>∎ Hello <mark><span class="client-name">(name)</span></mark>, my name is Johnathon Davis, I'm an Annuity Specialist with Retirement Line and I'm calling regarding <mark>your enquiry made on the Annuity Line website</mark>.</p>
    <p>∎ Is it convenient to talk for a few minutes?</p>
  </div>`,

  intro_Tesco: `<div class="script-block">
    <input type="text" placeholder="Client name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateVar('client-name', this.value, '(name)', this)">
    <p>∎ Good <span class="time-greeting"></span>. Please could I speak with <mark><span class="client-name">(name)</span></mark>?</p>
    <p>∎ Hello <mark><span class="client-name">(name)</span></mark>, my name is Johnathon Davis, I'm an Annuity Specialist with Retirement Line and I'm calling regarding <mark>your enquiry made through the Tesco Pension Scheme</mark>.</p>
    <p>∎ Is it convenient to talk for a few minutes?</p>
  </div>`,

  intro_NEST: `<div class="script-block">
    <input type="text" placeholder="Client name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateVar('client-name', this.value, '(name)', this)">
    <p>∎ Good <span class="time-greeting"></span>. Please could I speak with <mark><span class="client-name">(name)</span></mark>?</p>
    <p>∎ Hello <mark><span class="client-name">(name)</span></mark>, my name is Johnathon Davis, I'm an Annuity Specialist with Retirement Line and I'm calling regarding <mark>your enquiry made through the NEST Pension Scheme</mark>.</p>
    <p>∎ Is it convenient to talk for a few minutes?</p>
  </div>`,

  intro_Lloyds: `<div class="script-block">
    <input type="text" placeholder="Client name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateVar('client-name', this.value, '(name)', this)">
    <p>∎ Good <span class="time-greeting"></span>. Please could I speak with <mark><span class="client-name">(name)</span></mark>?</p>
    <p>∎ Hello <mark><span class="client-name">(name)</span></mark>, my name is Johnathon Davis, I'm an Annuity Specialist with Retirement Line and I'm calling regarding <mark>your pension account with Lloyds</mark>.</p>
    <p>∎ Is it convenient to talk for a few minutes?</p>
  </div>`,

  intro_Virgin: `<div class="script-block">
    <input type="text" placeholder="Client name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateVar('client-name', this.value, '(name)', this)">
    <p>∎ Good <span class="time-greeting"></span>. Please could I speak with <mark><span class="client-name">(name)</span></mark>?</p>
    <p>∎ Hello <mark><span class="client-name">(name)</span></mark>, my name is Johnathon Davis, I'm an Annuity Specialist with Retirement Line and I'm calling regarding <mark>your enquiry made through the YCB (Virgin) Pension Scheme</mark>.</p>
    <p>∎ Is it convenient to talk for a few minutes?</p>
  </div>`,

  intro_Wesleyan: `<div class="script-block">
    <input type="text" placeholder="Client name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateVar('client-name', this.value, '(name)', this)">
    <p>∎ Good <span class="time-greeting"></span>. Please could I speak with <mark><span class="client-name">(name)</span></mark>?</p>
    <p>∎ Hello <mark><span class="client-name">(name)</span></mark>, my name is Johnathon Davis, I'm an Annuity Specialist with Retirement Line and I'm calling regarding <mark>your enquiry made through Wesleyan</mark>.</p>
    <p>∎ Is it convenient to talk for a few minutes?</p>
  </div>`,

  intro_MoneyService: `<div class="script-block">
    <input type="text" placeholder="Client name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateVar('client-name', this.value, '(name)', this)">
    <p>∎ Good <span class="time-greeting"></span>. Please could I speak with <mark><span class="client-name">(name)</span></mark>?</p>
    <p>∎ Hello <mark><span class="client-name">(name)</span></mark>, my name is Johnathon Davis, I'm an Annuity Specialist with Retirement Line and I'm calling regarding <mark>your enquiry made through The Money Service</mark>.</p>
    <p>∎ Is it convenient to talk for a few minutes?</p>
  </div>`,

  intro_IFA: `<div class="script-block">
    <input type="text" placeholder="Client name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateVar('client-name', this.value, '(name)', this)">
    <input type="text" placeholder="IFA name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('ifa-btn', this.value ? 'IFA = ' + this.value : '', 'ifa-name'); updateVar('ifa-name', this.value, '(IFA name)', this)">
    <input type="text" placeholder="Company name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('ifa-btn', this.value, 'company-name'); updateVar('company-name', this.value, '(company)', this)">
    <p>∎ Good <span class="time-greeting"></span>. Please could I speak with <mark><span class="client-name">(name)</span></mark>?</p>
    <p>∎ Hello <mark><span class="client-name">(name)</span></mark>, my name is Johnathon Davis, I'm an Annuity Specialist with Retirement Line and I'm calling on behalf of <mark><span class="ifa-name">(IFA name)</span></mark> from <mark><span class="company-name">(company)</span></mark> regarding an annuity enquiry we receieved.</p>
    <p>∎ Is it convenient to talk for a few minutes?</p>
  </div>`,
  
  intro_WPSA: `<div class="script-block">
    <input type="text" placeholder="Client name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateVar('client-name', this.value, '(name)', this)">
    <input type="text" placeholder="IFA name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('advised-btn', this.value ? 'IFA = ' + this.value : '', 'ifa-name'); updateVar('ifa-name', this.value, '(IFA name)', this)">
    <input type="text" placeholder="Fund source..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('advised-btn', this.value ? 'Fund Source = ' + this.value : '', 'fund-source')">
    <p>∎ Good <span class="time-greeting"></span>. Please could I speak with <mark><span class="client-name">(name)</span></mark>?</p>
    <p>∎ Hello <mark><span class="client-name">(name)</span></mark>, my name is Johnathon Davis, I'm an Annuity Specialist with Retirement Line and I'm calling on behalf of <mark><span class="ifa-name">(IFA name)</span></mark> from <mark>WPSA</mark> regarding an annuity enquiry we receieved.</p>
    <p>∎ Is it convenient to talk for a few minutes?</p>
  </div>`,

  /* --- DATA PROTECTION BLOCKS --- */
  dataprotection: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Data Protection</p>
    <p>∎ I have the details of your enquiry in front of me <mark><span class="client-name">(name)</span></mark>.</p>
    <p>∎ To protect your privacy, could I ask you a couple of Data Protection questions to validate I am speaking to the right person?</p>
    <p>∎ Please could you confirm your data of birth and postcode?</p>
    <p>∎ Thank you very much for that <mark><span class="client-name">(name)</span></mark>.</p>
    <p>∎ Just to let you know that for your protection, it is our company policy to always ask Data Protection questions each time I speak with you on the phone.</p>
  </div>`,

  dataprotection_Lloyds: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Data Protection</p>
    <p>∎ I have the details of your enquiry in front of me <mark><span class="client-name">(name)</span></mark>.</p>
    <p>∎ To protect your privacy, could I ask you a couple of Data Protection questions to validate I am speaking to the right person?</p>
    <p>∎ Please could you confirm your <mark>data of birth and national insurance number</mark>?</p>
    <p>∎ And finally one of the following: <mark>Home address, email address, pension fund value or LBG reference number</mark>?</p>
    <p>∎ Thank you very much for that <mark><span class="client-name">(name)</span></mark>.</p>
    <p>∎ Just to let you know that for your protection, it is our company policy to always ask Data Protection questions each time I speak with you on the phone.</p>
  </div>`,

  /* --- REGULATORY INFORMATION (RI) BLOCKS --- */
  ri_RetirementLine: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ From the options available to you through pension freedoms, we only arrange annuities.</p>
    <p>∎ If we arrange an annuity for you, there is no fee to pay for our service as we will be paid a commission from the provider which is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_AnnuityUK: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p><mark>∎ The Annuity UK service is provided by Retirement Line.</mark></p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ From the options available to you through pension freedoms, we only arrange annuities.</p>
    <p>∎ If we arrange an annuity for you, there is no fee to pay for our service as we will be paid a commission from the provider which is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_AnnuityLine: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p><mark>∎ The Annuity Line service is provided by Retirement Line.</mark></p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ From the options available to you through pension freedoms, we only arrange annuities.</p>
    <p>∎ If we arrange an annuity for you, there is no fee to pay for our service as we will be paid a commission from the provider which is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_Tesco: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p><mark>∎ Copies of these may also be requested by Tesco, who may wish to monitor a small number of calls for quality assurance purposes.</mark></p>
    <p><mark>∎ Tesco have appointed Retirement Line to provide their annuity brokering service.</mark></p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ From the options available to you through pension freedoms, we only arrange annuities.</p>
    <p>∎ If we arrange an annuity for you, there is no fee to pay for our service as we will be paid a commission from the provider which is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_NEST: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p><mark>∎ Copies of these may also be requested by NEST, who may wish to monitor a small number of calls for quality assurance purposes.</mark></p>
    <p><mark>∎ NEST have appointed Retirement Line to provide their annuity brokering service.</mark></p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ From the options available to you through pension freedoms, we only arrange annuities.</p>
    <p>∎ If we arrange an annuity for you, there is no fee to pay for our service as we will be paid a commission from the provider which is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_Lloyds: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p><mark>∎ Copies of these may also be requested by Lloyds, who may wish to monitor a small number of calls for quality assurance purposes.</mark></p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ We only arrange annuities and can offer you as much information and as many quotations as you wish.</p>
    <p>∎ If we arrange an annuity for you, we will be paid a commission from the provider, which is shown on the provider's quotations and is taken into account when calculating their annuity rate, <mark>alternatively you can pay us a fixed fee of £600</mark>.</p>
  </div>`,

  ri_Virgin: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p><mark>∎ Copies of these may also be requested by YCB (Virgin), who may wish to monitor a small number of calls for quality assurance purposes.</mark></p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ From the options available to you through pension freedoms, we only arrange annuities.</p>
    <p>∎ If we arrange an annuity for you, there is no fee to pay for our service as we will be paid a commission from the provider which is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_Wesleyan: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p><mark>∎ Copies of these may also be requested by Wesleyan, who may wish to monitor a small number of calls for quality assurance purposes.</mark></p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ From the options available to you through pension freedoms, we only arrange annuities.</p>
    <p>∎ If we arrange an annuity for you, there is no fee to pay for our service as we will be paid a commission from the provider which is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_MoneyService: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p><mark>∎ The Money Service is provided by Retirement Line.</mark></p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ From the options available to you through pension freedoms, we only arrange annuities.</p>
    <p>∎ If we arrange an annuity for you, there is no fee to pay for our service as we will be paid a commission from the provider which is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_IFA: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p>∎ Your details were passed through to us by <mark><span class="ifa-name">(IFA name)</span></mark> of <mark><span class="company-name">(company)</span></mark>. We work along side <mark><span class="company-name">(company)</span></mark> and assist their clients with the production and processing of annuities.</p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ From the options available to you through pension freedoms, we only arrange annuities.</p>
    <p>∎ If we arrange an annuity for you, there is no fee to pay for our service as we will be paid a commission from the provider which is taken into account when calculating their annuity rate.</p>
  </div>`,
  
  ri_WPSA: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p>∎ Your details were passed through to us by <mark><span class="ifa-name">(IFA name)</span></mark> of <mark>WPSA</mark>. We work along side <mark>WPSA</mark> and assist their clients with the production and processing of annuities.</p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ From the options available to you through pension freedoms, we only arrange annuities.</p>
    <p>∎ If we arrange an annuity for you, there is no fee to pay for our service as we will be paid a commission from the provider which is taken into account when calculating their annuity rate.</p>
    <p>∎ Your adviser has provided us with some info about how to structure this annuity and they should be able to discuss with you further about the various options that are on offer. The purpose of our call today is to gather/confirm your medical details. We will present the results to your adviser who will be in touch to discuss them with you further.</p>
  </div>`,

  /* --- GUIDANCE BLOCKS --- */
  guidance: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Guidance</p>
    <p>∎ Can I please ask if you have taken guidance from <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/pension-wise/book-a-free-pension-wise-appointment/book-a-phone-appointment" target="_blank" rel="noopener noreferrer">Pension Wise</a>, the Government's pension guidance services, in the last 12 months?</p>
    <div class="button-group">
      <button onclick="updateVar('pw-status', 'seek guidance', 're-seek guidance', this); updateSummary('copy-summary-btn', 'PW: Yes', 'pw', this)">Yes</button>
      <button onclick="updateVar('pw-status', 'seek guidance', 'seek guidance', this); updateSummary('copy-summary-btn', 'PW: Yes (Over 12 months)', 'pw', this)">Yes (Over 12 months)</button>
      <button onclick="updateVar('pw-status', 'seek guidance', 'seek guidance', this); updateSummary('copy-summary-btn', 'PW: No', 'pw', this)">No</button>
    </div>
    <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('copy-summary-btn', this.value, 'pw-note')">

    <p>∎ Have you taken advice and received a personal recommendation from a financial adviser?</p>
    <div class="button-group">
      <button onclick="updateSummary('copy-summary-btn', 'FA: Yes', 'fa', this)">Yes</button>
      <button onclick="updateSummary('copy-summary-btn', 'FA: No', 'fa', this)">No</button>
    </div>
    <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('copy-summary-btn', this.value, 'fa-note')">

    <p>∎ If at any point you are uncertain about which options to choose, or your personal circumstances have changed, or there has been a significant change in the value of your pension savings, then you should <mark><span class="pw-status">seek guidance</span></mark> from PensionWise or I can refer you to a regulated Financial Adviser.</p>
  </div>`,

  guidance_Tesco: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Guidance</p>
    <p>∎ Can I please ask if you have taken guidance from <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/pension-wise/book-a-free-pension-wise-appointment/book-a-phone-appointment" target="_blank" rel="noopener noreferrer">Pension Wise</a>, the Government's pension guidance services, in the last 12 months?</p>
    <div class="button-group">
      <button onclick="updateVar('pw-status', 'seek guidance', 're-seek guidance', this); updateSummary('copy-summary-btn', 'PW: Yes', 'pw', this)">Yes</button>
      <button onclick="updateVar('pw-status', 'seek guidance', 'seek guidance', this); updateSummary('copy-summary-btn', 'PW: Yes (Over 12 months)', 'pw', this)">Yes (Over 12 months)</button>
      <button onclick="updateVar('pw-status', 'seek guidance', 'seek guidance', this); updateSummary('copy-summary-btn', 'PW: No', 'pw', this)">No</button>
    </div>
    <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('copy-summary-btn', this.value, 'pw-note')">

    <p>∎ Have you taken advice and received a personal recommendation from a financial adviser?</p>
    <div class="button-group">
      <button onclick="updateSummary('copy-summary-btn', 'FA: Yes', 'fa', this)">Yes</button>
      <button onclick="updateSummary('copy-summary-btn', 'FA: No', 'fa', this)">No</button>
    </div>
    <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('copy-summary-btn', this.value, 'fa-note')">

    <p>∎ If at any point you are uncertain about which options to choose, or your personal circumstances have changed, or there has been a significant change in the value of your pension savings, then you should <mark><span class="pw-status">seek guidance</span></mark> from PensionWise <mark>or I can refer you to Origen Financial Services an IFA provided, at preferential rates, for Tesco scheme members</mark>.</p>
  </div>`,

  /* --- VULNERABLE CUSTOMERS --- */
  vulnerablecustomers: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Vulnerable Customers</p>
    <p>∎ In order for us to support you in the best way possible, is there anything you would like to tell us about your personal circumstances or any extra support that you may need?</p>
    <p>∎ These can include health issues or life events which may impact your ability to understand the information and make an informed decision.</p>
    <div class="button-group">
      <button onclick="updateSummary('copy-summary-btn', 'Vulnerable: Yes', 'vuln', this)">Yes</button>
      <button onclick="updateSummary('copy-summary-btn', '', 'vuln', this)">No</button>
    </div>
    <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('copy-summary-btn', this.value, 'vuln-note')">

    <p>∎ Thank you for your patience <mark><span class="client-name">(name)</span></mark>.</p>
  </div>`,






  /* --- OBJECTIVES --- */
  objectives: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Prospect’s Objectives</p>
    <p>∎ Can I ask what you are looking to achieve with your pension fund <mark><span class="client-name">(name)</span></mark>?</p>

    <textarea rows="4" placeholder="Notes..." style="width:100%; box-sizing: border-box; resize:none" oninput="updateSummary('fta-btn', this.value, 'note1')"></textarea>

    <p>∎ As you’re interested in accessing your pension savings, then it is essential that you understand all your options under the pension freedoms, and these are:</p>

    <table>
      <tbody>
          <tr>
              <td class="label-cell">1) Lifetime Annuity</td>
              <td>
                  ∎ A guaranteed income for the rest of your life, taking into account your health & lifestyle, dependent upon what the annuity provider will pay you
              </td>
          </tr>
          <tr>
              <td class="label-cell">2) Fixed Term Annuity</td>
              <td>
                  ∎ A fixed income of your choice or just your TFC for a temporary period, for example 5 years, then reconsider your options in the future
              </td>
          </tr>
          <tr>
              <td class="label-cell">3) Drawdown</td>
              <td>
                  ∎ A flexible income of your choice or just your TFC, where your future income is generally dependent on how well your investments perform
              </td>
          </tr>
          <tr>
              <td class="label-cell">4) Cash</td>
              <td>
                  ∎ Enabling you to take the whole fund in cash as a lump sum or several ad hoc payments. Each withdrawal being 25% tax-free, 75% taxed
              </td>
          </tr>
          <tr>
              <td class="label-cell">Alternatively...</td>
              <td>
                  ∎ You may be able to use a combination of these options
              </td>
          </tr>
      </tbody>
    </table>
    
    <p>∎ I appreciate that there is a lot to consider.</p>
    <p>∎ To help you make an informed decision, more comprehensive descriptions of your options in retirement, including relevant risk warnings, are available in the quote summary document and pension income guide which I will send to you after this call.</p>
    <p>∎ Do you have any preference, for example an income for life with a lifetime annuity, or do you need a higher level of income in the shorter term with a fixed term annuity?</p>
    <p>∎ When are you looking to start taking your benefits?</p>
    <p>∎ Thank you for this <mark><span class="client-name">(name)</span></mark>.</p>
  </div>`,

  warning_Wesleyan: `<div class="script-block">
    <table>        
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF WESLEYAN</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              <p><mark>∎ We have only been appointed by Wesleyan to provide lifetime annuity quotes, therefore before I can provide fixed term quotes you will need to speak to your Wesleyan Financial adviser first.</mark></p>
              <p><mark>∎ However it is not uncommon for a lifetime annuity to pay more income than a fixed term if you qualify for an enhanced rate due to your health or lifestyle. This only applies to Lifetime annuities and not fixed term annuities and I can provide you with a lifetime quote today.</mark></p>
              ∎ I hope you don't mind, can I just ask how would you describe your health currently?
          </td>
      </tr>
    </table>
  </div>`,

  options: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Options</p>
    <p>∎ We are annuity specialists and our objective is to shop around the open market to find you the highest annuity income and help you to decide which type of annuity is most suited to your needs and circumstances.</p>
    
    <table>
        <thead>
            <tr>
                <th class="label-cell" style="width: 50%;">Lifetime Annuity</th>
                <th class="label-cell" style="width: 50%;">Fixed Term Annuity</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>∎ We have found the best way to do this is to ask you a few questions about your health and lifestyle to see if you qualify for an enhanced annuity which could significantly boost your income.</p>
                    <p>∎ This information will then be sent to the annuity providers on our panel who will provide their highest terms.</p>
                    <p>∎ Do you consent for us to collect and share this data?</p>

                    <table>
                      <tr style="background-color: #fbe4d5;">
                          <th style="text-align: center;"><strong><u>IF NO</u></strong></th>
                      </tr>
                      <tr style="background-color: #fbe4d5;">
                          <td>
                              ∎ Just to confirm that providing this information could be very much in your best interests since the possible uplift in income could be as high as 75% or even more for people with very serious issues.
                          </td>
                      </tr>
                    </table>
                </td>

                <td>
                    <p>∎ We usually find the best way to do this is to ask you a few questions about your health and lifestyle to see if you qualify for an enhanced annuity which could significantly boost your income.</p>
                    <p>∎ This information will then be sent to the annuity providers on our panel who will provide their highest terms.</p>
                    <p>∎ However, as you’re only interested in fixed term annuities there is no requirement to take any health or lifestyle information.</p>
                    <p>∎ Would you say you’re in good health, as you may qualify for an enhanced annuity?</p>
                    <p>∎ Are you happy to proceed with FTAs?</p>
                </td>
            </tr>
        </tbody>
    </table>
    
    <p>∎ Are you ok with everything I have just explained, and happy to continue <mark><span class="client-name">(name)</span></mark>?</p>
  </div>`,

  datagathering: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Data Gathering</p>
    <p>∎ Who are your pension providers?</p>
    <p>∎ Do you have any other pots that you wish to combine?</p>
    <p>∎ Have you had any quotes from them or any other quotes?</p>
    <p>∎ What type of pension(s) do you currently hold?</p>

    <div id="pension-container">
        <div class="pension-card">
            <button class="btn-del-card" onclick="this.closest('.pension-card').remove(); syncTableToSummary();">×</button>
            <div class="card-grid" style="margin-top:15px;">
                <div>
                    <input type="text" placeholder="Provider" class="js-provider" oninput="syncTableToSummary()">
                </div>
                <div>
                    <select class="js-pension-type" onchange="syncTableToSummary()">
                        <option value="" selected>Type</option>
                        <option value="Personal Pension">Personal Pension</option>
                        <option value="Occupational Pension">Occupational Pension</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="£0.00" class="js-value" oninput="syncTableToSummary()">
                </div>
                <div>
                    <select class="js-status" onchange="syncTableToSummary()">
                        <option value="" selected>Status</option>
                        <option value="Uncrystallised">Uncrystallised</option>
                        <option value="Crystallised">Crystallised</option>
                    </select>
                </div>
                <div>
                    <select class="js-transfer" onchange="syncTableToSummary()">
                        <option value="" selected>Transfer Type</option>
                        <option value="Full">Full</option>
                        <option value="Partial">Partial</option>
                    </select>
                </div>
                <div>
                    <select class="js-contrib" onchange="syncTableToSummary()">
                        <option value="" selected>Contributing</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div class="full-width">
                    <input type="text" placeholder="Notes..." class="js-notes" oninput="syncTableToSummary()">
                </div>
            </div>
        </div>
    </div>
    
    <div class="total-pension-summary" style="font-family: monospace; font-size: 12px;">
        Total: <span id="total-pension-display">£0.00</span>
    </div>

    <div class="button-group">
      <button onclick="addPensionCard()">+ Add Pension</button>
    </div>

    <table>
        <thead>
            <tr>
                <th class="label-cell" style="width: 50%;">Personal Pension</th>
                <th class="label-cell" style="width: 50%;">Occupational Pension</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>∎ Did you start this pension prior to July of 1988?</p>

                    <table>
                      <tr style="background-color: #fbe4d5;">
                          <th style="text-align: center;"><strong><u>IF YES</u></strong></th>
                      </tr>
                      <tr style="background-color: #fbe4d5;">
                          <td>
                              ∎ Your pension could have safeguarded benefits, such as Guaranteed Annuity Rates, in which case advice may be needed. There is also the possibility of penalties being incurred on transfer.
                          </td>
                      </tr>
                    </table>
                </td>

                <td>
                    ∎ We only deal with Money Purchase, or Defined Contribution pensions; we don’t deal with Final Salary or Defined Benefit schemes. If your scheme contracted out of the second state pension you will have built up some safeguarded benefits, which may mean that you would need to take advice before transferring.
                </td>
            </tr>
        </tbody>
    </table>

    <p>∎ Are you aware of any in built benefits or potential penalties within your pensions if the fund(s) were to be transferred away?</p>
    <p>∎ We will endeavour to establish if your plans have any inbuilt benefits or penalties, however, sometimes your funds can be transferred very quickly before this is confirmed. If this is a concern, you may want to check this with your provider yourself, as it is outside of our control.</p>
  </div>`,
  
  annuityoptions: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Annuity Options</p>
    <p>∎ I will now go through your annuity options to ensure that your income will be paid in the way you require.</p>
    <p>∎ To start with, please can you tell me the total gross fund value of your pension fund(s)?</p>
    <p>∎ There are a couple of options available to you with regards to taking out a lump sum before you start your income. Please be aware that this opportunity will generally be lost once an annuity is purchased.</p>

    <table>
        <thead>
            <tr>
                <th class="label-cell" style="width: 50%;">1) Tax-Free Cash</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>∎ Are you looking to take up to 25% of your pension fund in tax free cash?</p>

                    <div class="button-group">
                        <button onclick="updateSummary('fta-btn', 'TFC: 25%', 'tfc', this)">25%</button>
                        <button onclick="updateSummary('fta-btn', 'TFC: Doesnt want TFC', 'tfc', this)">No TFC</button>
                    </div>
                    <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('fta-btn', 'TFC: ' + this.value, 'tfc-note')">

                    
                    <p>











                    
                    <table>
                      <tr style="background-color: #fbe4d5;">
                          <th style="text-align: center;"><strong><u>IF NO</u></strong></th>
                      </tr>
                      <tr style="background-color: #fbe4d5;">
                          <td>
                              ∎  Please note, if you do not take all your tax-free cash (including Scheme Specific Tax Free Cash) at the outset the opportunity will be lost and it will be treated as taxable income when you take it as an annuity.
                          </td>
                      </tr>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>

    <table>
        <thead>
            <tr>
                <th class="label-cell" style="width: 50%;">2) Taxable lump sum</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>∎ Do you want to take an additional taxable lump sum, before purchasing your income - if so, how much?</p>

                    <table>
                      <tr style="background-color: #fbe4d5;">
                          <th style="text-align: center;"><strong><u>IF YES</u></strong></th>
                      </tr>
                      <tr style="background-color: #fbe4d5;">
                          <td>
                              ∎ There are two companies on our panel that allow you to take more than 25%, albeit subject to tax at your marginal rate, which, when added to your earned income, could potentially be at 40 or 45%.
                          </td>
                      </tr>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>

  </div>`,
























  lta: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">LTA</p>
    <p>∎ Can you please confirm your marital status?</p>


    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF NOT MARRIED/CIVIL PARTNERSHIP</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              ∎ Do you have a partner or financial dependant?
          </td>
      </tr>
    </table>

    <p>∎ Unless additional death benefits are included within a single life annuity, the income will cease on your death, whereas a joint life annuity continues to pay an income to a beneficiary such as a spouse, civil partner or a financial dependant.</p>
    <p>∎ Are you looking for a single life or joint life annuity?</p>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF JOINT</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              <p>∎ You decide how much of your income you wish your chosen beneficiary to receive after your death, for instance, 50% or 100%.</p>
              <p>∎ This usually impacts the level of income payable to you and I can show you the effect this has in the quote.</p>
              ∎ What % do you require?
          </td>
      </tr>
    </table>
    
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Death Benefits</p>
    
    <p><strong><u>1) Guarantee Period</u></strong></p>
    <p>∎ This guarantees that should you die within a specified period, then the annuity payments will continue to be paid to your beneficiary for the remaining term after your death.</p>
    <p>∎ So, if you were to select say 10 years at the outset and died after 3 years, payments would carry on for a further 7 years. Some providers allow you to choose a Guarantee Period of up to 30 years.</p>

    <table>
        <thead>
            <tr>
                <th class="label-cell" style="width: 50%;">Single Life</th>
                <th class="label-cell" style="width: 50%;">Joint Life</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <table>
                      <tr style="background-color: #fbe4d5;">
                          <th style="text-align: center;"><strong><u>IF 5 YEAR GUARANTEE</u></strong></th>
                      </tr>
                      <tr style="background-color: #fbe4d5;">
                          <td>
                              ∎ Would you also like me to quote for a 10 year guarantee period as the difference in cost can be relatively small?
                          </td>
                      </tr>
                    </table>

                    <br>

                    <table>
                      <tr style="background-color: #fbe4d5;">
                          <th style="text-align: center;"><strong><u>IF 0 YEAR GUARANTEE</u></strong></th>
                      </tr>
                      <tr style="background-color: #fbe4d5;">
                          <td>
                              <p>∎ If you select a Single Life annuity with no guarantee period, then on your death, no further payments will be made.</p>
                              ∎ I will send you a quote with a 5 and 10 year guarantee period for you to compare the cost of providing a guarantee, which is often quite inexpensive.
                          </td>
                      </tr>
                    </table>

                    <p>

                    <div class="checkbox-group">
                        <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('fta-btn', 'SL: ' + this.value, 'sl-gp-note')">
                    </div>

                </td>

                <td>
                    <p>∎ If you die during a guarantee period under a Joint Life annuity, 100% of the income payment will continue to the end of the guarantee period chosen, but will then revert to the rate selected (50%,100% etc) and will be paid to the second annuitant for the rest of their lives.</p>
                    <p>∎ If the second annuitant has pre-deceased you, the income will be paid to your estate until the end of the guarantee period and then ceases.</p>
                    <p>∎ On your death, your annuity income would be paid to your beneficiary tax free if you die before age 75 or taxable at your beneficiaries’ marginal rate of income tax if you die on or after age 75.</p>
                    <table>
                      <tr style="background-color: #fbe4d5;">
                          <th style="text-align: center;"><strong><u>IF 5 YEAR GUARANTEE</u></strong></th>
                      </tr>
                      <tr style="background-color: #fbe4d5;">
                          <td>
                              ∎ Would you also like me to quote for a 10 year guarantee period as the difference in cost can be relatively small? 
                          </td>
                      </tr>
                    </table>
                    
                    <p>

                    <div class="checkbox-group">
                        <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('fta-btn', 'JL: ' + this.value, 'jl-gp-note')">
                    </div>

                </td>
            </tr>
        </tbody>
    </table>

    <p><strong><u>2) Value Protection</u></strong></p>
    <p>∎ This provides a death benefit equal to the annuity purchase price less all the income paid to you prior to your death. This is paid to your nominated beneficiary tax free if you die before age 75. If you die from 75 onwards the income will be taxed at the recipients marginal rate.</p>

    <div class="checkbox-group">
        <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('fta-btn', this.value, 'vp-note')">
    </div>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF DEATH BENEFIT INCLUDED</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              ∎ In the Autumn 2024 Statement, the Government set out its intention to start including pensions and pension income products within inheritance tax rules from April 2027. We’re waiting for the final rules to be confirmed however the current position is that spousal transfers are still exempt and all annuity death benefits with the exception of joint life will be included in your estate. Please be aware that any changes will only impact you if your estate is valued over the inheritance tax allowance at the time of your death.
          </td>
      </tr>
    </table>

    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Annuity Payments</p>
    <p>∎ Do you want a level annuity or are you interested in an escalating annuity to help overcome the effects of inflation?</p>

    <div class="checkbox-group" id="esc-group">
        <label><input type="checkbox" value="Level" onchange="handleEscalation(this)"> Level</label>
        <label><input type="checkbox" value="3%" onchange="handleEscalation(this)"> 3%</label>
        <label><input type="checkbox" value="5%" onchange="handleEscalation(this)"> 5%</label>
        <label><input type="checkbox" value="RPI" onchange="handleEscalation(this)"> RPI</label>
        <input type="text" class="custom-esc" placeholder="Other..." oninput="handleEscalation(this)">
    </div>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF ESCALATION CONSIDERED</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              ∎ An escalating annuity increases each year in line with inflation or at a fixed rate of say 3% or 5%. However, it pays a lower initial income than a level annuity. For example, if 3% escalation is chosen, then the starting payment would be about 33% lower than with a level annuity. I can show you the difference in our quotes.
          </td>
      </tr>
    </table>

    <p>∎ You can have your payments paid to you monthly, quarterly, six monthly or annually, either in arrears or in advance. If you take them in arrears, then you get a slightly higher payment.</p>
    <p>∎ What frequency would you want to receive your income payments?</p>

    <div class="checkbox-group">
        <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('fta-btn', 'Freq: ' + this.value, 'freq-note')">
    </div>


    







































































    

    

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF PAYMENTS >= QUARTERLY IN ARREARS AND NO VALUE PROTECTION SELECTED</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              <p>∎ If you choose to receive income in arrears and die prior to the next payment, your beneficiaries will not receive this payment unless you elect to include 'With proportion'.</p> 
              ∎ This means that a proportional payment will be calculated up until your date of death. There is a cost for including this benefit which would result in a slightly lower income.
          </td>
      </tr>
    </table>

    <p>∎ As I mentioned earlier, medical conditions or lifestyle habits could qualify you for an enhanced annuity. This is one time having a medical or lifestyle problem can be an advantage, so it is really important that you disclose any relevant information to help me secure a higher income for you.</p>

    
    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;" colspan="2"><strong><u>IF JOINT LIFE</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td colspan="2">∎ As you are selecting joint life quotations, I will require consent from your spouse/ partner for their health/ lifestyle information to be sent to the annuity providers on our panel. Is your spouse/ partner/ dependant available?</td>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <tr style="background-color: #f0f0f0;">
                    <th style="text-align: center;"><strong><u>YES</u></strong></th>
                    <th style="text-align: center;"><strong><u>NO</u></strong></th>
          </tr>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td style="vertical-align: middle; text-align: center;">
              
              <button class="copy-btn" style="text-align: center; margin-top: 5px; margin-bottom: 5px; padding: 10px;" onclick="openModal('modal-1')">Open Dialogue</button>


          </td>
          <td>
              <p>∎ Not a problem for today's call as we can rely on assumed consent to produce your quotations. However, if you were to proceed with an annuity purchase your spouse/ partner/ dependent would need to review and sign the medical declaration and the application form to provide consent and declare the information is correct.</p> 
          </td>
      </tr>
    </table>







    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Annuity Information Prompt</p>
    <p>∎ We are confident that our lifetime annuity income quote will provide the highest annuity income for you but just to confirm this, should you proceed through ourselves, you have the option to allow your chosen annuity provider to check their quotation against the rest of the annuity market. This is further confirmation that our quote offers you the highest available income.</p>
    <p>∎ Do you give consent for your chosen annuity provider to share your personal data for a like for like comparison quote?</p>

    <div class="button-group">
      <button onclick="updateSummary('fta-btn', 'Market Leading Comparison: Yes', 'comparison_quote', this)">Yes</button>
      <button onclick="updateSummary('fta-btn', 'Market Leading Comparison: No', 'comparison_quote', this)">No</button>
    </div>


    





    <table border="1" style="width:100%;">
        <tbody>
            <tr style="background-color: #f0f0f0;">
                <td style="text-align: center; white-space: normal;">
                    RUN QUOTES
                </td>
            </tr>
        </tbody>
    </table>

    <p>∎ I will send these results through to you in an email, together with a summary of your other annuity options. Please read this summary thoroughly as it provides you with appropriate risk warnings.</p>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF RELEVANT</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              ∎ All of these quotes are based on you taking 25% Tax Free Cash.
          </td>
      </tr>
    </table>

    <p>∎ Our quote shows standard and enhanced annuities, which provide a guaranteed income for the rest of your life without any investment risk. Please be aware that inflation will reduce the value of a level annuity over time and once in force the annuity cannot be changed.</p>
    <p>∎ The quote also shows fixed term annuities, which are more flexible than a lifetime annuity by providing income for a specific term, rather than for life, usually giving you a lump sum at the end of the term.</p>
    <p>∎ I can explain the fixed term annuity to you now <mark><span class="client-name">(name)</span></mark>, or alternatively, are you happy to receive the quotes and information by email first and then discuss your preferred option with me in a few days' time?</p>


  </div>`,




  fta: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">FTA</p>
    <p>∎ Can you please confirm your marital status?</p>


    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF NOT MARRIED/CIVIL PARTNERSHIP</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              ∎ Do you have a partner or financial dependant?
          </td>
      </tr>
    </table>

    <p>∎ Usually, unless additional death benefits are included within a single life annuity, the income would cease on your death, whereas a joint life annuity continues to pay an income to a beneficiary such as a spouse, civil partner or a financial dependant.</p>
    <p>∎ However… each of the fixed term annuity plans have in-built death benefits, therefore, you do not necessarily need to have a joint life fixed term annuity should you wish to provide a lump sum for your spouse or partner, or have a continuing income in the event of your death.</p>
    <p>∎ Are you looking for a single life or joint life annuity?</p>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF JOINT</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              <p>∎ You decide how much of your income you wish your chosen beneficiary to receive after your death, for instance, 50% or 100%.</p>
              <p>∎ This usually impacts the level of income payable to you and I can show you the effect this has in the quote.</p>
              ∎ What % do you require?
          </td>
      </tr>
    </table>
    
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Annuity Payments</p>

    <p>∎ What period are you interested in? Did you wish to deplete your pot over the period (with nothing left at the end) or receive a set amount with a guaranteed amount at the end?</p>

    <div class="checkbox-group">
        <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('fta-btn', 'FTA: ' + this.value, 'fta-obj-note')">
    </div>

    <p>∎ Do you want a level annuity or are you interested in an escalating annuity to help overcome the effects of inflation?</p>

    <div class="checkbox-group" id="esc-group">
        <label><input type="checkbox" value="Level" onchange="handleEscalation(this)"> Level</label>
        <label><input type="checkbox" value="3%" onchange="handleEscalation(this)"> 3%</label>
        <label><input type="checkbox" value="5%" onchange="handleEscalation(this)"> 5%</label>
        <label><input type="checkbox" value="RPI" onchange="handleEscalation(this)"> RPI</label>
        <input type="text" class="custom-esc" placeholder="Other..." oninput="handleEscalation(this)">
    </div>

    <p>∎ You can have your payments paid to you monthly, quarterly, six monthly or annually, either in arrears or in advance. If you take them in arrears, then you get a slightly higher payment.</p>
    <p>∎ What frequency would you like?</p>

    <div class="checkbox-group">
        <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('fta-btn', 'Freq: ' + this.value, 'freq-note')">
    </div>




    <p style="text-align:center;font-weight:bold;text-decoration:underline;">FTA Description</p>
    <p>∎ I now need to talk through some key regulatory information regarding Fixed Term Annuities…</p>
    <p>∎ If you are unwilling to commit to a lifetime annuity right now, you could consider a fixed term annuity, which pays you a regular income for a fixed period of time.</p>
    <p>∎ You can choose any amount of income over your specified term of between 1 and 30 years. Alternatively, you can just take your tax-free cash and not take any income at all.</p>
    <p>∎ These are designed to pay an income for a fixed term, usually with a guaranteed maturity value at the end of the term.</p>
    <p>∎ They can also provide an income for dependents, and a lump sum payment if you die before the maturity date.</p>
    <p>∎ If you are planning on making further pension contributions, please be aware that taking an income from a fixed term annuity means these further contributions would be limited to £10,000 per annum indefinitely before a tax charge is payable.</p>
    
    <table>
        <thead>
            <tr>
                <th class="label-cell" style="width: 50%;">GMA FTA</th>
                <th class="label-cell" style="width: 50%;">Depleting FTA</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>∎ They give you the flexibility of choosing another retirement income product or to take a taxable lump sum from your pension fund when the plan ends.</p>
                    <p>∎ FTA’s are not without risks. The main risk is that the maturity amount you receive at the end of the fixed period will not provide you with an adequate amount of future retirement income.</p>
                    ∎ Please note, FTA’s do not take into account lifestyle or medical conditions.
                </td>

                <td>
                    <p>∎ If you want to take all your pot in cash, you can use a FTA to take it all over a selected term with no maturity amount and without any investment risk.</p>
                    <p>∎ This could potentially minimise your tax liability by spreading the payments over a number of tax years.</p>
                    <p>∎ Please note that you should first check with your existing provider if they offer this facility.</p>
                    ∎ As this will take up all your fund, you should consider your other levels of retirement income and be aware that means-tested benefits may not be available to you in the future if you have depleted your fund.
                </td>
            </tr>
        </tbody>
    </table>

    <p>∎ Because fixed term annuities are considered more risky than standard conventional or enhanced annuities, I will send you our Fixed Term Annuities Explained document and the Key Features documents for Canada Life, L&G, LV, Standard Life and Aviva.</p>
    <p>∎ After reading these documents, if you have any questions or queries, then please don’t hesitate to contact me.</p>
    <p>∎ Is that all ok <mark><span class="client-name">(name)</span></mark>?</p>
    <p>∎ If you are at all unsure as to whether a fixed term annuity is suitable for you, we recommend you take advice and if you wish, we can introduce you to a regulated adviser.</p>

    <table border="1" style="width:100%;">
        <tbody>
            <tr style="background-color: #f0f0f0;">
                <td style="text-align: center; white-space: normal;">
                    RUN QUOTES
                </td>
            </tr>
        </tbody>
    </table>

    <p>∎ It’s important that you understand the different death benefits that are available from the providers on our panel, to help you make your own informed decision.</p>

    <table>
        <thead>
            <tr>
                <th class="label-cell" style="width: 50%;">GMA FTA</th>
                <th class="label-cell" style="width: 50%;">Depleting FTA</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>∎ Legal & General policies have a guarantee period which continues to provide an income until the end of the term, in the event of your death, plus return any growth in the guaranteed maturity amount. A guarantee period option is also available via LV but any GMA is not protected if death occurs before the end of the fixed term.</p>
                    <p>∎ Canada Life and LV policies offer value protection, which instead provides a lump sum, in the event of your death, of the annuity purchase price less any income already received at the date of death. Please note that the GMA will therefore not be paid, so any growth in the plan will be lost.</p>
                    ∎ Whether your preference is a lump sum or income, the benefit will be paid tax-free if you were to die before the age of 75. Conversely, the benefit would be taxed at your beneficiary’s marginal rate if you were to die after the age 75.
                </td>

                <td>
                    ∎ If you are depleting the fund, the death benefits may be less important to you. Canada Life and LV will generally pay out a lump sum under value protection, whereas Legal & General would continue to pay the income until the end of your chosen term.
                </td>
            </tr>
        </tbody>
    </table>

    <br>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF DEATH BENEFIT INCLUDED</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              ∎ In the Autumn 2024 Statement, the Government set out its intention to start including pensions and pension income products within inheritance tax rules from April 2027. We’re waiting for the final rules to be confirmed however the current position is that spousal transfers are still exempt and all annuity death benefits with the exception of joint life will be included in your estate. Please be aware that any changes will only impact you if your estate is valued over the inheritance tax allowance at the time of your death.
          </td>
      </tr>
    </table>

    <p> ∎ If you are at all unsure of your options, please read the fixed term annuities explained document and the fixed term annuities matrix, which summarises the death benefits.</p>
    
    <hr>
    
    <p> ∎ I will send these results through to you in an email, together with a summary of your other annuity options. Please read this summary thoroughly as it provides you with appropriate risk warnings.</p>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF RELEVANT</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              ∎ All of these quotes are based on you taking 25% Tax Free Cash.
          </td>
      </tr>
    </table>

    <p> ∎ The quotes also shows life time annuities, which provides a guaranteed income for the rest of your life without any investment risk. Please be aware that inflation will reduce the value of a level annuity over time and once in force cannot be changed.</p>
    <p> ∎ I can explain the life time annuities to you now <mark><span class="client-name">(name)</span></mark>, or alternatively, are you happy to receive the quotes and information by email first and then discuss your preferred option with me in a few days’ time?</p>

  </div>`,








  outro: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">OUTRO</p>
    <p>∎ Within the quote summary email there are links to our Client Agreement as well as a useful guide to pension income and our annuity risk warnings and benefits document.</p>
    <p>∎ I recommend that you read these documents to help you understand the risks involved and to make an informed decision.</p>
    <p>∎ Can I please take the first line of your address, so I can post our information pack to you?</p>
    <p>∎ Do you have any further questions which need clarifying?</p>


    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;" colspan="2"><strong><u>IF NO PW GUIDANCE</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td colspan="2">
            ∎ You confirmed earlier that you had not taken any recent guidance from <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/pension-wise/book-a-free-pension-wise-appointment/book-a-phone-appointment" target="_blank" rel="noopener noreferrer">PensionWise</a>.
            <br>∎ PW is a government service that offers free, impartial guidance with an independent pension specialist, to help you make an informed decision.
            <br>∎ It aims to help you understand your overall financial situation when you retire and the different options that you need to consider.
            <br>∎ Under new rules, before your pension savings can be transferred, you either need to attend an appointment with PW or you have to opt out of an appointment. What would be your preference? To have an appointment or to opt out?
          </td>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <tr style="background-color: #f0f0f0;">
                    <th style="text-align: center; width: 50%;"><strong>Appointment</strong></th>
                    <th style="text-align: center; width: 50%;"><strong>Unsure</strong></th>
          </tr>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              
            ∎ You can book an appointment yourself online or by telephone. Booking details are contained with the quote email. Alternatively, I can book an appointment for you now.
            (This doesnt de-select buttons like it would do normally!!!!!!!!!)

            <div class="button-group">
              <button onclick="updateSummary('copy-summary-btn', 'PW Appt: Will book themself', 'pw-appt', this)">Will book themself</button>
            </div>

            <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('copy-summary-btn', 'PW Appt: ' + this.value, 'pw-appt')">

          </td>
          <td>
            ∎ If you do decide you would like an appointment, you can book it yourself online or by telephone. Booking details are contained with the quote email. Alternatively, I can book an appointment for you.
            <div class="button-group">
              <button onclick="updateSummary('copy-summary-btn', 'PW Appt: Opt out', 'pw-appt', this)">Opt out</button>
            </div>
          </td>
      </tr>
    </table>

    <p>∎ It's been great speaking with you <mark><span class="client-name">(name)</span></mark> and I hope I have managed to help you in understanding your options.</p>
    <p>∎ Pensions can be complicated and daunting so please don't hesitate to let me know at any time if you have any further questions, queries or concerns, no matter how trivial.</p>
    <p>∎ I will call you again at <span style="color: red;">(time)</span> on <span style="color: red;">(date)</span>. Can I just confirm the best numbers to call you on?</p>


  </div>`,


  app: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">APP</p>
    <p>∎ The application procedure is really very simple, (name). All we need to do is go through some final questions for the application form, which will just take a few more minutes.</p>
    <p>∎ I will then email/post the pre-completed application form to you, for you to check through and if you are satisfied, to sign and return to me using our freepost label facility.</p>


    <table>
        <thead>
            <tr>
                <th class="label-cell" style="width: 50%;">IF LTA</th>
                <th class="label-cell" style="width: 50%;">IF FTA</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>∎ Before I proceed with the completion of the application, can I just ask if there have been any changes in either your lifestyle or medical conditions (or your partner’s if joint life) since we started discussing your annuity requirements?</p>
                    <p>∎ This is important, since any changes could qualify you for a higher income payment. Likewise, if there are any changes before your annuity is set up, please let me know.</p>
                    ∎ Please note, the annuity provider reserves the right to verify that the medical and lifestyle information you have provided in your application, is accurate and true.
                </td>

                <td>
                    <p>∎ Lifestyle issues and medical conditions are not taken into account when calculating the income payable under a FTA. This means we may not have quoted you the highest income available on the open market should you qualify for an LTA enhanced annuity.</p>
                    <p>∎ Can you confirm that you are happy to proceed with the FTA without us taking into consideration changes that may be applicable in either your medical or lifestyle?</p>
                    
                    <p>∎ The annuity you are applying for contains elements of risk that you should understand before you proceed. The risk warnings are shown in our email quote and in our annuity risk warnings and benefits document.</p>
                    
                    <p>∎ Please confirm that you have received, read and that you fully understand each of the following documents that we have sent to you regarding your chosen annuity, namely:</p>

                    <ol>
                        <li>The providers’ Key Features documents</li>
                        <li>The risk warnings in our email quote relevant to the annuity you have chosen and our annuity risk warnings and benefits document</li>
                        <li>Our Fixed Term Annuities Explained document</li>
                    </ol>

                    ∎ If you are at all unsure as to whether this plan is suitable for you, we recommend you take advice and if you like, we can introduce you to a regulated financial adviser.
                </td>
            </tr>
        </tbody>
    </table>









    <p>∎ Please note, if you or your employer are still making contributions, these cannot be accepted by your chosen annuity provider once your pension savings have been transferred to them.</p>
    <p>∎ So, to complete the application form, I will need:</p>

    <ol>
        <li>National Insurance number <span style="color: red;">(*2 for JL)</span></li>
        <li>Bank details</li>
        <li>Passport or driving licence number <span style="color: red;">(*2 for JL)</span></li>
        <li>Current pension scheme details – provider name, address, policy number(s), gross fund, type of pension</li>
        <li>
            <table border="1" style="width:100%;">
                <tbody><tr style="background-color: #fbe4d5;">
                    <td style="text-align: center; white-space: normal;">
                        <strong><u>IF ENHANCED LTA</u></strong>
                    </td>
                </tr>
                <tr style="background-color: #fbe4d5;">
                    <td style="text-align: left; white-space: normal;">
                        Doctor’s address and telephone number
                    </td>
                </tr>
            </tbody></table>
        </li>
    </ol>

    <p>∎ Please note, there could be a delay in processing the annuity should you:</p>

    <ol>  
        <li>Omit any of the information</li>
        <li>Fail to check the application is correct</li>
        <li>Fail to sign AND date the documentation</li>
    </ol>

    <table border="1" style="width:100%;">
        <tbody>
            <tr style="background-color: #f0f0f0;">
                <td style="text-align: center; white-space: normal;">
                    COMPLETE APPLICATION FORM ON SYSTEM
                </td>
            </tr>
        </tbody>
    </table>

    <p>∎ So what happens next?</p>
    <p>∎ I will send you via email an application pack, this includes:</p>

    <ol>  
        <li>Guidelines for completing the application form and confirmation of documentation needed</li>
        <li>Pre-completed Application form and freepost address label</li>
        <li>Retirement Line Declaration which includes Letter(s) of Authority for each pension fund and our Pension Wise – Your decision document</li>
        <li>A full annuity provider quotation</li>
        <li>Cancellation Notice – <span style="color: red;">(IF QUERIED THIS DOCUMENT EXPLAINS THE TERMS AND CONDITIONS SHOULD YOU WISH TO CANCEL THE CONTRACT)</span></li>
        <li>Key Features Document</li>
    </ol>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF LTA</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
                ∎ So that we can be sure you fully understand the details of (name of annuity selected), it is very important that you read the Key Features Document which fully describes all the features, terms and conditions of this product.
          </td>
      </tr>
    </table>

    <p>∎ All you need to do is...</p>

    <ol>  
        <li>Check the details of the application thoroughly, then sign and date the application form</li>
        <li>Check, sign and date the Letter(s) of Authority, PensionWise – your decision document, Retirement Line Limited Declaration and Client Agreement</li>
        <li>Return the application form, letter(s) of authority and any other relevant documentation (ID for example if required) to us using the freepost address label provided.</li>
        <li>Send us any of your pension paperwork e.g. benefit statement, policy document, etc. (if not already supplied)</li>
    </ol>

    <p>∎ When we receive your application form...</p>
    <p>∎ You will be allocated your own personal dedicated Customer Relationship Consultant within our admin team. This consultant’s role is aimed at removing any stress that our customers can experience throughout the time it takes to complete the annuity process.</p>
    <p>∎ Your appointed Customer Relationship Consultant will liaise with your current pension provider and your selected annuity provider to ensure a smooth annuity set up.</p>
    <p>∎ On your behalf, they handle all of the paperwork and take care of the communication between all parties. They will personally keep you updated by email or by phone, usually once a fortnight.</p>
    <p>∎ So you can relax and we will deal with all the paperwork!</p>
    <p>∎ Please be aware...</p>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF TAKING TAX FREE CASH</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
                ∎ Most people want their tax-free cash and annuity income as quickly as possible and our total service is geared to achieving this objective. That’s why we send a freepost label which means an application can be back in our hands within 24 hours of first contact for any customer who is in a hurry.
          </td>
      </tr>
    </table>

    <p>∎ We cannot guarantee or make any promises as to the length of time it will take to process your annuity, as this depends very much on the service we receive from your existing pension provider(s) and the chosen annuity provider. However, the average time is currently 8 – 10 weeks.</p>
    <p>∎ Please note that during the early stages of our administration process, we will not be able to speak to or gain information from your provider(s) until they have registered your signed letter of authority. A few pension providers will not accept third party authorisations and, if this is applicable to you, then we may ask you to assist us with the transfer, but do not worry, we will be on hand to guide you every step of the way.</p>
    <p>∎ For many reasons outside our control, some cases go through more quickly, and some will take longer. For example, delays can occur due to a large increased consumer demand for annuities.</p>
    <p>∎ As you are a client of your pension provider, they have a duty of care to assist you, so if you are happy to personally pursue your pension provider to make your fund transfer as quickly as possible, we have found that this can really speed things up.</p>
    <p>∎ During the administration process, the value of your pension fund could fluctuate depending on where it is invested. Should you wish to avoid its’ value declining, then you could ask your provider to switch your fund into a cash fund – but you would then not benefit from any future investment increases in the fund value.</p>
    <p>∎ All annuity quotations have an expiry period and if the validation period of your original quotation has expired prior to the transfer of your funds, your annuity income will be based on the annuity rates at that time.</p>
    <p>∎ This means that your final pension payment could be higher or lower than it is today but you will be informed of this at the time your annuity is set up. This is outside of our control and is exactly the same across the annuity industry.</p>
    <p>∎ I must stress that at no point do we handle any of your money, we simply arrange a smooth transfer from your existing pension provider(s) to your selected annuity provider, in this case... (name of new provider). As I said before, obviously, the sooner you return the application to us, the sooner we can get the process started.</p>


    <hr>

    <p>∎ It’s been very enjoyable speaking with you today <mark><span class="client-name">(name)</span></mark> and I really appreciate you placing your business with us.</p>
    <p>∎ I will call you at (time) on (date) to make sure you have received the application pack and to answer any queries you may have.</p>
    <p>∎ I am here to assist you in any way at all and if you need to discuss anything in the meantime, please call me on my direct telephone number which is 01733 902043.</p>
    <p>∎ Do you have any questions before I go?</p>

  </div>`,


  wps_main: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Our Objective</p>
    <p>∎ As annuity specialists our objective is to find you the highest annuity income and help you to decide which type of annuity is most suited to your needs and circumstances.</p>
    <p>∎ We have found the best way to do this is to ask you a few questions about your health and lifestyle to see if you qualify for an enhanced annuity which could significantly boost your income.</p>
    <p>∎ This information will then be sent to the annuity providers on our panel who will provide their highest terms.</p>
    <p>∎ Do you consent for us to collect and share this data?</p>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;" colspan="2"><strong><u>IF JOINT LIFE</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td colspan="2">∎ As you are selecting joint life quotations, I will require consent from your spouse/ partner for their health/ lifestyle information to be sent to the annuity providers on our panel. Is your spouse/ partner/ dependant available?</td>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <tr style="background-color: #f0f0f0;">
                    <th style="text-align: center;"><strong><u>YES</u></strong></th>
                    <th style="text-align: center;"><strong><u>NO</u></strong></th>
          </tr>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td style="vertical-align: middle; text-align: center;">
              
              <button class="copy-btn" style="text-align: center; margin-top: 5px; margin-bottom: 5px; padding: 10px;" onclick="openModal('modal-1')">Open Dialogue</button>


          </td>
          <td>
              <p>∎ Not a problem for today's call as we can rely on assumed consent to produce your quotations. However, if you were to proceed with an annuity purchase your spouse/ partner/ dependent would need to review and sign the medical declaration and the application form to provide consent and declare the information is correct.</p> 
          </td>
      </tr>
    </table>

    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Annuity Information Prompt</p>
    <p>∎ We are confident that our lifetime annuity income quote will provide the highest annuity income for you but just to confirm this, should you proceed through ourselves, you have the option to allow your chosen annuity provider to check their quotation against the rest of the annuity market. This is further confirmation that our quote offers you the highest available income.</p>
    <p>∎ Do you give consent for your chosen annuity provider to share your personal data for a market leading comparison quote?</p>

    <div class="button-group">
      <button onclick="updateSummary('fta-btn', 'Market Leading Comparison: Yes', 'comparison_quote', this)">Yes</button>
      <button onclick="updateSummary('fta-btn', 'Market Leading Comparison: No', 'comparison_quote', this)">No</button>
    </div>

    <table border="1" style="width:100%;">
        <tbody>
            <tr style="background-color: #f0f0f0;">
                <td style="text-align: center; white-space: normal;">
                    COMPLETE MEDICAL DETAILS
                </td>
            </tr>
        </tbody>
    </table>

    <p>∎ Thank you for your time today and for your close attention throughout the process.</p>
    <p>∎ As mentioned earlier, we will generate your annuity quotations and send them through to <mark><span class="ifa-name">(IFA name)</span></mark>, who will be back in touch with you to discuss the details.</p>
    <p>∎ I look forward to hopefully speaking with you again in the future if you decide to proceed with an annuity purchase.</p>

  </div>`,

  wps_app: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">TEST</p>
    <p>∎ Test.</p>
  </div>`,

};