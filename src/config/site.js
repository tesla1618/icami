/**
 * ICAMI 2026 — single source of truth for navigation, copy, and structured content.
 * Update dates and submission URLs here as they are announced.
 */

export const site = {
  shortTitle: "ICAMI 2026",
  fullTitle: "International Conference on Applied Machine Intelligence",
  location: "Multimedia University (MMU), Malaysia",
  tagline: "Advancing Intelligent Systems for Real-World Impact",
  contactEmail: "contact@icami.net",
  social: {
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  /**
   * Site implementation credit — footer. Name → GitHub; lab → official site.
   */
  developer: {
    name: "Rajieb",
    githubUrl: "https://github.com/tesla1618",
    affiliation: "Advanced Machine Intelligence Research Lab",
    labUrl: "https://amirl.org",
  },
};

/** ICAMI 2026 timeline. */
export const importantDates = [
  {
    label: "Paper submission deadline",
    date: "July 2026",
    highlight: true,
  },
  {
    label: "Notification of acceptance",
    date: "October 2026",
    highlight: true,
  },
  {
    label: "Camera-ready deadline",
    date: "November 2026",
    highlight: true,
  },
  {
    label: "Conference dates",
    date: "December 2026",
    highlight: true,
  },
];

/** Primary navigation (always visible on large screens). */
export const navPrimary = [
  { href: "/", label: "Home" },
  { href: "/call-for-papers", label: "Call for Papers" },
  { href: "/tracks", label: "Tracks" },
  { href: "/submission", label: "Submission" },
  { href: "/important-dates", label: "Important Dates" },
  { href: "/program", label: "Program" },
  { href: "/keynotes", label: "Keynotes" },
  { href: "/organizing-committee", label: "Organizing Committee" },
  { href: "/registration", label: "Registration" },
  { href: "/venue", label: "Venue" },
  { href: "/sponsors", label: "Sponsors" },
];

/** Secondary — grouped under “More” to keep the bar calm. */
export const navMore = [
  { href: "/camera-ready", label: "Camera-ready guidelines" },
  { href: "/presentation-guidelines", label: "Presentation guidelines" },
  { href: "/registration/fees", label: "Registration fees" },
  { href: "/registration/guidelines", label: "Registration guidelines" },
  { href: "/workshops", label: "Workshops & Tutorials" },
  { href: "/accepted-papers", label: "Accepted Papers" },
  { href: "/awards", label: "Awards" },
  { href: "/faq", label: "FAQ" },
  { href: "/code-of-conduct", label: "Code of Conduct" },
];

/**
 * Explore overlay — pillar cards + descriptions. Keep in sync with routes.
 */
export const navGroups = [
  {
    title: "Authors & submissions",
    description: "From the call for papers through camera-ready files and how you present.",
    links: [
      { href: "/", label: "Home" },
      { href: "/call-for-papers", label: "Call for Papers" },
      { href: "/tracks", label: "Tracks" },
      { href: "/submission", label: "Submission" },
      { href: "/important-dates", label: "Important Dates" },
      { href: "/camera-ready", label: "Camera-ready guidelines" },
      { href: "/presentation-guidelines", label: "Presentation guidelines" },
      { href: "/accepted-papers", label: "Accepted Papers" },
    ],
  },
  {
    title: "Program & experience",
    description: "Schedule, keynotes, workshops, and recognition.",
    links: [
      { href: "/program", label: "Program" },
      { href: "/keynotes", label: "Keynotes" },
      { href: "/workshops", label: "Workshops & Tutorials" },
      { href: "/awards", label: "Awards" },
    ],
  },
  {
    title: "Attend & venue",
    description: "Registration, fees, policies, travel, and partners.",
    links: [
      { href: "/registration", label: "Registration" },
      { href: "/registration/fees", label: "Registration fees" },
      { href: "/registration/guidelines", label: "Registration guidelines" },
      { href: "/venue", label: "Venue" },
      { href: "/sponsors", label: "Sponsors" },
    ],
  },
  {
    title: "Organization & policies",
    description: "Committees, conduct, and answers to common questions.",
    links: [
      { href: "/organizing-committee", label: "Organizing Committee" },
      { href: "/faq", label: "FAQ" },
      { href: "/code-of-conduct", label: "Code of Conduct" },
    ],
  },
];

/** Shortcuts — top bar pills + mobile dock. */
export const navQuick = [
  { href: "/call-for-papers", label: "CfP" },
  { href: "/submission", label: "Submit" },
];

export const footerQuick = [
  { href: "/call-for-papers", label: "Call for Papers" },
  { href: "/submission", label: "Submission" },
  { href: "/tracks", label: "Tracks" },
  { href: "/important-dates", label: "Important Dates" },
];

export const tracks = [
  {
    slug: "foundations",
    title: "Foundations of Applied Machine Intelligence",
    summary:
      "Learning theory, optimization, generalization, and theoretical grounding for deployed intelligent systems.",
    bullets: [
      "Learning theory in real-world settings",
      "Optimization techniques for modern ML systems",
      "Generalization, robustness, and data-centric AI",
      "Theoretical insights for applied intelligence systems",
    ],
  },
  {
    slug: "representation-generative",
    title: "Representation Learning and Generative Models",
    summary:
      "Self-supervised learning, generative modeling, multimodal and foundation models across domains.",
    bullets: [
      "Self-supervised and unsupervised learning",
      "Generative models including GANs and diffusion models",
      "Multimodal and foundation models",
      "Representation learning for complex data domains",
    ],
  },
  {
    slug: "perception",
    title: "Intelligent Perception Systems",
    summary:
      "Vision, multimodal perception, 3D understanding, video, and imaging for science and industry.",
    bullets: [
      "Vision-language and multimodal perception",
      "3D vision and scene understanding",
      "Video analytics and temporal modeling",
      "Medical image analysis and biomedical imaging",
    ],
  },
  {
    slug: "language-reasoning",
    title: "Language Intelligence and Reasoning Systems",
    summary:
      "LLMs, retrieval and knowledge integration, reasoning, planning, and multilingual NLP.",
    bullets: [
      "Large language models and foundation NLP systems",
      "Retrieval-augmented generation and knowledge integration",
      "Machine reasoning, planning, and decision-making",
      "Multilingual and low-resource language processing",
    ],
  },
  {
    slug: "systems",
    title: "AI Systems and Scalable Intelligence",
    summary:
      "Distributed training, efficient inference, MLOps, and systems for large-scale AI workloads.",
    bullets: [
      "Distributed and large-scale machine learning systems",
      "Efficient training and inference for deep models",
      "MLOps, model lifecycle, and deployment pipelines",
      "Systems for foundation and large-scale AI models",
    ],
  },
  {
    slug: "trustworthy",
    title: "Trustworthy, Secure, and Responsible AI",
    summary:
      "Explainability, fairness, robustness, privacy, and governance for high-stakes deployment.",
    bullets: [
      "Explainable and interpretable AI systems",
      "Fairness, bias mitigation, and ethical AI",
      "Adversarial machine learning and robustness",
      "Privacy-preserving and secure AI techniques",
    ],
  },
  {
    slug: "edge-cps",
    title: "Edge Intelligence and Cyber-Physical Systems",
    summary:
      "Edge AI, TinyML, IoT, robotics, and real-time intelligence under resource constraints.",
    bullets: [
      "Edge AI and TinyML",
      "Intelligent IoT systems and embedded AI",
      "Autonomous systems and robotics integration",
      "Real-time and resource-constrained AI applications",
    ],
  },
  {
    slug: "science-impact",
    title: "AI for Scientific Discovery and High-Impact Applications",
    summary:
      "AI in healthcare, climate and sustainability, scientific computing, and broad societal impact.",
    bullets: [
      "AI in healthcare and biomedical sciences",
      "Climate science, sustainability, and environmental AI",
      "Scientific computing and data-driven discovery",
      "AI applications in engineering, industry, and society",
    ],
  },
];

/** Homepage preview: first N tracks with link to full page. */
export const tracksHomePreviewCount = 6;

/**
 * Temporary keynote roster sourced from current committee members.
 * Replace with confirmed invited speakers as invitations finalize.
 */
export const keynotes = [
  {
    name: "Prof. Dr. Mohammad Firoz Mridha",
    affiliation:
      "Professor & Head, Department of CSE, American International University-Bangladesh (AIUB)",
    talkTitle: "Keynote title to be announced",
    image: "https://cdn.icami.net/speakers/dmfm.png",
  },
  {
    name: "Prof. Dr. Jungpil Shin",
    affiliation: "Professor, Department of Computer Science, University of Aizu, Japan",
    talkTitle: "Keynote title to be announced",
    image: "https://cdn.icami.net/speakers/shin.jpg",
  },
  {
    name: "Prof. Dr. Muhammad Mostofa Monwar",
    affiliation: "Professor, Department of IT, King Abdulaziz University",
    talkTitle: "Keynote title to be announced",
    image: "https://cdn.icami.net/speakers/mostofa.jpeg",
  },
  {
    name: "Prof. Dr. Md. Abdul Hamid",
    affiliation: "Professor, Department of IT, King Abdulaziz University",
    talkTitle: "Keynote title to be announced",
  },
  {
    name: "Dr. Nilanjan Dey",
    affiliation:
      "Professor, Department of Computer Science, Techno International New Town",
    talkTitle: "Keynote title to be announced",
  },
];

export const keynotesHomePreviewCount = 3;

/** Sponsors and organizing partners (logo assets hosted on cdn.icami.net). */
export const sponsorGroups = [
  {
    title: "Organizer",
    items: [
      {
        name: "AMIR Lab",
        logo: "https://cdn.icami.net/orgs/amirlab.png",
        href: "https://amirl.org",
      },
    ],
  },
  {
    title: "Sponsors",
    items: [
      {
        name: "IEEE",
        logo: "https://cdn.icami.net/orgs/ieee.png",
      },
      {
        name: "Academist",
        logo: "https://cdn.icami.net/orgs/academist.png",
      },
    ],
  },
  {
    title: "Publication Partner",
    items: [
      {
        name: "IEEE Xplore",
        logo: "https://cdn.icami.net/orgs/ieeex.png",
      },
    ],
  },
];
