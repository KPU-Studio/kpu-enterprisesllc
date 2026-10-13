// All site copy lives here so pages stay layout-only.
// Copy is carried over from the previous static site.

export const site = {
  name: "Qorvyn Systems",
  url: "https://qorvynsystems.com",
  email: "info@qorvynsystems.com",
  description:
    "Enterprise-grade IT consulting, cybersecurity, cloud infrastructure, DevSecOps, API integration and AI solutions for small and mid-sized businesses.",
  cta: { label: "Book a free 30-minute strategy session", short: "Book a strategy session", href: "/contact" },
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export type Service = {
  slug: string;
  title: string;
  label: string; // short name used in diagrams and tags
  summary: string;
  overview: string;
  audience: string;
  scope: string[];
  // Optional featured offering rendered on the service detail page.
  feature?: {
    eyebrow: string;
    headline: string;
    intro: string;
    promise: string;
    offerings: { title: string; body: string }[];
    segmentsTitle: string;
    segments: { title: string; body: string }[];
  };
};

export const services: Service[] = [
  {
    slug: "it-strategy",
    title: "IT Strategy & Advisory",
    label: "Strategy",
    summary:
      "Turn technology decisions into a clear roadmap. We assess what you have, identify the gaps that matter, and prioritize investments around growth, resilience, and cost.",
    overview:
      "This service brings business priorities, current technology, and future decisions into one practical view. The work focuses on understanding the existing environment, identifying the gaps that matter, and setting a roadmap that helps leaders make informed technology investments.",
    audience:
      "Leaders and growing organizations that need a clearer technology roadmap, an objective architecture review, or informed guidance when evaluating vendors and investments.",
    scope: ["Technology roadmaps", "Architecture reviews", "Vendor guidance"],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    label: "Cloud",
    summary:
      "Design, deploy, and manage dependable cloud environments with deep AWS expertise, working knowledge across major cloud platforms, and secure, repeatable Infrastructure as Code.",
    overview:
      "Cloud and infrastructure work starts with the operating need: reliability, security, repeatability, and a foundation the team can understand. We design and deploy cloud environments around those requirements, using Infrastructure as Code to make the solution more consistent and maintainable.",
    audience:
      "Organizations planning a cloud solution, improving an existing environment, or establishing a dependable architecture that can grow without unnecessary complexity.",
    scope: ["Cloud solution deployment", "AWS expertise", "Infrastructure as Code", "Solution architecture"],
  },
  {
    slug: "devsecops",
    title: "DevSecOps & Secure CI/CD",
    label: "CI/CD",
    summary:
      "Build security into every stage of software delivery so teams can release faster without treating security as a final checkpoint.",
    overview:
      "DevSecOps connects delivery speed with disciplined security. We integrate automated controls, testing, secrets management, and policy into development pipelines so security becomes part of the way software moves from change to release.",
    audience:
      "Software teams that want a more secure, repeatable delivery process without adding a separate final gate that slows every release.",
    scope: ["Secure CI/CD pipelines", "Automated security testing", "Secrets management", "Policy as Code"],
    feature: {
      eyebrow: "Managed GitLab Services",
      headline: "Your development infrastructure, fully managed.",
      intro:
        "Focus on building great software while we take care of your GitLab environment. We provide professional GitLab hosting, administration, DevOps automation, security, and ongoing support for startups, small businesses, development teams, and growing organizations—whether you are setting up GitLab for the first time, migrating from another platform, or need an experienced team to manage existing infrastructure.",
      promise:
        "Enterprise-grade DevOps infrastructure without the complexity and cost of maintaining it yourself.",
      offerings: [
        {
          title: "Managed GitLab Hosting",
          body: "Fully managed GitLab environments hosted in secure cloud or dedicated infrastructure. We handle installation, configuration, maintenance, and day-to-day administration.",
        },
        {
          title: "CI/CD Pipeline Management",
          body: "Automate your software development lifecycle with professionally configured GitLab CI/CD pipelines, runners, build automation, testing, and deployments.",
        },
        {
          title: "Security & Compliance",
          body: "Protect your development environment through access controls, secure configurations, vulnerability management, audit support, and security best practices.",
        },
        {
          title: "Backup & Disaster Recovery",
          body: "Keep your critical development assets protected with automated backups, monitoring, documented recovery procedures, and periodic restore testing.",
        },
        {
          title: "GitLab Migration & Implementation",
          body: "Move from GitHub, Bitbucket, legacy Git servers, or existing GitLab environments with professional migration planning and minimal disruption.",
        },
        {
          title: "Ongoing Administration & Support",
          body: "We handle upgrades, user administration, troubleshooting, performance optimization, runner maintenance, and continuous technical assistance.",
        },
      ],
      segmentsTitle: "Built for teams that need reliable DevOps without the overhead.",
      segments: [
        {
          title: "Startups",
          body: "Launch your development infrastructure quickly without hiring a full-time DevOps engineer.",
        },
        {
          title: "Small & medium businesses",
          body: "Get a professionally managed GitLab environment with predictable monthly costs.",
        },
        {
          title: "Software development agencies",
          body: "Manage multiple projects, development teams, and automated delivery pipelines from one reliable platform.",
        },
        {
          title: "Professional & consulting firms",
          body: "Maintain secure, private repositories for internal development, automation, and client projects.",
        },
        {
          title: "Growing technology teams",
          body: "Scale your GitLab infrastructure as your team, repositories, and deployment requirements grow.",
        },
      ],
    },
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Consulting",
    label: "Security",
    summary:
      "Reduce risk with practical safeguards matched to your operations, strengthening access, endpoints, networks, and recovery plans without slowing the business down.",
    overview:
      "Cybersecurity work is prioritized around the risks that matter to the operation. We assess the current environment, strengthen safeguards, and improve recovery readiness so the business is better protected without adding controls that create avoidable friction.",
    audience:
      "Organizations that need a clearer view of security risk, stronger identity and access practices, or practical IT disaster recovery guidance and support.",
    scope: ["Security assessments", "Identity & access", "IT disaster recovery", "Risk reduction"],
  },
  {
    slug: "api-automation",
    title: "API Integration & Automation",
    label: "APIs",
    summary:
      "Connect applications, data, and workflows through secure, reliable APIs that reduce manual work and help systems operate as one.",
    overview:
      "Integration work focuses on making information move reliably between the systems that need it. We design, implement, and load-test APIs and automate workflows so teams spend less time re-entering data and managing disconnected handoffs.",
    audience:
      "Teams relying on disconnected applications, duplicated data entry, or manual workflows that make the operation slower and harder to see.",
    scope: ["API design & integration", "API load testing", "Workflow automation", "Systems integration"],
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning Solutions",
    label: "AI agents",
    summary:
      "Put AI to work on practical business needs with governed, observable paths from readiness and experimentation to production.",
    overview:
      "AI work begins with a defined business need and a realistic view of readiness. We assess the opportunity, engineer custom and autonomous AI agents, integrate tailored models and LLM-powered tools, and establish governed, observable paths into production.",
    audience:
      "Organizations with a practical AI use case that need to assess readiness, develop custom agents, improve observability, or move machine learning work toward reliable production use.",
    scope: ["AI strategy & readiness", "Agentic AI", "AI agent development", "Custom AI agents", "Agent observability", "MLOps & deployment"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

// Hero focus switch. Each focus lights up the matching rails in the diagram.
export const focuses = [
  {
    id: "secure",
    word: "secure",
    line: "Close access gaps, harden recovery, and build security into every release.",
    services: ["cybersecurity", "devsecops"],
  },
  {
    id: "modernize",
    word: "modernize",
    line: "Move to dependable cloud foundations and connect the tools your team already uses.",
    services: ["cloud-infrastructure", "api-automation"],
  },
  {
    id: "build",
    word: "build",
    line: "Set a clear roadmap, then put AI to work where it has a real business purpose.",
    services: ["it-strategy", "ai-machine-learning"],
  },
] as const;

export const process = [
  { title: "Understand the operation", body: "We learn how work moves through your business, where the risks are, and what success needs to look like." },
  { title: "Design the right-sized solution", body: "We choose practical technologies that fit the need today and leave room for what comes next." },
  { title: "Deliver with visibility", body: "You get clear milestones, plain-language decisions, and a direct view of progress throughout the work." },
  { title: "Improve beyond launch", body: "We measure what changed, address what did not, and help your systems keep pace with the business." },
];

export const measures = [
  { title: "Delivery velocity", detail: ["Deployment frequency", "Lead time for changes"] },
  { title: "System reliability", detail: ["Uptime", "Mean time to recovery"] },
  { title: "Operational efficiency", detail: ["Hours saved", "Manual steps removed"] },
  { title: "Security improvement", detail: ["Findings remediated", "Time to resolution"] },
];

export const values = [
  { title: "Business outcomes first", body: "We measure technology decisions against operational priorities: reliability, efficiency, risk, and room to grow." },
  { title: "Security built in", body: "We consider security from architecture through delivery, so protection supports the work instead of slowing it down." },
  { title: "Clarity over complexity", body: "We make tradeoffs visible, explain decisions in plain language, and avoid adding tools or process without a clear purpose." },
  { title: "Right-sized partnership", body: "We shape each engagement around the problem, your team, and the capacity you need, without defaulting to an oversized solution." },
];

export const impact = [
  { label: "Reliability", title: "Keep operations moving", body: "Strengthen reliability and recovery readiness so outages and recurring disruptions consume less time." },
  { label: "Efficiency", title: "Automate repetitive work", body: "Connect systems and streamline manual workflows so teams can focus more of their time on higher-value work." },
  { label: "Cost control", title: "Control technology costs", body: "Prioritize investments, reduce avoidable complexity, and align infrastructure capacity with actual business needs." },
  { label: "Momentum", title: "Deliver faster with confidence", body: "Improve delivery pipelines, integration, security, and visibility so teams can move without creating hidden risk." },
];

export const engagement = {
  scenario:
    "A mid-sized professional services firm relies on disconnected SaaS tools, spreadsheets, and email threads. Teams re-enter the same information across systems, approvals are difficult to track, and leaders lack one reliable view of active client work.",
  steps: [
    { phase: "Assess", title: "Map the operation and its risks", body: "IT Strategy & Advisory clarifies the workflow, priorities, ownership, and roadmap. Cybersecurity Consulting identifies access, data-handling, and recovery requirements before the solution is designed." },
    { phase: "Connect", title: "Design the integration layer", body: "API Integration & Automation connects the core tools, validates data as it moves, and replaces repetitive handoffs with traceable workflows." },
    { phase: "Establish", title: "Build a reliable cloud foundation", body: "Cloud & Infrastructure provides managed services, secure access, monitoring, and repeatable Infrastructure as Code so the environment can be understood and maintained." },
    { phase: "Improve", title: "Secure delivery and add intelligence carefully", body: "DevSecOps & Secure CI/CD adds automated checks to each change. AI & ML Solutions is considered only where a defined use case, such as document intake or knowledge retrieval, has the right data and a clear business purpose." },
  ],
  outcome:
    "Fewer manual handoffs, a more reliable source of truth, clearer operational visibility, and more team time available for client work.",
};

export const audiences = [
  { title: "Operations leaders", body: "Turning recurring friction into clearer systems, better visibility, and dependable execution." },
  { title: "IT managers", body: "Adding focused expertise for modernization, security, integration, and delivery priorities." },
  { title: "Growing teams", body: "Building the technical foundation needed to scale without carrying unnecessary complexity." },
];

export const faqs = [
  { q: "What kinds of organizations do you work with?", a: "We work with commercial organizations that need experienced technology guidance or delivery support, especially growing businesses modernizing systems, strengthening security, improving software delivery, or connecting tools and data." },
  { q: "How does an engagement begin?", a: "We start with a focused strategy session to understand the business objective, current environment, constraints, and risks. From there, we define a practical scope, clear milestones, and the right delivery approach before implementation begins." },
  { q: "Can you work alongside our internal team or existing vendors?", a: "Yes. Qorvyn can lead a defined initiative or work as an extension of your internal technology team. We coordinate responsibilities early, document decisions, and keep delivery visible so everyone stays aligned." },
  { q: "Do you handle both one-time projects and ongoing support?", a: "Yes. Engagements can be structured around a specific assessment, implementation, migration, or integration, or continue through optimization and operational support when the work calls for it." },
  { q: "How is security incorporated into delivery?", a: "Security is considered from the start, not added at the end. That can include identity and access controls, secure architecture, automated testing, secrets management, policy as code, logging, and recovery planning based on the engagement." },
  { q: "What does your AI and machine learning work focus on?", a: "We focus on practical use cases with a clear business purpose. That may include readiness assessments, agentic workflows, custom AI agents, document intelligence, tailored models, agent observability, integration with existing systems, and a reliable path from experiment to production." },
];

// Contact form posts to Web3Forms (same key as the previous site).
export const contactForm = {
  endpoint: "https://api.web3forms.com/submit",
  accessKey: "c32b86e8-590c-4391-96fa-b504fdca8657",
  subject: "New website inquiry — Qorvyn Systems",
  interests: [...services.map((s) => s.title), "Project planning and scoping", "Something else / not sure yet"],
};
