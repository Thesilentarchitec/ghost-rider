import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Badge className="bg-orange-500 text-black mb-4">Affiliate Program</Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Earn 30% Recurring Commission</h1>
        <p className="text-xl text-zinc-400 mb-12">
          Join the Ghost rider affiliate program and earn a lifetime commission for every customer you refer.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
            <div className="text-3xl font-bold text-orange-500 mb-2">30%</div>
            <div className="text-sm text-zinc-400 uppercase tracking-wider">Commission</div>
          </div>
          <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
            <div className="text-3xl font-bold text-orange-500 mb-2">Lifetime</div>
            <div className="text-sm text-zinc-400 uppercase tracking-wider">Recurring</div>
          </div>
          <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
            <div className="text-3xl font-bold text-orange-500 mb-2">60 Days</div>
            <div className="text-sm text-zinc-400 uppercase tracking-wider">Cookie Period</div>
          </div>
        </div>

        <div className="bg-orange-500/10 border border-orange-500/20 p-12 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">Ready to start earning?</h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Our top affiliates earn over $5,000 per month. Join a community of successful creators and marketers.
          </p>
          <Button className="bg-orange-500 text-black hover:bg-orange-600 px-10 py-6 text-lg font-bold rounded-full">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
