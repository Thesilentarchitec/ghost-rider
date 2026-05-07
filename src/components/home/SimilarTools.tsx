import { Button } from "@/components/ui/button";

export default function SimilarTools() {
  const tools = [
    "AI Video Generator",
    "AI Motivational Video Generator",
    "AI True Crime Video Generator",
  ];

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
          {tools.map((tool, index) => (
            <Button key={index} variant="outline" className="bg-zinc-900 border-zinc-800 text-sm py-6 px-8 rounded-xl hover:bg-zinc-800 transition-all font-bold">
              {tool}
            </Button>
          ))}
        </div>

        <div className="pt-20 space-y-8">
          <p className="text-gray-400 text-sm">
            The fastest way to turn ideas into short-form videos.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-black font-black py-7 px-10 rounded-full text-lg shadow-2xl shadow-orange-500/20">
            Generate faceless video
          </Button>
        </div>
      </div>
    </section>
  );
}
