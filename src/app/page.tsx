import Hero from "@/components/home/Hero";
import GeneratorForm from "@/components/home/GeneratorForm";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import FAQ from "@/components/home/FAQ";
import SimilarTools from "@/components/home/SimilarTools";
import { tools } from "@/lib/tools";

export default function Home() {
  const tool = tools.find(t => t.slug === "faceless-ai-video-generator")!;

  return (
    <main className="min-h-screen bg-black selection:bg-orange-500 selection:text-black">
      <Hero title={tool.heroTitle} description={tool.heroDescription} />
      <GeneratorForm title={tool.title} />
      <HowItWorks />
      <Features toolName={tool.title} />
      <FAQ toolName={tool.title} />
      <SimilarTools />
    </main>
  );
}
