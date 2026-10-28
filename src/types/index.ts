import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';

export type SectionId = 'home' | 'about' | 'skills' | 'portfolio' | 'contact';
export interface NavigationItem {
  id: SectionId;
  label: string;
  number: string;
  icon: LucideIcon;
}
export interface Social {
  label: string;
  href: string | null;
  icon: IconType;
}
export interface ProfileDetail {
  label: string;
  value: string;
}
export interface Skill {
  name: string;
  icon: IconType | LucideIcon;
}
export interface SkillGroup {
  title: string;
  items: Skill[];
}
export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  href: string | null;
  featured: boolean;
  caseStudy?: ProjectCaseStudy;
}
export interface ProjectScreenshot {
  src: string;
  alt: string;
  title: string;
  caption: string;
}
export interface ProjectCaseStudy {
  introduction: string;
  context: string;
  role: string;
  responsibility: string;
  platforms: { title: string; stack: string; description: string }[];
  highlights: { title: string; description: string }[];
  screenshots: ProjectScreenshot[];
}
export interface ContactValues {
  name: string;
  email: string;
  message: string;
}
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;
export type ContactStatus = 'idle' | 'sending' | 'success' | 'error';
