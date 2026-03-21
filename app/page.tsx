import RRONHero from "@/components/RRONHero";
import RRONFleet from "@/components/RRONFleet";

export default function Page() {
  return (
    <main>
      <RRONHero carBackgroundSrc="/hero.png?v=9" />
      <RRONFleet />
    </main>
  );
}

