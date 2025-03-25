import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const slides = [
    {
      image: '/images/greenbeanpaste.jpg',
      title: "Premium Green Bean Paste",
      description: "Crafted with tradition, perfect for your modern creations",
      cta: "Shop Green Bean Paste"
    },
    {
      image: '/images/redbeanpaste.jpg',
      title: "Authentic Red Bean Paste",
      description: "The secret ingredient for perfect mooncakes and pastries",
      cta: "Shop Red Bean Paste"
    },
    {
      image: '/images/wholesale.jpg',
      title: "Wholesale Solutions",
      description: "Quality ingredients for your business success",
      cta: "Get Wholesale Prices"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false
  };

  const heroStyle = {
    width: '100%',
    height: '100vh',
    marginTop: '0',
    position: 'relative',
    overflow: 'hidden'
  };

  const slideStyle = {
    width: '100%',
    height: '100vh',
    position: 'relative'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.7)'
  };

  const contentWrapperStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))'
  };

  const contentStyle = {
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    maxWidth: '800px'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  };

  const descriptionStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    marginBottom: '2rem',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
  };

  const buttonStyle = {
    padding: '1rem 2rem',
    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
    backgroundColor: '#dc2626',
    color: 'white',
    border: 'none',
    borderRadius: '999px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: '1px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    ':hover': {
      backgroundColor: '#ef4444',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 8px rgba(0,0,0,0.2)'
    }
  };

  return (
    <section id="hero" style={heroStyle}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div style={slideStyle}>
              <img src={slide.image} alt={slide.title} style={imageStyle} />
              <div style={contentWrapperStyle}>
                <div style={contentStyle}>
                  <h1 style={titleStyle}>{slide.title}</h1>
                  <p style={descriptionStyle}>{slide.description}</p>
                  <button 
                    style={buttonStyle}
                    onClick={() => window.location.href = '#products'}
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
