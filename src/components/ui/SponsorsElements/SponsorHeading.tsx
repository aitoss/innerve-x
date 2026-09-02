import { HeadingEndLeft, HeadingEndRight } from './SponsorsImages';

export default function SponsorHeading() {
  return (
    <div className="relative mb-5 w-fit scale-75 md:mb-7 md:scale-75 lg:mb-10 lg:scale-100">
      
      <div className="absolute -top-4 -left-14 scale-50 md:-top-6 md:-left-25 md:scale-75 lg:top-0 lg:-left-18 lg:scale-100">
        <HeadingEndLeft />
      </div>

      <div className="h-[90px] md:h-[108px] lg:h-[144.2px] w-fit bg-red-500 bg-linear-to-b from-[#9D3026] to-[#BC3A24] text-stroke-h text-4xl md:text-6xl lg:text-7xl text-white flex items-center justify-center whitespace-nowrap px-6 md:px-9 lg:px-24 border-b-4 lg:border-b-[5.5px] border-t-[5px] lg:border-t-10 border-t-[#932E21] border-b-[#EE5840]">
        PAST SPONSORS
      </div>

      <div className="absolute -top-4 -right-14 scale-50 md:-top-6 md:-right-25 md:scale-75 lg:top-0 lg:-right-18 lg:scale-100">
        <HeadingEndRight />
      </div>
    </div>
  );
}