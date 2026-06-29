import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Specs from "../components/sections/Specs";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <Specs/>
    </>
  );
};

export default Home;