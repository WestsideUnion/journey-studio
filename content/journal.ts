export interface JournalPost {
  slug: string;
  category: "Thoughts" | "Toronto" | "Behind the Scenes" | "Creative Life";
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const journalPostsData: JournalPost[] = [
  {
    slug: "thoughts-on-creative-culture",
    category: "Thoughts",
    title: "THOUGHTS",
    subtitle: "IDEAS AND PERSPECTIVE CREATIVE CULTURE",
    date: "October 2024",
    readTime: "4 min read",
    excerpt:
      "Why the best creative work begins with point of view before it touches production tools, algorithms, or market trends.",
    content: [
      "In an era dominated by hyper-optimized feeds and standardized visual templates, true distinction comes from conviction. When a brand or artist leads with genuine perspective, the audience feels it immediately.",
      "Cinematic storytelling isn't merely about expensive camera packages or dramatic color grades; it's about honoring the human nuance in the subject and allowing space for stillness.",
      "The stories that endure are the ones that connect on an emotional frequency.",
    ],
    image: "/images/journal/journal-1-thoughts.webp",
  },
  {
    slug: "toronto-constant-inspiration",
    category: "Toronto",
    title: "TORONTO",
    subtitle: "A CONSTANT SOURCE OF INSPIRATION",
    date: "September 2024",
    readTime: "5 min read",
    excerpt:
      "A nocturnal love letter to Toronto's concrete geometry, lakefront winds, and layered cultural fabric.",
    content: [
      "Toronto has a specific mood after midnight. When the streetcar lines hum softly against the asphalt and the blue glow from high-rise glass reflects onto wet sidewalks, the city turns into cinema.",
      "This metropolis is a living tapestry of cultures, sounds, and visual contrasts. Documenting its quiet corners is an ongoing creative dialogue that informs every piece of commercial and artistic work we produce.",
    ],
    image: "/images/journal/journal-2-toronto.webp",
  },
  {
    slug: "behind-the-scenes-process",
    category: "Behind the Scenes",
    title: "BEHIND THE SCENES",
    subtitle: "PROCESS, PEOPLE AND PLACES",
    date: "August 2024",
    readTime: "6 min read",
    excerpt:
      "Deconstructing our lighting approach, location scouting ethos, and how we build trust with subjects on set.",
    content: [
      "Before turning on a single monitor or mounting a lens, our first priority is establishing rapport. Whether we are directing a commercial brand campaign or an intimate portrait session, the subject's comfort determines the truth of the frame.",
      "We build lighting setups that emulate natural practical sources—subtle sodium streetlights, ambient neon, cool twilight window daylight—allowing actors and subjects to move freely rather than being pinned to arbitrary marks.",
    ],
    image: "/images/journal/journal-3-behind-scenes.webp",
  },
  {
    slug: "creative-life-moments",
    category: "Creative Life",
    title: "CREATIVE LIFE",
    subtitle: "MOMENTS IN BETWEEN",
    date: "July 2024",
    readTime: "3 min read",
    excerpt:
      "On cultivating creative endurance, protecting downtime, and finding inspiration outside of the industry bubble.",
    content: [
      "Creativity is cyclical. The impulse to constantly generate output can easily erode the very curiosity that made you pick up a camera or write in the first place.",
      "We preserve moments of pure visual play—walking without an agenda, listening to conversations in late-night diners, observing light move across a bedroom wall—because that is where the seed of every meaningful story begins.",
    ],
    image: "/images/journal/journal-4-creative-life.webp",
  },
];
