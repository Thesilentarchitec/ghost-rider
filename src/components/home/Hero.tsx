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
      <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
