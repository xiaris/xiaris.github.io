import { ResearchPaper, TimelineEvent } from './types';

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