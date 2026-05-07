import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Hobbyist",
    price: { monthly: "$29", annually: "$19" },
    description: "Perfect for beginners exploring AI video creation.",
    features: [
      "200 credits/mo (~20 videos)",
      "1 active series",
      "Standard art styles",
      "Standard AI voices",
      "No watermark",
      "720p output",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Creator",
    price: { monthly: "$59", annually: "$39" },
    description: "For creators growing their social media presence.",
    features: [
      "600 credits/mo (~60 videos)",
      "3 active series",
      "All art styles",
      "Premium AI voices",
      "Background music library",
      "1080p output",
      "Fast generation",
    ],
    buttonText: "Go Creator",
    popular: true,
  },
  {
    name: "Pro",
    price: { monthly: "$99", annually: "$69" },
    description: "For professionals scaling their production.",
    features: [
      "1500 credits/mo (~150 videos)",
      "Unlimited series",
      "Custom AI voice cloning",
      "Priority generation",
      "4k art generation",
      "Early access to new features",
      "Automated social posting",
      "Dedicated support",
    ],
    buttonText: "Go Pro",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-orange-500 text-black mb-4 hover:bg-orange-600">Pricing</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Pick your plan</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stop wasting hours on video editing. Create and publish videos while you sleep.
          </p>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="text-sm text-gray-400">Monthly</span>
            <div className="w-12 h-6 bg-zinc-800 rounded-full relative p-1 cursor-pointer">
              <div className="w-4 h-4 bg-orange-500 rounded-full" />
            </div>
            <span className="text-sm text-white">Yearly <span className="text-orange-500 font-bold">(Save 35%)</span></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`bg-zinc-900 border-zinc-800 text-white relative overflow-hidden ${plan.popular ? 'border-orange-500/50 ring-1 ring-orange-500/50' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-orange-500 text-black text-[10px] font-bold px-3 py-1 uppercase tracking-wider transform translate-x-[26px] translate-y-[10px] rotate-45 w-32 text-center">
                    Popular
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-zinc-400">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price.annually}</span>
                  <span className="text-zinc-400">/mo</span>
                  <p className="text-xs text-zinc-500 mt-1">Billed annually</p>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full py-6 text-lg font-bold ${plan.popular ? 'bg-orange-500 text-black hover:bg-orange-600' : 'bg-white text-black hover:bg-gray-200'}`}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-zinc-500 text-sm">
            Trusted by over 15,000+ happy creators worldwide.
          </p>
          <div className="flex justify-center mt-6 grayscale opacity-50 gap-8 items-center flex-wrap">
            {/* Placeholder for logos */}
            <span className="text-2xl font-black">YouTube</span>
            <span className="text-2xl font-black">TikTok</span>
            <span className="text-2xl font-black">Instagram</span>
            <span className="text-2xl font-black">Snapchat</span>
          </div>
        </div>
      </div>
    </div>
  );
}
