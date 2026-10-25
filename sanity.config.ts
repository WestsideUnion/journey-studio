import React from 'react';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schemaTypes } from './sanity/schemas';
import { structure } from './sanity/structure';

function StudioLogo() {
  return React.createElement('img', {
    src: '/images/logo/journey-logo-j-white.png',
    alt: 'Journey Studio',
    style: { width: '20px', height: '20px', objectFit: 'contain' },
  });
}

export default defineConfig({
  basePath: '/studio',
  name: 'journey_studio',
  title: 'Journey Studio — CMS & CRM',
  icon: StudioLogo,
  projectId,
  dataset,
  auth: {
    loginMethod: 'token',
  },
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure,
    }),
  ],
});
