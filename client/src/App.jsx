import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
