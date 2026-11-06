"""Builds public/Sando-Aleksanders-CV.pdf (one A4 page). Run: python3 scripts/build-cv.py
Content rules: no performance statistics, no invented qualifications, results or employment.
Contact details must match src/data/content.js (a test checks the PDF text against it)."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, KeepTogether

INK, GREY, RULE = HexColor('#17263b'), HexColor('#47556a'), HexColor('#cbd5e1')
FS = 8.7
base = ParagraphStyle('b', fontName='Helvetica', fontSize=FS, leading=FS * 1.34, textColor=INK)
name = ParagraphStyle('n', parent=base, fontName='Helvetica-Bold', fontSize=19, leading=22)
head = ParagraphStyle('h', parent=base, fontName='Helvetica-Bold', fontSize=10.2, leading=13)
contact = ParagraphStyle('c', parent=base, textColor=GREY)
sec = ParagraphStyle('s', parent=base, fontName='Helvetica-Bold', fontSize=10, leading=12, spaceBefore=7, spaceAfter=2.5)
role = ParagraphStyle('r', parent=base, spaceAfter=1.5)
bul = ParagraphStyle('bl', parent=base, leftIndent=9, bulletIndent=0, spaceAfter=1.2)
proj = ParagraphStyle('p', parent=base, spaceAfter=2.4)

def P(t, s=base): return Paragraph(t, s)
def B(t): return Paragraph(t, bul, bulletText='•')

story = [
    P('SANDO ALEKSANDERS', name),
    P('AI Automation | B2B Lead Generation | Web Development | Digital Marketing', head),
    Spacer(1, 3),
    P('Cambridgeshire, UK | +44 7923 896954 | aibookingsystems@gmail.com', contact),
    P('nonstopai.netlify.app | linkedin.com/in/sando-aleksanders-34b870375', contact),
    Spacer(1, 4), HRFlowable(width='100%', thickness=0.8, color=RULE),

    P('PROFESSIONAL PROFILE', sec),
    P('Multidisciplinary digital specialist and founder of NONSTOP AI (a trading name), building practical systems that '
      'automate operations, manage communications and generate enquiries. Hands-on experience with AI receptionists, workflow '
      'automation, B2B lead generation and email outreach systems, website development, Meta Ads, social media management, '
      'content creation and video editing. Self-directed, project-based experience supported by professional online training. '
      'Open to freelance, contract, remote and permanent roles.'),

    P('CORE SKILLS', sec),
    P('<b>AI automation &amp; voice agents:</b> AI receptionists and inbound call handling (Bland AI, Twilio), conversation design, '
      'caller lookup and structured enquiry capture, n8n and Make workflows, API and webhook integrations, error handling.', role),
    P('<b>B2B lead generation &amp; outreach:</b> prospect sourcing (Apify, Google Maps and Places data), segmentation and scoring, '
      'Companies House matching, TPS/CTPS screening and suppression, email outreach with automated follow-ups (n8n, Gmail API), '
      'lead tracking and reporting in Supabase.', role),
    P('<b>Website development:</b> responsive business sites and landing pages (React, Vite, Tailwind CSS, Astro) with enquiry and '
      'payment-link flows, serverless functions, Netlify and GitHub deployment.', role),
    P('<b>Digital marketing &amp; Meta Ads:</b> campaign and ad-set structure, Meta Pixel and Conversions API tracking, Meta Graph API '
      'automation with approval-gated writes, short-form video ad creative, conversion-focused landing pages.', role),
    P('<b>Social media &amp; content creation:</b> Instagram carousels, Reels and Stories, content calendars and call-to-action '
      'frameworks, publishing automation (n8n, Buffer), video editing (CapCut) and AI video tools (HeyGen, Runway), graphic design.', role),
    P('<b>Operations &amp; data:</b> Supabase and PostgreSQL (schemas, RPCs, Edge Functions, scheduled jobs), Google Workspace '
      'integrations, health checks and reporting, testing against execution logs. AI-assisted development with Claude, directed and verified.', role),

    P('RELEVANT EXPERIENCE', sec),
    P('<b>Founder / AI Automation Builder</b> | <b>NONSTOP AI</b> (trading name) | From May 2024 | Self-directed projects', role),
    B('Designed and operate an email outreach system covering lead sourcing, qualification, scheduled sending, follow-ups, lead tracking and reporting.'),
    B('Built and tested an AI receptionist that answers calls, recognises callers and captures structured enquiries into a database.'),
    B('Built website templates and landing pages with enquiry capture, deployed on Netlify; reused one backend across niche offers.'),
    B('Structured Meta Ads campaigns and built conversion tracking and campaign-data automation.'),
    B('Produce and automate social content: Reels, Stories and carousels, with publishing workflows and short-form video editing.'),
    B('Investigate failures using execution histories and database queries, and document what is live and what is only tested.'),

    P('SELECTED PROJECTS', sec),
    P('<b>Email Automation Engine | Internal system.</b> n8n and Supabase outreach: B2B lead sourcing, scheduled email, automated '
      'follow-ups, lead tracking and daily reporting, with suppression and compliance checks.', proj),
    P('<b>AI Receptionist | Tested implementation.</b> Bland AI voice agent on a Twilio number with caller lookup (Supabase Edge '
      'Functions) and enquiry capture through n8n. Tested, not a paid-client deployment.', proj),
    P('<b>Website Machine | Live pages.</b> Template system for fast one-page business websites with built-in enquiry capture '
      '(React, Vite, Tailwind, Netlify).', proj),
    P('<b>Social Media Content Automation | Internal system.</b> n8n workflows publishing Reels, Stories and carousels across '
      'Instagram, Facebook and LinkedIn from a reusable asset bank.', proj),
    P('No sales, client revenue or performance results are claimed for any project.', ParagraphStyle('i', parent=base, textColor=GREY, fontName='Helvetica-Oblique')),

    P('TRAINING', sec),
    P('<b>The Real World</b> | Online professional training in AI automation, e-commerce, social media management and content '
      'creation | 2023 – present. Professional online training, not an accredited university degree.'),
]
doc = SimpleDocTemplate('public/Sando-Aleksanders-CV.pdf', pagesize=A4, leftMargin=60, rightMargin=58, topMargin=44, bottomMargin=36,
                        title='Sando Aleksanders - CV', author='Sando Aleksanders', subject='AI Automation | B2B Lead Generation | Web Development | Digital Marketing')
doc.build(story)
