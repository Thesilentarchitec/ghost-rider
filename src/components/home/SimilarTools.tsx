"use client";

import { useState, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { tools } from "@/lib/tools";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SimilarTools() {
  const pathname = usePathname();
  
  const [filteredTools, setFilteredTools] = useState<typeof tools>([]);
  
  useEffect(() => {
    // Current tool slug if we're on a tool page
    const currentSlug = pathname.split("/").pop();
    const result = tools
      .filter(t => t.slug !== currentSlug)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setFilteredTools(result);
  }, [pathname]);

  return (
    <section className="bg-black text-white py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            More Tools
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Explore Similar AI Video Tools
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {filteredTools.map((tool) => (
            <Link 
              key={tool.slug} 
              href={`/tools/${tool.slug}`}
              className={cn(buttonVariants({ variant: "outline" }), "bg-zinc-900 border-zinc-800 text-sm py-6 px-8 rounded-xl hover:bg-zinc-800 transition-all font-bold")}
            >
              {tool.title}
            </Link>
          ))}
        </div>

        <div className="pt-20 space-y-8">
          <p className="text-gray-400 text-sm">
            The fastest way to turn ideas into short-form videos.
          </p>
          <button className={cn(buttonVariants(), "bg-orange-500 hover:bg-orange-600 text-black font-black py-7 px-10 rounded-full text-lg shadow-2xl shadow-orange-500/20 cursor-pointer")}>
            Generate faceless video
          </button>
        </div>
      </div>
    </section>
  );
}
