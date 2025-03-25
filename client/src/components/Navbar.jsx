import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'products', 'about', 'testimonials', 'faq'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navbarStyle = {
    width: '100%',
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(12px)' : 'none',
    boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: `translateY(${isScrolled ? '0' : '-2px'})`,
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 40px',
    justifyContent: 'space-between'
  };

  const logoStyle = {
    height: '45px',
    transform: 'scale(1)',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)'
    }
  };

  const navLinkStyle = (isActive) => ({
    color: isScrolled ? '#1F2937' : 'white',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: '8px 16px',
    borderRadius: '6px',
    position: 'relative',
    backgroundColor: isActive ? (isScrolled ? 'rgba(200, 76, 48, 0.1)' : 'rgba(255, 255, 255, 0.2)') : 'transparent',
    transform: `translateY(${isActive ? '-2px' : '0'})`,
    textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.2)'
  });

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    backgroundColor: '#C84C30',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(200, 76, 48, 0.3)',
    textDecoration: 'none',
    transform: 'translateY(0)',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(200, 76, 48, 0.4)',
      backgroundColor: '#D65A3E'
    }
  };

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection('hero', e)}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img 
            src="/images/logo.jpg" 
            alt="Logo" 
            style={logoStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          />
        </a>

        {/* Center Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1'
        }}>
          {[
            { id: 'products', label: 'PRODUCTS' },
            { id: 'about', label: 'ABOUT US' },
            { id: 'testimonials', label: 'TESTIMONIALS' },
            { id: 'faq', label: 'FAQ' }
          ].map(({ id, label }) => (
            <a 
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(id, e)}
              style={navLinkStyle(activeSection === id)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = isScrolled ? 'rgba(200, 76, 48, 0.1)' : 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                if (activeSection !== id) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 16px rgba(200, 76, 48, 0.4)';
            e.target.style.backgroundColor = '#D65A3E';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(200, 76, 48, 0.3)';
            e.target.style.backgroundColor = '#C84C30';
          }}
        >
          <FaWhatsapp size={20} />
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
