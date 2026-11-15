/**
 * CV content. Only facts that are known are filled in; add dates, employers and
 * results as they become final. Empty strings are hidden on the page.
 */
export const profile =
  'I build machine learning systems that work outside a notebook, from the data to the deployed model. Background in mathematics and software quality engineering: I check the numbers before anyone relies on them.';

export const experience = [
  {
    role: 'Founder',
    org: 'Aelnir, app studio',
    place: 'Bangladesh',
    dates: '',
    points: ['Founded a studio that publishes apps solving specific problems for specific users.'],
  },
  {
    role: 'Software Quality Assurance Engineer',
    org: '',
    place: '',
    dates: '',
    points: [
      'Tested systems end to end, tracked defects and analysed where failures clustered.',
      'Built the habit that now shapes my ML work: verify before anyone relies on the result.',
    ],
  },
];

export const education = [
  {
    title: 'BSc Mathematics',
    org: 'Ananda Mohan College, Mymensingh',
    dates: '',
    detail: 'Probability, statistics, linear algebra',
  },
];

export const skills = [
  { area: 'Machine learning', items: 'scikit-learn, gradient boosting, model evaluation, conformal prediction, SHAP' },
  { area: 'Engineering', items: 'Python, SQL, pandas, pytest, reproducible pipelines, deployment of demos' },
  { area: 'AI applications', items: 'LLM applications, retrieval and agent workflows with checks' },
  { area: 'Quality', items: 'Test design, defect analysis, data validation, leakage audits' },
  { area: 'Languages', items: 'English, Bengali (native)' },
];

/** Short list shown on the About page. */
export const stack = ['Python', 'SQL', 'pandas', 'scikit-learn', 'statistics', 'model evaluation', 'pytest', 'MLOps basics', 'LLM applications'];
