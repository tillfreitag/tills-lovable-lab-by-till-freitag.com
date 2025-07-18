import { GitHubRepo, ProjectFromGitHub } from '@/types/github';

class ProjectTransformer {
  private async getGitHubImagePath(repo: GitHubRepo): Promise<string | null> {
    const repoName = repo.name;
    const username = 'tillfreitag'; // Should match the GitHub username
    const extensions = ['jpg', 'jpeg', 'png', 'webp'];
    
    // Priority order for image detection:
    // 1. Try homepage domain as filename (for fexaas-by-till-freitag.com.jpg)
    if (repo.homepage) {
      try {
        const domain = new URL(repo.homepage).hostname;
        for (const ext of extensions) {
          const imagePath = `https://raw.githubusercontent.com/${username}/${repoName}/main/public/${domain}.${ext}`;
          // Check if image exists by attempting to fetch it
          try {
            const response = await fetch(imagePath, { method: 'HEAD' });
            if (response.ok) {
              return imagePath;
            }
          } catch (e) {
            // Continue to next attempt
          }
        }
      } catch (e) {
        // Invalid URL, continue to next method
      }
    }
    
    // 2. Try repository name
    for (const ext of extensions) {
      const imagePath = `https://raw.githubusercontent.com/${username}/${repoName}/main/public/${repoName}.${ext}`;
      try {
        const response = await fetch(imagePath, { method: 'HEAD' });
        if (response.ok) {
          return imagePath;
        }
      } catch (e) {
        // Continue to next attempt
      }
    }
    
    // 3. Try common variations
    const variations = [
      repoName.toLowerCase(),
      repoName.replace(/-/g, '_'),
      repoName.replace(/_/g, '-')
    ];
    
    for (const variation of variations) {
      for (const ext of extensions) {
        const imagePath = `https://raw.githubusercontent.com/${username}/${repoName}/main/public/${variation}.${ext}`;
        try {
          const response = await fetch(imagePath, { method: 'HEAD' });
          if (response.ok) {
            return imagePath;
          }
        } catch (e) {
          // Continue to next attempt
        }
      }
    }
    
    return null;
  }

  private generateDynamicDescription(repo: GitHubRepo): string {
    const name = repo.name.toLowerCase();
    const topics = repo.topics || [];
    const hasLiveUrl = !!repo.homepage;
    
    // Create project-specific descriptions based on patterns
    if (name.includes('portfolio') || name.includes('website')) {
      return hasLiveUrl 
        ? `Ein persönliches Portfolio, das moderne Webtechnologien und ansprechendes Design vereint. Besuche die Live-Demo, um die vollständige Erfahrung zu erleben.`
        : `Ein persönliches Portfolio-Projekt, das moderne Webtechnologien und durchdachtes Design showcased.`;
    }
    
    if (name.includes('shop') || name.includes('ecommerce') || topics.includes('ecommerce')) {
      return hasLiveUrl
        ? `Eine vollständige E-Commerce-Lösung mit moderner Benutzeroberfläche. Erlebe die nahtlose Shopping-Experience in der Live-Demo.`
        : `Ein E-Commerce-Projekt mit Fokus auf Benutzerfreundlichkeit und moderne Technologien.`;
    }
    
    if (name.includes('dashboard') || topics.includes('dashboard')) {
      return hasLiveUrl
        ? `Ein interaktives Dashboard mit Echtzeitdaten und intuitiver Bedienung. Teste die Funktionen in der Live-Anwendung.`
        : `Ein Dashboard-Projekt mit Fokus auf Datenvisualisierung und Benutzerinteraktion.`;
    }
    
    if (name.includes('chat') || name.includes('message') || topics.includes('chat')) {
      return hasLiveUrl
        ? `Eine moderne Chat-Anwendung mit Echtzeitkommunikation. Probiere die Live-Demo aus und erlebe nahtlose Kommunikation.`
        : `Eine Chat-Anwendung mit Fokus auf Echtzeitkommunikation und moderne UI.`;
    }
    
    if (name.includes('blog') || topics.includes('blog')) {
      return hasLiveUrl
        ? `Ein modernes Blog-System mit elegantem Design und optimaler Leseerfahrung. Besuche die Live-Version für den vollen Eindruck.`
        : `Ein Blog-Projekt mit Fokus auf Content-Management und Lesererfahrung.`;
    }
    
    if (name.includes('game') || topics.includes('game')) {
      return hasLiveUrl
        ? `Ein interaktives Browser-Spiel mit fesselndem Gameplay. Spiele direkt in der Live-Demo und erlebe den Spaß!`
        : `Ein Browser-Spiel-Projekt mit Fokus auf interaktive Benutzerinteraktion.`;
    }
    
    if (name.includes('tool') || name.includes('utility') || topics.includes('utility')) {
      return hasLiveUrl
        ? `Ein praktisches Web-Tool, das den Alltag erleichtert. Teste die Funktionalität direkt in der Live-Anwendung.`
        : `Ein nützliches Tool-Projekt mit Fokus auf praktische Anwendbarkeit.`;
    }
    
    if (topics.includes('react') || topics.includes('nextjs') || topics.includes('vue')) {
      return hasLiveUrl
        ? `Eine moderne Webanwendung, die modernste Frontend-Technologien nutzt. Erlebe die Performance und das Design in der Live-Demo.`
        : `Eine moderne Webanwendung mit Fokus auf Performance und Benutzererfahrung.`;
    }
    
    // Fallback with original description if good, otherwise generic
    if (repo.description && repo.description.length > 20) {
      return hasLiveUrl
        ? `${repo.description} Besuche die Live-Demo für die vollständige Erfahrung.`
        : repo.description;
    }
    
    return hasLiveUrl
      ? `Ein spannendes Projekt aus meiner Entwicklung. Teste die Live-Anwendung und entdecke die Funktionen selbst.`
      : `Ein spannendes Projekt aus meiner Entwicklung mit durchdachter Umsetzung.`;
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
    
    if (repo.homepage) {
      aspects.push('Live Demo verfügbar');
    }
    
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

  async transformRepoToProject(repo: GitHubRepo): Promise<ProjectFromGitHub> {
    // Try to use GitHub image first, fallback to generated image
    const githubImagePath = await this.getGitHubImagePath(repo);
    const imageId = Math.abs(repo.name.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % 1000;
    const fallbackImage = `https://picsum.photos/600/400?random=${imageId}`;
    
    return {
      id: repo.id,
      title: this.formatRepoName(repo.name),
      description: this.generateDynamicDescription(repo),
      category: this.determineCategory(repo),
      tools: this.extractTools(repo),
      lovableAspects: this.generateLovableAspects(repo),
      image: githubImagePath || fallbackImage,
      tags: repo.topics || [],
      githubUrl: repo.html_url,
      liveUrl: repo.homepage || undefined,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      stargazers_count: repo.stargazers_count
    };
  }
}

export const projectTransformer = new ProjectTransformer();
