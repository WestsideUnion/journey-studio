import { projectSchema } from './project';
import { artworkSchema } from './artwork';
import { journalSchema } from './journal';
import { serviceSchema } from './service';
import { brandSchema } from './brand';
import { inquirySchema } from './inquiry';

export const schemaTypes = [
  // CRM & Leads
  inquirySchema,
  // Portfolio & Editorial Content
  projectSchema,
  artworkSchema,
  journalSchema,
  serviceSchema,
  brandSchema,
];
