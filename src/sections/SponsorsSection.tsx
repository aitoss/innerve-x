import {
  BackgroundImage,
  Planks,
  SparkGif,
} from '@/components/ui/SponsorsElements/SponsorsImages';
import { SponsorCardLayout1 , SponsorCardLayout2 , SponsorCardLayout3 , SponsorCardLayout4, SponsorCardLayout5  }  from '@/components/ui/SponsorsElements/SponsorCardLayout';
import SponsorHeading from '@/components/ui/SponsorsElements/SponsorHeading';
import SponsorSubHeading from '@/components/ui/SponsorsElements/SponsorsSubHeading';

export default function Sponsors() {
  return (
    <div className="relative flex flex-col justify-between h-full overflow-hidden">
      {/* Sparks GIF background using SparkGif component */}
      <div className="absolute inset-0 w-full h-full z-5 pointer-events-none">
        <SparkGif />
      </div>
      {/* Content above background */}
      <div className="relative pb-20  z-10">
        <Planks />
      </div>
      <div className='relative z-10 flex justify-center mb-4 md:mb-8 lg:mb-12'>
        <SponsorHeading />
      </div>
      <div className="z-10 grid grid-cols-1 gap-4 ">
        <SponsorSubHeading heading='TITLE SPONSOR' />
        <SponsorCardLayout1 />
        <SponsorSubHeading  heading='EVENT PARTNER'/>
        <SponsorCardLayout5 />
        <SponsorSubHeading  heading='PLATFORM SPONSOR'/>
        <SponsorCardLayout2 />
        <SponsorSubHeading  heading='SUPPORTING SPONSORS'/>
        <SponsorCardLayout3 />
        {/* <SponsorSubHeading  heading='TITLE SPONSORS'/>
        <SponsorCardLayout4 /> */}
      </div>
      <div className="relative z-10 scale-y-[-1] pb-20">
        <Planks />
      </div>
    </div>
  );
}
