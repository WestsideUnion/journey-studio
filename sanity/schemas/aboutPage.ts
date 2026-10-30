import { defineField, defineType } from 'sanity';

export const aboutPageSchema = defineType({
  name: 'aboutPage',
  title: 'About Page Content & Visuals',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'About Page Content & Visuals',
      readOnly: true,
      hidden: true,
    }),

    // ─── HEADER SECTION ───
    defineField({
      name: 'heroHeading',
      title: 'Main Headline',
      description: 'Use line breaks (Enter) to split across lines.',
      type: 'text',
      rows: 3,
      initialValue: 'STORIES\nTHAT HELP PEOPLE\nFEEL & CONNECT',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTagline',
      title: 'Role Tagline (Blue Mono Subtitle)',
      type: 'string',
      initialValue: 'ARTIST · PHOTOGRAPHER · CREATIVE DIRECTOR · COMMUNITY BUILDER',
    }),

    // ─── HERO / PORTRAIT IMAGE ───
    defineField({
      name: 'heroImage',
      title: 'Main About Banner / Portrait Image',
      description: 'Large widescreen image displayed below the headline.',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          initialValue: 'Maheen creative practice environmental portrait',
        }),
      ],
    }),
    defineField({
      name: 'heroImageCaption',
      title: 'Image Overlay Caption',
      description: 'Small monospace caption at the bottom-left of the main image.',
      type: 'string',
      initialValue: '[ MAHEEN // JOURNEY STUDIO · TORONTO, CANADA ]',
    }),

    // ─── 01 THE STUDIO / BIOGRAPHY ───
    defineField({
      name: 'studioHeading',
      title: '01 Section Heading',
      type: 'string',
      initialValue: 'POINT OF VIEW',
    }),
    defineField({
      name: 'bioLead',
      title: 'Biography Lead Paragraph (Large White Text)',
      type: 'text',
      rows: 3,
      initialValue:
        'Journey Studio was founded by Maheen to bridge the spaces between commercial visual storytelling, fine art, and human community.',
    }),
    defineField({
      name: 'bioParagraphs',
      title: 'Biography Supporting Paragraphs',
      description: 'Add, edit, or reorder paragraphs in the Point of View section.',
      type: 'array',
      of: [{ type: 'text', rows: 3 }],
      initialValue: [
        'Rather than operating like a traditional ad agency defined by rigid deliverables and corporate jargon, Journey Studio approaches every project through the lens of genuine culture and emotional connection. The work is observant, cinematic, and deeply human before it is commercial.',
        'Based in Toronto and collaborating globally, the studio works with brands, founders, and cultural platforms who believe in the enduring power of meaningful stories.',
      ],
    }),
    defineField({
      name: 'portraitImage',
      title: 'Optional Secondary Portrait / Studio Photo',
      description: 'Optional photo displayed alongside the Point of View biography section.',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          initialValue: 'Maheen — Journey Studio',
        }),
      ],
    }),

    // ─── 02 PRACTICE AREAS / DISCIPLINES ───
    defineField({
      name: 'disciplines',
      title: '02 Practice Areas (Disciplines Grid)',
      description: 'Edit or drag-and-drop to reorder the practice area cards.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'disciplineItem',
          title: 'Practice Area',
          fields: [
            defineField({
              name: 'title',
              title: 'Discipline Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'desc',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Optional Card Image',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'desc',
              media: 'image',
            },
          },
        },
      ],
    }),

    // ─── 03 RECORD / EXHIBITIONS & COLLABORATIONS ───
    defineField({
      name: 'recordHeading',
      title: '03 Record Section Heading',
      type: 'string',
      initialValue: 'EXHIBITIONS & COLLABORATIONS',
    }),
    defineField({
      name: 'recordLabel',
      title: 'Record Box Header Label',
      type: 'string',
      initialValue: '[VERIFIED EXHIBITIONS & RELEASES]',
    }),
    defineField({
      name: 'exhibitions',
      title: 'Exhibitions, Releases & Talks List',
      description: 'Each item appears as a bullet line in the Record section.',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        '2024 — Nocturne Series: Fine Art Photography Print Release',
        '2024 — Ideas Are Better Together: Cultural Salon Series (Toronto)',
        '2023 — Collective Pulse: Community Visual Archive Exhibition',
        '[ADD VERIFIED CLIENT LOGOS & TALKS]',
      ],
    }),

    // ─── BOTTOM CALL TO ACTION ───
    defineField({
      name: 'ctaHeading',
      title: 'Bottom CTA Heading',
      type: 'string',
      initialValue: 'READY TO COLLABORATE?',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Bottom CTA Description',
      type: 'text',
      rows: 2,
      initialValue:
        'Whether you are commissioning a film, launching a visual brand identity, or booking an art acquisition.',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Bottom CTA Button Label',
      type: 'string',
      initialValue: 'START A PROJECT',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page Content & Visuals',
        subtitle: 'Biography, Images, Practice Areas & Exhibitions',
      };
    },
  },
});

