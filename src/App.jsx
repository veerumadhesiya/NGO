import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import VolunteerForm from './Components/VolunteerForm';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <VolunteerForm />
      <Footer />
    </>
  );
}

export default App;
