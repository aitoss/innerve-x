import CountdownTimerCard from "@/components/layout/countdownTimerCard";
import CountdownTimer from "@/utils/countdownTimer";

export default function TestShashwatPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CountdownTimer eventdate={new Date("2026-01-30")} />
      <CountdownTimerCard />
    </main>
  );
}
