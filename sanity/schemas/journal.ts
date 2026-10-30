import { defineField, defineType } from 'sanity';

export const journalSchema = defineType({
  name: 'journal',
  title: 'Journal Post / Essay',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
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
      name: 'date',
      title: 'Publish Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Thoughts & Process', value: 'Thoughts' },
          { title: 'Behind the Scenes', value: 'Behind the Scenes' },
          { title: 'Creative Life', value: 'Creative Life' },
          { title: 'Culture & Community', value: 'Culture' },
        ],
      },
      initialValue: 'Thoughts',
    }),
    defineField({
      name: 'readTime',
      title: 'Estimated Read Time',
      type: 'string',
      initialValue: '4 min read',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Hero Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Essay Body Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order Rank',
      description: 'Controls order on the Journal page (0 = First, 1 = Second, etc.)',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order (Low to High)',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' },
        { field: 'date', direction: 'desc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      order: 'order',
      media: 'coverImage',
    },
    prepare({ title, category, order, media }) {
      const rank = typeof order === 'number' ? `#${order + 1} · ` : '';
      return {
        title,
        subtitle: `${rank}${category || ''}`,
        media,
      };
    },
  },
});
