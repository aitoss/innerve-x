import { HeadingEndLeft, HeadingEndRight } from "../SponsorsElements/SponsorsImages";


export default function TestimonialsHeading() {
  return (
    <div className="relative mb-5 scale-50 md:mb-7 md:scale-75 lg:mb-10 lg:scale-100 w-fit mx-auto">
      <div className="absolute -top-6 lg:top-0 -left-25 lg:-left-18 lg:scale-100 scale-75">
        <HeadingEndLeft />
      </div>
      <div className="h-[108px] lg:h-[144.2px] w-auto text-stroke-h text-6xl lg:text-7xl text-white flex items-center justify-center px-9 lg:px-24 bg-linear-to-b from-[#9D3026] to-[#BC3A24] border-b-4 lg:border-b-[5.5px] border-t-[7.5px] lg:border-t-10 border-t-[#932E21] border-b-[#EE5840] whitespace-nowrap">
        TESTIMONIALS
      </div>
      <div className="absolute -top-6 lg:top-0 -right-25 lg:-right-18 lg:scale-100 scale-75">
        <HeadingEndRight />
      </div>
    </div>
  );
}
 