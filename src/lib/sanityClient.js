import { createClient } from '@sanity/client';
console.log(import.meta.env.VITE_SANITY_PROJECT_ID)

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '495ccjcuc',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});