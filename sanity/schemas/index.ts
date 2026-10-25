import { projectSchema } from './project';
import { artworkSchema } from './artwork';
import { journalSchema } from './journal';
import { serviceSchema } from './service';
import { brandSchema } from './brand';
import { inquirySchema } from './inquiry';
import { landingPageSchema } from './landingPage';

export const schemaTypes = [
  // CRM & Leads
  inquirySchema,
  // Landing Page & Visual Settings
  landingPageSchema,
  // Portfolio & Editorial Content
  projectSchema,
  artworkSchema,
  journalSchema,
  serviceSchema,
  brandSchema,
];
