import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Files starting with "_" are templates and are never published.
const pattern = '**/[^_]*.md';

const work = defineCollection({
  loader: glob({ pattern, base: './src/content/work' }),
  schema: z.object({
    code: z.string(), // "P1"
    title: z.string(),
    deck: z.string(), // one-sentence summary
    kind: z.enum(['models', 'pipelines', 'agents']),
    status: z.enum(['Live', 'In progress', 'Planned']),
    order: z.number(),
    featured: z.boolean().default(false),
    data: z.string(),
    stack: z.array(z.string()).default([]),
    target: z.string().optional(), // when it is due
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern, base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    arm: z.enum(['ai-ml', 'software', 'philosophy']),
    series: z.enum(['existential-debugging', 'accidental-entrepreneur']).optional(), // see series in src/data/site.ts
    lang: z.enum(['en', 'bn']).default('en'),
    draft: z.boolean().default(false),
  }),
});

const products = defineCollection({
  loader: glob({ pattern, base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    kind: z.enum(['apps', 'plugins', 'extensions', 'saas']),
    platform: z.string(), // "Android", "Obsidian, desktop and mobile"
    users: z.string(),
    problem: z.string(),
    result: z.string().optional(), // what changed, with a number; add once you have one
    store: z.string().url().optional(),
    storeLabel: z.string().optional(), // button text, e.g. "Visit Jonodut"; defaults to "Get <title>"
    order: z.number().default(0),
    featured: z.boolean().default(false), // shown on Home (max three)
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, writing, products };
