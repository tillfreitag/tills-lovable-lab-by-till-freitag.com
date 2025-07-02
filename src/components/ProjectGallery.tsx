
import React, { useState, useEffect } from 'react';
import { LayoutGrid, Grid3X3, Grid2X2, RefreshCw, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProjectCard from './ProjectCard';
import { githubService, ProjectFromGitHub } from '@/services/githubService';

const ProjectGallery = () => {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<ProjectFromGitHub[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [gridCols, setGridCols] = useState<2 | 3 | 4>(2);
  const [isLoading, setIsLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Initialize selectedCategory with translated "All"
  useEffect(() => {
    setSelectedCategory(t('projects.categories.all'));
  }, [t]);
  
  // Load user preferences from localStorage on mount
  useEffect(() => {
    const savedGridCols = localStorage.getItem('projectGridCols');
    if (savedGridCols && [2, 3, 4].includes(Number(savedGridCols))) {
      setGridCols(Number(savedGridCols) as 2 | 3 | 4);
    }

    // Auto-load projects on mount
    loadGitHubProjects();
  }, []);

  const loadGitHubProjects = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const repos = await githubService.fetchUserRepos();
      const projectData = repos
        .filter(repo => !repo.fork) // Exclude forked repositories
        .slice(0, 12) // Limit to 12 most recent projects
        .map(repo => githubService.transformRepoToProject(repo));
      
      setProjects(projectData);
      setLastRefresh(new Date());
    } catch (error) {
      console.error('Failed to load GitHub projects:', error);
      setError('Failed to load projects from GitHub');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = () => {
    loadGitHubProjects();
  };

  // Save user preference to localStorage
  const handleGridChange = (cols: 2 | 3 | 4) => {
    setGridCols(cols);
    localStorage.setItem('projectGridCols', cols.toString());
  };
  
  // Get unique categories from projects with translations
  const categories = [
    t('projects.categories.all'),
    ...Array.from(new Set(projects.map(p => p.category)))
  ];
  
  const filteredProjects = selectedCategory === t('projects.categories.all') 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Improved dynamic grid classes with better responsive breakpoints
  const getGridClasses = () => {
    switch (gridCols) {
      case 2:
        return "grid grid-cols-1 md:grid-cols-2 gap-6";
      case 3:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";
      case 4:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3";
      default:
        return "grid grid-cols-1 md:grid-cols-2 gap-6";
    }
  };

  return (
    <section className="py-6 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Status & Refresh */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handleRefresh}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-3 py-2 bg-white/80 rounded-full shadow-sm hover:bg-white hover:shadow-md transition-all text-sm text-gray-700 disabled:opacity-50"
                title={t('projects.refresh')}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4" />
                )}
              </button>
              
              {lastRefresh && (
                <span className="text-xs text-gray-500">
                  {t('projects.lastUpdate')} {lastRefresh.toLocaleTimeString()}
                </span>
              )}
            </div>
          </div>

          <div className="text-sm text-gray-600">
            <span className="inline-flex items-center gap-1">
              📂 {projects.length} {t('projects.projectsFrom')} <strong>@tillfreitag</strong>
            </span>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={handleRefresh}
              className="px-4 py-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors"
            >
              {t('projects.refresh')}
            </button>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-purple-500" />
            <p className="text-gray-600">{t('projects.loading')}</p>
          </div>
        )}

        {/* Controls Section */}
        {!isLoading && !error && projects.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            {/* Kategorie-Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Grid Layout Controls */}
            <div className="flex items-center gap-2 bg-white/80 rounded-full p-1 shadow-sm">
              <button
                onClick={() => handleGridChange(2)}
                className={`p-2 rounded-full transition-all duration-200 ${
                  gridCols === 2
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-white hover:text-gray-800'
                }`}
                title="2 Spalten - Große Karten"
              >
                <Grid2X2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleGridChange(3)}
                className={`p-2 rounded-full transition-all duration-200 ${
                  gridCols === 3
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-white hover:text-gray-800'
                }`}
                title="3 Spalten - Mittlere Karten"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleGridChange(4)}
                className={`p-2 rounded-full transition-all duration-200 ${
                  gridCols === 4
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-white hover:text-gray-800'
                }`}
                title="4 Spalten - Kompakte Karten"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Project Grid */}
        {!isLoading && !error && (
          <div className={`${getGridClasses()} transition-all duration-500`}>
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                compact={gridCols > 2}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Keine Projekte gefunden</p>
            <button 
              onClick={handleRefresh}
              className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
            >
              {t('projects.refresh')}
            </button>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {t('projects.footer')} (@tillfreitag) ✨
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">
              {t('projects.liveSync')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
