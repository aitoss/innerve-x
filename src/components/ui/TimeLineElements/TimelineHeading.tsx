export default function TimelineHeading() {
  return (
    <div className="relative flex justify-center mb-12">
      <div className="relative bg-[#8B4513] px-12 py-4 rounded-lg border-4 border-[#654321] shadow-2xl">
        <div className="absolute inset-0 bg-linear-to-r from-[#654321] via-[#8B4513] to-[#654321] opacity-30 rounded-lg" />
        <h2 className="relative text-5xl font-bold text-white tracking-wider uppercase" 
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
          Timeline
        </h2>
      </div>
    </div>
  );
}