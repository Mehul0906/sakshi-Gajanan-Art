import { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Products from './Components/Products';
import About from './Components/About';
// import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="w-[90%] mx-auto">
        <Hero />
        <About />
        <Products />
        {/* <Contact /> */}
      </div>
      <div className="w-[90%] mx-auto">
      <Footer />
      </div>
      
    </div>
  );
}

export default App;

