import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col h-[700px] lg:h-[600px] bg-foreground">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Services />

    </div>
  );
}
