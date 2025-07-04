
import React from 'react';
import { Star, Heart, ExternalLink, Github, Calendar, Trophy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tools: string[];
  lovableAspects: string[];
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  created_at?: string;
  updated_at?: string;
  stargazers_count?: number;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  compact?: boolean;
  onTechnologyClick?: (technology: string) => void;
  selectedTechnology?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  compact = false, 
  onTechnologyClick,
  selectedTechnology 
}) => {
  const { t } = useLanguage();
  
  const handleExplore = () => {
    // Prioritize live URL over GitHub URL
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'short'
    });
  };

  const handleTechClick = (tech: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onTechnologyClick) {
      onTechnologyClick(tech);
    }
  };

  return (
    <div 
      className={`group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        compact ? 'p-4' : 'p-6'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Projekt-Bild */}
      <div className={`relative overflow-hidden rounded-2xl aspect-video ${compact ? 'mb-4' : 'mb-6'}`}>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
          <Heart className="w-4 h-4 text-pink-500" />
        </div>
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {project.category}
        </div>
        
        {/* Project Quality Indicators */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600/80 backdrop-blur-sm text-white p-2 rounded-full hover:bg-green-600 transition-colors"
              title="Live Demo"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/80 transition-colors"
              title="GitHub Repository"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.stargazers_count && project.stargazers_count > 0 && (
            <div className="bg-yellow-500/80 backdrop-blur-sm text-white p-2 rounded-full" title={`${project.stargazers_count} GitHub Stars`}>
              <div className="flex items-center gap-1">
                <Trophy className="w-3 h-3" />
                <span className="text-xs font-medium">{project.stargazers_count}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Projekt-Info */}
      <div className={compact ? 'space-y-3' : 'space-y-4'}>
        <div className="flex items-start justify-between gap-2">
          <h3 className={`font-bold text-gray-800 group-hover:text-purple-600 transition-colors ${
            compact ? 'text-lg' : 'text-2xl'
          }`}>
            {project.title}
          </h3>
          
          {/* Project Timeline */}
          {(project.created_at || project.updated_at) && (
            <div className="flex flex-col items-end text-xs text-gray-500">
              {project.created_at && (
                <div className="flex items-center gap-1" title="Created">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(project.created_at)}</span>
                </div>
              )}
              {project.updated_at && project.updated_at !== project.created_at && (
                <div className="text-green-600 font-medium" title="Last updated">
                  Updated {formatDate(project.updated_at)}
                </div>
              )}
            </div>
          )}
        </div>
        
        <p className={`text-gray-600 leading-relaxed ${compact ? 'text-sm line-clamp-2' : ''}`}>
          {project.description}
        </p>

        {/* Tools - clickable for filtering */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            {compact ? t('projects.toolsCompact') : t('projects.tools')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {(compact ? project.tools.slice(0, 2) : project.tools).map((tool) => (
              <button
                key={tool}
                onClick={(e) => handleTechClick(tool, e)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedTechnology === tool
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200 hover:shadow-sm'
                }`}
                title={`Filter by ${tool}`}
              >
                {tool}
              </button>
            ))}
            {compact && project.tools.length > 2 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                +{project.tools.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Lovable Aspekte - verkürzt bei kompakten Karten */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Heart className="w-4 h-4 text-pink-500" />
            {t('projects.lovableAspects')}
          </h4>
          <div className="space-y-1">
            {(compact ? project.lovableAspects.slice(0, 2) : project.lovableAspects).map((aspect) => (
              <div key={aspect} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-pink-400 rounded-full flex-shrink-0"></span>
                <span className={compact ? 'line-clamp-1' : ''}>{aspect}</span>
              </div>
            ))}
            {compact && project.lovableAspects.length > 2 && (
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0"></span>
                <span>+{project.lovableAspects.length - 2} {t('projects.moreAspects')}</span>
              </div>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {(compact ? project.tags.slice(0, 2) : project.tags).map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs"
            >
              #{tag}
            </span>
          ))}
          {compact && project.tags.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs">
              +{project.tags.length - 2}
            </span>
          )}
        </div>

        {/* Hover-Aktion - Prioritize Live Demo */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-4">
          <button 
            onClick={handleExplore}
            className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg transition-shadow ${
              compact ? 'py-2 text-sm' : 'py-3'
            }`}
          >
            {project.liveUrl ? t('projects.liveDemo') : t('projects.viewCode')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
