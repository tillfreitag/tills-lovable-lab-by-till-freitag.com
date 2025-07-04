
import { GitHubRepo } from '@/types/github';

class GitHubApi {
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
}

export const githubApi = new GitHubApi();
