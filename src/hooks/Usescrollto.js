import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Returns a scrollTo(sectionId) function.
 * - If already on "/", scrolls directly to the section.
 * - If on any other page (e.g. /blogs/slug), navigates to "/" first,
 *   then scrolls after the page renders.
 * - URL stays as "/" — this is intentional for a single-page app.
 */
export function useScrollTo() {
  const navigate = useNavigate();
  const location = useLocation();

  return (id) => {
    const scroll = () => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname === '/') {
      scroll();
    } else {
      navigate('/');
      // Wait for homepage to mount before scrolling
      setTimeout(scroll, 380);
    }
  };
}