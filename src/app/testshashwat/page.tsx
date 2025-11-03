import ClockSection from "@/sections/clockSection";
import PrizePoolSection from "@/sections/prizePoolSection";

export default function TestShashwatPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-200">
      <ClockSection />
      <PrizePoolSection />
    </main>
  );
}
