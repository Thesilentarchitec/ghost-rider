export default function HowItWorks() {
  const steps = [
    {
      title: "Add your topic",
      desc: "Simply type in the topic or idea you want your video to be about. Our AI will handle the rest.",
      icon: "1",
    },
    {
      title: "Choose style and voice",
      desc: "Select from a variety of visual styles and AI voices to give your video the perfect personality.",
      icon: "2",
    },
    {
      title: "Generate the video",
      desc: "Our AI will generate the script, visuals, voiceover, and captions in just a few minutes.",
      icon: "3",
    },
    {
      title: "Edit and publish",
      desc: "Review your generated video, make any final tweaks, and share it with your audience.",
      icon: "4",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight">
          How Faceless AI Video Generation Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="mb-6 w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center font-black text-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
