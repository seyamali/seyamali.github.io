export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  location: string;
  summary: string;
  objective: string;
  profileImage: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  result: string;
  passingYear: string;
  subject: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tools: string;
  link?: string;
  demoLink?: string;
  githubLink?: string;
  type: 'android' | 'web' | 'c' | 'java' | 'graphics' | 'flutter' | 'npm';
  image?: string;
}

export interface Research {
  title: string;
  type: 'thesis' | 'publication';
  description: string[];
  journal?: string;
  authors?: string[];
  date?: string;
  link?: string;
}

export interface Extracurricular {
  title: string;
  organization: string;
  period: string;
  activities: string[];
}

export interface Certification {
  name: string;
  organization: string;
  year: string;
  description?: string;
}
