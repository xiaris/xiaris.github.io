export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  journal: string;
  date: string;
  abstract: string;
  tags: string[];
  link?: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  institution: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ShowcaseLink {
  label: string;
  href: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  method: string;
  result: string;
  impact: string;
  image?: string;
  tags: string[];
  links: ShowcaseLink[];
}
