
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

// Beispielprojekte - hier kannst du deine echten Projekte einfügen
const projects = [
  {
    id: 1,
    title: "Mindful Moments",
    description: "Eine sanfte Meditations-App, die Ruhe in den Alltag bringt",
    category: "Mobile Experience",
    tools: ["React", "Framer Motion", "Tailwind"],
    lovableAspects: ["Sanfte Animationen", "Beruhigende Farbpalette", "Intuitive Gesten"],
    image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=600&h=400&fit=crop",
    tags: ["UX Design", "Wellness", "Microinteractions"]
  },
  {
    id: 2,
    title: "Kreative Küche",
    description: "Ein verspieltes Rezept-Portal, das Kochen zum Erlebnis macht",
    category: "Web Application",
    tools: ["Next.js", "Supabase", "CSS Animations"],
    lovableAspects: ["Handgezeichnete Icons", "Warme Farbverläufe", "Persönliche Notizen"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    tags: ["Food", "Community", "Design System"]
  },
  {
    id: 3,
    title: "Digital Garden",
    description: "Ein persönlicher Wissensraum, der wie ein lebendiger Garten wächst",
    category: "Knowledge Base",
    tools: ["Gatsby", "MDX", "D3.js"],
    lovableAspects: ["Organisches Wachstum", "Verknüpfte Gedanken", "Saisonale Themes"],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    tags: ["Knowledge", "Growth", "Visualization"]
  },
  {
    id: 4,
    title: "Heartbeat Chat",
    description: "Ein emotionaler Messenger, der Gefühle sichtbar macht",
    category: "Communication",
    tools: ["React Native", "WebSocket", "Emotion API"],
    lovableAspects: ["Emotionale Visualisierung", "Empathische Responses", "Sanfte Vibrationen"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["Emotion", "Real-time", "Innovation"]
  }
];

const categories = ["Alle", "Mobile Experience", "Web Application", "Knowledge Base", "Communication"];

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  
  const filteredProjects = selectedCategory === "Alle" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-6 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Kategorie-Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
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

        {/* Projektgrid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Und das ist erst der Anfang... ✨
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">Weitere Projekte in Arbeit</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
