// Mock data for Julia Baucher's portfolio

export const personalInfo = {
  name: "Julia Baucher",
  title: "Senior Product Manager Tech",
  tagline: "Transforming complex technical challenges into user-centric products that scale",
  email: "juliabaucher.work@gmail.com",
  phone: "+33 (0)6 62 72 83 22",
  linkedin: "linkedin.com/in/juliabaucher",
  portfolio: "https://juliabaucher.github.io",
  location: "France",
  bio: "Passionate Senior Product Manager with 15+ years of experience leading cross-functional teams to deliver innovative tech solutions. Specialized in building scalable web applications, ML models, and data-driven products that serve millions of users globally. I thrive at the intersection of technology and business strategy, turning complex requirements into elegant, user-focused solutions."
};

export const skills = {
  technical: [
    "Product Strategy & Roadmap",
    "Machine Learning & AI",
    "Python & SQL",
    "Agile & Scrum",
    "Data Analytics & BI",
    "API Development",
    "DevOps & CI/CD",
    "UX/UI Design"
  ],
  management: [
    "Cross-functional Leadership",
    "Stakeholder Management",
    "Team Building & Mentoring",
    "Strategic Planning",
    "Risk Assessment",
    "Budget Management",
    "Performance Optimization",
    "Client Relations"
  ],
  languages: [
    "French (Native)",
    "English (Fluent)",
    "Russian (Fluent)",
    "Spanish (Conversational)"
  ]
};

export const experience = [
  {
    id: 1,
    title: "Senior Tech Product Manager - Logistics",
    company: "Amazon",
    location: "Luxembourg",
    period: "2021 - 2025",
    description: "Led product strategy for logistics optimization web applications and ML models, managing cross-functional teams in an Agile environment.",
    achievements: [
      "Delivered ML models that reduced labor costs by 12%",
      "Managed development of workforce management web applications",
      "Established strategic partnerships with key clients",
      "Mentored and recruited team members, conducted SCRUM training (4.8/5 rating)"
    ],
    technologies: ["Python", "ML/AI", "Agile", "DevOps", "Quicksight", "Tableau"]
  },
  {
    id: 2,
    title: "Product Manager & Financial Solutions Consultant",
    company: "Amadeus",
    location: "France",
    period: "2013 - 2020",
    description: "Managed development of accounting and audit software for airlines, providing strategic consulting to optimize business processes.",
    achievements: [
      "Led product strategy alignment with airline consortium",
      "Conducted on-site consulting for major airlines (Malaysia Airlines, Icelandair, Luxair)",
      "Delivered pre-sales projects including RFPs and value propositions",
      "Optimized system utilization and performance metrics"
    ],
    technologies: ["Financial Software", "Business Process", "Consulting", "Strategy"]
  },
  {
    id: 3,
    title: "E-Commerce & Mobile Product Manager",
    company: "Amadeus",
    location: "France", 
    period: "2006 - 2013",
    description: "Drove development of web and mobile applications for major airlines, serving millions of monthly users globally.",
    achievements: [
      "Managed airline websites used by millions of users (Lufthansa, Japan Airlines, LATAM)",
      "Led payment platform redesign translating strategic goals into project plans",
      "Built UX portfolio for airline website personalization",
      "Managed search engine optimization programs"
    ],
    technologies: ["Web Development", "Mobile Apps", "UX Design", "Payment Systems", "SEO"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Logistics Optimization ML Platform",
    category: "Machine Learning",
    description: "Developed and deployed machine learning models for workforce optimization, achieving 12% reduction in labor costs across multiple Amazon facilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Python", "ML/AI", "AWS", "Data Analytics"],
    metrics: "12% cost reduction, 50+ facilities",
    status: "Production"
  },
  {
    id: 2,
    title: "Airline Web Platform",
    category: "Web Development",
    description: "Led product development for airline booking and management platforms serving millions of monthly users for major carriers including Lufthansa and Japan Airlines.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
    technologies: ["Web Apps", "Mobile", "UX Design", "Payment Systems"],
    metrics: "Millions of monthly users, 15+ airlines",
    status: "Production"
  },
  {
    id: 3,
    title: "Financial Audit System",
    category: "Enterprise Software",
    description: "Managed development of comprehensive accounting and audit software for airline industry, providing strategic consulting and optimization services.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    technologies: ["Enterprise Software", "Financial Systems", "Consulting"],
    metrics: "20+ airline clients globally",
    status: "Production"
  },
  {
    id: 4,
    title: "Workforce Management Dashboard",
    category: "Data Analytics",
    description: "Built comprehensive dashboards and analytics tools for workforce management, enabling data-driven decision making across logistics operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Tableau", "Quicksight", "Python", "SQL"],
    metrics: "Real-time analytics, 100+ KPIs",
    status: "Production"
  }
];

export const awards = [
  {
    year: "2017",
    title: "1st Prize - Startup Weekend",
    organization: "CCI & Google Monaco",
    description: "54 hours to transform an idea into a business"
  },
  {
    year: "2008", 
    title: "Excellence Award in Engineering Calculations",
    organization: "Emerald Publishing, UK",
    description: "Recognition for outstanding research contributions"
  },
  {
    year: "2002",
    title: "International Scholarship for Doctoral Studies",
    organization: "EGIDE, France",
    description: "Merit-based scholarship for advanced studies"
  }
];

export const education = [
  {
    degree: "PhD in Numerical Mechanics",
    institution: "École des Mines de Paris",
    location: "France",
    year: "2006"
  },
  {
    degree: "Engineering Degree in Mechanics", 
    institution: "Moscow State Technical University",
    location: "Russia",
    year: "2002"
  }
];