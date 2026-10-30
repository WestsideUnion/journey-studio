import { defineField, defineType } from 'sanity';

export const serviceSchema = defineType({
  name: 'service',
  title: 'Studio Capability / Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Detailed Overview',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'deliverables',
      title: 'Included Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Service Row Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order Rank',
      description: 'Controls order on Homepage (top 4) and Services page (0 = First, 1 = Second, etc.)',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order (Low to High)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      order: 'order',
      media: 'image',
    },
    prepare({ title, subtitle, order, media }) {
      const rank = typeof order === 'number' ? `#${order + 1} · ` : '';
      return {
        title,
        subtitle: `${rank}${subtitle || ''}`,
        media,
      };
    },
  },
});
