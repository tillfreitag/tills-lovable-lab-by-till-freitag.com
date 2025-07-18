
import React, { useState, useEffect } from 'react';
import MinimalHeader from '@/components/MinimalHeader';
import ProjectGallery from '@/components/ProjectGallery';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LovableBadge from '@/components/LovableBadge';
import SEOHead from '@/components/SEO/SEOHead';
import StructuredData from '@/components/SEO/StructuredData';
import { githubService } from '@/services/githubService';
import { ProjectFromGitHub } from '@/types/github';

const Index = () => {
  const [projects, setProjects] = useState<ProjectFromGitHub[]>([]);

  // Load projects for structured data
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const repos = await githubService.fetchUserRepos();
        const filteredRepos = repos
          .filter(repo => !repo.fork)
          .slice(0, 12);
        
        const projectData = await Promise.all(
          filteredRepos.map(repo => githubService.transformRepoToProject(repo))
        );
        
        setProjects(projectData);
      } catch (error) {
        console.error('Failed to load projects for SEO:', error);
      }
    };

    loadProjects();
  }, []);

  // Transform projects for structured data
  const structuredProjects = projects.map(project => ({
    name: project.title,
    description: project.description,
    url: project.githubUrl,
    image: project.image,
    dateCreated: project.created_at || '',
    technologies: project.tools
  }));

  return (
    <>
      <SEOHead />
      <StructuredData projects={structuredProjects} />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <MinimalHeader />
        <ProjectGallery />
        <AboutSection />
        <ContactSection />
        <Footer />
        <LovableBadge />
      </div>
    </>
  );
};

export default Index;
