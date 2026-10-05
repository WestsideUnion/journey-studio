import { z } from "zod";

export const inquirySchema = z.object({
  email: z.string().email("Please provide a valid email address"),
  firstName: z.string().min(2, "First name is required"),
  brand: z.string().optional(),
  role: z.string().optional(),
  website: z.string().optional(),
  projectObjective: z.string().optional(),
  distribution: z.array(z.string()).optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  brandAesthetic: z.string().optional(),
  attraction: z.string().optional(),
  story: z.string().min(10, "Please tell us a bit about your project narrative"),
  location: z.string().optional(),
  honeypot: z.string().max(0, "Bot submission detected").optional(),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
