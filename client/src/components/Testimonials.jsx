import React from 'react';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

const TestimonialCard = ({ testimonial }) => {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    breakInside: 'avoid',
    pageBreakInside: 'avoid',
    marginBottom: '24px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '16px'
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
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
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
    overflow: 'hidden'
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
    color: '#C84C30'
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

  return (
    <section id="testimonials" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>What Our Customers Say</h2>
        <div style={masonryStyle}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
