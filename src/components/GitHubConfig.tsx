
import React, { useState, useEffect } from 'react';
import { Settings, Github, Save, Loader2 } from 'lucide-react';
import { githubService } from '@/services/githubService';

interface GitHubConfigProps {
  onUsernameChange: (username: string) => void;
  currentUsername?: string;
}

const GitHubConfig: React.FC<GitHubConfigProps> = ({ onUsernameChange, currentUsername = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(currentUsername);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setUsername(currentUsername);
  }, [currentUsername]);

  const handleSave = async () => {
    if (!username.trim()) {
      setError('Bitte gib einen GitHub-Benutzernamen ein');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Test the username by trying to fetch repos
      await githubService.fetchUserRepos(username.trim());
      githubService.setUsername(username.trim());
      onUsernameChange(username.trim());
      
      // Save to localStorage
      localStorage.setItem('github-username', username.trim());
      
      setIsOpen(false);
    } catch (error) {
      setError('GitHub-Benutzer nicht gefunden oder API-Limit erreicht');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-2 bg-white/80 rounded-full shadow-sm hover:bg-white hover:shadow-md transition-all text-sm text-gray-700"
        title="GitHub-Projekte konfigurieren"
      >
        <Github className="w-4 h-4" />
        <Settings className="w-4 h-4" />
      </button>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 max-w-md">
      <div className="flex items-center gap-3 mb-4">
        <Github className="w-5 h-5 text-gray-700" />
        <h3 className="font-semibold text-gray-800">GitHub Integration</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            GitHub Benutzername
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="z.B. octocat"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            disabled={isLoading}
          />
          {error && (
            <p className="text-red-600 text-sm mt-1">{error}</p>
          )}
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-shadow disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            Speichern
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              setError(null);
              setUsername(currentUsername);
            }}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  );
};

export default GitHubConfig;
