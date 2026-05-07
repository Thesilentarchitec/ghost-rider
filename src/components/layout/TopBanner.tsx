"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-cyan-500 text-black py-2 px-4 relative flex items-center justify-center text-sm font-medium">
      <div className="flex items-center gap-2">
        <span className="font-bold">Ghost rider 2.0 PRO - Exclusive Early Access</span>
        <span className="hidden sm:inline opacity-80">|</span>
        <span className="hidden sm:inline">Skip the wait and get PRO features NOW.</span>
        <a href="/pricing" className="underline font-bold ml-2">Upgrade now</a>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
