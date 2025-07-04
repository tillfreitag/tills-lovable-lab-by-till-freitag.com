
export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  created_at: string;
  updated_at: string;
  homepage?: string;
  fork: boolean;
}

export interface ProjectFromGitHub {
  id: number;
  title: string;
  description: string;
  category: string;
  tools: string[];
  lovableAspects: string[];
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  created_at?: string;
  updated_at?: string;
  stargazers_count?: number;
}
