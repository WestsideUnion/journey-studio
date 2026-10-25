import { defineField, defineType } from 'sanity';

export const landingPageSchema = defineType({
  name: 'landingPage',
  title: 'Landing Page Visuals',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Landing Page Visuals & Backgrounds',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'heroBackground',
      title: 'Hero Section Background Image',
      description: 'The silhouette & skyline image displayed on the right side of the main Hero section.',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Accessibility description for screen readers and SEO.',
          initialValue: 'Toronto nocturnal skyline with CN Tower and silhouette',
        }),
        defineField({
          name: 'opacity',
          title: 'Image Opacity (%)',
          type: 'number',
          description: 'Opacity of the image (default: 85). Range from 20 to 100.',
          initialValue: 85,
          validation: (Rule) => Rule.min(20).max(100),
        }),
      ],
    }),
    defineField({
      name: 'closingBackground',
      title: 'Closing "Have a Story in Mind?" Background Image',
      description: 'Background image displayed behind the closing invitation section at the bottom of the landing page.',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Accessibility description for screen readers and SEO.',
          initialValue: 'Have a story in mind? Journey Studio collaboration',
        }),
        defineField({
          name: 'opacity',
          title: 'Image Opacity (%)',
          type: 'number',
          description: 'Opacity of the image (default: 85). Range from 20 to 100.',
          initialValue: 85,
          validation: (Rule) => Rule.min(20).max(100),
        }),
      ],
    }),
    defineField({
      name: 'meetMaheenImage',
      title: 'Meet Maheen Portrait / Photo',
      description: 'Featured editorial photo in the "03 Meet Maheenblues" section.',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          initialValue: 'Maheen, Toronto-based artist, photographer and founder of Journey Studio',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Landing Page Visuals',
        subtitle: 'Hero, Closing, and Section Backgrounds',
      };
    },
  },
});
