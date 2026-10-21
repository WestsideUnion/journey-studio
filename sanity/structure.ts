import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Journey Studio Studio')
    .items([
      // 1. Studio CRM Section
      S.listItem()
        .title('📬 Inquiries & Leads (CRM)')
        .child(
          S.list()
            .title('CRM Pipeline')
            .items([
              S.listItem()
                .title('All Inquiries')
                .child(
                  S.documentList()
                    .title('All Inquiries')
                    .apiVersion('2024-10-20')
                    .filter('_type == "inquiry"')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('🟢 New Leads')
                .child(
                  S.documentList()
                    .title('New Leads')
                    .apiVersion('2024-10-20')
                    .filter('_type == "inquiry" && status == "new"')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('🟡 In Discussion')
                .child(
                  S.documentList()
                    .title('Active Discussions')
                    .apiVersion('2024-10-20')
                    .filter('_type == "inquiry" && status == "in_discussion"')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('🟣 Proposals Sent')
                .child(
                  S.documentList()
                    .title('Proposals Sent')
                    .apiVersion('2024-10-20')
                    .filter('_type == "inquiry" && status == "proposal_sent"')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('✅ Booked Projects')
                .child(
                  S.documentList()
                    .title('Booked Projects')
                    .apiVersion('2024-10-20')
                    .filter('_type == "inquiry" && status == "booked"')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('⚪ Archived')
                .child(
                  S.documentList()
                    .title('Archived Inquiries')
                    .apiVersion('2024-10-20')
                    .filter('_type == "inquiry" && status == "archived"')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
            ])
        ),

      S.divider(),

      // 2. Editorial & Portfolio Content
      S.listItem()
        .title('🎬 Portfolio Projects')
        .child(S.documentTypeList('project').title('Case Studies & Film Projects')),

      S.listItem()
        .title('🖼️ Art & Visuals')
        .child(S.documentTypeList('artwork').title('Fine Art Prints & Editions')),

      S.listItem()
        .title('✍️ Journal & Essays')
        .child(S.documentTypeList('journal').title('Journal Articles')),

      S.listItem()
        .title('⚡ Services & Capabilities')
        .child(S.documentTypeList('service').title('Studio Services')),

      S.listItem()
        .title('🤝 Client Collaborations')
        .child(S.documentTypeList('brand').title('Partner Brands & Logos')),
    ]);
