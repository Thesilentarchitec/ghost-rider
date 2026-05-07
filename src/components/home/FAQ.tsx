import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  toolName: string;
}

export default function FAQ({ toolName }: FAQProps) {
  const faqs = [
    {
      q: `What does the ${toolName} do?`,
      a: `The ${toolName} turns a topic, idea, or script into a high-quality social video with AI-generated visuals, narration, captions, music options, and platform-optimized pacing.`
    },
    {
      q: `Who is the ${toolName} best for?`,
      a: "It's perfect for content creators, marketers, and businesses looking to build a strong presence on social media with consistent, high-quality video content."
    },
    {
      q: "Can I edit the generated video?",
      a: "Yes, you can customize various aspects of the video, including visual styles and AI voices, before finalizing your creation."
    },
    {
      q: "What format does Ghost rider create?",
      a: "Ghost rider generates vertical videos (9:16 aspect ratio) perfectly optimized for YouTube Shorts, TikTok, Instagram Reels, and other mobile-first platforms."
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-gray-400 text-sm">
            Learn how our AI video tools work and what you can create with them.
          </p>
        </div>

        <Accordion className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-zinc-800 rounded-xl px-6 bg-zinc-900/30">
              <AccordionTrigger className="hover:no-underline text-left py-6 font-bold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
