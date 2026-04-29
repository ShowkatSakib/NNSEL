import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/sections/Navbar';
import StatusBadge from '../components/sections/StatusBadge';
import { getProjectById, projects } from '../data/projects';
import ProjectCard from '../components/sections/ProjectCard';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);
  const [activeFloor, setActiveFloor] = useState(null);
  const [activeTab, setActiveTab] = useState('Photo Gallery');
  const [lightboxImg, setLightboxImg] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0E0E0E] flex items-center justify-center">
        <Navbar />
        <div className="text-center mt-32">
          <h2 className="text-white text-2xl mb-4">Project not found</h2>
          <button onClick={() => navigate('/projects')} className="btn-gold">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const floorKeys = Object.keys(project.floorPlans || {});
  const currentFloor = activeFloor || floorKeys[0];

  // Sidebar: similar projects
  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.type === project.type)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navbar />

      {/* Hero Banner */}
      <div
        className="relative w-full"
        style={{ height: '420px', marginTop: '80px' }}
      >
        <img
          src={project.heroImage || project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div
          className="hero-gradient absolute inset-0"
        />
        {/* Content over hero */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-12">
          {/* Back link */}
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 text-sm transition-colors w-fit"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15 9H3M3 9L8 4M3 9L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </button>

          <div className="flex items-center gap-3 mb-4">
            <StatusBadge status={project.status} size="md" />
            <span className="bg-black/60 text-white text-sm px-3 py-1.5 rounded-full backdrop-blur-sm font-medium">
              {project.type}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
            {project.name}
          </h1>

          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1C5.24 1 3 3.24 3 6C3 9.5 8 15 8 15C8 15 13 9.5 13 6C13 3.24 10.76 1 8 1ZM8 7.5C7.17 7.5 6.5 6.83 6.5 6C6.5 5.17 7.17 4.5 8 4.5C8.83 4.5 9.5 5.17 9.5 6C9.5 6.83 8.83 7.5 8 7.5Z" fill="#C9973A"/>
            </svg>
            {project.location}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left / Main */}
          <div className="flex-1 min-w-0">
            {/* Project Overview Card */}
            <div
              className="rounded-2xl p-7 mb-8"
              style={{ background: '#161616', border: '1px solid #2a2a2a' }}
            >
              <h2 className="text-white font-bold text-xl mb-6">Project Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                {/* Left column */}
                <div className="space-y-6">
                  <OverviewItem
                    icon="person"
                    label="Land Owner"
                    value={project.landOwner}
                  />
                  <OverviewItem
                    icon="calendar"
                    label="Handover Date"
                    value={project.handoverDate}
                  />
                  <OverviewItem
                    icon="area"
                    label="Land Area"
                    value={project.landArea}
                  />
                </div>
                {/* Right column */}
                <div className="space-y-6">
                  <OverviewItem
                    icon="floors"
                    label="Number of Floors"
                    value={project.floors}
                  />
                  <OverviewItem
                    icon="units"
                    label="Total Units"
                    value={project.units}
                  />
                  <OverviewItem
                    icon="size"
                    label="Flat Size"
                    value={project.area}
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-7 mb-10">
              {project.description}
            </p>

            {/* Facilities */}
            {project.facilities && project.facilities.length > 0 && (
              <div
                className="rounded-2xl p-7 mb-8"
                style={{ background: '#161616', border: '1px solid #2a2a2a' }}
              >
                <h2 className="text-white font-bold text-xl mb-6">Facilities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.facilities.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg
                        className="facility-check mt-0.5 flex-shrink-0"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8L6.5 11.5L13 5"
                          stroke="#C9973A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Floor Plans */}
            {project.floorPlans && floorKeys.length > 0 && (
              <div className="mb-10">
                {/* Tabs */}
                <div className="flex gap-6 border-b border-[#2a2a2a] mb-6">
                  {floorKeys.map((floor) => (
                    <button
                      key={floor}
                      onClick={() => setActiveFloor(floor)}
                      className={`pb-3 text-sm font-medium transition-all ${
                        (activeFloor || floorKeys[0]) === floor
                          ? 'floor-tab-active text-white'
                          : 'floor-tab'
                      }`}
                    >
                      {floor}
                    </button>
                  ))}
                </div>
                {/* Floor plan image */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: '1px solid #2a2a2a' }}
                >
                  <div
                    style={{
                      background: project.floorPlans[currentFloor]?.dark ? '#111111' : '#f5f4f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '16px',
                      minHeight: '320px',
                    }}
                  >
                    <img
                      src={project.floorPlans[currentFloor]?.image}
                      alt={currentFloor}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '500px',
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                      loading="lazy"
                    />
                  </div>
                  <div style={{ background: '#161616', borderTop: '1px solid #2a2a2a' }}>
                    <p className="text-gray-400 text-sm p-4">
                      {project.floorPlans[currentFloor]?.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Gallery / Status Tabs */}
            <div className="mb-8">
              <div className="flex gap-6 border-b border-[#2a2a2a] mb-6">
                {['Photo Gallery', 'Project Status'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm font-medium transition-all ${
                      activeTab === tab ? 'floor-tab-active text-white' : 'floor-tab'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'Photo Gallery' && (
                <div className="grid grid-cols-2 gap-4">
                  {project.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden cursor-pointer"
                      style={{ height: '220px' }}
                      onClick={() => setLightboxImg(img)}
                    >
                      <img
                        src={img}
                        alt={`${project.name} ${i + 1}`}
                        className="gallery-img w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'Project Status' && (
                <div
                  className="rounded-2xl p-7"
                  style={{ background: '#161616', border: '1px solid #2a2a2a' }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <StatusBadge status={project.status} size="md" />
                    <span className="text-gray-300 text-sm">
                      Current project status
                    </span>
                  </div>
                  {project.handoverDate && (
                    <div className="text-gray-400 text-sm">
                      <span className="text-gray-500">Expected Handover: </span>
                      <span className="text-white font-semibold">{project.handoverDate}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Project Location */}
            {project.mapLink && (
              <div className="mb-8">
                {/* Header bar */}
                <div
                  className="flex items-center justify-between px-5 py-4 rounded-t-2xl"
                  style={{ background: '#161616', border: '1px solid #2a2a2a', borderBottom: 'none' }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(201,151,58,0.15)' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1C5.24 1 3 3.24 3 6C3 9.5 8 15 8 15C8 15 13 9.5 13 6C13 3.24 10.76 1 8 1ZM8 7.5C7.17 7.5 6.5 6.83 6.5 6C6.5 5.17 7.17 4.5 8 4.5C8.83 4.5 9.5 5.17 9.5 6C9.5 6.83 8.83 7.5 8 7.5Z" fill="#C9973A"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base leading-tight">Project Location</p>
                      <p className="text-gray-500 text-xs mt-0.5">{project.location}</p>
                    </div>
                  </div>
                  <a
                    href={project.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                    style={{ border: '1px solid #C9973A', color: '#C9973A' }}
                    onMouseEnter={e => { e.currentTarget.style.background='#C9973A'; e.currentTarget.style.color='#000'; }}
                    onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#C9973A'; }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M12 2L8 2M12 2L7 7M12 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 3H2.5C2.22 3 2 3.22 2 3.5V11.5C2 11.78 2.22 12 2.5 12H10.5C10.78 12 11 11.78 11 11.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Get Directions →
                  </a>
                </div>
                {/* Map iframe */}
                <div
                  className="overflow-hidden rounded-b-2xl"
                  style={{ border: '1px solid #2a2a2a', borderTop: 'none', height: '400px' }}
                >
                  <iframe
                    title="Project Location"
                    src={project.mapEmbed || `https://maps.google.com/maps?q=${encodeURIComponent(project.location)}&output=embed&z=15`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sidebar-sticky">
              {/* Enquire Card */}
              <div className="enquire-card mb-6">
                <h3 className="text-white font-bold text-lg mb-2">
                  Interested in this project?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  Get in touch with us to schedule a visit or request more information about {project.name}.
                </p>
                <button className="btn-gold w-full text-sm font-bold py-3">
                  Enquire Now
                </button>
              </div>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div>
                  <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
                    Similar Projects
                  </h4>
                  <div className="space-y-4">
                    {relatedProjects.map((rp) => (
                      <div
                        key={rp.id}
                        className="rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ background: '#161616', border: '1px solid #2a2a2a' }}
                        onClick={() => {
                          navigate(`/projects/${rp.id}`);
                          window.scrollTo(0, 0);
                        }}
                      >
                        <div className="h-28 overflow-hidden">
                          <img
                            src={rp.image}
                            alt={rp.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-white text-sm font-semibold">{rp.name}</p>
                          <p className="text-gray-500 text-xs mt-1">{rp.area}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl leading-none hover:text-[#C9973A]"
            onClick={() => setLightboxImg(null)}
          >
            ×
          </button>
          <img
            src={lightboxImg}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

// OverviewItem helper
const iconMap = {
  person: (
    <path d="M8 8C9.66 8 11 6.66 11 5C11 3.34 9.66 2 8 2C6.34 2 5 3.34 5 5C5 6.66 6.34 8 8 8ZM8 9.5C6 9.5 2 10.5 2 12.5V14H14V12.5C14 10.5 10 9.5 8 9.5Z" fill="#C9973A"/>
  ),
  calendar: (
    <path d="M13 2H11V1H9V2H7V1H5V2H3C2.45 2 2 2.45 2 3V14C2 14.55 2.45 15 3 15H13C13.55 15 14 14.55 14 14V3C14 2.45 13.55 2 13 2ZM13 14H3V6H13V14ZM13 5H3V3H5V4H7V3H9V4H11V3H13V5Z" fill="#C9973A"/>
  ),
  area: (
    <path d="M2 2V14H14V2H2ZM13 13H3V3H13V13ZM5 11H4V12H5V11ZM12 4H11V5H12V4ZM4 4H5V5H4V4ZM11 11H12V12H11V11Z" fill="#C9973A"/>
  ),
  floors: (
    <path d="M2 14H14M2 10H14M2 6H14M4 2H12V14H4V2Z" stroke="#C9973A" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
  ),
  units: (
    <path d="M3 5H13V14H3V5ZM6 5V3.5C6 2.67 6.67 2 7.5 2H8.5C9.33 2 10 2.67 10 3.5V5M6 10H10V14H6V10Z" stroke="#C9973A" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
  ),
  size: (
    <path d="M3 8H13M8 3V13M3 3L13 13M13 3L3 13" stroke="#C9973A" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
  ),
};

const OverviewItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div
      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
      style={{ background: 'rgba(201,151,58,0.12)' }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        {iconMap[icon]}
      </svg>
    </div>
    <div>
      <p className="text-gray-500 text-xs mb-0.5">{label}</p>
      <p className="text-white font-semibold text-sm">{value}</p>
    </div>
  </div>
);

export default ProjectDetail;
