/**
 * Everything personal in one place. Leave a value as null until it is real:
 * the site hides anything that is null, and `npm run dev` lists what is missing.
 */
export const site = {
  name: 'hasib',
  fullName: 'Hasib',
  title: 'hasib — machine learning engineering',
  description:
    'Hasib builds machine learning systems, from data to deployment, and writes about AI/ML, software and philosophy.',
  heroLine: 'Machine learning systems, from data to deployment.',
  heroLineIsDraft: true,
  email: null as string | null,
  github: null as string | null,
  linkedin: null as string | null,
  facebook: null as string | null,
  aelnirUrl: null as string | null,
  /** Path in /public, e.g. '/cv.pdf'. Null hides the download button. */
  cvPdf: null as string | null,
};

export const arms = [
  {
    key: 'ai-ml',
    label: 'AI/ML',
    line: 'Models with code, tests, honest evaluation and a demo you can try.',
  },
  {
    key: 'software',
    label: 'Software',
    line: 'Turning problems into products through Aelnir, the studio I founded.',
  },
  {
    key: 'philosophy',
    label: 'Philosophy',
    line: 'The why behind both: learning, and building an autonomous, profitable and fulfilling life.',
  },
] as const;

export type ArmKey = (typeof arms)[number]['key'];
export const armLabel = (k: string) => arms.find((a) => a.key === k)?.label ?? k;

export const kinds = [
  { key: 'models', label: 'Models', singular: 'Model' },
  { key: 'pipelines', label: 'Pipelines', singular: 'Pipeline' },
  { key: 'agents', label: 'Agents', singular: 'Agent' },
] as const;
export const productKinds = [
  { key: 'apps', label: 'Apps', singular: 'App' },
  { key: 'plugins', label: 'Plugins', singular: 'Plugin' },
  { key: 'extensions', label: 'Extensions', singular: 'Extension' },
  { key: 'saas', label: 'SaaS', singular: 'SaaS' },
] as const;
export const productKindLabel = (k: string) => productKinds.find((x) => x.key === k)?.singular ?? k;

export const kindLabel = (k: string) => kinds.find((x) => x.key === k)?.singular ?? k;

export const nav = [
  { href: '/work', label: 'Work', hint: 'ML projects' },
  { href: '/products', label: 'Products', hint: 'Aelnir' },
  { href: '/writing', label: 'Writing', hint: 'Notes, essays' },
  { href: '/about', label: 'About', hint: 'Story, CV' },
] as const;

/** Names of settings still to fill in (shown only in dev). */
export const missingSettings = (Object.keys(site) as (keyof typeof site)[]).filter(
  (k) => site[k] === null,
);
