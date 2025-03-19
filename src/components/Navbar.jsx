import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const indicatorRef = useRef(null);
  const navRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const routes = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/services', name: 'Services' },
    { path: '/pricing', name: 'Pricing' },
    { path: '/contact', name: 'Contact' }
  ];

  useEffect(() => {
    const currentIndex = routes.findIndex(route => route.path === location.pathname);
    setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
  }, [location]);

  useEffect(() => {
    if (indicatorRef.current && navRef.current) {
      const navItems = navRef.current.querySelectorAll('.nav-item');
      if (navItems[activeIndex]) {
        const navItem = navItems[activeIndex];
        const width = navItem.offsetWidth;
        const height = navItem.offsetHeight;
        const left = navItem.offsetLeft;
        const top = navItem.offsetTop;
        
        indicatorRef.current.style.width = `${width}px`;
        indicatorRef.current.style.height = `${height}px`;
        indicatorRef.current.style.left = `${left}px`;
        indicatorRef.current.style.top = `${top}px`;
      }
    }
  }, [activeIndex, menuOpen]);

  // Add window resize listener to recalculate indicator position
  useEffect(() => {
    const handleResize = () => {
      if (indicatorRef.current && navRef.current) {
        const navItems = navRef.current.querySelectorAll('.nav-item');
        if (navItems[activeIndex]) {
          const navItem = navItems[activeIndex];
          indicatorRef.current.style.width = `${navItem.offsetWidth}px`;
          indicatorRef.current.style.left = `${navItem.offsetLeft}px`;
          indicatorRef.current.style.top = `${navItem.offsetTop}px`;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeIndex]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <span className="logo-text">Kadions<span className="highlight">Systems</span></span>
        </Link>
        
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <div className="nav-container">
          <ul ref={navRef} className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <div className="indicator" ref={indicatorRef}></div>
            {routes.map((route, index) => (
              <li key={route.path} className="nav-item">
                <Link 
                  to={route.path} 
                  className={`nav-link ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => {
                    setActiveIndex(index);
                    setMenuOpen(false);
                  }}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;