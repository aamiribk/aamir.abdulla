// All portfolio content lives here. Edit this file to customize the site.
export const profile = {
  name: "Aamir Abdulla",
  title: "Investment Operations Manager",
  headline: "I run trade operations, settlements and reconciliations for ADGM-regulated asset managers, with controls and automation that cut manual work.",
  location: "Abu Dhabi, UAE",
  email: "aamir.ibk@gmail.com",
  phone: "+971 50 880 9627",
  linkedin: "https://www.linkedin.com/in/aamir-abdulla",
  about: [
    "Investment operations professional with 9+ years across asset management, custody, securities settlement, trade support and middle office, in the UAE and India. I currently oversee operations supporting over US$400 million in AUM at Cohesion Asset Management (ADGM).",
    "My work covers the full trade lifecycle: multi-asset trade processing, pre- and post-trade compliance, NAV and bank reconciliations, fund transactions, and coordination with brokers, custodians and administrators. I also design controls, write BRDs, lead UAT and build Excel/VBA tooling.",
  ],
};

export const lifecycle = ["Validate", "Confirm", "Allocate", "Settle", "Reconcile", "Report"];

export const stats = [
  { value: "US$400M+", label: "AUM supported today" },
  { value: "99%", label: "On-time settlement rate at State Street" },
  { value: "20%", label: "Fewer settlement delays at State Street" },
  { value: "25%", label: "Less manual reconciliation work at State Street" },
];

export const work = [
  {
    name: "OMS-to-custodian trade-file integration",
    org: "Cohesion Asset Management",
    problem: "Settlement processing depended on manual handling between the order management system and the custodian.",
    solution: "Led the integration of OMS trade files with the custodian.",
    contribution: "Owned the integration across operations, the custodian and internal teams.",
    outcome: "Improved settlement processing and reduced manual intervention.",
    tech: ["OMS", "Custodian trade files"],
  },
  {
    name: "Pre- and post-trade control framework",
    org: "Cohesion Asset Management",
    problem: "Trades needed consistent checks against investment guidelines before and after execution.",
    solution: "Designed controls covering cash availability, free holdings, position limits, duplicate orders and price deviations.",
    contribution: "Designed the controls and run the daily compliance checks.",
    outcome: "Trading follows investment guidelines, with variances escalated promptly.",
    tech: ["Compliance checks", "Position limits", "Price monitoring"],
  },
  {
    name: "Excel and VBA operations automation",
    org: "Cohesion Asset Management",
    problem: "Holdings reports, trade tickets and compliance checks involved repetitive manual work.",
    solution: "Developed Excel and VBA automation for holdings reports, trade tickets, compliance checks and daily reporting.",
    contribution: "Built and maintain the tooling.",
    outcome: "Reduced repetitive manual work in daily operations.",
    tech: ["Excel", "VBA"],
  },
  {
    name: "Custody and settlement operations build-out",
    org: "Finstreet (FSRA-regulated, ADGM)",
    problem: "The firm needed custody and securities settlement operations established from scratch.",
    solution: "Defined workflows, SOPs and controls, designed settlement processes across multiple markets and custodians, and authored BRDs for clearing, settlements, corporate actions and securitisation.",
    contribution: "Established the function, wrote the BRDs and led UAT for new systems and workflow enhancements.",
    outcome: "A documented, controlled settlement operation, with exceptions managed to prevent trade failures.",
    tech: ["BRDs", "UAT", "SOPs", "Corporate actions"],
  },
];

export const experience = [
  {
    role: "Investment Operations Manager", org: "Cohesion Asset Management Limited (ADGM)", place: "Abu Dhabi", dates: "Apr 2025 - Present",
    points: [
      "Oversee investment operations supporting over US$400 million in AUM across feeder accounts; supervise up to three direct reports.",
      "Run daily cash, security, NAV and bank reconciliations and clear breaks.",
      "Process subscriptions, redemptions, capital calls, distributions and fee calculations per fund agreements.",
      "Manage broker and custodian onboarding and periodic KYC reviews.",
    ],
  },
  {
    role: "Custody & Securities Settlements Specialist", org: "Finstreet Limited (ADGM)", place: "Abu Dhabi", dates: "Oct 2023 - Apr 2025",
    points: [
      "Established custody and settlement operations from the ground up.",
      "Managed settlement exceptions and documentation to prevent trade failures.",
      "Oversaw corporate action and securitisation workflows within market, regulatory and custodian requirements.",
    ],
  },
  {
    role: "Senior Associate", org: "State Street Corporation", place: "Bangalore", dates: "May 2021 - Sep 2023",
    points: [
      "Held a 99% on-time settlement rate across equities, fixed income and derivatives.",
      "Reduced settlement delays by 20% by improving reconciliation workflows.",
      "Resolved complex and aged settlement breaks; reviewed NAV inputs across multiple funds.",
      "Trained and mentored eight team members.",
    ],
  },
  {
    role: "Associate II", org: "State Street Corporation", place: "Bangalore", dates: "Nov 2018 - Apr 2021",
    points: [
      "Reduced manual reconciliation work by 25% through process enhancements and automation.",
      "Led three system upgrade and testing projects.",
      "Managed settlements across global markets; reconciled cash and securities positions.",
    ],
  },
  {
    role: "Analyst", org: "Morgan Stanley", place: "Bangalore", dates: "Dec 2016 - May 2018",
    points: [
      "Supported interest-rate and equity derivatives desks with trade validation, confirmation and allocation.",
      "Managed London rate fixing and monitored Asia, Tokyo and London rates.",
      "Cleared P&L on T+0 across traders' books and supported internal and external audits.",
    ],
  },
];

export const skills = [
  { group: "Trade lifecycle", items: ["Trade processing", "Settlements", "Corporate actions", "FX", "Securities lending and borrowing", "Fund flows"] },
  { group: "Controls and compliance", items: ["Pre- and post-trade compliance", "Operational risk", "KYC reviews", "Regulatory compliance", "Audit support"] },
  { group: "Reconciliation and NAV", items: ["Cash and position reconciliation", "NAV oversight", "Bank reconciliation", "P&L review"] },
  { group: "Systems", items: ["SS&C Eze Eclipse", "Bloomberg Terminal", "Bloomberg FXGO", "SWIFT", "DTCC CTM", "MarkitWire", "Geneva", "Murex", "Refinitiv", "GTSS"] },
  { group: "Automation and delivery", items: ["Excel", "VBA", "OMS integration", "BRDs", "UAT", "Process improvement"] },
  { group: "Leadership", items: ["Team supervision", "Mentoring", "Broker and custodian management", "Stakeholder coordination"] },
];

export const education = [
  { name: "Master of Business Administration, Financial Services and Information Technology Management", org: "Norwich Institute of Management Studies, India", dates: "2014 - 2016" },
  { name: "Bachelor of Business Management", org: "Srinivas Institute of Management Studies, Mangalore University, India", dates: "2010 - 2014" },
];

export const certifications = [
  "Certified Investment Banking Operations Professional (CIBOP), Imarticus Learning, 2016",
  "Lean Six Sigma Yellow, Green and Black Belt, IMC, 2023",
  "PMP certification training (35 contact hours), IMC, 2023",
  "The Agile Business Analysis & Scrum Prodegree",
];
