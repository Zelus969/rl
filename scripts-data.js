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

  intro_WPSA: `<div class="script-block">
    <input type="text" placeholder="Client name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateVar('client-name', this.value, '(name)', this)">
    <input type="text" placeholder="IFA name..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('advised-btn', this.value ? 'IFA = ' + this.value : '', 'ifa-name'); updateVar('ifa-name', this.value, '(IFA name)', this)">
    <input type="text" placeholder="Fund source..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('advised-btn', this.value ? 'Fund Source = ' + this.value : '', 'fund-source')">
    <p>∎ Good <span class="time-greeting"></span>. Please could I speak with <mark><span class="client-name">(name)</span></mark>?</p>
    <p>∎ Hello <mark><span class="client-name">(name)</span></mark>, my name is Johnathon Davis, I'm an Annuity Specialist with Retirement Line and I'm calling on behalf of <mark><span class="ifa-name">(IFA name)</span></mark> from <mark>WPSA</mark> regarding an annuity enquiry we receieved.</p>
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
    <p>∎ We only arrange annuities and can offer you as much information and as many quotations as you wish.</p>
    <p>∎ If we arrange an annuity for you, we will be paid a commission from the provider, which is shown on the provider's quotations and is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_AnnuityUK: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p><mark>∎ The Annuity UK service is provided by Retirement Line.</mark></p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ We only arrange annuities and can offer you as much information and as many quotations as you wish.</p>
    <p>∎ If we arrange an annuity for you, we will be paid a commission from the provider, which is shown on the provider's quotations and is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_AnnuityLine: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p><mark>∎ The Annuity Line service is provided by Retirement Line.</mark></p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ We only arrange annuities and can offer you as much information and as many quotations as you wish.</p>
    <p>∎ If we arrange an annuity for you, we will be paid a commission from the provider, which is shown on the provider's quotations and is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_Tesco: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p><mark>∎ Copies of these may also be requested by Tesco, who may wish to monitor a small number of calls for quality assurance purposes.</mark></p>
    <p><mark>∎ Tesco have appointed Retirement Line to provide their annuity brokering service.</mark></p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ We only arrange annuities and can offer you as much information and as many quotations as you wish.</p>
    <p>∎ If we arrange an annuity for you, we will be paid a commission from the provider, which is shown on the provider's quotations and is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_NEST: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p><mark>∎ Copies of these may also be requested by NEST, who may wish to monitor a small number of calls for quality assurance purposes.</mark></p>
    <p><mark>∎ NEST have appointed Retirement Line to provide their annuity brokering service.</mark></p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ We only arrange annuities and can offer you as much information and as many quotations as you wish.</p>
    <p>∎ If we arrange an annuity for you, we will be paid a commission from the provider, which is shown on the provider's quotations and is taken into account when calculating their annuity rate.</p>
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
    <p>∎ We only arrange annuities and can offer you as much information and as many quotations as you wish.</p>
    <p>∎ If we arrange an annuity for you, we will be paid a commission from the provider, which is shown on the provider's quotations and is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_Wesleyan: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p><mark>∎ Copies of these may also be requested by Wesleyan, who may wish to monitor a small number of calls for quality assurance purposes.</mark></p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ We only arrange annuities and can offer you as much information and as many quotations as you wish.</p>
    <p>∎ If we arrange an annuity for you, we will be paid a commission from the provider, which is shown on the provider's quotations and is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_MoneyService: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p><mark>∎ The Money Service is provided by Retirement Line.</mark></p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ We only arrange annuities and can offer you as much information and as many quotations as you wish.</p>
    <p>∎ If we arrange an annuity for you, we will be paid a commission from the provider, which is shown on the provider's quotations and is taken into account when calculating their annuity rate.</p>
  </div>`,

  ri_WPSA: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p>∎ Your details were passed through to us by <mark><span class="ifa-name">(IFA name)</span></mark> of <mark>WPSA</mark>. We work along side <mark>WPSA</mark> and assist their clients with the production and processing of annuities.</p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p><mark>∎ From the options available to you following pension freedoms, we only arrange annuities. If we arrange an annuity for you there is no fee to pay for our service as we will be paid a commission from the provider which is taken into account when calculating their annuity rate.</mark></p>
  </div>`,

  ri_IFA: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Regulatory Information</p>
    <p>∎ Before I explain how we can assist you, please may I make you aware of a few key points of regulatory information, which I will confirm in writing:</p>
    <p>∎ Firstly, for your protection, all of our calls are recorded for training and compliance purposes.</p>
    <p>∎ Your details were passed through to us by <mark><span class="ifa-name">(IFA name)</span></mark> of <mark><span class="company-name">(company)</span></mark>. We work along side <mark><span class="company-name">(company)</span></mark> and assist their clients with the production and processing of annuities.</p>
    <p>∎ Retirement Line Limited is authorised and regulated by the Financial Conduct Authority.</p>
    <p>∎ We are an annuity broker and work on a non-advised basis, which means that I will not be giving you any advice, just factual information, both verbally and in writing, to help you make your own informed decision.</p>
    <p>∎ We only arrange annuities and can offer you as much information and as many quotations as you wish.</p>
    <p>∎ If we arrange an annuity for you, we will be paid a commission from the provider, which is shown on the provider's quotations and is taken into account when calculating their annuity rate.</p>
  </div>`,

  /* --- GUIDANCE BLOCKS --- */
  guidance: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Guidance</p>
    <p>∎ Can I please ask if you have taken guidance from <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/pension-wise/book-a-free-pension-wise-appointment/book-a-phone-appointment" target="_blank" rel="noopener noreferrer">Pension Wise or MoneyHelper</a>, the Government's pension guidance services, in the last 12 months?</p>
    <div class="button-group">
      <button onclick="updateVar('pw-status', 'seek guidance', 're-seek guidance', this); updateSummary('copy-summary-btn', 'PW: Yes', 'pw', this)">Yes</button>
      <button onclick="updateVar('pw-status', 'seek guidance', 'seek guidance', this); updateSummary('copy-summary-btn', 'PW: Yes (Over 12 months)', 'pw', this)">Yes (Over 12 months)</button>
      <button onclick="updateVar('pw-status', 'seek guidance', 'seek guidance', this); updateSummary('copy-summary-btn', 'PW: No', 'pw', this)">No</button>
    </div>
    <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('copy-summary-btn', this.value, 'pw-note')">

    <p>∎ Have you taken advice and received a personal recommendation from a financial adviser on the pensions we are about to discuss?</p>
    <div class="button-group">
      <button onclick="updateSummary('copy-summary-btn', 'FA: Yes', 'fa', this)">Yes</button>
      <button onclick="updateSummary('copy-summary-btn', 'FA: No', 'fa', this)">No</button>
    </div>
    <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('copy-summary-btn', this.value, 'fa-note')">

    <p>∎ If at any point you are uncertain about which options to choose, or your personal circumstances have changed, or there has been a significant change in the value of your pension savings, then you should <mark><span class="pw-status">seek guidance</span></mark> from PensionWise or I can refer you to a regulated Financial Adviser.</p>
  </div>`,

  guidance_Tesco: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Guidance</p>
    <p>∎ Can I please ask if you have taken guidance from <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/pension-wise/book-a-free-pension-wise-appointment/book-a-phone-appointment" target="_blank" rel="noopener noreferrer">Pension Wise or MoneyHelper</a>, the Government's pension guidance services, in the last 12 months?</p>
    <div class="button-group">
      <button onclick="updateVar('pw-status', 'seek guidance', 're-seek guidance', this); updateSummary('copy-summary-btn', 'PW: Yes', 'pw', this)">Yes</button>
      <button onclick="updateVar('pw-status', 'seek guidance', 'seek guidance', this); updateSummary('copy-summary-btn', 'PW: Yes (Over 12 months)', 'pw', this)">Yes (Over 12 months)</button>
      <button onclick="updateVar('pw-status', 'seek guidance', 'seek guidance', this); updateSummary('copy-summary-btn', 'PW: No', 'pw', this)">No</button>
    </div>
    <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('copy-summary-btn', this.value, 'pw-note')">

    <p>∎ Have you taken advice and received a personal recommendation from a financial adviser on the pensions we are about to discuss?</p>
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
    <p>∎ When are you looking to access your pension fund?</p>

    <textarea rows="4" placeholder="Notes..." style="width:100%; box-sizing: border-box; resize:none" oninput="updateSummary('fta-btn', this.value, 'note1')"></textarea>


    <p>∎ It is really important that you understand your pension access options, should you wish to transfer your current pension. With all the options, you can normally take 25% of your pension tax-free, with all other payments subject to income tax. The options include:</p>
    
    <table>
      <tbody>
          <tr>
              <td class="label-cell">1) Lifetime Annuity</td>
              <td>
                  ■ The only option which pays a guaranteed income for the rest of your life. It is also the only option which pays a higher income if you have certain health and lifestyle factors. However, once set up, it cannot be changed or cancelled.
              </td>
          </tr>
          <tr>
              <td class="label-cell">2) Fixed Term Annuity</td>
              <td>
                  ■ Fixed Term Annuity: This product offers guaranteed income and/or returns. It allows you to access your tax-free cash only and receive a guaranteed maturity amount at the end of the term. Alternatively you can receive a guaranteed income over a term of your choice to either exhaust your fund completely or take a smaller income and receive a guaranteed maturity value at the end of your chosen term. However, once set up there is limited flexibility during the chosen term and it may not provide an income for the rest of your life.
              </td>
          </tr>
          <tr>
              <td class="label-cell">3) Drawdown</td>
              <td>
                  ■ This is the most flexible way to access your tax-free cash and income. However, your fund value is dependent on the performance of your investments and your drawdown plan may not provide an income for the rest of your life.
              </td>
          </tr>
          <tr>
              <td class="label-cell">4) Cash</td>
              <td>
                  ■ You can take the whole of your savings out in cash, 25% normally being tax-free with the balance being subject to income tax within the tax year, which may incur a large tax bill.
              </td>
          </tr>
          <tr>
              <td class="label-cell">Alternatively...</td>
              <td>
                  ■ You may be able to use a combination of these options.
              </td>
          </tr>
      </tbody>
    </table>
    
    <p>∎ I appreciate that there is a lot to consider.</p>
    <p>∎ To help you make an informed decision, more comprehensive descriptions of your options in retirement, including relevant risk warnings, are available in the quote summary document and pension income guide which I will send to you after this call.</p>
    <p>∎ Thank you for this <mark><span class="client-name">(name)</span></mark>.</p>
  </div>`,

  warning_Wesleyan: `<div class="script-block">
    <table>        
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF WESLEYAN</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              <p><mark>■ We have only been appointed by Wesleyan to provide lifetime annuity quotes, therefore before I can provide fixed term quotes you will need to speak to your Wesleyan Financial adviser first.</mark></p>
              <p><mark>■ However it is not uncommon for a lifetime annuity to pay more income than a fixed term if you qualify for an enhanced rate due to your health or lifestyle. This only applies to Lifetime annuities and not fixed term annuities and I can provide you with a lifetime quote today.</mark></p>
              ■ I hope you don't mind, can I just ask how would you describe your health currently?
          </td>
      </tr>
    </table>
  </div>`,

  options: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Options</p>
    <p>∎ From the options I have highlighted would you like to explore a lifetime annuity, a fixed term annuity or both products today?</p>
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
                    <p>■ We have found the best way to do this is to ask you a few questions about your health and lifestyle to see if you qualify for an enhanced annuity which could significantly boost your income.</p>
                    <p>■ This information will then be sent to the annuity providers on our panel who will provide their highest terms.</p>
                    <p>■ Do you consent for us to collect and share this data?</p>

                    <table>
                      <tr style="background-color: #fbe4d5;">
                          <th style="text-align: center;"><strong><u>IF NO</u></strong></th>
                      </tr>
                      <tr style="background-color: #fbe4d5;">
                          <td>
                              <p>■ Just to confirm that providing this information could be very much in your best financial interests since the possible uplift in income could be significantly more.</p>
                              <p>■ The annuity providers assume people with serious health or lifestyle problems will not live as long as someone with a clean bill of health or lifestyle.</p>
                          </td>
                      </tr>
                    </table>
                </td>

                <td>
                    <p>■ Normally, we would ask you a few questions about your health and lifestyle to see if you qualify for an enhanced annuity, which could significantly boost your income.</p>
                    <p>■ This only applies to Lifetime annuities and not fixed term annuities.</p>
                    <p>■ I hope you don't mind, can I just ask how would you describe your health currently?</p>

                    <table>
                      <tr style="background-color: #fbe4d5;">
                          <th style="text-align: center;"><strong><u>IF BELOW AVERAGE/POOR</u></strong></th>
                      </tr>
                      <tr style="background-color: #fbe4d5;">
                          <td>
                              <p>■ Just to confirm that providing this information for a lifetime annuity could very much be in your best interests since it is possible you would qualify for a significant uplift in your annuity income.</p>
                              <p>■ Would you like me to provide quotations for both Lifetime and Fixed term annuities today?</p>
                          </td>
                      </tr>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    
    <p>∎ Are you ok with everything I have just explained, and happy to continue <mark><span class="client-name">(name)</span></mark>?</p>
  </div>`,


  datagathering: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Data Gathering</p>
    <p>∎ Can I please ask who are your pension providers and what is the value of each fund?</p>
    <p>∎ Have you accessed any Tax Free Cash from these funds?</p>
    <p>∎ Are either yourself or your employer continuing to contribute to these pensions?</p>

    <div id="pension-container">
        <div class="pension-card">
            <button class="btn-del-card" onclick="this.closest('.pension-card').remove(); syncTableToSummary();">×</button>
            <div class="card-grid" style="margin-top:15px;">
                <div>
                    <input type="text" placeholder="Provider (e.g. Aviva)" class="js-provider" oninput="syncTableToSummary()">
                </div>
                <div>
                    <select class="js-pension-type" onchange="syncTableToSummary()">
                        <option value="" selected disabled>Pension Type...</option>
                        <option value="Personal Pension">Personal Pension</option>
                        <option value="Occupational Pension">Occupational Pension</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="Value £" class="js-value" oninput="syncTableToSummary()">
                </div>
                <div>
                    <select class="js-status" onchange="syncTableToSummary()">
                        <option value="" selected disabled>Status...</option>
                        <option value="Uncrystallised">Uncrystallised</option>
                        <option value="Crystallised">Crystallised</option>
                    </select>
                </div>
                <div>
                    <select class="js-transfer" onchange="syncTableToSummary()">
                        <option value="" selected disabled>Transfer Type...</option>
                        <option value="Full">Full</option>
                        <option value="Partial">Partial</option>
                    </select>
                </div>
                <div>
                    <select class="js-contrib" onchange="syncTableToSummary()">
                        <option value="" selected disabled>Contributing?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div class="full-width">
                    <input type="text" placeholder="Notes (e.g. TFC taken, specific dates)" class="js-notes" oninput="syncTableToSummary()">
                </div>
            </div>
        </div>
    </div>
    
    <div class="button-group">
      <button onclick="addPensionCard()">+ Add Pension</button>
    </div>
    
    <p>∎ Do you have any other funds that you would like us to combine together for your annuity requirements?</p>
    <p>∎ So you are not disadvantaged when transferring your pension with us we need to check whether your pension funds include any valuable benefits or that you may incur penalties on transfer. Are you aware if any of your pension funds contain the following:</p>
    
    <table>
      <tr style="background-color: #fbe4d5;">
          <td>
              Protected Tax Free Cash
          </td>
          <td>
              Final Salary/Defined Benefits
          </td>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              Guaranteed Annuity Rates
          </td>
          <td>
              Guaranteed Minimum Pension
          </td>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              Market Value Reduction
          </td>
          <td>
              Any other benefits or penalties
          </td>
      </tr>
    </table>
  
    <p>∎ In addition, could you please confirm if the pension is from the following:</p>

    <table>
      <tr style="background-color: #fbe4d5;">
          <td>
              A Pension Sharing Order?
          </td>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              The death benefit from another pension?
          </td>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              Non pension related assets?
          </td>
      </tr>
    </table>

    <p>∎ We will endeavour to establish if your plans have any inbuilt benefits or penalties, however, sometimes your funds can be transferred very quickly before this is confirmed. Some of these benefits or penalties can be very substantial and if this is a concern, you should check this with your provider yourself, as it is outside of our control.</p>
    <p>∎ At the end of this call I will send you a checklist of questions for you to ask your pension providers if you are unsure.</p>

  </div>`,
  
  annuityoptions: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Annuity Options</p>
    <p>∎ I will now go through your annuity options to ensure that the quotations I produce will match your requirements.</p>

    <table>
        <thead>
            <tr>
                <th class="label-cell" style="width: 50%;">TFC Available</th>
                <th class="label-cell" style="width: 50%;">TFC Not Available</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p>■ There are a couple of options available to you with regard to taking out a lump sum before you start your income. Please be aware that this opportunity will generally be lost once an annuity is purchased.</p>
                    <p>■ The first is Tax Free Cash. You can typically take up to 25% of your pension fund as a tax-free lump sum.</p>
                    <p>■ How much tax-free cash would you like to take?</p>

                    <table>
                      <tr style="background-color: #fbe4d5;">
                          <th style="text-align: center;"><strong><u>IF NONE</u></strong></th>
                      </tr>
                      <tr>
                        <tr style="background-color: #fbe4d5;">
                          <td>
                              ■ Are you taking your tax-free cash direct from your pension provider?
                          </td>
                        </tr>
                      </tr>
                    </table>

                    <br>

                    <table>
                      <tr style="background-color: #fbe4d5;">
                          <th style="text-align: center;"><strong><u>IF < 25%</u></strong></th>
                      </tr>
                      <tr>
                        <tr style="background-color: #fbe4d5;">
                          <td>
                              ■ Please note: If you do not take all your tax-free cash at the outset, the opportunity will be lost and it will be treated as taxable income when you take it as an annuity.
                          </td>
                        </tr>
                      </tr>
                    </table>




                </td>

                <td>
                    <p>■ As you've already taken your tax-free lump sum, you're not entitled to take any more.</p>
                    <p>■ However, if you're buying an annuity, you may be able to take a taxable lump sum from the annuity provider before the annuity is set up.</p>
                    <p>■ This lump sum would be taxed as income, typically at 20%, 40%, or 45%, depending on how much you earn in the tax year.</p>
                </td>
            </tr>
        </tbody>
    </table>



    <br>

        <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF TAKING TFC</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              <p>■ Can I just ask a few more questions to ensure that by accessing your tax free cash now, you are not potentially missing out on more tax free cash in the future.</p>
              <p>■ Have you accessed any pension (including DB) prior to 6th April 2024?</p>

              <table>
                <tr style="background-color: #f0f0f0;">
                    <th style="text-align: center;"><strong><u>IF YES</u></strong></th>
                </tr>
                <tr style="background-color: #fbe4d5;">
                    <td>
                        ■ Have you accessed any tax free cash since 6th April 2024?

                        <table>
                            <tr style="background-color: #f0f0f0;">
                                <th style="text-align: center;"><strong><u>IF NO</u></strong></th>
                            </tr>
                            <tr style="background-color: #fbe4d5;">
                                <td>
                                    ■ Is the combined value of all of your pension funds currently over £1,073,100 or potentially will go over £1,073,100?
                                        <div class="button-group">
                                          <button onclick="updateSummary('copy-summary-btn', 'TFC: Refer to compliance', 'compliance', this)">Yes</button>
                                        </div>
                                </td>
                            </tr>
                        </table>


                    </td>
                </tr>
            </table>

          </td>
      </tr>
    </table>


    <p>■ Do you want to include a taxable lump sum?</p>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF YES</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              <p>■ Please note, only two annuity providers offer this option. So, it might be better to take a taxable lump sum directly from your existing pension plan instead before purchasing the annuity. We recommend you speak to your current provider to check how this can be done.</p>
              ■ For the purposes of today's call do you want me to include a taxable lump sum and restrict the annuity providers that will quote or would you prefer to explore the open market and receive quotes from all annuity providers and take your taxable lump sum from your existing provider?
          </td>
      </tr>
    </table>

  </div>`,
























  lsa: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">LTA</p>
    <p>∎ Can you please confirm your marital status?</p>


    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF NOT MARRIED/CIVIL PARTNERSHIP</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              ■ Do you have a partner or financial dependant?
          </td>
      </tr>
    </table>

    <p>∎ You could choose a single life annuity with no death benefit protection. This option typically provides the highest income, but payments would stop on your death. Any remaining funds would stay with the annuity provider and would not be passed on to your beneficiaries.</p>
    <p>∎ There are many ways in which you can protect the income for your beneficiaries on your death. These need to be selected before the annuity is set up. There are three options available to you.</p>
    <p>∎ The more protection you add the greater the impact on your income. I will now explain the three options available to you.</p>
    
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Death Benefits</p>
    
    <p><strong><u>1) Joint Life</u></strong></p>
    <p>∎ On your death, a joint life annuity continues to pay an income to a beneficiary such as a spouse, civil partner or a financial dependent.</p>
    <p>∎ You select the level of income they receive on your death, for example 100% or 50% of the amount your receive for the rest of their life.</p>
    <p>∎ Are you looking for a single life or joint life annuity?</p>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF JOINT</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              ■ What percentage of your income would you like your beneficiary to receive?
          </td>
      </tr>
    </table>

    <p><strong><u>2) Guarantee Period</u></strong></p>
    <p>∎ A guarantee period provides protection that should you die within the guarantee period, then the annuity payments will continue to be paid to your beneficiary for the remaining term after your death.</p>
    <p>∎ So, if you were to select a 10 year guarantee period and died after 3 years, payments would carry on for a further 7 years. Some providers allow you to choose a Guarantee Period of up to 30 years.</p>



    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF SINGLE LIFE</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              <table>
                <tr style="background-color: #f0f0f0;">
                    <th style="text-align: center;"><strong><u>IF < 10 YEAR GUARANTEE</u></strong></th>
                </tr>
                <tr style="background-color: #fbe4d5;">
                    <td>
                        ■ Would you also like me to quote for a 10 year guarantee period as the difference in cost can be relatively small?
                    </td>
                </tr>
              </table>
          </td>
      </tr>
    </table>

    <br>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF JOINT LIFE</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              <p>■ If you die during a guarantee period under a Joint Life annuity, the full income payment will continue to the end of the guarantee period chosen. Once the guarantee period has ended the income will change to the amount selected for the joint life annuity (50%,100% etc) and will be paid to the second annuitant for the rest of their life.</p>
              <p>■ If the second annuitant has pre-deceased you, the income protected under the guarantee period will be paid to your estate until the end of the guarantee period and then ceases.</p>
              <table>
                <tr style="background-color: #f0f0f0;">
                    <th style="text-align: center;"><strong><u>IF GP ADDED</u></strong></th>
                </tr>
                <tr style="background-color: #fbe4d5;">
                    <td>
                        <p>■ If you choose a guarantee period with a joint life annuity, you have a further option available to you. This is called 'with overlap'. This means both the remaining income payments and the dependent's income payments will be paid at the same time. This increases the income to your dependent for the duration of the guarantee period.</p>
                        ■ Would you be interested in the 'with overlap' option to increase the income should you die within the guarantee period?
                    </td>
                </tr>
              </table>
          </td>
      </tr>
    </table>

    <p><strong><u>3) Value Protection</u></strong></p>
    <p>∎ Lastly on death benefits, This provides a lump sum death benefit equal to the annuity purchase price less all the income paid to you prior to your death.</p>

    
    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF SINGLE LIFE, 0 GP AND NO VP</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              <p>■ If you select a Single Life annuity with no guarantee period or value protection, then on your death, no further payments will be made.</p> 
              ■ I will send you a quote with a 5 and 10 year guarantee period for you to compare the cost of providing a guarantee, which is often quite inexpensive.
          </td>
      </tr>
    </table>

    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Tax</p>
    <p>∎ Currently if you die before age 75: Death benefits are usually income tax-free, as long as your total pension savings are under £1,073,100 (known as the Lump Sum and Death Benefit Allowance, or LSDBA).</p>
    <p>∎ If you die at age 75 or older: Death benefits will be taxed at your beneficiaries' income tax rate.</p>
    <p>∎ Currently all death benefits are outside your estate for inheritance tax purposes and therefore are inheritance tax free.</p>
    <p>∎ In the Autumn 2024 Statement, the Government set out its intention to start including pensions and pension income products within inheritance tax rules from April 2027.</p>
    <p>∎ We’re waiting for the final rules to be confirmed however the current position is that spousal transfers are still exempt and all annuity death benefits with the exception of joint life will be included in your estate. Please be aware that any changes will only impact you if your estate is valued over the inheritance tax allowance at the time of your death.</p>

    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Annuity Payments</p>
    <p>∎ Do you want a level annuity or are you interested in an escalating annuity to help overcome the effects of inflation?</p>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF ESCALATION CONSIDERED</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              <p>■ An escalating annuity increases each year in line with inflation or at a fixed rate of up to 10%. Today I can give you quotes for 3%, 5% or RPI. However, with all escalating annuities, they pay a lower initial income than a level annuity. The difference in starting income can be significant.</p> 
              <p>■ Are you interested in an escalating annuity and if so how much would you want your income to increase by each year?</p>
              ∎ To help you make an informed decision I will also show you a level quote so you can see the impact on your income.
          </td>
      </tr>
    </table>

    <p>∎ You can have your payments paid to you monthly, quarterly, six monthly or annually, either in arrears or in advance. If you take them in arrears, then you get a slightly higher payment.</p>
    <p>∎ What frequency would you want to receive your income payments?</p>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;"><strong><u>IF PAYMENTS >= QUARTERLY IN ARREARS AND NO VALUE PROTECTION SELECTED</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td>
              <p>■ If you choose to receive income in arrears and die prior to the next payment, your beneficiaries will not receive this payment unless you elect to include 'With proportion'.</p> 
              ∎ This means that a proportional payment will be calculated up until your date of death. There is a cost for including this benefit which would result in a slightly lower income.
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


    <p style="text-align:center;font-weight:bold;text-decoration:underline;">Medical/Lifestyle Questions</p>
    <p>∎ As I mentioned earlier, medical conditions or lifestyle habits could qualify you for an enhanced annuity. This is one time having a medical or lifestyle problem can be an advantage, so it is really important that you disclose any relevant information to help me secure a higher income for you.</p>

    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;" colspan="2"><strong><u>IF JOINT LIFE</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td colspan="2">■ As you are selecting joint life quotations, I will require consent from your spouse/ partner for their health/ lifestyle information to be sent to the annuity providers on our panel. Is your spouse/ partner/ dependant available?</td>
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
              <p>■ Not a problem for today's call as we can rely on assumed consent to produce your quotations. However, if you were to proceed with an annuity purchase your spouse/ partner/ dependent would need to review and sign the medical declaration and the application form to provide consent and declare the information is correct.</p> 
          </td>
      </tr>
    </table>

    <p style="text-align:center;font-weight:bold;text-decoration:underline;">LTA Results</p>
    <p>∎ I will send these through to you in an email, together with a summary of your other annuity options. Please read this summary thoroughly as it provides you with useful information to enable you to make an informed choice.</p>

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


  outro: `<div class="script-block">
    <p style="text-align:center;font-weight:bold;text-decoration:underline;">OUTRO</p>
    <p>∎ Within the quote summary email there are links to our Client Agreement as well as a useful guide to pension income and our annuity risk warnings and benefits document.</p>
    <p>∎ I recommend that you read these documents to help you understand the risks involved and to make an informed decision.</p>
    <p>∎ I will send these quotes via email. If you would like a hard copy can I please take the first line of your address, so I can post our information pack to you?</p>
    <p>∎ Do you have any further questions which need clarifying?</p>


    <table>
      <tr style="background-color: #fbe4d5;">
          <th style="text-align: center;" colspan="2"><strong><u>IF NO PW GUIDANCE</u></strong></th>
      </tr>
      <tr style="background-color: #fbe4d5;">
          <td colspan="2">
            ■ You confirmed earlier that you had not taken any recent guidance from <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/pension-wise/book-a-free-pension-wise-appointment/book-a-phone-appointment" target="_blank" rel="noopener noreferrer">PensionWise</a>.
            <br>■ PW is a government service that offers free, impartial guidance with an independent pension specialist, to help you make an informed decision.
            <br>■ It aims to help you understand your overall financial situation when you retire and the different options that you need to consider.
            <br>■ Under new rules, before your pension savings can be transferred, you either need to attend an appointment with PW or you have to opt out of an appointment. What would be your preference? To have an appointment or to opt out?
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
              
            This doesnt de-select buttons like it would do normally!!!!!!!!!

            <div class="button-group">
              <button onclick="updateSummary('copy-summary-btn', 'PW Appt: Will book themself', 'pw-appt', this)">Will book themself</button>
            </div>

            <input type="text" placeholder="Notes..." style="width:100%; box-sizing: border-box;  margin-top:5px;" oninput="updateSummary('copy-summary-btn', 'PW Appt: ' + this.value, 'pw-appt')">

          </td>
          <td>
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







};