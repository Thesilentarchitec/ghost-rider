import Link from "next/link";
import { Ghost, Moon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { tools } from "@/lib/tools";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black text-white sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Ghost className="w-8 h-8 text-orange-500 fill-orange-500/20" />
          <span>Ghost rider</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-white transition-colors flex items-center gap-1 outline-none">
              AI Video Tools <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-900 border-zinc-800 text-white max-h-[70vh] overflow-y-auto w-64 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
              {tools.map((tool) => (
                <DropdownMenuItem key={tool.slug} className="focus:bg-zinc-800 focus:text-white cursor-pointer p-0">
                  <Link href={`/tools/${tool.slug}`} className="w-full px-2 py-1.5 inline-block">
                    {tool.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-white transition-colors">Blog</Link>
          <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">
            Affiliate Program
            <span className="bg-orange-500 text-black text-[10px] px-1 rounded uppercase font-bold">New</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-zinc-800">
          <Moon className="w-5 h-5" />
        </Button>
        <Link href="#" className="text-sm font-medium hover:text-white transition-colors">Login</Link>
        <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 font-semibold">
          Signup
        </Button>
      </div>
    </nav>
  );
}
