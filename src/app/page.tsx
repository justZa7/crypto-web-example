import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NeonGrid from "@/components/neon-grid";
import Partners from "@/components/partners";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white overflow-hidden">
      <NeonGrid />
      <Hero />
      <Projects />
      <Services />
      <Partners />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
