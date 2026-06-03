// =========================================================
// SHARED CONTENT & DATA
// =========================================================

export const COMPANY = {
  name: "True Capital & Advisory Pvt Ltd",
  tagline: "Fast Loan. Trusted Solution.",
  // Single contact number used for both Call and WhatsApp
  phone: "9758189999",
  phoneIntl: "+919758189999",
  phoneDisplay: "+91 97581 89999",
  whatsapp: "9758189999",
  whatsappIntl: "919758189999",
  email: "info@truecapital.com",
  address:
    "2nd Floor, H.No. 2474, Lal Mandir Road, Nikunj Vihar, Arya Nagar, Haridwar, Uttarakhand – 249407",
  // TODO: replace with True Capital's actual Google Business review link
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID",
  lat: 29.938,
  lng: 78.1635,
};

// SVG inner-content keyed by name (rendered by <Icon/>)
export const ICONS = {
  home: '<path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" stroke-linecap="round" stroke-linejoin="round"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6" stroke-linecap="round"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M9 22v-4h6v4"/>',
  car: '<path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1H8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7.5" cy="16.5" r="1"/><circle cx="16.5" cy="16.5" r="1"/>',
  bike: '<circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2" stroke-linecap="round" stroke-linejoin="round"/>',
  project: '<path d="M3 3v18h18"/><path d="m7 14 3-3 3 3 5-5" stroke-linecap="round" stroke-linejoin="round"/>',
  factory: '<path d="M2 20h20M4 20V9l5 4V9l5 4V4l4 3v13" stroke-linecap="round" stroke-linejoin="round"/>',
  edu: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5"/>',
  bank: '<path d="M3 10 12 4l9 6M5 10v9M19 10v9M9 10v9M15 10v9M3 19h18" stroke-linecap="round" stroke-linejoin="round"/>',
  cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/>',
  consult: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke-linecap="round" stroke-linejoin="round"/>',
  transfer: '<path d="M17 2l4 4-4 4M3 6h18M7 22l-4-4 4-4M21 18H3" stroke-linecap="round" stroke-linejoin="round"/>',
  recovery: '<path d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-6.4 2.6L3 8" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 4v4h4M12 7v5l3 2" stroke-linecap="round" stroke-linejoin="round"/>',
  verify: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke-linecap="round" stroke-linejoin="round"/>',
  handshake: '<path d="m11 17 2 2 6-6M3 9l4-4 5 5M3 9l5 5 3-3" stroke-linecap="round" stroke-linejoin="round"/>',
  shield: '<path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5z" stroke-linecap="round" stroke-linejoin="round"/><path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/>',
  trending: '<path d="M3 17l6-6 4 4 8-8M21 7v6h-6" stroke-linecap="round" stroke-linejoin="round"/>',
  bolt: '<path d="M13 2 3 14h7l-1 8 10-12h-7z" stroke-linecap="round" stroke-linejoin="round"/>',
  layers: '<path d="M12 2 2 7l10 5 10-5z"/><path d="m2 12 10 5 10-5M2 17l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/>',
  headset: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 14v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2zM3 14v3a2 2 0 0 0 2 2h1v-7H5a2 2 0 0 0-2 2z"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M9 13.5 8 22l4-2 4 2-1-8.5" stroke-linecap="round" stroke-linejoin="round"/>',
  puzzle: '<path d="M9 3a2 2 0 0 1 4 0c0 1 1 1 2 1h2a1 1 0 0 1 1 1v2c0 1 0 2 1 2a2 2 0 0 1 0 4c-1 0-1 1-1 2v2a1 1 0 0 1-1 1h-2c-1 0-2 0-2 1a2 2 0 0 1-4 0c0-1-1-1-2-1H5a1 1 0 0 1-1-1v-2c0-1 0-2-1-2a2 2 0 0 1 0-4c1 0 1-1 1-2V5a1 1 0 0 1 1-1h2c1 0 2 0 2-1z" stroke-linecap="round" stroke-linejoin="round"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" stroke-linecap="round" stroke-linejoin="round"/>',
  whatsapp: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" stroke-linecap="round" stroke-linejoin="round"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" stroke-linecap="round" stroke-linejoin="round"/>',
  arrow: '<path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>',
  check: '<path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5M12 3v12" stroke-linecap="round" stroke-linejoin="round"/>',
  alert: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 9v4m0 4h.01" stroke-linecap="round"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
};

export const LOAN_SERVICES = [
  { t: "Home Loan", ic: "home", d: "Affordable home financing with flexible tenures and competitive interest rates." },
  { t: "Personal Loan", ic: "user", d: "Quick, collateral-free funds for weddings, travel, medical or any personal need." },
  { t: "Business & MSME Loan", ic: "briefcase", d: "Working capital and growth funding tailored for MSMEs and enterprises." },
  { t: "Loan Against Property (LAP)", ic: "building", d: "Unlock the value of your property with high-value, long-tenure loans." },
  { t: "Car Loan (New & Used)", ic: "car", d: "Drive home your dream car with easy EMIs on new and pre-owned vehicles." },
  { t: "Two Wheeler Loan", ic: "bike", d: "Quick, affordable financing for new bikes and scooters with minimal paperwork." },
  { t: "Project Finance", ic: "project", d: "Structured funding for large projects, expansions and infrastructure." },
  { t: "Factory & Machinery Loan", ic: "factory", d: "Finance plant, equipment and machinery to scale your operations." },
  { t: "Education Loan", ic: "edu", d: "Support higher studies in India and abroad with student-friendly loans." },
  { t: "CC / OD / Term Loan", ic: "bank", d: "Cash credit, overdraft and term loans to manage business cash flow." },
  { t: "Private Funding", ic: "cash", d: "Fast private finance solutions for urgent and specialised requirements." },
];

export const OTHER_SERVICES = [
  { t: "Loan Consultation", ic: "consult", d: "Expert, unbiased guidance to choose the right loan and lender for you." },
  { t: "Loan Balance Transfer", ic: "transfer", d: "Switch existing loans to lower rates and reduce your monthly EMI." },
  { t: "Recovery Services", ic: "recovery", d: "Professional, compliant recovery support for businesses and lenders." },
  { t: "Third-Party Verification", ic: "verify", d: "Reliable field & document verification services for institutions." },
  { t: "Corporate DSA Services", ic: "handshake", d: "Direct Selling Agent partnerships with leading banks and NBFCs." },
  { t: "Insurance Solutions", ic: "shield", d: "Life, health, motor and business insurance for complete protection." },
  { t: "Investment & Wealth Advisory", ic: "trending", d: "Mutual funds, SIPs and bonds to grow and protect your wealth." },
];

export const ALL_LOANS = LOAN_SERVICES.map((s) => s.t).concat(OTHER_SERVICES.map((s) => s.t));

export const WHY = [
  { ic: "bolt", t: "Fast & Transparent Process", d: "Quick approvals with clear terms and no hidden charges." },
  { ic: "layers", t: "Wide Range of Services", d: "Loans, insurance, investments and advisory — all under one roof." },
  { ic: "headset", t: "Dedicated Client Support", d: "A personal advisor guides you at every step of the journey." },
  { ic: "award", t: "Banking & MSME Expertise", d: "Deep experience in retail banking and MSME finance." },
  { ic: "puzzle", t: "Customized Solutions", d: "Financial plans designed around your unique goals." },
  { ic: "shield", t: "Trusted Advisory & Investment", d: "Reliable, growth-oriented advisory you can count on." },
];

export const TEAM = [
  { n: "Baljeet Singh", r: "Director & CEO", b: "MBA in Finance with 15+ years of leadership in banking & financial services." },
  { n: "Naubahar Ali", r: "Director & Founder", b: "B.Com graduate with 8+ years of experience in the finance sector." },
  { n: "Adtiya Chauhan", r: "Financial Director", b: "BBA, specialising in financial planning & investment management." },
  { n: "Ashu", r: "Branch Operations Manager", b: "3 years of expertise in branch operations & customer handling." },
  { n: "Mustkeem", r: "Branch Sales Manager", b: "3 years of experience in sales operations & client management." },
];

export const TESTIMONIALS = [
  { q: "I needed funds quickly to expand my shop. True Capital got my MSME loan approved faster than I expected, and explained every charge clearly. No hidden surprises — just honest, helpful service.", n: "Rajesh K.", r: "Business Owner, Haridwar", ini: "RK" },
  { q: "They helped me transfer my home loan to a lower rate and my EMI dropped noticeably. The team handled all the paperwork patiently. As a teacher with a busy schedule, that support meant a lot.", n: "Priya S.", r: "Teacher, Roorkee", ini: "PS" },
  { q: "As a first-time founder, I had no idea how project funding worked. Their advisory team guided me step by step and connected me with the right lenders. Genuinely growth-focused people.", n: "Mohit A.", r: "Founder, Dehradun", ini: "MA" },
];

export const BLOG = [
  {
    cat: "Loan Guides", thumb: "t1", ic: "home",
    title: `Home Loan in India: A First-Time Buyer's Checklist`,
    summary: `Buying your first home? Before you apply, understand the essentials — down payment (usually 10–25%), your eligibility based on income and CIBIL score, and the difference between fixed and floating interest rates. This guide walks you through the documents lenders ask for, how to compare offers beyond just the headline rate, and the role of processing fees and prepayment terms in your total cost.`,
    body: [
      `A home loan is likely the biggest financial commitment you will make, so preparation pays off. Start by checking your CIBIL score — a score above 750 typically unlocks the best interest rates. Lenders assess your repayment capacity using your net monthly income and existing obligations, so clearing small loans before applying can improve eligibility.`,
      `Decide between a fixed and floating rate. Floating rates move with the RBI repo rate and are usually lower to begin with, while fixed rates offer predictability. Many borrowers in India prefer floating rates for long tenures because they tend to average out lower over time.`,
      `Look beyond the advertised rate. Processing fees, legal and valuation charges, and prepayment conditions all affect your real cost. Always ask for the full sanction letter and read the fine print on reset clauses.`,
      `Finally, keep your documents ready: identity and address proof, income proof (salary slips or ITRs), bank statements, and property papers. Organised paperwork speeds up approval significantly — and a good consultant can help you present the strongest possible application.`,
    ],
  },
  {
    cat: "Credit Score Tips", thumb: "t2", ic: "trending",
    title: `7 Habits That Quietly Improve Your CIBIL Score`,
    summary: `Your credit score decides not just whether you get a loan, but at what rate. The good news: improving it is mostly about consistent habits. Pay every EMI and credit-card bill on time, keep your credit utilisation under 30%, avoid multiple loan applications in a short window, and maintain a healthy mix of secured and unsecured credit. Small, steady actions compound into a strong score.`,
    body: [
      `Payment history is the single biggest factor in your CIBIL score. Even one missed EMI or late credit-card payment can pull your score down for months. Set up auto-debit or reminders so you never miss a due date.`,
      `Credit utilisation — how much of your card limit you use — should ideally stay below 30%. If you regularly hit your limit, request a limit increase or spread spending across cards rather than maxing one out.`,
      `Avoid applying for several loans or cards in a short period. Each application triggers a "hard enquiry" that can temporarily lower your score and signals credit hunger to lenders.`,
      `A balanced mix of secured loans (home, auto) and unsecured credit (personal loan, cards), managed responsibly, demonstrates that you can handle different types of debt. Keep old, well-managed accounts open — a longer credit history works in your favour.`,
      `Finally, check your credit report at least once a year for errors. Incorrect entries or accounts you never opened can drag your score down, and disputing them is free and worthwhile.`,
    ],
  },
  {
    cat: "Finance Articles", thumb: "t3", ic: "briefcase",
    title: `Working Capital for MSMEs: CC, OD or Term Loan?`,
    summary: `Cash flow is the lifeblood of any small business. Choosing the right credit facility — Cash Credit, Overdraft, or a Term Loan — can make managing it far easier. CC and OD suit recurring, short-term needs where you pay interest only on what you use, while a term loan fits one-time capital expenditure with predictable EMIs. Here's how to decide.`,
    body: [
      `MSMEs often blur the line between short-term liquidity and long-term investment. Matching the facility to the need keeps your interest costs lean and your books healthy.`,
      `Cash Credit (CC) is secured against stock and receivables and works as a revolving limit — ideal for businesses with seasonal inventory or working-capital cycles. You pay interest only on the amount drawn, not the full limit.`,
      `An Overdraft (OD) lets you withdraw beyond your account balance up to a sanctioned limit. It is flexible for short, unpredictable gaps, and like CC, interest applies only to the used portion.`,
      `A Term Loan is better suited to buying machinery, expanding premises, or other one-time capital expenditure. It comes with a fixed tenure and EMI, making budgeting straightforward.`,
      `A common strategy is to combine them: a term loan for assets and a CC/OD limit for day-to-day operations. An advisor can help structure the right mix and connect you with lenders offering favourable MSME rates and government-backed schemes like CGTMSE.`,
    ],
  },
  {
    cat: "Loan Guides", thumb: "t1", ic: "transfer",
    title: `Loan Balance Transfer: When It Actually Saves You Money`,
    summary: `A balance transfer moves your existing loan to a new lender offering a lower interest rate — potentially cutting your EMI or tenure. But it isn't always worth it. Factor in processing fees, the remaining tenure, and prepayment charges on your old loan. As a rule of thumb, a transfer makes most sense early in the loan when the interest component is high and the rate difference is meaningful.`,
    body: [
      `A balance transfer can be a powerful tool, but the savings depend on timing and the true rate gap. The earlier you are in your loan tenure, the more interest you stand to save, because the early years carry the heaviest interest load.`,
      `Calculate the net benefit: subtract the new lender's processing fee and any foreclosure charges on your existing loan from your projected interest savings. If the rate difference is less than around 0.5%, the transfer often isn't worth the effort and cost.`,
      `Many lenders sweeten transfers with top-up loans at home-loan rates — useful if you also need extra funds. But don't let a top-up tempt you into borrowing more than you need.`,
      `Read the new sanction terms carefully, especially reset clauses on floating rates. A headline rate that jumps after a few months can erase your savings. A consultant can run the numbers across lenders so you transfer only when it genuinely pays.`,
    ],
  },
  {
    cat: "Finance Articles", thumb: "t3", ic: "shield",
    title: `Why Every Borrower Should Think About Insurance`,
    summary: `Taking a loan increases your financial responsibility — and a sudden illness, accident or loss of income can put repayment at risk. Term life and health insurance act as a safety net, protecting your family from inheriting your debt and shielding your savings from medical emergencies. For loans, a pure term cover is usually far better value than bundled loan-protection products.`,
    body: [
      `When you take on a loan, you take on an obligation that outlives most short-term disruptions. Insurance ensures that an unexpected event doesn't turn into a financial crisis for your family.`,
      `A term life policy equal to your outstanding liabilities (plus a buffer for living expenses) means your dependents are never burdened with your debt. Term plans are inexpensive relative to the cover they provide and are the most cost-effective form of life insurance.`,
      `Health insurance is equally important. A single hospitalisation can wipe out years of savings; a good family floater policy protects the funds you would otherwise use for EMIs.`,
      `Be cautious with loan-protection or "reducing cover" products bundled at the time of borrowing — they are often costlier than a standalone term plan for the same protection. Compare independently before you sign.`,
      `The goal is simple: borrow with confidence, knowing that life's uncertainties won't derail your repayments or your family's security.`,
    ],
  },
  {
    cat: "Credit Score Tips", thumb: "t2", ic: "verify",
    title: `Reading Your Credit Report: What Lenders Actually See`,
    summary: `Your credit report is more than a number. Lenders scrutinise your repayment track record, the number of active loans, recent enquiries, and any settled or written-off accounts. Knowing what they look for helps you fix red flags before applying — like an old settled account or an error you never noticed. Here's how to read your report like a lender does.`,
    body: [
      `A credit report tells your financial story in detail, and lenders read it closely before approving any loan. Understanding it puts you in control.`,
      `The account summary lists all your loans and cards — active and closed — with their payment status. "Settled" or "written-off" tags are serious red flags; if you see one you've since cleared, get the status updated to "closed".`,
      `The enquiry section shows every time a lender checked your report. A cluster of recent enquiries suggests you've been applying widely, which can worry lenders. Space out your applications.`,
      `Personal information and account details should be accurate. Mismatched addresses, duplicate accounts, or loans you never took can indicate errors — or even identity fraud — and you have the right to dispute them with the credit bureau free of charge.`,
      `Review your report a few weeks before any major loan application. Fixing errors and clearing small overdues in advance can be the difference between an approval at a good rate and a costly rejection.`,
    ],
  },
];

export const PARTNERS = ["Partner Bank", "NBFC Partner", "Partner Bank", "Co-op Lender", "NBFC Partner", "HFC Partner", "Partner Bank", "NBFC Partner"];

// helpers
export const fmtINR = (n) => "₹" + Math.round(n).toLocaleString("en-IN");
export const starStr = (n) => "★★★★★☆☆☆☆☆".slice(5 - n, 10 - n);
export const initials = (name) => (name || "C").split(" ").map((x) => x[0]).slice(0, 2).join("");
