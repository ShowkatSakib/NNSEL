import React from 'react';

const StatusBadge = ({ status, size = 'sm' }) => {
  const sizeClass = size === 'sm' ? 'text-xs px-2.5 py-1' : 'text-sm px-3 py-1.5';

  if (status === 'Completed') {
    return (
      <span className={`badge-completed inline-flex items-center gap-1.5 rounded-full font-medium ${sizeClass}`}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 5L4.2 7.2L8 3" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Completed
      </span>
    );
  }

  if (status === 'Ongoing') {
    return (
      <span className={`badge-ongoing inline-flex items-center gap-1.5 rounded-full font-medium ${sizeClass}`}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <circle cx="5" cy="5" r="3.5" stroke="#C9973A" strokeWidth="1.5"/>
          <path d="M5 3V5L6.5 6" stroke="#C9973A" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        Ongoing
      </span>
    );
  }

  return (
    <span className={`badge-upcoming inline-flex items-center gap-1.5 rounded-full font-medium ${sizeClass}`}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <circle cx="5" cy="5" r="3.5" stroke="#94a3b8" strokeWidth="1.5"/>
      </svg>
      Upcoming
    </span>
  );
};

export default StatusBadge;
