import { describe, expect, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import { ABOUT, CONTACT, EDUCATION, EXPERTISE, HERO_PILLARS, INTRO, PROJECTS, ROLES, SITE, STATUS, TOOLS } from './content.js';

describe('evidence integrity', () => {
  it('keeps the same four featured projects', () => {
    const featured = PROJECTS.filter((p) => p.tier === 'featured').map((p) => p.id);
    expect(featured).toEqual(['email-engine', 'ai-receptionist', 'website-machine', 'nonstop-ai']);
  });

  it('gives every project a valid status and a capability-led case study', () => {
    for (const p of PROJECTS) {
      expect(Object.keys(STATUS)).toContain(p.status);
      for (const key of ['title', 'problem', 'role', 'summary', 'businessValue', 'statusNote']) expect(p[key], `${p.id}.${key}`).toBeTruthy();
      expect(p.solution.length, `${p.id}.solution`).toBeGreaterThan(0);
      expect(p.tools.length, `${p.id}.tools`).toBeGreaterThan(0);
      expect(p.capabilities.length, `${p.id}.capabilities`).toBeGreaterThanOrEqual(3);
      expect(p.results, `${p.id} must not carry a results/metrics field`).toBeUndefined();
    }
  });

  it('describes the full email engine capability set', () => {
    const titles = PROJECTS.find((p) => p.id === 'email-engine').capabilities.map((c) => c.title.toLowerCase()).join(' | ');
    for (const needle of ['b2b lead generation', 'automated outreach', 'scheduled follow-ups', 'lead tracking', 'reporting']) {
      expect(titles).toContain(needle);
    }
  });

  it('shows no performance statistics anywhere in public content', () => {
    const everything = JSON.stringify({ SITE, INTRO, HERO_PILLARS, ABOUT, EXPERTISE, PROJECTS, TOOLS, ROLES, EDUCATION, CONTACT });
    expect(everything).not.toMatch(/\b\d{1,3}(,\d{3})+\b/); // 1,234-style counts
    expect(everything).not.toMatch(/\b\d+(\.\d+)?\s?(ms|seconds|emails|lookups|calls|weeks|%)/i);
    expect(everything).not.toMatch(/median|percentile|latency|verified case studies/i);
  });

  it('does not claim systems run continuously or serve customers', () => {
    const projectText = JSON.stringify(PROJECTS);
    expect(projectText).not.toMatch(/continuous|24\/7|around the clock|always[- ]on|never (goes|stops)|operating 24/i);
    expect(PROJECTS.find((p) => p.id === 'email-engine').status).not.toBe('live');
    expect(PROJECTS.find((p) => p.id === 'ai-receptionist').status).toBe('tested');
  });

  it('labels Food OS and Taxi OS as prototypes, never live', () => {
    expect(PROJECTS.find((p) => p.id === 'food-os').status).toBe('prototype');
    expect(PROJECTS.find((p) => p.id === 'taxi-os').status).toBe('prototype');
  });

  it('claims no unsupported business outcomes', () => {
    const allText = JSON.stringify({ EXPERTISE, PROJECTS, ROLES, EDUCATION, TOOLS, CONTACT });
    expect(allText).not.toMatch(/\bguarantee|\bROI\b|\bclients? (said|say)\b|\bincorporated\b|\bLtd\b|\blimited company\b/i);
    // "testimonials" may only appear inside an explicit "not claimed" disclaimer.
    for (const m of allText.matchAll(/[^.]*testimonials?[^.]*\./gi)) expect(m[0]).toMatch(/\bNo\b[^.]*\bclaimed\b/);
    expect(allText).not.toMatch(/£\s?\d/); // no prices on a personal portfolio
  });

  it('claims no performance results for Meta Ads', () => {
    const meta = PROJECTS.find((p) => p.id === 'meta-ads');
    expect(meta.statusNote).toMatch(/No performance results are claimed/);
  });
});

describe('structure', () => {
  it('has the six expertise categories, each with demonstrated and working lists', () => {
    expect(EXPERTISE).toHaveLength(6);
    for (const a of EXPERTISE) {
      expect(a.demonstrated.length).toBeGreaterThan(3);
      expect(a.working.length).toBeGreaterThan(0);
      for (const id of a.projects) expect(PROJECTS.some((p) => p.id === id), `${a.id} -> ${id}`).toBe(true);
    }
  });

  it('lists the ten requested roles and flags non-employment experience', () => {
    expect(ROLES.items).toHaveLength(10);
    expect(ROLES.intro).toMatch(/not formal employment/);
  });

  it('presents training accurately and keeps dates separate', () => {
    expect(EDUCATION.items[0].period).toBe('2023 – Present');
    expect(EDUCATION.note).toMatch(/not an accredited university degree/);
    expect(EDUCATION.experience.period).toBe('From May 2024');
    expect(EDUCATION.experience.period).not.toBe(EDUCATION.items[0].period);
  });

  it('uses https for external links and the exact headline', () => {
    for (const u of [SITE.linkedin, SITE.instagram, SITE.company]) expect(u.startsWith('https://')).toBe(true);
    expect(SITE.cvUrl.startsWith('/')).toBe(true); // served locally, not from another site
    expect(SITE.assetBase).toBe('');
    expect(SITE.headline).toBe('AI Automation | B2B Lead Generation | Web Development | Digital Marketing');
  });

  it('uses the personal number consistently on the site, tel: link and CV', () => {
    // Built from fragments so the retired number never appears in the source as a literal.
    const OLD = [['7360', '266496'].join(' '), ['07360', '266496'].join(' '), ['44', '7360', '266496'].join(''), ['7360', '266496'].join('')];
    expect(SITE.phone).toBe('+44 7923 896954');
    expect(SITE.phoneHref).toBe('tel:+447923896954');
    // The NONSTOP AI business number must not appear anywhere in portfolio content.
    const all = JSON.stringify({ SITE, CONTACT, EXPERTISE, PROJECTS, ROLES, EDUCATION, TOOLS });
    for (const o of OLD) expect(all).not.toContain(o);
    let text = '';
    try {
      text = execFileSync('pdftotext', ['public/Sando-Aleksanders-CV.pdf', '-'], { encoding: 'utf8' });
    } catch {
      return; // pdftotext unavailable: skip rather than fail on other machines
    }
    expect(text).toContain(SITE.phone);
    for (const o of OLD) expect(text).not.toContain(o);
    // The CV also follows the no-statistics rule.
    expect(text).not.toMatch(/\b\d{1,3}(,\d{3})+\b|\b\d+\s?ms\b|median|lookups|five weeks|Live internal/i);
  });
});
