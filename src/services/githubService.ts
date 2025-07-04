
import { GitHubRepo, ProjectFromGitHub } from '@/types/github';
import { githubApi } from './githubApi';
import { projectTransformer } from './projectTransformer';

class GitHubService {
  async fetchUserRepos(): Promise<GitHubRepo[]> {
    return githubApi.fetchUserRepos();
  }

  async fetchRepoReadme(repoName: string): Promise<string | null> {
    return githubApi.fetchRepoReadme(repoName);
  }

  async transformRepoToProject(repo: GitHubRepo): Promise<ProjectFromGitHub> {
    return projectTransformer.transformRepoToProject(repo);
  }
}

export const githubService = new GitHubService();
export type { GitHubRepo, ProjectFromGitHub };
