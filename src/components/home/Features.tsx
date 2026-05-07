import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeaturesProps {
  toolName: string;
}

export default function Features({ toolName }: FeaturesProps) {
  return (
    <section className="bg-black text-white py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            Tool Details
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Why Use <span className="text-orange-500">{toolName}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            The {toolName} creates high-quality videos using AI scripts, 
            generated or curated visuals, synthetic voiceovers, captions, and music so creators 
            can publish amazing content in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-zinc-900/50 border-zinc-800 p-8 text-white space-y-6">
            <h3 className="text-2xl font-black leading-tight">
              Videos with personality
            </h3>
            <p className="text-gray-400 text-sm">
              Use voice, visuals, captions, and pacing to create recognizable content that resonates with your audience.
            </p>
            <ul className="space-y-3">
              {[
                "No expensive equipment or editing skills required",
                "All professional voices and caption styles included",
                "Designed for high engagement and repeatable growth",
                "AI-powered narration for consistent quality"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs font-medium">
                  <Check className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="space-y-6">
            <Card className="bg-zinc-900/50 border-zinc-800 p-6 text-white space-y-3">
              <h4 className="text-lg font-bold">No filming required</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Create professional content without a camera, studio, or complex recording setup.
              </p>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800 p-6 text-white space-y-3">
              <h4 className="text-lg font-bold">Repeatable production</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Maintain a consistent visual style, voice, and pacing across your entire content library.
              </p>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-zinc-900/50 border-zinc-800 p-6 text-white space-y-3">
              <h4 className="text-lg font-bold">Platform-friendly formats</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Perfectly optimized for TikTok, Reels, Shorts, and other modern video platforms.
              </p>
            </Card>
            <Card className="bg-orange-500 text-black p-6 space-y-4">
              <h4 className="text-lg font-black uppercase italic tracking-tighter">Best use cases</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-black uppercase">Content Automation</p>
                  <p className="text-[10px] leading-tight opacity-80">Create video-first content for channels at scale without human bottlenecks.</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase">Growth Channels</p>
                  <p className="text-[10px] leading-tight opacity-80">Build repeatable content loops around niche topics or trending stories.</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase">Global Reach</p>
                  <p className="text-[10px] leading-tight opacity-80">Package ideas into short videos with high-quality AI narration in any language.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
