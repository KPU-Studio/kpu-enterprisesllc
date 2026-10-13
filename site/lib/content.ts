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
  // Optional in-depth capability breakdown (icon + description + deliverables + tags).
  capabilities?: {
    eyebrow: string;
    headline: string;
    lead: string;
    items: {
      icon: "architecture" | "code" | "shield" | "advisory" | "strategy" | "app" | "automation" | "analytics" | "deploy";
      title: string;
      blurb: string;
      deliver: string[];
      tags: string[];
    }[];
    closing: { headline: string; body: string };
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
    capabilities: {
      eyebrow: "Cloud & Infrastructure in depth",
      headline: "Cloud environments designed, built, and operated with security in mind.",
      lead: "Whether establishing a new cloud environment, modernizing existing infrastructure, or supporting a regulated workload, we focus on building environments that are maintainable, reproducible, and ready for production.",
      items: [
        {
          icon: "architecture",
          title: "Cloud Infrastructure Design",
          blurb:
            "Cloud architecture built around the workload, operational requirements, and security boundary rather than copied from a generic reference diagram. We design the foundational components of cloud environments—account and subscription structures, virtual networking, identity and access boundaries, compute and storage sizing, connectivity, and security controls. For regulated environments, architecture decisions account for the controls a program must implement and demonstrate during assessment and authorization.",
          deliver: [
            "Cloud account and subscription architecture",
            "Virtual Private Cloud (VPC) and network design",
            "Subnet segmentation, routing, and connectivity",
            "Identity and Access Management (IAM) architecture",
            "Compute, storage, and database infrastructure planning",
            "Cloud landing zone design",
            "Logging, monitoring, and security architecture",
            "High availability and disaster recovery planning",
            "Architecture diagrams and technical design documentation",
          ],
          tags: ["VPC & Networking", "IAM", "Compute", "Storage", "Landing Zones", "AWS"],
        },
        {
          icon: "code",
          title: "Provisioning as Code",
          blurb:
            "Cloud infrastructure provisioned through version-controlled automation rather than manually configured resources. We use Terraform, Ansible, Python, and CI/CD workflows to deploy and manage compute, networking, storage, identity, and container infrastructure, so changes can be peer-reviewed, tested, tracked, and consistently applied across development, staging, and production. The result is a repeatable baseline that reduces configuration drift, simplifies maintenance, and supports operational and audit requirements.",
          deliver: [
            "Infrastructure as Code (IaC) development",
            "Reusable Terraform modules",
            "Ansible playbooks and configuration automation",
            "Automated infrastructure provisioning",
            "CI/CD pipelines for infrastructure deployment",
            "Kubernetes infrastructure provisioning",
            "Environment standardization",
            "Configuration and drift management",
            "Version-controlled infrastructure repositories",
            "Infrastructure documentation and handover",
          ],
          tags: ["Terraform", "Ansible", "Kubernetes", "CI/CD", "EC2 & VPC", "Python"],
        },
        {
          icon: "shield",
          title: "Implementation & Hardening",
          blurb:
            "Secure implementation of cloud infrastructure against an established architecture and security baseline. We build and configure cloud environments with network segmentation, encryption, least-privilege access, logging, and system hardening incorporated from the beginning rather than introduced after deployment. Security configurations are applied through repeatable processes and automation wherever practical, so the environment's baseline can be maintained, reapplied, and validated over time.",
          deliver: [
            "Cloud environment deployment and configuration",
            "Network segmentation and security group implementation",
            "IAM roles, policies, and least-privilege access",
            "Encryption at rest and in transit",
            "Operating system and instance hardening",
            "Secure storage configuration",
            "Centralized logging and monitoring",
            "Configuration baseline implementation",
            "Security control validation",
            "Remediation of infrastructure misconfigurations",
            "Technical documentation and operational handover",
          ],
          tags: ["Security Groups", "Encryption", "Least Privilege", "Hardening", "Logging", "Security Baselines"],
        },
        {
          icon: "advisory",
          title: "Cloud Architecture Advisory",
          blurb:
            "Independent technical guidance for organizations planning, evaluating, or modernizing their cloud infrastructure. We help teams assess architecture decisions, compare cloud platforms, evaluate deployment models, and establish practical target architectures based on business, technical, operational, and security requirements. Our recommendations are grounded in hands-on architecture experience across AWS and government cloud environments, with primary production depth in AWS—actionable technical direction rather than vendor-driven recommendations.",
          deliver: [
            "Cloud platform evaluation and selection",
            "Existing infrastructure and architecture assessments",
            "AWS and cross-cloud architecture reviews",
            "Cloud migration strategy and planning",
            "Target-state architecture development",
            "Security and compliance architecture guidance",
            "Cost and infrastructure optimization recommendations",
            "Scalability and resiliency assessments",
            "Technical design reviews",
            "Architecture documentation and implementation roadmaps",
          ],
          tags: ["AWS", "Cloud Strategy", "Architecture Reviews", "Migration Planning", "Security Architecture"],
        },
      ],
      closing: {
        headline: "Build cloud infrastructure that is ready for production.",
        body: "From architecture and automation to secure implementation and technical guidance, Qorvyn Systems helps organizations establish cloud environments designed for their actual workloads and operational requirements.",
      },
    },
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
    capabilities: {
      eyebrow: "AI & Machine Learning in depth",
      headline: "Practical AI solutions built around your business.",
      lead: "Whether you are exploring AI for the first time or introducing new capabilities into existing systems, we help you move from an idea to a practical, secure, and maintainable solution—design, build, and integration that addresses real business challenges rather than adopting AI for its own sake.",
      items: [
        {
          icon: "strategy",
          title: "AI Strategy & Readiness",
          blurb:
            "Discover where AI can make a meaningful difference in your organization. We help businesses identify opportunities for AI adoption, evaluate existing processes and technology, and develop a clear path toward implementation. The approach focuses on practical use cases, technical feasibility, and measurable business value rather than adopting AI simply for the sake of it.",
          deliver: [
            "AI opportunity and readiness assessments",
            "Business process and workflow evaluations",
            "AI use case identification and prioritization",
            "Technology and platform recommendations",
            "AI implementation roadmaps",
            "Proof-of-concept development and planning",
            "Cost and feasibility assessments",
          ],
          tags: ["AI Strategy", "Readiness Assessment", "Use Cases", "Roadmaps"],
        },
        {
          icon: "app",
          title: "Custom AI Applications",
          blurb:
            "Intelligent applications designed around the way your business operates. We develop AI-powered tools that help teams access information, process documents, answer questions, and work more efficiently. Whether you need an internal knowledge assistant, a customer-facing chatbot, or AI capabilities integrated into existing software, we build solutions tailored to your workflows and requirements.",
          deliver: [
            "Custom AI assistants and chatbots",
            "Internal knowledge and document assistants",
            "AI-powered document processing",
            "Intelligent search and information retrieval",
            "AI integration with existing applications",
            "Custom AI-powered business tools",
            "Retrieval-Augmented Generation (RAG) solutions",
          ],
          tags: ["AI Assistants", "Chatbots", "RAG", "LLMs", "Application Integration"],
        },
        {
          icon: "automation",
          title: "AI Workflow Automation",
          blurb:
            "Reduce repetitive work and improve efficiency through intelligent automation. We combine AI with workflow automation to streamline everyday operations, process information, and connect existing systems. From document handling and data extraction to automated reporting and task coordination, we develop solutions that reduce manual effort while maintaining appropriate oversight and control.",
          deliver: [
            "Business process and workflow automation",
            "Automated document classification and extraction",
            "Email and information processing",
            "AI-assisted reporting and data organization",
            "Integration with existing business systems",
            "Automated data processing",
            "Human-in-the-loop approval workflows",
          ],
          tags: ["AI Automation", "Workflow Integration", "Document Processing", "Python", "APIs"],
        },
        {
          icon: "analytics",
          title: "Machine Learning & Predictive Analytics",
          blurb:
            "Turn your business data into insights that support better decisions. We develop machine learning solutions that help organizations identify patterns, understand trends, forecast outcomes, and uncover useful information within their existing data. From preparing and analyzing datasets to developing, evaluating, and integrating predictive models, we focus on solutions that are practical, understandable, and aligned with your business objectives.",
          deliver: [
            "Predictive modeling and forecasting",
            "Data preparation and analysis",
            "Pattern recognition and anomaly detection",
            "Classification and recommendation models",
            "Custom machine learning development",
            "Model evaluation and performance testing",
            "Integration of predictive insights into business applications",
          ],
          tags: ["Machine Learning", "Predictive Analytics", "Python", "Data Analysis", "Forecasting"],
        },
        {
          icon: "deploy",
          title: "AI Integration & Deployment",
          blurb:
            "Bring AI capabilities into your existing applications, infrastructure, and business systems. We help organizations integrate AI models and services, deploy custom applications, and establish the technical foundation needed to operate AI solutions reliably. Whether leveraging established AI platforms or deploying custom models, implementations are designed around performance, security, scalability, and long-term maintainability.",
          deliver: [
            "AI API and platform integrations",
            "Large Language Model (LLM) integration",
            "Cloud-based AI deployment",
            "Model serving and application deployment",
            "Data pipeline and system integration",
            "Containerized AI applications",
            "Monitoring, maintenance, and operational support",
          ],
          tags: ["LLM Integration", "APIs", "Cloud AI", "Docker", "Python", "MLOps"],
        },
        {
          icon: "shield",
          title: "Responsible AI & Security",
          blurb:
            "Build and adopt AI with security, privacy, and responsible use in mind. We help organizations implement safeguards that protect sensitive information, manage access to AI systems, and reduce the risks associated with AI adoption. Security and responsible AI practices are incorporated throughout design, development, and deployment, so businesses can introduce intelligent capabilities while maintaining appropriate visibility and control.",
          deliver: [
            "AI security and risk assessments",
            "Data privacy and access controls",
            "Secure AI application architecture",
            "AI usage policies and application guardrails",
            "Model output evaluation and testing",
            "Human oversight and approval controls",
            "AI governance and risk management guidance",
          ],
          tags: ["AI Security", "Data Privacy", "Access Controls", "Guardrails", "Responsible AI"],
        },
      ],
      closing: {
        headline: "Make AI work for your business.",
        body: "AI should solve problems, simplify work, and create meaningful value—not introduce unnecessary complexity. From identifying the right opportunities to designing, building, and deploying intelligent solutions, Qorvyn Systems helps businesses adopt AI with a clear focus on practical outcomes, security, and long-term usability.",
      },
    },
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
