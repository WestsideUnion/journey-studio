import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schemaTypes } from './sanity/schemas';
import { structure } from './sanity/structure';

export default defineConfig({
  basePath: '/studio',
  name: 'journey_studio',
  title: 'Journey Studio — CMS & CRM',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure,
    }),
  ],
});
