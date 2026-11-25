import { ResearchPaper, TimelineEvent } from './types';

export const RESEARCH_DATA: ResearchPaper[] = [
  {
    id: '4',
    title: 'Black hole ADaptive Multi-relation Mass Estimation based on Timing Analysis (BADMET)',
    authors: 'Ruisong Xia, Yongquan Xue, Hao Liu, Guowei Ren, Mouyuan Sun, Qingwen Wu, Jialai Wang, Shuying Zhou, Zhen-Bo Su, Shifu Zhu, Mengqiu Huang',
    journal: 'ApJ Letters · In press',
    date: '2026',
    abstract: 'BADMET combines variability and other mass-related observables to estimate black hole masses.',
    tags: ['AGN', 'Black Hole Mass', 'X-ray Timing'],
    link: 'https://arxiv.org/abs/2611.22771'
  },
  {
    id: '1',
    title: 'Baseline-Aware Dependence fitting for DAmping Timescales (BADDAT): a nearly unbiased approach to constraining optical variability dependence on physical properties of active galactic nuclei',
    authors: 'Ruisong Xia, Zhen-Yi Cai, Yongquan Xue, Xian-Liang Lu, Guowei Ren, Shuying Zhou, Mouyuan Sun, Shifu Zhu, Zhen-Bo Su, Hao Liu',
    journal: 'MNRAS Letters',
    date: '2025',
    abstract: 'We introduce BADDAT, a novel forward modeling approach that explicitly accounts for baseline-induced biases in damping timescale measurements to robustly constrain their population-level dependence on AGN physical properties.',
    tags: ['AGN', 'Time-Domain', 'Statistical Methods'],
    link: 'https://academic.oup.com/mnrasl/article/544/1/L96/8294176'
  },
  {
    id: '2',
    title: 'First Evidence for a Quasiperiodic Oscillation Triplet and Its Relativistic Precession Origin in RE J1034+396',
    authors: 'Ruisong Xia, Yongquan Xue, Jialai Wang, Hao Liu',
    journal: 'ApJ',
    date: '2025',
    abstract: 'Reporting a possible QPO triplet structure formed by long-term cyclic evolution in RE J1034+396. By applying the relativistic precession model, we constrain the black hole mass and spin, proposing a quasiperiodic ultrafast outflow model to explain the complex timing behavior.',
    tags: ['QPO', 'Relativistic Precession', 'RE J1034+396', 'X-ray Timing'],
    link: 'https://doi.org/10.3847/1538-4357/adf225'
  },
  {
    id: '3',
    title: 'First Observational Evidence for an Interconnected Evolution between Time Lag and QPO Frequency among AGNs',
    authors: 'Ruisong Xia, Hao Liu, Yongquan Xue',
    journal: 'ApJ Letters',
    date: '2024',
    abstract: 'Reporting the first observational evidence of a hysteretic, interconnected evolution between QPO frequency and time lag in AGNs, hinting at a possible long-term periodic pattern.',
    tags: ['QPO', 'RE J1034+396', 'X-ray Timing'],
    link: 'https://doi.org/10.3847/2041-8213/ad1bf2'
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: '3',
    year: 'Jul. 2026 - Present',
    title: 'Special-term Associate Researcher',
    institution: 'University of Science and Technology of China',
    description: 'Hefei, China | Advisor: Prof. Yongquan Xue'
  },
  {
    id: '1',
    year: 'Sep. 2021 - Jun. 2026',
    title: 'Ph.D. in Astronomy',
    institution: 'University of Science and Technology of China',
    description: 'Hefei, China | Advisor: Prof. Yongquan Xue'
  },
  {
    id: '2',
    year: 'Sep. 2017 - Jun. 2021',
    title: 'B.S. in Physics',
    institution: 'Huazhong University of Science and Technology',
    description: 'Wuhan, China | Advisors: Prof. Qingwen Wu, Prof. Yongquan Xue'
  }
];
