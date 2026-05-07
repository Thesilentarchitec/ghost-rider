import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "What does the Faceless AI Video Generator do?",
      a: "The Faceless AI Video Generator turns a topic, idea, or script into a faceless social video with AI-generated visuals, narration, captions, music options, and social-ready pacing."
    },
    {
      q: "Who is the Faceless AI Video Generator best for?",
      a: "It's perfect for content creators, marketers, and anyone looking to build a presence on YouTube, TikTok, or Instagram without showing their face."
    },
    {
      q: "Can I edit the generated video?",
      a: "Yes, you can edit the script, change the voice, or select different visual styles before finalizing your video."
    },
    {
      q: "What format does Ghost rider create?",
      a: "Ghost rider generates vertical videos (9:16 aspect ratio) optimized for YouTube Shorts, TikTok, and Instagram Reels."
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
            Learn how the Faceless AI Video Generator works and what you can create with it.
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
