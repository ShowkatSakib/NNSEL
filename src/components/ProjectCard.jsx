import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';

const ProjectCard = ({ project, variant = 'two-col' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div
      className="project-card card-dark cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: variant === 'three-col' ? '240px' : '300px' }}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="card-overlay absolute inset-0 bg-black/30 flex items-center justify-center">
          <span className="text-white text-sm font-semibold border border-white/60 px-4 py-2 rounded-full">
            View Details
          </span>
        </div>
        {/* Status & Type badges */}
        <div className="absolute top-3 left-3">
          <StatusBadge status={project.status} />
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-black/70 text-white text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
            {project.type}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-white font-bold text-xl mb-2">{project.name}</h3>
        <div className="flex items-start gap-1.5 mb-4">
          {/* Location pin */}
          <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1C4.79 1 3 2.79 3 5C3 8.5 7 13 7 13C7 13 11 8.5 11 5C11 2.79 9.21 1 7 1ZM7 6.5C6.17 6.5 5.5 5.83 5.5 5C5.5 4.17 6.17 3.5 7 3.5C7.83 3.5 8.5 4.17 8.5 5C8.5 5.83 7.83 6.5 7 6.5Z" fill="#C9973A"/>
          </svg>
          <p className="text-gray-400 text-sm leading-snug">{project.location}</p>
        </div>

        <div className="border-t border-[#2a2a2a] pt-4">
          <div className="flex items-center justify-between">
            {/* Floors */}
            <div className="text-center">
              <div className="flex items-center gap-1.5 justify-center mb-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 14H14M2 10H14M2 6H14M4 2H12V14H4V2Z" stroke="#C9973A" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <span className="text-white font-semibold text-sm">{project.floors}</span>
              </div>
              <p className="text-gray-500 text-xs">Floors</p>
            </div>
            {/* Units */}
            <div className="text-center">
              <div className="flex items-center gap-1.5 justify-center mb-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="4" width="12" height="10" rx="1" stroke="#C9973A" strokeWidth="1.2"/>
                  <path d="M5 4V3C5 2.45 5.45 2 6 2H10C10.55 2 11 2.45 11 3V4" stroke="#C9973A" strokeWidth="1.2"/>
                  <rect x="6" y="9" width="4" height="5" rx="0.5" stroke="#C9973A" strokeWidth="1"/>
                </svg>
                <span className="text-white font-semibold text-sm">{project.units}</span>
              </div>
              <p className="text-gray-500 text-xs">Units</p>
            </div>
            {/* Area */}
            <div className="text-center">
              <p className="text-[#C9973A] font-bold text-sm mb-1">{project.area}</p>
              <p className="text-gray-500 text-xs">Area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
