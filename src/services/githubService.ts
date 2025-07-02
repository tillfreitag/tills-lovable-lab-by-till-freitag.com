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
}

class GitHubService {
  private baseUrl = 'https://api.github.com';
  private username = 'tillfreitag'; // Hardcoded username

  async fetchUserRepos(): Promise<GitHubRepo[]> {
    try {
      const response = await fetch(`${this.baseUrl}/users/${this.username}/repos?sort=updated&per_page=50`);
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      throw error;
    }
  }

  async fetchRepoReadme(repoName: string): Promise<string | null> {
    try {
      const response = await fetch(`${this.baseUrl}/repos/${this.username}/${repoName}/readme`);
      if (!response.ok) return null;
      
      const data = await response.json();
      // Decode base64 content
      return atob(data.content.replace(/\n/g, ''));
    } catch (error) {
      console.error('Error fetching README:', error);
      return null;
    }
  }

  private getLocalImagePath(repoName: string): string | null {
    // Check for common image extensions
    const extensions = ['jpg', 'jpeg', 'png', 'webp'];
    for (const ext of extensions) {
      const imagePath = `/images/projects/${repoName}.${ext}`;
      // Return the path - we'll let the browser handle if it exists
      return imagePath;
    }
    return null;
  }

  transformRepoToProject(repo: GitHubRepo): ProjectFromGitHub {
    // Try to use local image first, fallback to generated image
    const localImagePath = this.getLocalImagePath(repo.name);
    const imageId = Math.abs(repo.name.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % 1000;
    const fallbackImage = `https://picsum.photos/600/400?random=${imageId}`;
    
    return {
      id: repo.id,
      title: this.formatRepoName(repo.name),
      description: repo.description || 'Ein spannendes Projekt aus meiner Entwicklung',
      category: this.determineCategory(repo),
      tools: this.extractTools(repo),
      lovableAspects: this.generateLovableAspects(repo),
      image: localImagePath || fallbackImage,
      tags: repo.topics || [],
      githubUrl: repo.html_url,
      liveUrl: repo.homepage || undefined
    };
  }

  private formatRepoName(name: string): string {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private determineCategory(repo: GitHubRepo): string {
    const name = repo.name.toLowerCase();
    const description = (repo.description || '').toLowerCase();
    const topics = repo.topics?.join(' ').toLowerCase() || '';
    const content = `${name} ${description} ${topics}`;

    if (content.includes('mobile') || content.includes('react-native') || content.includes('app')) {
      return 'Mobile Experience';
    }
    if (content.includes('web') || content.includes('website') || content.includes('next') || content.includes('react')) {
      return 'Web Application';
    }
    if (content.includes('api') || content.includes('backend') || content.includes('server')) {
      return 'Backend Service';
    }
    if (content.includes('docs') || content.includes('knowledge') || content.includes('wiki')) {
      return 'Knowledge Base';
    }
    if (content.includes('chat') || content.includes('message') || content.includes('communication')) {
      return 'Communication';
    }
    
    return 'Web Application';
  }

  private extractTools(repo: GitHubRepo): string[] {
    const tools = [];
    
    if (repo.language) {
      tools.push(repo.language);
    }
    
    // Extract tools from topics
    const toolTopics = repo.topics?.filter(topic => 
      ['react', 'vue', 'angular', 'svelte', 'typescript', 'javascript', 
       'python', 'java', 'go', 'rust', 'php', 'ruby', 'swift', 'kotlin',
       'nextjs', 'nuxt', 'gatsby', 'vite', 'webpack', 'tailwind', 'sass',
       'node', 'express', 'fastapi', 'django', 'rails', 'spring'].includes(topic.toLowerCase())
    ) || [];
    
    tools.push(...toolTopics);
    
    // Fallback tools if none found
    if (tools.length === 0) {
      tools.push('Web Development', 'Open Source');
    }
    
    return tools.slice(0, 4); // Limit to 4 tools
  }

  private generateLovableAspects(repo: GitHubRepo): string[] {
    const aspects = [];
    
    if (repo.stargazers_count > 0) {
      aspects.push(`${repo.stargazers_count} GitHub Stars`);
    }
    
    aspects.push('Sauberer, dokumentierter Code');
    aspects.push('Responsive Design');
    
    if (repo.topics?.includes('accessibility')) {
      aspects.push('Barrierefreie Entwicklung');
    }
    
    if (repo.topics?.includes('performance')) {
      aspects.push('Performance-optimiert');
    }
    
    if (repo.homepage) {
      aspects.push('Live Demo verfügbar');
    }
    
    // Add some default lovable aspects
    const defaultAspects = [
      'Durchdachte User Experience',
      'Moderne Technologie-Stack',
      'Liebevolle Details',
      'Community-orientiert'
    ];
    
    // Fill up to 3-4 aspects
    while (aspects.length < 3 && defaultAspects.length > 0) {
      aspects.push(defaultAspects.shift()!);
    }
    
    return aspects.slice(0, 4);
  }
}

export const githubService = new GitHubService();
