export interface ResearchPaper {
  id: string;
  title: string;
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