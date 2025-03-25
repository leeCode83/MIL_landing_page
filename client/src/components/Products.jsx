import React, { useEffect, useState, useRef } from 'react';

const Products = () => {
  const [isRedBeanVisible, setIsRedBeanVisible] = useState(false);
  const [isGreenBeanVisible, setIsGreenBeanVisible] = useState(false);
  const redBeanRef = useRef(null);
  const greenBeanRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.target.id === 'redBean') {
          setIsRedBeanVisible(entry.isIntersecting);
        } else if (entry.target.id === 'greenBean') {
          setIsGreenBeanVisible(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (redBeanRef.current) observer.observe(redBeanRef.current);
    if (greenBeanRef.current) observer.observe(greenBeanRef.current);

    return () => {
      if (redBeanRef.current) observer.unobserve(redBeanRef.current);
      if (greenBeanRef.current) observer.unobserve(greenBeanRef.current);
    };
  }, []);

  const sectionStyle = {
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px 20px',
    display: 'flex',
    flexDirection: 'column',
    animation: 'fadeInUp 0.8s ease forwards'
  };

  const titleStyle = {
    fontSize: '42px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#C84C30',
    marginBottom: '80px',
    opacity: 0,
    transform: 'translateY(20px)',
    animation: 'fadeInUp 0.8s ease forwards'
  };

  const productContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '60px',
    position: 'relative',
    padding: '40px 0'
  };

  const productImageStyle = (isVisible) => ({
    flex: '1',
    maxWidth: '600px',
    height: '500px',
    objectFit: 'cover',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-100px) scale(0.95)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
    filter: 'brightness(1.05) contrast(1.05)'
  });

  const productContentStyle = (isVisible) => ({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
  });

  const productTitleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: '16px',
    position: 'relative',
    display: 'inline-block',
    '::after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '0',
      width: '60px',
      height: '3px',
      backgroundColor: '#C84C30',
      borderRadius: '2px'
    }
  };

  const productDescriptionStyle = {
    fontSize: '18px',
    lineHeight: '1.7',
    color: '#4B5563',
    marginBottom: '24px'
  };

  const featureListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '32px'
  };

  const featureItemStyle = (isVisible, index) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '16px',
    color: '#374151',
    transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
    opacity: isVisible ? 1 : 0,
    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.4 + index * 0.1}s`
  });

  const checkmarkStyle = {
    color: '#C84C30',
    fontSize: '24px'
  };

  const buttonStyle = (isVisible) => ({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '16px 32px',
    backgroundColor: '#C84C30',
    color: 'white',
    borderRadius: '999px',
    fontSize: '18px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(200, 76, 48, 0.25)',
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    opacity: isVisible ? 1 : 0,
    transitionDelay: '0.6s',
    ':hover': {
      backgroundColor: '#E64C30',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 8px rgba(200, 76, 48, 0.3)'
    }
  });

  const decorationStyle = {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at center, rgba(200, 76, 48, 0.08), transparent 70%)',
    zIndex: 0,
    transition: 'all 1s ease-out'
  };

  return (
    <section id="products" style={sectionStyle}>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Our Premium Products</h2>

        {/* Red Bean Paste */}
        <div id="redBean" ref={redBeanRef} style={productContainerStyle}>
          <div style={{
            ...decorationStyle,
            top: '-100px',
            left: '-200px',
            transform: isRedBeanVisible ? 'scale(1)' : 'scale(0.8)',
            opacity: isRedBeanVisible ? 1 : 0
          }} />
          <img
            src="/images/redbeanpaste.jpg"
            alt="Red Bean Paste"
            style={productImageStyle(isRedBeanVisible)}
          />
          <div style={productContentStyle(isRedBeanVisible)}>
            <h3 style={productTitleStyle}>Premium Red Bean Paste</h3>
            <p style={productDescriptionStyle}>
              Experience the rich, authentic taste of our premium red bean paste. 
              Crafted with carefully selected azuki beans and traditional methods 
              for the perfect balance of sweetness and texture.
            </p>
            <div style={featureListStyle}>
              {[
                '100% Natural Ingredients',
                'Perfect for Mooncakes & Pastries',
                'Smooth, Consistent Texture'
              ].map((feature, index) => (
                <div key={index} style={featureItemStyle(isRedBeanVisible, index)}>
                  <span style={checkmarkStyle}>✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button style={buttonStyle(isRedBeanVisible)}>
              Learn More
              <span style={{ marginLeft: '8px', transition: 'transform 0.3s ease' }}>→</span>
            </button>
          </div>
        </div>

        {/* Green Bean Paste */}
        <div id="greenBean" ref={greenBeanRef} style={{
          ...productContainerStyle,
          flexDirection: 'row-reverse'
        }}>
          <div style={{
            ...decorationStyle,
            bottom: '-100px',
            right: '-200px',
            transform: isGreenBeanVisible ? 'scale(1)' : 'scale(0.8)',
            opacity: isGreenBeanVisible ? 1 : 0
          }} />
          <img
            src="/images/greenbeanpaste.jpg"
            alt="Green Bean Paste"
            style={productImageStyle(isGreenBeanVisible)}
          />
          <div style={productContentStyle(isGreenBeanVisible)}>
            <h3 style={productTitleStyle}>Authentic Green Bean Paste</h3>
            <p style={productDescriptionStyle}>
              Discover the delicate flavor of our green bean paste. Made from 
              premium mung beans, it's the perfect filling for traditional Asian 
              pastries and modern fusion desserts.
            </p>
            <div style={featureListStyle}>
              {[
                'Traditional Recipe',
                'Versatile Applications',
                'Quality Guaranteed'
              ].map((feature, index) => (
                <div key={index} style={featureItemStyle(isGreenBeanVisible, index)}>
                  <span style={checkmarkStyle}>✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button style={buttonStyle(isGreenBeanVisible)}>
              Learn More
              <span style={{ marginLeft: '8px', transition: 'transform 0.3s ease' }}>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
