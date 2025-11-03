export default function BalloonShip() {
    return (
        <div className="absolute top-70 z-5 left-[-200px] w-[700px] h-auto overflow-hidden">
            <video
                src="/videos/ship1_clean_high.webm"
                className="w-[800px] h-auto object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />
        </div>
    );
}