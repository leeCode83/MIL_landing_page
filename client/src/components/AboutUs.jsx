import React from 'react';

const AboutUs = () => {
  const sectionStyle = {
    padding: '80px 20px',
    backgroundColor: '#F3F4F6' // Light gray background
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '60px'
  };

  const imageContainerStyle = {
    flex: '1',
    maxWidth: '500px'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const contentStyle = {
    flex: '1',
    paddingTop: '20px'
  };

  const titleStyle = {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#C84C30',
    marginBottom: '32px',
    lineHeight: '1.2',
    fontFamily: 'serif'
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#4A4A4A',
    marginBottom: '24px'
  };

  // Media query styles for mobile responsiveness
  if (window.innerWidth <= 768) {
    containerStyle.flexDirection = 'column';
    imageContainerStyle.maxWidth = '100%';
  }

  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <img 
            src="/images/thefounder.jpg" 
            alt="Our Founder" 
            style={imageStyle}
          />
        </div>
        <div style={contentStyle}>
          <h2 style={titleStyle}>From Humble Beginnings Come Great Things</h2>
          <p style={paragraphStyle}>
            Established in 1980, Yu-Ai was founded based on love, the brotherly love of the 4 Leong brothers. 
            The shared passion, vision, and bond between siblings was what propelled Yu-Ai further. In the beginning, 
            Yu-Ai was acclaimed to have the best coconut and egg jam, it was further proven by its popularity with consumers.
          </p>
          <p style={paragraphStyle}>
            In 1989, the 4 Leong brothers saw an opportunity to go further and to do more. They took the initiative 
            to expand Yu-Ai into newer territories. With this expansion, more people knew of Yu-Ai and business 
            picked up. From there, the siblings grew to love their craft even more, and this led them to experiment 
            with new products and flavours.
          </p>
          <p style={paragraphStyle}>
            Things took a shift in 2004, Yu-Ai moved its operation to the industrial township of Balakong, Selangor. 
            With a bigger space to manufacture, Yu-Ai installed high-technology machinery and equipment. This addition 
            of machineries was the start of Yu-Ai's journey of stringent manufacturing of quality products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
