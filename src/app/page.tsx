import { Benefit, Hero, OurClient } from "@/components/index";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Hero />
      <OurClient />
      <Benefit />
    </div>
  );
}