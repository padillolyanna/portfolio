import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FeaturedSystems from "@/components/sections/FeaturedSystems";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <FeaturedSystems />
        <TechStack />
        <Process />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
