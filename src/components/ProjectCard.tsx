
import React from 'react';
import { Star, Heart } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tools: string[];
  lovableAspects: string[];
  image: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  compact?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, compact = false }) => {
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
      </div>

      {/* Projekt-Info */}
      <div className={compact ? 'space-y-3' : 'space-y-4'}>
        <h3 className={`font-bold text-gray-800 group-hover:text-purple-600 transition-colors ${
          compact ? 'text-lg' : 'text-2xl'
        }`}>
          {project.title}
        </h3>
        
        <p className={`text-gray-600 leading-relaxed ${compact ? 'text-sm line-clamp-2' : ''}`}>
          {project.description}
        </p>

        {/* Tools - kompakt für kleine Karten */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            {compact ? 'Tools' : 'Tools & Technologien'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {(compact ? project.tools.slice(0, 2) : project.tools).map((tool) => (
              <span 
                key={tool}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
              >
                {tool}
              </span>
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
            Lovable Aspekte
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
                <span>+{project.lovableAspects.length - 2} weitere</span>
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

        {/* Hover-Aktion */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-4">
          <button className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg transition-shadow ${
            compact ? 'py-2 text-sm' : 'py-3'
          }`}>
            Projekt erkunden →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
