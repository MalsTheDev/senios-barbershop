import React from 'react';
import Navbar from './components/Navbar';
import Herobanner from './components/Herobanner';
import Services from './components/Services';
import About from './components/About';
import Cuts from './components/Cuts';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='bg-[#070707] min-h-screen text-white font-montserrat selection:bg-white selection:text-black'>
      <Navbar />
      <main>
        <Herobanner />
        <Services />
        <About />
        <Cuts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
