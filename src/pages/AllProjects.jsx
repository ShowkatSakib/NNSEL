import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';

const AllProjects = () => {
  const [activeType, setActiveType] = useState('Residential');
  const [activeStatus, setActiveStatus] = useState('All');

  const filtered = projects
    .filter((p) => p.type === activeType)
    .filter((p) => activeStatus === 'All' || p.status === activeStatus);

  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navbar />

      {/* Hero Header */}
      <div className="pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">All </span>
          <span className="text-[#C9973A]">Projects</span>
        </h1>
        <div className="gold-line mx-auto mb-5"></div>
        <p className="text-gray-400 text-sm">
          Explore our complete portfolio of residential and commercial developments.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
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
                  activeType === type ? 'type-tab-active' : 'text-gray-400 hover:text-white'
                }`}
              >
                {type === 'Residential' ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 6.5L8 1L14 6.5V14H10V10H6V14H2V6.5Z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="4" width="12" height="11" stroke="currentColor" strokeWidth="1.3" fill="none"/>
                    <rect x="5" y="7" width="2" height="2" stroke="currentColor" strokeWidth="1"/>
                    <rect x="9" y="7" width="2" height="2" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                )}
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div className="flex justify-center gap-2 flex-wrap">
          {['All', 'Completed', 'Ongoing', 'Upcoming'].map((status) => (
            <button
              key={status}
              onClick={() => setActiveStatus(status)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeStatus === status ? 'filter-tab-active' : 'text-gray-400 hover:text-white'
              }`}
              style={activeStatus !== status ? { background: '#1a1a1a', border: '1px solid #2a2a2a' } : {}}
            >
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
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} variant="three-col" />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <svg className="mx-auto mb-4 opacity-30" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="4" y="8" width="40" height="32" rx="4" stroke="#C9973A" strokeWidth="2"/>
              <path d="M4 16H44" stroke="#C9973A" strokeWidth="2"/>
              <path d="M16 8V4M32 8V4" stroke="#C9973A" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p className="text-lg">No projects match the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
