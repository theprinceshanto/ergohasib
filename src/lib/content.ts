import { getCollection } from 'astro:content';

// Drafts show in `npm run dev` (marked as drafts) and never in the built site.
const visible = (e: { data: { draft?: boolean } }) => import.meta.env.DEV || !e.data.draft;

export async function getWork() {
  return (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);
}

export async function getPosts() {
  return (await getCollection('writing', visible)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

// Skip the lookup while there are no product files, to avoid an "empty collection" warning.
const hasProducts = Object.keys(import.meta.glob('../content/products/[!_]*.md')).length > 0;

export async function getProducts() {
  if (!hasProducts) return [];
  return (await getCollection('products', visible)).sort((a, b) => a.data.order - b.data.order);
}
