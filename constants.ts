import { ResearchPaper, ShowcaseItem, TimelineEvent } from './types';

export const RESEARCH_DATA: ResearchPaper[] = [
  {
    id: '1',
    title: 'Baseline-Aware Dependence fitting for DAmping Timescales (BADDAT): a nearly unbiased approach to constraining optical variability dependence on physical properties of active galactic nuclei',
    authors: 'Ruisong Xia, Zhen-Yi Cai, Yongquan Xue, Xian-Liang Lu, Guowei Ren, Shuying Zhou, Mouyuan Sun, Shifu Zhu, Zhen-Bo Su, Hao Liu',
    journal: 'MNRAS Letters',
    date: '2025',
    abstract: 'We introduce BADDAT, a novel forward modeling approach that explicitly accounts for baseline-induced biases in damping timescale measurements to robustly constrain their population-level dependence on AGN physical properties.',
    tags: ['AGN', 'Time-Domain', 'Statistical Methods'],
    link: 'https://ui.adsabs.harvard.edu/abs/2025MNRAS.544L..96X/abstract'
  },
  {
    id: '2',
    title: 'First Evidence for a Quasiperiodic Oscillation Triplet and Its Relativistic Precession Origin in RE J1034+396',
    authors: 'Ruisong Xia, Yongquan Xue, Jialai Wang, Hao Liu',
    journal: 'ApJ',
    date: '2025',
    abstract: 'Reporting a possible QPO triplet structure formed by long-term cyclic evolution in RE J1034+396. By applying the relativistic precession model, we constrain the black hole mass and spin, proposing a quasiperiodic ultrafast outflow model to explain the complex timing behavior.',
    tags: ['QPO', 'Relativistic Precession', 'RE J1034+396', 'X-ray Timing'],
    link: 'https://ui.adsabs.harvard.edu/abs/2025ApJ...989...59X/abstract'
  },
  {
    id: '3',
    title: 'First Observational Evidence for an Interconnected Evolution between Time Lag and QPO Frequency among AGNs',
    authors: 'Ruisong Xia, Hao Liu, Yongquan Xue',
    journal: 'ApJ Letters',
    date: '2024',
    abstract: 'Reporting the first observational evidence of a hysteretic, interconnected evolution between QPO frequency and time lag in AGNs, hinting at a possible long-term periodic pattern.',
    tags: ['QPO', 'RE J1034+396', 'X-ray Timing'],
    link: 'https://ui.adsabs.harvard.edu/abs/2024ApJ...961L..32X/abstract'
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: '1',
    year: 'Sep. 2021 - Present (Expected Jun. 2026)',
    title: 'Ph.D. Candidate, Astronomy',
    institution: 'University of Science and Technology of China',
    description: 'Hefei, China'
  },
  {
    id: '2',
    year: 'Sep. 2017 - Jun. 2021',
    title: 'B.S., Physics',
    institution: 'Huazhong University of Science and Technology',
    description: 'Wuhan, China'
  }
];

export const SHOWCASE_DATA: ShowcaseItem[] = [
  {
    id: 'showcase-1',
    title: 'Project Title 01',
    subtitle: 'A concise one-line framing for this flagship achievement.',
    problem: 'Coming soon: summarize the scientific question or challenge this work addresses.',
    method: 'Coming soon: describe the observational strategy, methodology, or model in a few strong sentences.',
    result: 'Coming soon: highlight the most important result you want the audience to remember.',
    impact: 'Coming soon: explain why this matters for the field and why it represents your contribution.',
    tags: ['Flagship', 'Method', 'Science'],
    links: [
      { label: 'Paper Link', href: '#' },
      { label: 'Figure / Demo', href: '#' },
    ],
  },
  {
    id: 'showcase-2',
    title: 'Project Title 02',
    subtitle: 'A visual placeholder for your next core story.',
    problem: 'Coming soon: introduce the context and the motivation for this representative project.',
    method: 'Coming soon: note the dataset, analysis pipeline, or theoretical approach.',
    result: 'Coming soon: add the one result that deserves projection on a large screen.',
    impact: 'Coming soon: capture the value, novelty, or insight this result delivers.',
    tags: ['Observation', 'Analysis', 'Results'],
    links: [
      { label: 'Publication', href: '#' },
      { label: 'Supporting Material', href: '#' },
    ],
  },
  {
    id: 'showcase-3',
    title: 'Project Title 03',
    subtitle: 'Reserved for a contrast case, extension, or complementary study.',
    problem: 'Coming soon: define the niche or research tension this work resolves.',
    method: 'Coming soon: explain the technique, comparison, or innovation behind the work.',
    result: 'Coming soon: state the strongest finding or measurable improvement.',
    impact: 'Coming soon: show how this piece strengthens your overall research profile.',
    tags: ['Timing', 'Interpretation', 'Story'],
    links: [
      { label: 'Abstract', href: '#' },
      { label: 'Slides / Poster', href: '#' },
    ],
  },
  {
    id: 'showcase-4',
    title: 'Project Title 04',
    subtitle: 'Reserved for future work, synthesis, or cross-cutting contribution.',
    problem: 'Coming soon: use this slot for a final chapter or forward-looking milestone.',
    method: 'Coming soon: describe the framework, collaboration, or broader technical arc.',
    result: 'Coming soon: summarize the main takeaway that closes the presentation strongly.',
    impact: 'Coming soon: connect this chapter to your future direction or overall significance.',
    tags: ['Synthesis', 'Future Work', 'Vision'],
    links: [
      { label: 'Reference', href: '#' },
      { label: 'Additional Link', href: '#' },
    ],
  },
];
