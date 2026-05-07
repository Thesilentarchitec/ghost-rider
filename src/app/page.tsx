import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import GeneratorForm from "@/components/home/GeneratorForm";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import FAQ from "@/components/home/FAQ";
import SimilarTools from "@/components/home/SimilarTools";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-orange-500 selection:text-black">
      <Navbar />
      <Hero />
      <GeneratorForm />
      <HowItWorks />
      <Features />
      <FAQ />
      <SimilarTools />
      <Footer />
    </main>
  );
}
