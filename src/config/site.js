/**
 * ICAMI 2026 — single source of truth for navigation, copy, and structured content.
 * Update dates and submission URLs here as they are announced.
 */

export const site = {
  url: "https://icami.net",
  shortTitle: "ICAMI 2026",
  fullTitle: "International Conference on Advanced Machine Intelligence",
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
    label: "Submission deadline",
    date: "July 30, 2026",
    highlight: true,
    linebreak: false
  },
  {
    label: "Notification of acceptance",
    date: "October 15, 2026",
    highlight: true,
    linebreak: false
      
  },
  {
    label: "Registration & Camera-ready deadline",
    date: "October 31, 2026",
    highlight: true,
    linebreak: false
  },
  {
    label: "Conference dates",
    date: "November 19-21, 2026",
    highlight: true,
    linebreak: false
  },
];

/** Primary navigation (always visible on large screens). */
export const navPrimary = [
  { href: "/", label: "Home" },
  // { href: "/announcements", label: "Announcements" },
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
  { href: "/contact", label: "Contact" },
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
    description:
      "From the call for papers through camera-ready files and how you present.",
    links: [
      { href: "/announcements", label: "Announcements" },
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
      // { href: "/contact", label: "Contact" },
    ],
  },
];

/** Shortcuts — mobile dock pills. */
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
    slug: "general-trustworthy-autonomous",
    title: "General, Trustworthy, and Autonomous Intelligence",
    summary:
      "Core learning architectures and reasoning for robust, explainable, safety-aware autonomy in real-world systems.",
    bullets: [
      "General-purpose learning architectures",
      "Autonomous decision-making systems",
      "Self-supervised, lifelong, and meta-learning",
      "Cognitive architectures and reasoning systems",
      "Multi-agent intelligence and coordination",
      "Embodied intelligence and adaptive agents",
      "Planning, reasoning, and problem-solving systems",
      "Explainable and interpretable AI",
      "Fairness, bias detection, and mitigation",
      "Ethical AI and governance frameworks",
      "Causal reasoning and transparency in AI",
      "Privacy-preserving and secure AI",
      "Robustness, uncertainty, and reliability in AI systems",
      "AI safety, alignment, and responsible deployment",
    ],
  },
  {
    slug: "generative-quantum-scalable",
    title: "Generative, Quantum, and Scalable Intelligence",
    summary:
      "Foundation and agentic generative systems, quantum machine learning, and scalable/distributed AI architectures.",
    bullets: [
      "Large Language Models and foundation models",
      "Multimodal generative systems",
      "Retrieval-augmented generation (RAG)",
      "Agentic AI and tool-augmented systems",
      "Hallucination mitigation and controllability",
      "Efficient and low-resource generative models",
      "Synthetic data generation and augmentation",
      "Quantum machine learning algorithms",
      "Quantum neural networks and hybrid systems",
      "Quantum optimization and reinforcement learning",
      "Scalable AI systems and architectures",
      "Distributed and high-performance AI systems",
      "Energy-efficient and resource-aware AI",
      "Green AI and sustainable model training",
      "Resilient AI systems under constraints and failures",
    ],
  },
  {
    slug: "healthcare-intelligent-medical-systems",
    title: "AI for Healthcare and Intelligent Medical Systems",
    summary:
      "Methods and systems for clinical decision support, medical imaging, remote monitoring, and biomedical analytics.",
    bullets: [
      "AI for medical imaging and diagnostics",
      "Clinical decision support systems",
      "Remote monitoring and digital health",
      "AI in bioinformatics and precision medicine",
      "AI-driven healthcare analytics and prediction",
      "Intelligent medical devices and systems",
    ],
  },
  {
    slug: "industry-infrastructure-smart-systems",
    title: "AI for Industry, Infrastructure, and Smart Systems",
    summary:
      "Applied AI for industry and infrastructure: manufacturing, transportation, IoT/cyber-physical systems, energy, and agriculture.",
    bullets: [
      "Smart manufacturing and Industry 4.0",
      "Predictive maintenance and fault detection",
      "Digital twins and simulation systems",
      "Intelligent transportation systems",
      "AI for IoT and cyber-physical systems",
      "AI for energy management and smart grids",
      "AI for agriculture and smart farming",
      "AI for business intelligence and real-world deployment",
    ],
  },
];

/** Homepage preview: first N tracks with link to full page. */
export const tracksHomePreviewCount = 4;

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
    affiliation:
      "Professor, Department of Computer Science, University of Aizu, Japan",
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
