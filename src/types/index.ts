export interface Command {
  name: string;
  description: string;
  usage?: string;
  aliases?: string[];
  execute: (args?: string[]) => JSX.Element | string | null;
}

export interface CommandHistoryItem {
  command: string;
  output: JSX.Element | string | null;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}