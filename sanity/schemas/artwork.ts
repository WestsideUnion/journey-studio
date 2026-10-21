import { defineField, defineType } from 'sanity';

export const artworkSchema = defineType({
  name: 'artwork',
  title: 'Art Print / Visual Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Artwork Title',
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
      name: 'year',
      title: 'Year',
      type: 'string',
      initialValue: '2024',
    }),
    defineField({
      name: 'medium',
      title: 'Medium / Print Technique',
      type: 'string',
      initialValue: 'Archival pigment print on cotton rag',
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      initialValue: '24 × 36 in (Custom sizing available)',
    }),
    defineField({
      name: 'edition',
      title: 'Edition Details',
      type: 'string',
      initialValue: 'Limited edition of 15 + 2 AP',
    }),
    defineField({
      name: 'status',
      title: 'Availability Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available for Acquisition', value: 'Available' },
          { title: 'Inquire for Availability', value: 'Inquire' },
          { title: 'Private Collection (Sold Out)', value: 'Private Collection' },
        ],
      },
      initialValue: 'Available',
    }),
    defineField({
      name: 'image',
      title: 'Artwork Still / Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Curatorial Notes / Story',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'edition',
      media: 'image',
    },
  },
});
