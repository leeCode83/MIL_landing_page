import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#2D2D2D',
    color: '#FFFFFF',
    padding: '80px 0 40px',
    position: 'relative'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '60px'
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#C84C30'
  };

  const sectionTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#C84C30'
  };

  const linkStyle = {
    color: '#FFFFFF',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '12px',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    fontSize: '14px'
  };

  const iconStyle = {
    marginRight: '12px',
    fontSize: '18px',
    color: '#C84C30'
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '16px',
    marginTop: '20px'
  };

  const socialIconStyle = {
    fontSize: '24px',
    color: '#FFFFFF',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  };

  const bottomBarStyle = {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '30px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#888'
  };

  const handleLinkHover = (e) => {
    e.currentTarget.style.color = '#C84C30';
  };

  const handleLinkLeave = (e) => {
    e.currentTarget.style.color = '#FFFFFF';
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Company Info */}
          <div>
            <div style={logoStyle}>MIL Foods</div>
            <p style={{ marginBottom: '20px', lineHeight: '1.6', fontSize: '14px' }}>
              Premium bean paste manufacturer dedicated to bringing authentic Asian flavors to your creations.
              Quality and tradition in every product.
            </p>
            <div style={socialLinksStyle}>
              <FaFacebook 
                style={socialIconStyle} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#C84C30'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
              />
              <FaInstagram 
                style={socialIconStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C84C30'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
              />
              <FaTwitter 
                style={socialIconStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C84C30'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
              />
              <FaLinkedin 
                style={socialIconStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C84C30'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={sectionTitleStyle}>Quick Links</h3>
            <a 
              href="#products" 
              style={linkStyle}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Our Products
            </a>
            <a 
              href="#about" 
              style={linkStyle}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              About Us
            </a>
            <a 
              href="#testimonials" 
              style={linkStyle}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              style={linkStyle}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Contact
            </a>
          </div>

          {/* Products */}
          <div>
            <h3 style={sectionTitleStyle}>Our Products</h3>
            <a 
              href="#redbean" 
              style={linkStyle}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Red Bean Paste
            </a>
            <a 
              href="#greenbean" 
              style={linkStyle}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Green Bean Paste
            </a>
            <a 
              href="#bulk" 
              style={linkStyle}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Bulk Orders
            </a>
            <a 
              href="#wholesale" 
              style={linkStyle}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Wholesale
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={sectionTitleStyle}>Contact Us</h3>
            <div style={contactItemStyle}>
              <FaMapMarkerAlt style={iconStyle} />
              <span>123 Food Industry Street, Jakarta, Indonesia</span>
            </div>
            <div style={contactItemStyle}>
              <FaPhone style={iconStyle} />
              <span>+62 123 456 7890</span>
            </div>
            <div style={contactItemStyle}>
              <FaEnvelope style={iconStyle} />
              <span>info@milfoods.com</span>
            </div>
            <div style={contactItemStyle}>
              <FaWhatsapp style={iconStyle} />
              <span>+62 987 654 3210</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={bottomBarStyle}>
          <p> {new Date().getFullYear()} MIL Foods. All rights reserved.</p>
          <p style={{ marginTop: '10px' }}>
            <span 
              style={{ ...linkStyle, display: 'inline', marginRight: '20px' }}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Privacy Policy
            </span>
            <span 
              style={{ ...linkStyle, display: 'inline' }}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Terms of Service
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
