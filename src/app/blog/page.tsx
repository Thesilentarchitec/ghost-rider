import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    title: "How to Make Faceless YouTube Shorts with AI",
    excerpt: "Learn the secrets to creating engaging faceless videos that go viral without showing your face.",
    date: "May 10, 2024",
    category: "Tutorial",
  },
  {
    title: "Top 10 Niches for Faceless Channels in 2024",
    excerpt: "Discover the most profitable niches for your faceless AI video generator projects.",
    date: "May 8, 2024",
    category: "Insights",
  },
  {
    title: "Ghost rider 2.0: What's New?",
    excerpt: "We're excited to announce major updates to our AI video generation engine.",
    date: "May 5, 2024",
    category: "News",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">Blog</h1>
        <div className="grid gap-8">
          {posts.map((post) => (
            <Card key={post.title} className="bg-zinc-900 border-zinc-800 text-white hover:border-orange-500/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge className="bg-orange-500 text-black">{post.category}</Badge>
                  <span className="text-sm text-zinc-500">{post.date}</span>
                </div>
                <CardTitle className="text-2xl hover:text-orange-500 transition-colors">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">{post.excerpt}</p>
                <div className="mt-4 text-orange-500 font-medium flex items-center gap-1">
                  Read more <span>→</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
