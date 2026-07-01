import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Specs from "../components/sections/Specs";
import Shop from "../components/sections/Shop";
import Gallery from "../components/sections/Gallery";
import CTA from "../components/sections/CTA";
import Newsletter from "../components/sections/Newsletter";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Gallery/>
      <Specs/>
      <Shop/>
      <CTA/>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default Home;