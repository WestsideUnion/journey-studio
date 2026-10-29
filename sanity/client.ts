import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, token } from './env';

export const isSanityConfigured = Boolean(
  projectId && projectId !== 'dummy-project-id'
);

// Read client for public data fetching (useCdn: false ensures instant sync after publishing in Studio)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

// Authenticated client for server-side mutations (saving inquiries/leads)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});
