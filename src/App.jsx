import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeaturedProducts from "./components/Product/Product";
import AboutUs from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";


const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
