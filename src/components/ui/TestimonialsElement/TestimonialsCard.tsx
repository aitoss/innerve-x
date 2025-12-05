import Spark from '@/assets/svg/Spark.svg'
import Image from 'next/image';

interface TestimonialsCardProps {
    content: string;
    name: string;
    collegeName: string;
}

export default function TestimonialsCard({content, name, collegeName}: TestimonialsCardProps) {
  return (
    <div 
      className="w-full font-sans sm:w-[90%] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-[440px] h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[505px] flex items-center justify-center mx-auto px-2 py-4 sm:px-4 sm:py-6 relative"
      style={{
        borderRadius: '12px',
        background: 'linear-gradient(to bottom, #FF5BB1, #626262)',
        padding: '2px', 
      }}
    >
      <div
        className="flex items-center justify-center w-full h-full"
        style={{
          borderRadius: '10px', 
          backgroundColor: '#14021e',
          backgroundImage: 'linear-gradient(to bottom, rgba(179, 121, 27, 0.2) 40%, rgba(119, 119, 119, 0.3) 100%)',
        }}
      >
        {/* <img
        //   src={PinkGrid}
          alt="Pink Grid"
          className="absolute inset-0 w-full h-full object-cover rounded-[10px] pointer-events-none"
        /> */}
        
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 relative z-10 w-full p-4 sm:p-6 md:p-8">
          <div className="w-full">
            <Image 
              src={Spark} 
              alt="Spark" 
              className="w-20 h-auto sm:w-[100px] md:w-auto"
            />
          </div>
          
          <div className="text-sm  sm:text-base md:text-lg lg:text-[20px] text-left text-white leading-relaxed">
            {content}
          </div>
          <div className='flex flex-col gap-1 sm:gap-2'>

          <div className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-angrybirds text-left text-white">
            {name}
          </div>
          <div className="text-base sm:text-lg md:text-[18px] font-angrybirds text-left text-white opacity-90">
            {collegeName}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
