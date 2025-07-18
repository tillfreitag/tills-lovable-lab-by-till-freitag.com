
import { GitHubRepo } from '@/types/github';
import { githubCache } from './githubCache';

class GitHubApi {
  private baseUrl = 'https://api.github.com';
  private username = 'tillfreitag'; // Hardcoded username

  async fetchUserRepos(): Promise<GitHubRepo[]> {
    const cacheKey = `repos:${this.username}`;
    
    // Check cache first
    const cached = githubCache.get<GitHubRepo[]>(cacheKey);
    if (cached) {
      console.log('Using cached GitHub repos');
      return cached;
    }

    try {
      const response = await fetch(`${this.baseUrl}/users/${this.username}/repos?sort=updated&per_page=50`);
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      const data = await response.json();
      
      // Cache for 10 minutes
      githubCache.set(cacheKey, data, 10 * 60 * 1000);
      console.log('Fetched and cached GitHub repos');
      
      return data;
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      throw error;
    }
  }

  async fetchRepoReadme(repoName: string): Promise<string | null> {
    const cacheKey = `readme:${this.username}:${repoName}`;
    
    // Check cache first
    const cached = githubCache.get<string | null>(cacheKey);
    if (cached !== null) {
      return cached;
    }

    try {
      const response = await fetch(`${this.baseUrl}/repos/${this.username}/${repoName}/readme`);
      if (!response.ok) {
        // Cache null result for 5 minutes to avoid repeated 404s
        githubCache.set(cacheKey, null, 5 * 60 * 1000);
        return null;
      }
      
      const data = await response.json();
      // Decode base64 content
      const readme = atob(data.content.replace(/\n/g, ''));
      
      // Cache for 30 minutes
      githubCache.set(cacheKey, readme, 30 * 60 * 1000);
      
      return readme;
    } catch (error) {
      console.error('Error fetching README:', error);
      // Cache null result for 5 minutes
      githubCache.set(cacheKey, null, 5 * 60 * 1000);
      return null;
    }
  }
}

export const githubApi = new GitHubApi();
