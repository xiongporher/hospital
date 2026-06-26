import BannerSection from "@/components/sections/BannerSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import PackagesSection from "@/components/sections/PackagesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NewsUpdateSection from "@/components/sections/NewsUpdateSection";
import EmergencyCTA from "@/components/sections/EmergencyCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased">
      <main>
        <BannerSection />
        <PackagesSection />
        <ServicesSection />
        <FacilitiesSection />
        <ArticlesSection />
        <TestimonialsSection />
        <NewsUpdateSection />
        <EmergencyCTA />
      </main>
    </div>
  );
}
