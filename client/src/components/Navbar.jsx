import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
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

  const navLinkStyle = {
    color: isScrolled ? '#333' : 'white',
    textDecoration: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: '8px 16px',
    borderRadius: '4px',
    position: 'relative',
    fontWeight: '500'
  };

  const navLinkHoverStyle = {
    color: '#C84C30',
    transform: 'translateY(-2px)'
  };

  const navLinkAfterStyle = {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    width: '0',
    height: '2px',
    backgroundColor: '#C84C30',
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)'
  };

  const navLinkHoverAfterStyle = {
    width: '80%'
  };

  return (
    <nav style={{
      width: '100%',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
      position: 'fixed',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection('hero', e)}
          style={{ height: '50px' }}
        >
          <img src="/images/logo.jpg" alt="Logo" style={{ height: '100%' }} />
        </a>

        {/* Center Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1'
        }}>
          <a 
            href="#products" 
            onClick={(e) => scrollToSection('products', e)}
            style={navLinkStyle}
            onMouseEnter={(e) => {
              e.target.style.color = navLinkHoverStyle.color;
              e.target.style.transform = navLinkHoverStyle.transform;
              const after = document.createElement('div');
              after.style.position = navLinkAfterStyle.position;
              after.style.bottom = navLinkAfterStyle.bottom;
              after.style.left = navLinkAfterStyle.left;
              after.style.width = navLinkHoverAfterStyle.width;
              after.style.height = navLinkAfterStyle.height;
              after.style.backgroundColor = navLinkAfterStyle.backgroundColor;
              after.style.transition = navLinkAfterStyle.transition;
              after.style.transform = navLinkAfterStyle.transform;
              e.target.appendChild(after);
            }}
            onMouseLeave={(e) => {
              e.target.style.color = isScrolled ? '#333' : 'white';
              e.target.style.transform = 'translateY(0)';
              const after = e.target.querySelector('div');
              if (after) after.remove();
            }}
          >
            PRODUCTS
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection('about', e)}
            style={navLinkStyle}
            onMouseEnter={(e) => {
              e.target.style.color = navLinkHoverStyle.color;
              e.target.style.transform = navLinkHoverStyle.transform;
              const after = document.createElement('div');
              after.style.position = navLinkAfterStyle.position;
              after.style.bottom = navLinkAfterStyle.bottom;
              after.style.left = navLinkAfterStyle.left;
              after.style.width = navLinkHoverAfterStyle.width;
              after.style.height = navLinkAfterStyle.height;
              after.style.backgroundColor = navLinkAfterStyle.backgroundColor;
              after.style.transition = navLinkAfterStyle.transition;
              after.style.transform = navLinkAfterStyle.transform;
              e.target.appendChild(after);
            }}
            onMouseLeave={(e) => {
              e.target.style.color = isScrolled ? '#333' : 'white';
              e.target.style.transform = 'translateY(0)';
              const after = e.target.querySelector('div');
              if (after) after.remove();
            }}
          >
            ABOUT US
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => scrollToSection('testimonials', e)}
            style={navLinkStyle}
            onMouseEnter={(e) => {
              e.target.style.color = navLinkHoverStyle.color;
              e.target.style.transform = navLinkHoverStyle.transform;
              const after = document.createElement('div');
              after.style.position = navLinkAfterStyle.position;
              after.style.bottom = navLinkAfterStyle.bottom;
              after.style.left = navLinkAfterStyle.left;
              after.style.width = navLinkHoverAfterStyle.width;
              after.style.height = navLinkAfterStyle.height;
              after.style.backgroundColor = navLinkAfterStyle.backgroundColor;
              after.style.transition = navLinkAfterStyle.transition;
              after.style.transform = navLinkAfterStyle.transform;
              e.target.appendChild(after);
            }}
            onMouseLeave={(e) => {
              e.target.style.color = isScrolled ? '#333' : 'white';
              e.target.style.transform = 'translateY(0)';
              const after = e.target.querySelector('div');
              if (after) after.remove();
            }}
          >
            TESTIMONIALS
          </a>
          <a 
            href="#faq" 
            onClick={(e) => scrollToSection('faq', e)}
            style={navLinkStyle}
            onMouseEnter={(e) => {
              e.target.style.color = navLinkHoverStyle.color;
              e.target.style.transform = navLinkHoverStyle.transform;
              const after = document.createElement('div');
              after.style.position = navLinkAfterStyle.position;
              after.style.bottom = navLinkAfterStyle.bottom;
              after.style.left = navLinkAfterStyle.left;
              after.style.width = navLinkHoverAfterStyle.width;
              after.style.height = navLinkAfterStyle.height;
              after.style.backgroundColor = navLinkAfterStyle.backgroundColor;
              after.style.transition = navLinkAfterStyle.transition;
              after.style.transform = navLinkAfterStyle.transform;
              e.target.appendChild(after);
            }}
            onMouseLeave={(e) => {
              e.target.style.color = isScrolled ? '#333' : 'white';
              e.target.style.transform = 'translateY(0)';
              const after = e.target.querySelector('div');
              if (after) after.remove();
            }}
          >
            FAQ
          </a>
        </div>

        {/* Right side buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection('contact', e)}
            style={{
              border: `2px solid ${isScrolled ? '#dc2626' : 'white'}`,
              color: isScrolled ? '#dc2626' : 'white',
              padding: '8px 16px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'all 0.3s ease',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = isScrolled ? '#dc2626' : 'white';
              e.target.style.color = isScrolled ? 'white' : '#333';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = isScrolled ? '#dc2626' : 'white';
            }}
          >
            Contact Us
          </a>
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: isScrolled ? '#333' : 'white',
              fontSize: '24px',
              textDecoration: 'none'
            }}
          >
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
