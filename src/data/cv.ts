/**
 * CV content, from the CV of November 2026. Empty strings are hidden on the page.
 * After changing anything here, regenerate the PDF: python scripts/render-cv.py
 */
export const cvName = 'Al Hasib Prince Shanto';
export const cvTitle = 'Machine learning engineering';
export const cvLocation = 'Dhaka, Bangladesh';

export const profile =
  'Mathematics graduate who builds and ships live software: a SaaS platform for public leaders and a privacy-first Android app, including an on-device machine learning classifier. I combine strong quantitative foundations with the discipline of software quality assurance, and take models from data to production.';

export const experience = [
  {
    role: 'Founder, full-stack and AI engineer',
    org: 'Jonodut and Reelock',
    place: '',
    dates: 'October 2026 – present',
    points: [
      'Jonodut (civic tech SaaS): built and deployed a multi-tenant web publishing and constituent management platform for public leaders in Bangladesh, with bilingual (Bangla and English) drafting, staging and publishing workflows, and verified identity badges.',
      'Built zero-custody donation tracking and a unified inbox for volunteers, event sign-ups and messages; donations are verified directly against bank and mobile-wallet records, and the platform never holds funds.',
      'Reelock (Android): built and shipped an offline-first digital wellness app that blocks short-form video feeds, distracting apps, adult domains and notification noise on the device.',
      'Kept Reelock fully on-device with no backend, and the SaaS deployments reliable, through rigorous testing and AI-assisted development.',
    ],
  },
  {
    role: 'Software quality assurance engineer',
    org: 'Raintor',
    place: '',
    dates: 'December 2024 – September 2026',
    points: [
      'Tested a high-traffic food delivery platform end to end across customer, rider and vendor workflows.',
      'Found, documented and tracked critical edge-case bugs in order routing, payment processing and real-time status updates, improving production stability.',
      'Worked closely with backend and mobile developers to reproduce failures and verify fixes before each release.',
    ],
  },
  {
    role: 'Web developer and CRO specialist (part-time)',
    org: 'Relinkweb',
    place: '',
    dates: 'July 2022 – November 2024',
    points: [
      'Built and customised responsive, high-converting websites for clients using WordPress, Squarespace, HTML, CSS and JavaScript.',
      'Analysed user funnels and A/B test results to improve conversion rates and lead generation for clients.',
    ],
  },
];

/** Shown above the portfolio projects from src/content/work. */
export const extraProjects = [
  {
    title: 'Reelock on-device feed and domain classifier',
    stack: 'Python, PyTorch, ONNX, Android',
    points: [
      'A lightweight, offline text and metadata classifier that detects short-form video feeds and adult content on the phone, without sending user data anywhere.',
      'Model size and inference latency tuned to run alongside strict-mode system hooks without draining the battery.',
    ],
  },
];

export const education = [
  {
    title: 'BSc Mathematics',
    org: 'Anandamohan College, Mymensingh',
    dates: '2022',
    detail: 'Linear algebra, probability and statistics, calculus, numerical analysis, optimisation. CGPA 3.11 / 4.00',
  },
  {
    title: 'Higher Secondary Certificate, Science',
    org: 'Notre Dame College, Mymensingh',
    dates: '2017',
    detail: 'GPA 4.58 / 5.00',
  },
];

export const skills = [
  {
    area: 'AI and machine learning',
    items: 'Python, PyTorch, ONNX, scikit-learn, pandas, NumPy, on-device inference, LLM integration, model evaluation',
  },
  { area: 'Backend and deployment', items: 'FastAPI, Node.js, REST APIs, Docker, Git and GitHub, CI/CD, cloud hosting, databases' },
  { area: 'Frontend and mobile', items: 'Android (offline-first), React Native, JavaScript, HTML, CSS, WordPress, Squarespace' },
  { area: 'Quality and analytics', items: 'Manual and automated testing, reliability, A/B testing, CRO metrics, root cause analysis' },
  { area: 'Languages', items: 'English, Bengali (native)' },
];

/** Short list shown on the About page. */
export const stack = ['Python', 'PyTorch', 'ONNX', 'scikit-learn', 'pandas', 'FastAPI', 'Docker', 'Android', 'LLM applications'];
