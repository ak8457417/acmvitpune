"use client"

import Timeline from "@/Components/Timeline";
import AboutUs from "@/Components/AboutUs";
import LandingPage from "@/Components/LandingPage";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="">
      <LandingPage/>
      <AboutUs/>
      <Timeline/>
      <Footer/>
    </div>
  );
}
