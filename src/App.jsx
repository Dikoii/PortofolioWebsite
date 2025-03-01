import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Technologies from './component/Technologies';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Contacts from './component/Contacts';
import Footer from './component/Footer'; 

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <Helmet>
        <title>PortoFolio Website</title>
      </Helmet>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
};

export default App;
