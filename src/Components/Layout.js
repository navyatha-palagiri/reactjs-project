import React from 'react';
import Home from './Home';
import About from './About';
import Testimonial from './Testimonial';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Testimonial/>
        <Work/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Layout