import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col  h-screen bg-foreground">
        <Navbar />
        <Hero />
      </div>
      <About />

    </div>
  );
}
