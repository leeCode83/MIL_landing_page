import React, { useEffect, useRef, useState } from 'react';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

const TestimonialCard = ({ testimonial, delay }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    breakInside: 'avoid',
    pageBreakInside: 'avoid',
    marginBottom: '24px',
    transition: 'all 0.5s ease',
    cursor: 'pointer',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transitionDelay: `${delay * 0.1}s`
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '16px',
    transition: 'transform 0.3s ease',
    border: '3px solid #C84C30'
  };

  const nameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '4px'
  };

  const roleStyle = {
    fontSize: '14px',
    color: '#666',
    marginBottom: '12px'
  };

  const commentStyle = {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#444',
    marginTop: '12px'
  };

  const StarRating = ({ rating }) => {
    return (
      <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          star <= rating ? (
            <StarSolidIcon key={star} style={{ width: '20px', height: '20px', color: '#FCD34D' }} />
          ) : (
            <StarOutlineIcon key={star} style={{ width: '20px', height: '20px', color: '#FCD34D' }} />
          )
        ))}
      </div>
    );
  };

  return (
    <div 
      ref={cardRef}
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      <img src={testimonial.image} alt={testimonial.name} style={imageStyle} />
      <h3 style={nameStyle}>{testimonial.name}</h3>
      <p style={roleStyle}>{testimonial.role}</p>
      <StarRating rating={testimonial.rating} />
      <p style={commentStyle}>{testimonial.comment}</p>
    </div>
  );
};

const Testimonials = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.unobserve(headerRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Bakery Owner",
      image: "/images/people.jpg",
      rating: 5,
      comment: "Their bean paste has consistently excellent quality. It's become an essential ingredient in our bakery. We've been using it for years and never had any issues."
    },
    {
      name: "David Wong",
      role: "Pastry Chef",
      image: "/images/people.jpg",
      rating: 5,
      comment: "The texture and flavor are perfect for both traditional and modern pastries."
    },
    {
      name: "Maria Garcia",
      role: "Restaurant Owner",
      image: "/images/people.jpg",
      rating: 4,
      comment: "Reliable quality and excellent customer service. Highly recommended!"
    },
    {
      name: "James Kim",
      role: "Food Blogger",
      image: "/images/people.jpg",
      rating: 5,
      comment: "The best bean paste I've found in Indonesia. Great for both traditional and modern desserts."
    },
    {
      name: "Lisa Wang",
      role: "Home Baker",
      image: "/images/people.jpg",
      rating: 4,
      comment: "Perfect sweetness level and smooth texture. Makes my mooncakes taste amazing!"
    },
    {
      name: "Michael Tan",
      role: "Café Owner",
      image: "/images/people.jpg",
      rating: 5,
      comment: "Our customers love the authentic taste. Very satisfied with the product quality."
    },
    {
      name: "Emma Liu",
      role: "Dessert Shop Owner",
      image: "/images/people.jpg",
      rating: 5,
      comment: "Consistent quality and great customer service. A reliable supplier!"
    },
    {
      name: "John Zhang",
      role: "Restaurant Chef",
      image: "/images/people.jpg",
      rating: 4,
      comment: "The bean paste quality makes our desserts stand out. Highly recommended."
    }
  ];

  const sectionStyle = {
    padding: '80px 20px',
    backgroundColor: '#EEF2FF',
    overflow: 'hidden',
    position: 'relative'
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative'
  };

  const titleStyle = {
    fontSize: '42px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '60px',
    color: '#C84C30',
    opacity: isHeaderVisible ? 1 : 0,
    transform: isHeaderVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.6s ease'
  };

  const masonryStyle = {
    columnCount: 4,
    columnGap: '24px',
    padding: '20px',
    '@media (max-width: 1200px)': {
      columnCount: 3
    },
    '@media (max-width: 900px)': {
      columnCount: 2
    },
    '@media (max-width: 600px)': {
      columnCount: 1
    }
  };

  // Add decorative elements
  const decorStyle = {
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, rgba(200, 76, 48, 0.1), rgba(200, 76, 48, 0.05))',
    filter: 'blur(40px)',
    zIndex: 0
  };

  return (
    <section id="testimonials" style={sectionStyle}>
      <div style={{ ...decorStyle, top: '5%', left: '5%' }} />
      <div style={{ ...decorStyle, bottom: '5%', right: '5%' }} />
      <div style={containerStyle}>
        <h2 ref={headerRef} style={titleStyle}>What Our Customers Say</h2>
        <div style={masonryStyle}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
