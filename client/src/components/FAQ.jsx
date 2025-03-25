import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerStyle = {
    borderBottom: '1px solid #e5e7eb',
    overflow: 'hidden'
  };

  const questionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px',
    cursor: 'pointer',
    backgroundColor: 'white',
    transition: 'background-color 0.3s ease',
    userSelect: 'none'
  };

  const questionTextStyle = {
    fontSize: '18px',
    fontWeight: '500',
    color: '#1a1a1a',
    flex: 1
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    position: 'relative',
    marginLeft: '16px'
  };

  const iconLineStyle = {
    position: 'absolute',
    backgroundColor: '#C84C30',
    transition: 'transform 0.3s ease'
  };

  const horizontalLine = {
    ...iconLineStyle,
    width: '100%',
    height: '2px',
    top: '50%',
    transform: 'translateY(-50%)'
  };

  const verticalLine = {
    ...iconLineStyle,
    width: '2px',
    height: '100%',
    left: '50%',
    transform: isOpen ? 'translateX(-50%) scaleY(0)' : 'translateX(-50%)'
  };

  const answerStyle = {
    maxHeight: isOpen ? '500px' : '0',
    padding: isOpen ? '0 24px 24px' : '0 24px',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: isOpen ? 1 : 0,
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#4b5563'
  };

  return (
    <div style={containerStyle}>
      <div 
        style={{
          ...questionStyle,
          backgroundColor: isOpen ? '#f8f9fa' : 'white'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={questionTextStyle}>{question}</div>
        <div style={iconStyle}>
          <div style={horizontalLine}></div>
          <div style={verticalLine}></div>
        </div>
      </div>
      <div style={answerStyle}>
        {answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "What makes your bean paste unique?",
      answer: "Our bean paste is crafted using traditional methods combined with modern food safety standards. We carefully select premium quality beans and maintain strict quality control throughout the production process, resulting in a product with perfect texture and authentic taste that's ideal for both traditional and modern applications."
    },
    {
      question: "How long does your bean paste last?",
      answer: "When stored properly in a cool, dry place and sealed in its original packaging, our bean paste has a shelf life of 12 months. Once opened, we recommend using it within 1 month and keeping it refrigerated to maintain its quality and freshness."
    },
    {
      question: "Do you offer wholesale pricing?",
      answer: "Yes, we offer competitive wholesale pricing for businesses. Our wholesale program includes bulk ordering options, dedicated customer support, and consistent delivery schedules. Please contact our sales team for detailed pricing information and minimum order quantities."
    },
    {
      question: "Are your products suitable for vegetarians?",
      answer: "Yes, all our bean paste products are 100% vegetarian. They are made purely from beans and natural ingredients, with no animal products or by-products used in the manufacturing process. They're perfect for vegetarian and vegan desserts and pastries."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we primarily serve the Indonesian market and select Southeast Asian countries. For international shipping inquiries, please contact our customer service team to discuss availability, shipping costs, and import requirements for your specific location."
    }
  ];

  const sectionStyle = {
    padding: '80px 20px',
    backgroundColor: '#FFF7ED' // Soft orange background
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: '42px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '60px',
    color: '#C84C30'
  };

  const faqContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  };

  return (
    <section id="faq" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Frequently Asked Questions</h2>
        <div style={faqContainerStyle}>
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
