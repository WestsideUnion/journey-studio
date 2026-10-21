import { defineField, defineType } from 'sanity';

export const inquirySchema = defineType({
  name: 'inquiry',
  title: 'Project Inquiry / CRM Lead',
  type: 'document',
  fields: [
    defineField({
      name: 'status',
      title: 'Lead Pipeline Status',
      type: 'string',
      options: {
        list: [
          { title: '🟢 New Lead', value: 'new' },
          { title: '🟡 In Discussion', value: 'in_discussion' },
          { title: '🟣 Proposal Sent', value: 'proposal_sent' },
          { title: '✅ Booked & Contracted', value: 'booked' },
          { title: '⚪ Archived / Passed', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'string',
      options: {
        list: [
          { title: 'High (Immediate Action)', value: 'high' },
          { title: 'Standard', value: 'standard' },
          { title: 'Low / Exploratory', value: 'low' },
        ],
      },
      initialValue: 'standard',
    }),
    defineField({
      name: 'firstName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'brand',
      title: 'Brand / Company Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Contact Role',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Website or Social Link',
      type: 'url',
    }),
    defineField({
      name: 'projectTypes',
      title: 'Project Mediums',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'projectObjective',
      title: 'Primary Objective',
      type: 'string',
    }),
    defineField({
      name: 'distribution',
      title: 'Distribution Channels',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'budget',
      title: 'Production Investment Tier',
      type: 'string',
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline / Launch Window',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location / Geography',
      type: 'string',
    }),
    defineField({
      name: 'discovery',
      title: 'Discovery Source (How they found you)',
      type: 'string',
    }),
    defineField({
      name: 'story',
      title: 'Project Brief / Narrative',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'additionalNotes',
      title: 'Client Notes & Specifics',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'internalNotes',
      title: '🔒 Internal Studio Notes & Call Log',
      description: 'Private notes for Maheen: call summaries, scope estimates, custom quotes, next steps.',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'estimatedValue',
      title: 'Estimated Deal Value ($ CAD/USD)',
      type: 'number',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submission Date & Time',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'firstName',
      subtitle: 'brand',
      status: 'status',
      budget: 'budget',
    },
    prepare({ title, subtitle, status, budget }) {
      const statusIcons: Record<string, string> = {
        new: '🟢 New',
        in_discussion: '🟡 Discussion',
        proposal_sent: '🟣 Proposal',
        booked: '✅ Booked',
        archived: '⚪ Archived',
      };
      const badge = status ? statusIcons[status] || status : 'Lead';
      return {
        title: `${title} (${subtitle || 'Individual'})`,
        subtitle: `${badge} · Budget: ${budget || 'Undisclosed'}`,
      };
    },
  },
  orderings: [
    {
      title: 'Latest Submissions First',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
});
