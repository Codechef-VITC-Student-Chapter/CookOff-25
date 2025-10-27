"use server";

import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import Hero from "@/components/sections/Hero";
import AboutPage from "@/components/sections/AboutUsSection";
import CountdownSection from "@/components/sections/CountdownSection";
import PrizesSection from "@/components/sections/PrizesSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import FaqSection from "@/components/sections/FaqSection";


export default async function page() {
  
  return (
    <div className="min-h-screen bg-[#121212] text-foreground">
      <Navbar />
      <Hero/>
      <AboutPage></AboutPage>
      <CountdownSection></CountdownSection>
      <PrizesSection></PrizesSection>
      <SponsorsSection></SponsorsSection>
      <FaqSection></FaqSection>
    </div>
    
  );
}
