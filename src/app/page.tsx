import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col  h-screen bg-foreground py-6">
        <Navbar />
        <Hero />
      </div>

    </div>
  );
}
