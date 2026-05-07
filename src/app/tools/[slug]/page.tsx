import { notFound } from "next/navigation";
import { tools } from "@/lib/tools";
import Hero from "@/components/home/Hero";
import GeneratorForm from "@/components/home/GeneratorForm";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import FAQ from "@/components/home/FAQ";
import SimilarTools from "@/components/home/SimilarTools";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export default async function ToolPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

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
