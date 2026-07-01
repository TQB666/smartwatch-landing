import { Suspense, lazy } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";

const Features = lazy(() => import("../components/sections/Features"));
const Specs = lazy(() => import("../components/sections/Specs"));
const Shop = lazy(() => import("../components/sections/Shop"));
const Gallery = lazy(() => import("../components/sections/Gallery"));
const CTA = lazy(() => import("../components/sections/CTA"));
const Newsletter = lazy(() => import("../components/sections/Newsletter"));
const Footer = lazy(() => import("../components/layout/Footer"));

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Suspense fallback={<div className="h-20" />}>
        <Features/>
        <Gallery/>
        <Specs/>
        <Shop/>
        <CTA/>
        <Newsletter/>
        <Footer/>
      </Suspense>
    </>
  );
};

export default Home;