// Single source of truth for all portfolio content.
// Rule: nothing here may claim customers, revenue, employment or performance
// that is not backed by evidence. Each project carries an explicit status.

const LIVE_ORIGIN = 'https://sando-aleksanders.netlify.app';

export const SITE = {
  name: 'Sando Aleksanders',
  headline: 'AI Automation | B2B Lead Generation | Web Development | Digital Marketing',
  headlineParts: ['AI Automation', 'B2B Lead Generation', 'Web Development', 'Digital Marketing'],
  location: 'Cambridgeshire, United Kingdom',
  email: 'aibookingsystems@gmail.com',
  emailSubject: 'Enquiry via portfolio',
  phone: '+44 7923 896954',
  phoneHref: 'tel:+447923896954',
  linkedin: 'https://www.linkedin.com/in/sando-aleksanders-34b870375',
  instagram: 'https://www.instagram.com/nonstopai_uk/',
  company: 'https://nonstopai.netlify.app',
  canonical: LIVE_ORIGIN + '/',
  // Served from /public so the site is independent of any other deployment.
  cvUrl: '/Sando-Aleksanders-CV.pdf',
  assetBase: '',
};

export const STATUS = {
  live: { label: 'Live', hint: 'Running in production or publicly live' },
  internal: { label: 'Internal system', hint: 'Built and operated by me for my own business' },
  tested: { label: 'Tested', hint: 'Demonstrated and measured, not serving customers' },
  prototype: { label: 'Prototype', hint: 'Built and demonstrated; paused or limited' },
};

export const INTRO = [
  "I'm a multidisciplinary digital specialist based in the UK, building practical systems that help businesses attract customers, automate operations, manage communications, and grow online.",
  'My work covers AI voice agents, business automation, B2B lead generation, outbound campaigns, website development, social media management, paid advertising, and content production.',
];

export const HERO_STATS = [
  { value: '1,864', label: 'emails sent by my n8n outreach engine', note: '14 Sep – 21 Oct 2026' },
  { value: '292 ms', label: 'median caller lookup (tested)', note: '321 measured lookups' },
  { value: '3', label: 'verified case studies', note: 'plus 6 labelled supporting projects' },
];

export const HERO_FACTS = [
  'n8n · Make · Supabase',
  'Bland AI · Twilio voice agents',
  'Cold email & lead sourcing',
  'React · Vite · Tailwind',
  'Meta Ads · Reels · Carousels',
];

export const ABOUT = {
  heading: 'Hands-on implementation, honestly reported.',
  paragraphs: [
    'I build and run practical systems: voice receptionists that capture enquiries, automations that connect databases, email and phone, lead pipelines that find and qualify UK businesses, websites that turn visitors into enquiries, and the content that supports them.',
    'My experience is self-directed and project-based. I am the founder of NONSTOP AI, a trading name I operate personally, and I use its systems as proof of work. Alongside that I have completed professional online training in AI automation, e-commerce, social media management and content creation.',
    'I work comfortably with AI coding assistants, and I direct and verify everything they produce against live systems. I say plainly what is live, what is only tested, and where the limits are.',
  ],
  location: 'Based in Cambridgeshire, UK. Working remotely or hybrid for UK and international teams and clients.',
  process: [
    { n: '01', title: 'Scope', text: 'Agree the problem, the tools involved and what "working" looks like, in writing.' },
    { n: '02', title: 'Build', text: 'Connect the platforms and build the workflow, using AI-assisted development that I direct and review.' },
    { n: '03', title: 'Test', text: 'Test every flow against real execution logs and data. Results are checked, not assumed.' },
    { n: '04', title: 'Hand over', text: 'Provide documentation, known limitations and a clear status: what is live and what is only tested.' },
  ],
};

export const EXPERTISE = [
  {
    id: 'ai',
    icon: 'voice',
    title: 'AI Automation & Voice Agents',
    summary: 'Inbound voice agents, workflow automation and the integrations that connect them.',
    demonstrated: [
      'AI receptionists and inbound call handling (Bland AI, Twilio)',
      'Voice agent conversation design and pathways',
      'Knowledge-base answers: menus, hours, FAQs, escalation rules',
      'Caller lookup and structured lead capture (Supabase Edge Functions)',
      'Booking flows with idempotent booking functions',
      'Workflow automation in n8n and Make',
      'API integrations and webhooks',
      'Email and SMS notifications',
      'Call and order logging to Google Sheets',
    ],
    working: ['Google Calendar scheduling', 'Vapi (concepts)', 'Transcript analysis and data extraction'],
    projects: ['ai-receptionist', 'food-os', 'taxi-os'],
  },
  {
    id: 'leadgen',
    icon: 'target',
    title: 'B2B Lead Generation & Sales Outreach',
    summary:
      'Sourcing, qualifying and contacting UK local businesses, with compliance checks built in.',
    demonstrated: [
      'Prospect sourcing for UK local businesses (Google Maps data via Apify, Google Places, SerpAPI)',
      'Lead list building, segmentation and opportunity scoring',
      'Contact enrichment and checks (Companies House matching, email verification)',
      'Cold email campaigns with follow-up sequences (n8n and the Gmail API)',
      'TPS/CTPS screening and suppression handling for UK compliance',
      'Prospect database and pipeline tracking in Supabase',
      'Daily outreach reporting and send-count reconciliation',
    ],
    working: ['Off-the-shelf CRM platforms', 'Deliverability practices (authentication, warm-up)'],
    note: 'Prospect segments worked on: UK trades, takeaways and restaurants, taxi firms, automotive services and other local service providers.',
    projects: ['email-engine', 'lead-pipeline'],
  },
  {
    id: 'web',
    icon: 'browser',
    title: 'Website Development',
    summary: 'Fast, responsive business websites and landing pages, deployed through Git.',
    demonstrated: [
      'Responsive business websites and landing pages (React, Vite, Tailwind, Astro)',
      'Lead-capture, booking and enquiry forms connected to databases',
      'Payment-link and onboarding flows (Stripe)',
      'Netlify deployment with GitHub workflows',
      'Serverless functions and API-connected pages',
      'Mobile-first layouts, performance and accessibility basics',
      'Website troubleshooting',
    ],
    working: ['Technical SEO beyond the basics', 'Multi-page website builds'],
    projects: ['website-machine', 'roofersites'],
  },
  {
    id: 'marketing',
    icon: 'chart',
    title: 'Digital Marketing & Meta Ads',
    summary: 'Campaign structure, tracking and creative for Facebook and Instagram advertising.',
    demonstrated: [
      'Meta campaign, ad set and ad structure, including controlled targeting tests',
      'Meta Pixel and Conversions API tracking with deduplicated purchase events',
      'Short-form video ad production (AI-assisted tools plus CapCut editing)',
      'Conversion-focused landing pages and funnels',
      'Marketing automation: n8n integration that reads campaign data, with approval-gated writes',
    ],
    working: ['Campaign performance analysis and optimisation', 'Retargeting strategy'],
    note: 'No campaign performance results are claimed on this site.',
    projects: ['meta-ads'],
  },
  {
    id: 'social',
    icon: 'video',
    title: 'Social Media & Content Creation',
    summary: 'Planning, producing and publishing short-form content across platforms.',
    demonstrated: [
      'Instagram content management: daily carousels, Reels and Stories',
      'Content calendars and a defined call-to-action framework',
      'Short-form video production and editing (CapCut, AI video tools)',
      'Carousel and promotional graphic design',
      'Publishing automation with n8n and Buffer across Instagram, Facebook and LinkedIn',
      'Brand consistency through reusable asset banks and deterministic brand cards',
    ],
    working: ['TikTok-oriented formats', 'Community engagement and growth strategy'],
    projects: ['social-automation'],
  },
  {
    id: 'ops',
    icon: 'database',
    title: 'Business Operations & Integrations',
    summary: 'The data, reporting and reliability work that keeps automations trustworthy.',
    demonstrated: [
      'Supabase and PostgreSQL: schemas, RPCs, scheduled jobs and Edge Functions',
      'Workflow design with idempotency and error handling',
      'Google Workspace integrations (Gmail API, Sheets, Drive)',
      'Operational reporting, health checks and automated alerts',
      'Testing against execution logs and real data',
      'Integration troubleshooting and documented limitations',
    ],
    working: ['Row-level security hardening (in progress)', 'Operational dashboards'],
    projects: ['nonstop-ai', 'email-engine'],
  },
];

// Featured case studies (full detail) then supporting projects (collapsed detail).
export const PROJECTS = [
  {
    id: 'email-engine',
    tier: 'featured',
    status: 'live',
    kind: 'Internal system',
    title: 'Email Automation Engine',
    problem:
      'Outbound outreach needed to run repeatedly and reliably without anyone sending emails by hand, and without losing track of what had been sent.',
    role: 'Designed the workflow logic, directed the AI-assisted build, tested it against execution logs, and operate it.',
    solution: [
      'n8n workflows run on a schedule and pull eligible prospects from a Supabase (PostgreSQL) database.',
      'Prospects are screened (including TPS/CTPS checks) and segmented before any message is queued.',
      'Emails are sent through the Gmail API, with every send recorded in an outbox table and a daily run log.',
      'Error handling and execution-log review catch failed runs so they can be investigated.',
    ],
    tools: ['n8n', 'Supabase', 'PostgreSQL', 'Gmail API', 'Companies House', 'TPS/CTPS screening'],
    results: [
      { value: '1,864', label: 'emails sent, 14 Sep – 21 Oct 2026' },
      { value: 'Reconciled', label: 'outbox and daily run-log counts match' },
    ],
    resultsNote: 'An activity measure, not a claim of sales, replies or client revenue.',
    visuals: [
      {
        path: '/evidence/email-engine-sm.webp',
        alt: 'Chart of emails sent per day from 14 September to 21 October 2026 and a diagram of the sending workflow',
        caption: 'Daily send counts from the outbox (aggregate) and the workflow structure. A chart and diagram, not an n8n screenshot.',
      },
    ],
  },
  {
    id: 'ai-receptionist',
    tier: 'featured',
    status: 'tested',
    kind: 'Tested implementation',
    title: 'AI Receptionist',
    problem:
      'Small businesses miss calls and lose enquiries. The goal was an AI agent that answers, recognises the caller and captures a structured enquiry.',
    role: 'Designed the call flow, built the integrations and measured lookup performance from the logs.',
    solution: [
      'An inbound AI voice agent (Bland AI) answers on a Twilio phone number.',
      'A Supabase Edge Function looks up the caller so the agent can personalise the call.',
      'Enquiry details are captured into Supabase through n8n workflows for follow-up.',
    ],
    tools: ['Bland AI', 'Twilio', 'n8n', 'Supabase Edge Functions'],
    results: [
      { value: '292 ms', label: 'median lookup across all 321 measured lookups' },
      { value: '178 ms', label: 'median for the 226 lookups that matched a caller' },
    ],
    resultsNote: 'A tested build, not a production service or a paid-client deployment.',
    visuals: [
      {
        path: '/evidence/receptionist-sm.webp',
        alt: 'Chart of caller lookup latency and a diagram of the AI receptionist architecture',
        caption: 'Lookup latency from the lookup log (keep-warm pings excluded) and the architecture. A chart and diagram, not a screenshot.',
      },
    ],
  },
  {
    id: 'website-machine',
    tier: 'featured',
    status: 'live',
    kind: 'Product website system',
    title: 'Website Machine',
    problem:
      'Small UK businesses need an affordable, fast website that turns visitors into enquiries, and I needed a repeatable way to produce them.',
    role: 'Designed the template system, built the sites and handle deployment.',
    solution: [
      'Template-driven one-page sites and service pages, built responsive with React, Vite and Tailwind (and Astro).',
      'Enquiry capture built into each page so visitors can get in touch.',
      'Deployed to Netlify, giving each site a fast, hosted public URL.',
    ],
    tools: ['React', 'Vite', 'Tailwind CSS', 'Astro', 'Netlify'],
    results: [
      { value: 'Deployed', label: 'public sites live and loading' },
      { value: 'Reusable', label: 'one template system across multiple niches' },
    ],
    resultsNote: 'Demonstrates front-end build and deployment. No sales or revenue figures are claimed.',
    visuals: [
      {
        path: '/evidence/wm-plumbers-sm.webp',
        alt: 'Screenshot of the live Website Machine plumbers page',
        caption: 'Live page: plumbers. The phone preview shows a made-up example business.',
      },
      {
        path: '/evidence/wm-roofers-sm.webp',
        alt: 'Screenshot of the live Roofersites UK page',
        caption: 'Live page: roofers. The phone preview shows a made-up example business.',
      },
    ],
  },
  {
    id: 'nonstop-ai',
    tier: 'featured',
    status: 'internal',
    kind: 'Internal system · trading name',
    title: 'NONSTOP AI: business automation and AI systems',
    problem:
      'Small businesses often need a website, a business phone line and call handling from several different suppliers. I set out to offer these together and to automate setting them up.',
    role: 'Founder and sole builder. I designed the architecture, built the automations and own testing and operations. NONSTOP AI is a trading name I operate personally.',
    solution: [
      'A packaged offer: website, business phone number, an AI receptionist configured with the business’s own information, and enquiry capture.',
      'Self-serve onboarding: a Netlify function starts an n8n workflow that creates a Stripe Checkout session, built so one submission produces exactly one session.',
      'An automated provisioning workflow with an approval guard and idempotency, plus Supabase as the source of truth for orders and clients.',
      'One shared receptionist reused across brands rather than rebuilt for each, with changes kept small and reviewed.',
    ],
    tools: ['n8n', 'Supabase', 'Bland AI', 'Twilio', 'Stripe', 'Netlify Functions', 'React'],
    results: [
      { value: 'End to end', label: 'a first full provisioning run completed on a test account' },
      { value: 'Self-assessed', label: 'July 2026 readiness review: ready to sell with minor risks' },
    ],
    resultsNote: 'An operating internal platform. No customer numbers, revenue or testimonials are claimed.',
    visuals: [],
  },
  {
    id: 'lead-pipeline',
    tier: 'supporting',
    status: 'internal',
    kind: 'Internal system',
    title: 'Lead Sourcing & Qualification Pipeline',
    problem: 'Outreach is only as good as the prospects behind it, and raw scraped data is noisy.',
    role: 'Designed the pipeline stages, scoring rules and compliance gates, and operate them.',
    solution: [
      'Apify Google Maps sourcing feeds an ingest webhook, which loads Supabase.',
      'A scheduled job promotes new leads into a prospect table, and a qualifier checks website signals before any score is assigned.',
      'One explainable opportunity score per business, counting only verified signals.',
      'Companies House matching, TPS/CTPS screening and a rule that unverified email addresses are never sent to.',
    ],
    tools: ['Apify', 'n8n', 'Supabase', 'pg_cron', 'Companies House', 'TPS/CTPS'],
    results: [{ value: 'Operating', label: 'cohorts sourced for UK trades, automotive, taxi and food segments' }],
    resultsNote: 'No conversion, sales or revenue figures are claimed.',
  },
  {
    id: 'food-os',
    tier: 'supporting',
    status: 'prototype',
    kind: 'Private demo',
    title: 'Food OS: restaurant and takeaway receptionist',
    problem: 'Busy restaurants and takeaways lose orders and enquiries when the phone goes unanswered.',
    role: 'Designed the knowledge base and conversation, built the demo and the order log.',
    solution: [
      'A structured restaurant knowledge base: menu, prices, hours, delivery and collection rules, allergens, FAQs and escalation rules.',
      'A single-node Bland AI conversational pathway on a dedicated demo line.',
      'Pretend orders captured into a Google Sheet log.',
    ],
    tools: ['Bland AI', 'Supabase', 'Google Sheets'],
    results: [{ value: 'Demo only', label: 'mock orders; no live orders or customers' }],
    resultsNote: 'A prototype. Outbound outreach for this sector is paused.',
  },
  {
    id: 'taxi-os',
    tier: 'supporting',
    status: 'prototype',
    kind: 'Built, paused',
    title: 'Taxi OS: voice booking and outreach',
    problem: 'Taxi firms take bookings by phone, where missed or mis-heard details cost jobs.',
    role: 'Built the voice pathway, address service and webhook pipeline, and the sector’s outreach workflows.',
    solution: [
      'A Bland AI voice booking pathway on a Twilio number.',
      'Supabase Edge Functions validate addresses, cross-checking postcodes via Google Geocoding and postcodes.io.',
      'An idempotent booking function and an n8n webhook pipeline.',
      'Taxi-sector email outreach workflows (now paused).',
    ],
    tools: ['Bland AI', 'Twilio', 'Supabase Edge Functions', 'n8n', 'Google Geocoding API'],
    results: [{ value: 'Paused', label: 'a first booking was confirmed end to end; live rollout halted by a voice-platform defect' }],
    resultsNote: 'A prototype that did not reach sustained live service. No customer results are claimed.',
  },
  {
    id: 'roofersites',
    tier: 'supporting',
    status: 'live',
    kind: 'Niche website offer',
    title: 'Roofersites UK',
    problem: 'UK roofers need a simple professional website without a long agency process.',
    role: 'Designed the funnel and built the page on the Website Machine backend.',
    solution: [
      'A standalone landing page for roofers, with a details form feeding the existing onboarding table.',
      'A payment-link step and a thank-you page, with each order tagged by niche.',
      'Reuses the Website Machine backend rather than duplicating it.',
    ],
    tools: ['React', 'Tailwind CSS', 'Netlify', 'Stripe', 'Supabase'],
    results: [{ value: 'Live page', label: 'funnel built and published' }],
    resultsNote: 'No sales, customers or revenue are claimed.',
  },
  {
    id: 'social-automation',
    tier: 'supporting',
    status: 'internal',
    kind: 'Internal system',
    title: 'Social Media Content Automation',
    problem: 'Posting consistently across platforms by hand does not scale for one person.',
    role: 'Designed the posting rules and content framework, built the workflows and produce the creative.',
    solution: [
      'n8n workflows publish Reels through Buffer to Instagram, Facebook and LinkedIn, with captions routed by content type.',
      'A separate Stories workflow draws from a reusable asset bank with cooldown rules and logs every post to Google Sheets.',
      'A call-to-action framework for static posts and a daily carousel routine for @nonstopai_uk.',
      'Brand cards composited deterministically instead of generating text inside images.',
    ],
    tools: ['n8n', 'Buffer', 'Google Drive', 'Google Sheets', 'GPT-4o', 'HeyGen', 'Runway', 'CapCut'],
    results: [{ value: 'Operating', label: 'Reels and Stories workflows built and activated' }],
    resultsNote: 'No audience-growth or engagement figures are claimed.',
  },
  {
    id: 'meta-ads',
    tier: 'supporting',
    status: 'internal',
    kind: 'Internal work',
    title: 'Meta Ads Build & Conversion Tracking',
    problem: 'Paid campaigns need clean structure and trustworthy tracking before spend is worth analysing.',
    role: 'Designed campaign structure and the tracking chain, and built the automation around it.',
    solution: [
      'Campaigns structured with separate ad sets to isolate targeting as the only variable.',
      'Meta Pixel plus a Conversions API purchase event driven by a payment webhook, with value and deduplication.',
      'n8n workflows that read accounts, campaigns, insights and creatives, with a write layer that defaults to off and builds everything paused.',
      'Short-form video ad creative produced with AI tools and edited in CapCut.',
    ],
    tools: ['Meta Ads Manager', 'Meta Graph API', 'Conversions API', 'n8n', 'Supabase', 'CapCut'],
    results: [{ value: 'No results claimed', label: 'this entry shows build and tracking work only' }],
    resultsNote: 'Performance figures are shared only when they can be verified.',
  },
];

export const TOOLS = [
  { group: 'Automation & integrations', items: ['n8n', 'Make', 'Webhooks & REST APIs', 'Scheduled workflows'] },
  { group: 'Voice AI & telephony', items: ['Bland AI', 'Twilio', 'Vapi (concepts)'] },
  { group: 'Data & back office', items: ['Supabase', 'PostgreSQL', 'Gmail API', 'Google Sheets', 'Google Drive'] },
  { group: 'Web development', items: ['React', 'Vite', 'Tailwind CSS', 'Astro', 'Netlify', 'GitHub', 'Stripe'] },
  {
    group: 'Lead generation',
    items: ['Apify', 'Google Places API', 'SerpAPI', 'Companies House', 'TPS/CTPS screening'],
  },
  {
    group: 'Marketing & content',
    items: ['Meta Ads Manager', 'Meta Pixel & Conversions API', 'Buffer', 'CapCut', 'HeyGen', 'Runway'],
  },
  { group: 'Delivery', items: ['AI-assisted development (Claude)', 'Execution-log testing', 'Documentation'] },
];

export const ROLES = {
  intro:
    'My experience is self-directed and project-based, through NONSTOP AI and my own systems, not formal employment. I am looking for freelance, contract, remote, hybrid and permanent opportunities such as:',
  items: [
    { title: 'AI Automation Specialist', fit: 'n8n and Make workflows, integrations, monitoring' },
    { title: 'AI Voice Agent Developer', fit: 'Bland AI and Twilio receptionists, booking flows' },
    { title: 'B2B Lead Generation Specialist', fit: 'Sourcing, enrichment, segmentation, scoring' },
    { title: 'Sales Outreach Specialist', fit: 'Cold email sequences, follow-up, reporting' },
    { title: 'Web Developer', fit: 'Responsive sites, landing pages, deployment' },
    { title: 'Digital Marketing Specialist', fit: 'Meta Ads structure, funnels, tracking' },
    { title: 'Social Media Manager', fit: 'Content planning, Reels, carousels, publishing' },
    { title: 'Content Creator / Video Editor', fit: 'Short-form video, graphics, post-production' },
    { title: 'Marketing Automation Specialist', fit: 'Tracking, scheduling and campaign workflows' },
    { title: 'Technical Operations Assistant', fit: 'Databases, reporting, troubleshooting, QA' },
  ],
  arrangements: ['Freelance', 'Contract', 'Remote', 'Hybrid', 'Permanent'],
};

export const EDUCATION = {
  items: [
    {
      period: '2023 – Present',
      title: 'The Real World',
      subtitle: 'Online professional training',
      studies: ['AI automation', 'E-commerce', 'Social media management', 'Content creation'],
    },
  ],
  note: 'Professional online training, not an accredited university degree.',
  experience: {
    period: 'From May 2024',
    title: 'NONSTOP AI (founder)',
    subtitle: 'Self-directed business and project work, started after the training above began',
  },
};

export const CONTACT = {
  heading: 'Let’s talk about the role or project.',
  text: 'Tell me what you need built, connected or fixed. I reply by email or phone.',
};
