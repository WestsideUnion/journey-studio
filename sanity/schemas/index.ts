import { projectSchema } from './project';
import { artworkSchema } from './artwork';
import { journalSchema } from './journal';
import { serviceSchema } from './service';
import { brandSchema } from './brand';
import { inquirySchema } from './inquiry';
import { landingPageSchema } from './landingPage';
import { aboutPageSchema } from './aboutPage';

export const schemaTypes = [
  // CRM & Leads
  inquirySchema,
  // Page Singletons & Visual Settings
  landingPageSchema,
  aboutPageSchema,
  // Portfolio & Editorial Content
  projectSchema,
  artworkSchema,
  journalSchema,
  serviceSchema,
  brandSchema,
];
