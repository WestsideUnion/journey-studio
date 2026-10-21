import { defineField, defineType } from 'sanity';

export const brandSchema = defineType({
  name: 'brand',
  title: 'Client & Partner Collaboration',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner / Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Collaboration Focus (e.g. Content & Community)',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Monochrome / Minimal Logo Asset',
      type: 'image',
    }),
    defineField({
      name: 'url',
      title: 'Partner Website Link',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Grid Display Order Rank',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'logo',
    },
  },
});
