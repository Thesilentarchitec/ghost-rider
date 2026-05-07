"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Play, Sparkles, Check } from "lucide-react";

const STYLES = [
  { id: "4k-realistic", name: "4k Realistic", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=200&h=300" },
  { id: "cinematic", name: "Cinematic", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=200&h=300" },
  { id: "brick", name: "Brick", image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=200&h=300" },
  { id: "grunge", name: "Grunge", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=200&h=300" },
  { id: "clay", name: "Clay", image: "https://images.unsplash.com/photo-1565193998248-d50193c6628c?auto=format&fit=crop&q=80&w=200&h=300" },
];

const VOICES = [
  { id: "adam", name: "Adam", gender: "♂", desc: "Clear creator narration for short-form videos." },
  { id: "john", name: "John", gender: "♂", desc: "Natural storytelling for explainers and narratives." },
  { id: "alex", name: "Alex", gender: "♂", desc: "Upbeat delivery for social media videos." },
  { id: "brittney", name: "Brittney", gender: "♀", desc: "Bright voice for education and social content." },
];

export default function GeneratorForm() {
  const [topic, setTopic] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("cinematic");
  const [selectedVoice, setSelectedVoice] = useState("adam");
  const [channelStyle, setChannelStyle] = useState("facts");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleGenerate = () => {
    setIsGenerating(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 200);

    setTimeout(() => {
      setIsGenerating(false);
      setProgress(0);
      alert("Video generation complete! (This is a mock)");
    }, 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Side */}
        <Card className="lg:col-span-2 bg-zinc-900/50 border-zinc-800 p-6 text-white">
          <div className="space-y-8">
            {/* Topic Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Create a faceless video</h2>
                <span className="bg-orange-500 text-black text-[10px] px-2 py-0.5 rounded uppercase font-bold">Prompt</span>
              </div>
              <p className="text-gray-400 text-sm">Describe the niche, format, and viewer takeaway.</p>
              
              <div className="space-y-2">
                <Label htmlFor="topic" className="text-xs uppercase tracking-wider text-gray-500 font-bold">Faceless video topic</Label>
                <Textarea 
                  id="topic"
                  placeholder="Create a faceless video about three psychology facts that explain procrastination and how to break the cycle."
                  className="bg-black border-zinc-800 min-h-[120px] focus:ring-orange-500"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
                <div className="flex justify-between text-[10px] text-gray-500">
                  <span>Number of words: {topic.split(/\s+/).filter(Boolean).length}</span>
                  <span>Estimated video duration: 15 seconds</span>
                  <span>{topic.length}/500</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="bg-zinc-900 border-zinc-800 text-[10px] h-8 hover:bg-zinc-800" onClick={() => setTopic("Create a psychology facts video with a strong hook.")}>
                  Create a psychology facts video with a strong hook.
                </Button>
                <Button variant="outline" size="sm" className="bg-zinc-900 border-zinc-800 text-[10px] h-8 hover:bg-zinc-800" onClick={() => setTopic("Make a faceless history short about a strange event.")}>
                  Make a faceless history short about a strange event.
                </Button>
                <Button variant="outline" size="sm" className="bg-zinc-900 border-zinc-800 text-[10px] h-8 hover:bg-zinc-800" onClick={() => setTopic("Turn a motivational idea into a voiceover-led video.")}>
                  Turn a motivational idea into a voiceover-led video.
                </Button>
              </div>
            </div>

            {/* Config Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-wider text-gray-500 font-bold">Channel style</Label>
                <div className="flex bg-black p-1 rounded-md border border-zinc-800">
                  {["facts", "story", "motivation"].map((style) => (
                    <button
                      key={style}
                      className={`flex-1 text-[10px] py-1.5 rounded capitalize font-medium transition-all ${
                        channelStyle === style ? "bg-orange-500 text-black" : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => setChannelStyle(style)}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-wider text-gray-500 font-bold">Duration</Label>
                <Select defaultValue="45s">
                  <SelectTrigger className="bg-black border-zinc-800 text-xs">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                    <SelectItem value="15s">15s</SelectItem>
                    <SelectItem value="30s">30s</SelectItem>
                    <SelectItem value="45s">45s</SelectItem>
                    <SelectItem value="60s">60s</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-wider text-gray-500 font-bold">Language</Label>
                <Select defaultValue="english">
                  <SelectTrigger className="bg-black border-zinc-800 text-xs">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Style Selection */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm font-bold">Style Selection</h3>
                <p className="text-gray-500 text-xs">Choose a style for your video</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {STYLES.map((style) => (
                  <div 
                    key={style.id}
                    className={`relative group cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                      selectedStyle === style.id ? "border-orange-500" : "border-transparent hover:border-zinc-700"
                    }`}
                    onClick={() => setSelectedStyle(style.id)}
                  >
                    <img src={style.image} alt={style.name} className="w-full aspect-[2/3] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[10px] font-bold">{style.name}</span>
                    </div>
                    {selectedStyle === style.id && (
                      <div className="absolute top-1 right-1 bg-orange-500 rounded-full p-0.5">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                    )}
                    {style.id === "clay" && (
                      <div className="absolute top-1 left-1 bg-orange-500 text-black text-[8px] px-1 rounded font-bold uppercase">
                        Premium
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Voice Selection */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm font-bold">Select a voice</h3>
                <p className="text-gray-500 text-xs">Choose a voice for your video narration</p>
              </div>
              <div className="space-y-2">
                {VOICES.map((voice) => (
                  <div 
                    key={voice.id}
                    className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedVoice === voice.id ? "bg-orange-500/10 border-orange-500" : "bg-black border-zinc-800 hover:border-zinc-700"
                    }`}
                    onClick={() => setSelectedVoice(voice.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        selectedVoice === voice.id ? "bg-orange-500 text-black" : "bg-zinc-800 text-gray-400"
                      }`}>
                        {voice.name[0]}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold flex items-center gap-1">
                          {voice.name} <span className="text-[10px] opacity-60 font-normal">{voice.gender}</span>
                        </h4>
                        <p className="text-[10px] text-gray-500">{voice.desc}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                      <Play className="w-4 h-4 fill-current" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <div className="space-y-4">
              {isGenerating && (
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-orange-500 h-full transition-all duration-300" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black py-6 rounded-xl text-lg flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                <Sparkles className={`w-5 h-5 ${isGenerating ? "animate-spin" : "group-hover:animate-pulse"}`} />
                {isGenerating ? `Generating... ${progress}%` : "Generate faceless video"}
                {!isGenerating && <span className="text-sm opacity-50">→</span>}
              </Button>
            </div>
            <p className="text-center text-[10px] text-gray-500">
              <span className="text-green-500 font-bold">●</span> 2,480 people used this tool in the last 24h
            </p>
          </div>
        </Card>

        {/* Output Side */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Output Example</h3>
          <Card className="bg-zinc-900/50 border-zinc-800 overflow-hidden aspect-[9/16] relative group">
            <img 
              src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=400" 
              alt="Output example" 
              className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-black fill-current ml-1" />
              </div>
              <div>
                <p className="text-white font-bold">Watch Example</p>
                <p className="text-gray-400 text-xs">See what Ghost rider can generate in seconds.</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-white font-medium uppercase tracking-tighter">Ready to generate</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
