import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import Hero from "@/components/sections/Hero";
import AboutPage from "@/components/sections/AboutUsSection";
import CountdownSection from "@/components/sections/CountdownSection";
import PrizesSection from "@/components/sections/PrizesSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import FaqSection from "@/components/sections/FaqSection";

export const metadata = {
  title: "CookOff'25 | CodeChefVITCC",
  description: "Official site for CookOff 2025 by CodeChef",
  icons:{
    icon:"/favicon.png"
  }
};

export default async function Page() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navbar />
      <Hero />
      <AboutPage />
      <CountdownSection />
      <PrizesSection />
      <SponsorsSection />
      <FaqSection />
    </div>
  );
}
