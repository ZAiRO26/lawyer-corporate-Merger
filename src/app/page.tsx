import { Hero } from "@/components/sections/hero";
import { Expertise } from "@/components/sections/expertise";
import { ThoughtLeadership } from "@/components/sections/thought-leadership";
import { People } from "@/components/sections/people";
import { Legacy } from "@/components/sections/legacy";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <Expertise />
      <ThoughtLeadership />
      <People />
      <Legacy />
    </main>
  );
}
