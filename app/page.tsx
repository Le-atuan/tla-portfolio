import { AuroraBackground } from "@/components/AuroraBackground";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Languages } from "@/components/Languages";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Metrics />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Languages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
