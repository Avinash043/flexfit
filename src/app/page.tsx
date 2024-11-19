import HeroSection from "@/components/HeroSection";
import FeaturedCard from "@/components/FeaturedCard";
import Feedback from "@/components/Feedback";
import Instructor from "@/components/Instructor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
   <HeroSection/>
   <FeaturedCard/>
   <Feedback/>
   <Instructor/>
   <Footer/>
  </main>
   
   
  );
}
