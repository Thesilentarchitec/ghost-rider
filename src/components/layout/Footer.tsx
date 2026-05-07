import Link from "next/link";
import { Ghost } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Ghost className="w-8 h-8 text-orange-500 fill-orange-500/20" />
            <span>Ghost rider</span>
          </Link>
          <p className="text-gray-400 text-sm">
            Copyright © {currentYear} Ghost rider<br />
            All rights reserved
          </p>
          <p className="text-gray-400 text-sm">
            Made with ❤️ for Creators
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-500">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-medium">
            <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Become an Affiliate</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-500">Tools</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-medium">
            <li><Link href="#" className="hover:text-white transition-colors">AI TikTok Video Generator</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">AI YouTube Shorts Generator</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">AI Instagram Reels Generator</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">AI Pixar Video Generator</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">AI Anime Video Generator</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors text-orange-500">Faceless AI Video Generator</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-500">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-medium">
            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Refund Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
