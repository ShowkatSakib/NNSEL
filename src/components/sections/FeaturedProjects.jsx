import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { featuredProjects, projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
  const [activeType, setActiveType] = useState('Residential');
  const [activeStatus, setActiveStatus] = useState('All');
  const navigate = useNavigate();

  const filtered = projects
    .filter((p) => p.type === activeType)
    .filter((p) => activeStatus === 'All' || p.status === activeStatus)
    .slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-[#C9973A]">Projects</span>
          </h2>
          <div className="gold-line mx-auto mb-5"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Discover our collection of premium residential and commercial developments that set new standards in architectural excellence.
          </p>
        </div>

        {/* Type Toggle */}
        <div className="flex justify-center mb-5">
          <div
            className="flex rounded-full p-1 gap-1"
            style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}
          >
            {['Residential', 'Commercial'].map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeType === type
                    ? 'type-tab-active'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {type === 'Residential' ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 6.5L8 1L14 6.5V14H10V10H6V14H2V6.5Z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="4" width="12" height="11" stroke="currentColor" strokeWidth="1.3" fill="none"/>
                    <path d="M5 4V2H11V4" stroke="currentColor" strokeWidth="1.3" fill="none"/>
                    <rect x="5" y="7" width="2" height="2" stroke="currentColor" strokeWidth="1"/>
                    <rect x="9" y="7" width="2" height="2" stroke="currentColor" strokeWidth="1"/>
                    <rect x="5" y="11" width="2" height="2" stroke="currentColor" strokeWidth="1"/>
                    <rect x="9" y="11" width="2" height="2" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                )}
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {['All', 'Completed', 'Ongoing', 'Upcoming'].map((status) => (
            <button
              key={status}
              onClick={() => setActiveStatus(status)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeStatus === status
                  ? 'filter-tab-active'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={
                activeStatus !== status
                  ? { background: '#1a1a1a', border: '1px solid #2a2a2a' }
                  : {}
              }
            >
              {status === 'All' && null}
              {status === 'Completed' && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )}
              {status === 'Ongoing' && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M6 3.5V6L7.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              )}
              {status}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} variant="two-col" />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">
            <p>No projects found for the selected filters.</p>
          </div>
        )}

        {/* View All Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/projects')}
            className="btn-outline-gold text-sm font-bold px-8 py-3"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
