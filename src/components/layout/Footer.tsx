import Link from "next/link";
import { Ghost } from "lucide-react";
import { tools } from "@/lib/tools";

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

        <div className="md:col-span-2">
          <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-500">Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
            {tools.map((tool) => (
              <Link 
                key={tool.slug} 
                href={`/tools/${tool.slug}`} 
                className={`text-sm font-medium transition-colors hover:text-white ${tool.slug === 'faceless-ai-video-generator' ? 'text-orange-500' : 'text-gray-400'}`}
              >
                {tool.title}
              </Link>
            ))}
          </div>
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
