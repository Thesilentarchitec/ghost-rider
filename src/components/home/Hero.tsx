import { Star } from "lucide-react";

interface HeroProps {
  title: string;
  description: string;
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <div className="bg-black text-white pt-20 pb-10 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
        {title}
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-8">
        {description}
      </p>
      
      <div className="flex flex-col items-center gap-4">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center overflow-hidden">
              <img 
                src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                alt="User" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
            ))}
          </div>
          <span className="text-sm font-medium">Loved by over 15K happy creators</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>17 People upgraded in the last 12 hours</span>
        </div>
      </div>
    </div>
  );
}
