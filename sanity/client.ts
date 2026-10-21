import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, token } from './env';

export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'dummy-project-id'
);

// Read client for public data fetching
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

// Authenticated client for server-side mutations (saving inquiries/leads)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});
