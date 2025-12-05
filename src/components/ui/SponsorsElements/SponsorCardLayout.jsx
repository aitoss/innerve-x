import SponsorCard from './SponsorCard';
import { DevfolioImage, ETHIndiaImage, UdchaloImage , Givemycertificate , Keplologo , Keychainlogo, CodeCraftersLogo } from '@/components/ui/SponsorsElements/SponsorsImages';

const sponsors1 = [
  // { image: UdchaloImage, alt: 'Udchalo Sponsor' },
  { image: Keychainlogo, alt: 'Sponsor 2' },
  // { image: DevfolioImage, alt: 'Sponsor 3' },
];

const sponsors2 = [
  { image: DevfolioImage, alt: 'Udchalo Sponsor' },
  // { image: ETHIndiaImage, alt: 'Sponsor 2' },
  // { image: UdchaloImage, alt: 'Sponsor 3' },
];

const sponsors3 = [
  { image: ETHIndiaImage, alt: 'Udchalo Sponsor' },
  { image: Givemycertificate, alt: 'Sponsor 2' },
  { image: Keplologo, alt: 'Sponsor 3' },
  { image: CodeCraftersLogo, alt: 'Sponsor 4' },
];

const sponsors4 = [
  { image: ETHIndiaImage, alt: 'Udchalo Sponsor' },
  // { image: UdchaloImage, alt: 'Sponsor 2' },
  // { image: UdchaloImage, alt: 'Sponsor 3' },
];

export function SponsorCardLayout1() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center items-center scale-50 sm:scale-75 lg:scale-100 mx-[10%]  -mt-12 sm:-mt-1 md:-mt-15 lg:-my-4 xl:my-0">
      {sponsors1.map((sponsor, idx) => (
        <div key={idx} className="w-full sm:w-1/2 lg:w-1/4 flex justify-center">
          <SponsorCard image={sponsor.image} alt={sponsor.alt} />
        </div>
      ))}
    </div>
  );
}

export function SponsorCardLayout2() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center items-center scale-50 sm:scale-75 lg:scale-100 mx-[10%] mb-2 -mt-10  sm:mt-2 md:-mt-10 lg:-my-4 xl:my-0">
      {sponsors2.map((sponsor, idx) => (
        <div key={idx} className="w-full sm:w-1/2 lg:w-1/4 flex justify-center">
          <SponsorCard image={sponsor.image} alt={sponsor.alt} />
        </div>
      ))}
    </div>
  );
}

export function SponsorCardLayout3() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center items-center scale-50 sm:scale-75 lg:scale-100 mx-[10%] -mt-42 -mb-42 sm:mb-0 sm:-mt-12 md:-mt-25 lg:-my-4 xl:my-0">
      {sponsors3.map((sponsor, idx) => (
        <div key={idx} className="w-full sm:w-1/2 lg:w-1/4 flex justify-center">
          <SponsorCard image={sponsor.image} alt={sponsor.alt} />
        </div>
      ))}
    </div>
  );
}

export function SponsorCardLayout4() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center items-center scale-50 sm:scale-75 lg:scale-100 mx-[10%] -my-25 sm:-mt-2 md:-mt-15 lg:-my-4 xl:my-0">
      {sponsors4.map((sponsor, idx) => (
        <div key={idx} className="w-full sm:w-1/2 lg:w-1/4 flex justify-center">
          <SponsorCard image={sponsor.image} alt={sponsor.alt} />
        </div>
      ))}
    </div>
  );
}