import Spark from '@/assets/svg/Spark.svg'
import Image from 'next/image';

interface TestimonialsCardProps {
    content: string;
    name: string;
    collegeName: string;
}

export default function TestimonialsCard({content, name, collegeName}: TestimonialsCardProps) {
  return (
    <div className="w-full font-sans sm:w-[90%] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-[440px] h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[505px] mx-auto group">
      <div 
        className="relative h-full p-[3px] rounded-[20px] md:rounded-[28px] bg-linear-to-br from-yellow-400 via-amber-500 to-orange-600 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(251,191,36,0.4)] transition-all duration-300 hover:-translate-y-1"
      >
        {/* Inner card */}
        <div className="relative h-full w-full bg-linear-to-br from-[#1a1410] via-[#2d1f0f] to-[#1a1410] rounded-[17px] md:rounded-[25px] px-5 md:px-7 pt-8 md:pt-10 pb-6 md:pb-8 overflow-hidden">
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-600/10 rounded-full blur-3xl" />
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
          
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 relative z-10 w-full h-full">
            {/* Quote icon */}
            <div className="w-full flex justify-start">
              <Image 
                src={Spark} 
                alt="Quote" 
                className="w-14 h-auto sm:w-16 md:w-20 opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 filter drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
              />
            </div>
            
            {/* Testimonial content */}
            <div className="flex-1 text-sm sm:text-base md:text-lg lg:text-[18px] text-left leading-relaxed font-sans text-gray-100 tracking-wide">
              {content}
            </div>
            
            {/* Author info with yellow accent */}
            <div className="flex flex-col gap-1.5 sm:gap-2 mt-auto pt-4 border-t border-yellow-600/30">
              <div className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-sans font-bold text-left bg-linear-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                {name}
              </div>
              <div className="text-sm sm:text-base md:text-[16px] lg:text-[17px] font-sans text-left text-gray-400 tracking-wide">
                {collegeName}
              </div>
            </div>
          </div>
          
          {/* Shine effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-yellow-400/5 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
