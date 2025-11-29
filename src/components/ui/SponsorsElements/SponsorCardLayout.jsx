import SponsorCard from './SponsorCard';
import { DevfolioImage, ETHIndiaImage, UdchaloImage } from '@/components/ui/SponsorsElements/SponsorsImages';

const sponsors1 = [
  { image: UdchaloImage, alt: 'Udchalo Sponsor' },
  { image: ETHIndiaImage, alt: 'Sponsor 2' },
  { image: DevfolioImage, alt: 'Sponsor 3' },
];

const sponsors2 = [
  { image: UdchaloImage, alt: 'Udchalo Sponsor' },
  { image: UdchaloImage, alt: 'Sponsor 2' },
  { image: UdchaloImage, alt: 'Sponsor 3' },
];

const sponsors3 = [
  { image: UdchaloImage, alt: 'Udchalo Sponsor' },
  { image: UdchaloImage, alt: 'Sponsor 2' },
  { image: UdchaloImage, alt: 'Sponsor 3' },
];

const sponsors4 = [
  { image: UdchaloImage, alt: 'Udchalo Sponsor' },
  { image: UdchaloImage, alt: 'Sponsor 2' },
  { image: UdchaloImage, alt: 'Sponsor 3' },
];

export function SponsorCardLayout1() {
  return (
    <div className="flex gap-x-14 -my-25 sm:-my-10 md:-my-8 lg:-my-4 xl:my-0 gap-y-2 md:gap-y-4 lg:gap-y-6 flex-wrap justify-center items-center scale-50 sm:scale-75 lg:scale-100">
      {sponsors1.map((sponsor, idx) => (
        <SponsorCard key={idx} image={sponsor.image} alt={sponsor.alt} />
      ))}
    </div>
  );
}

export function SponsorCardLayout2() {
  return (
    <div className="flex gap-x-14 -my-25 sm:-my-10 md:-my-8 lg:-my-4 xl:my-0 gap-y-2 md:gap-y-4 lg:gap-y-6 flex-wrap justify-center items-center scale-50 sm:scale-75 lg:scale-100">
      {sponsors2.map((sponsor, idx) => (
        <SponsorCard key={idx} image={sponsor.image} alt={sponsor.alt} />
      ))}
    </div>
  );
}

export function SponsorCardLayout3() {
  return (
    <div className="flex gap-x-14 -my-25 sm:-my-10 md:-my-8 lg:-my-4 xl:my-0 gap-y-2 md:gap-y-4 lg:gap-y-6 flex-wrap justify-center items-center scale-50 sm:scale-75 lg:scale-100">
      {sponsors3.map((sponsor, idx) => (
        <SponsorCard key={idx} image={sponsor.image} alt={sponsor.alt} />
      ))}
    </div>
  );
}

export function SponsorCardLayout4() {
  return (
    <div className="flex gap-x-14 -my-25 sm:-my-10 md:-my-8 lg:-my-4 xl:my-0 gap-y-2 md:gap-y-4 lg:gap-y-6 flex-wrap justify-center items-center scale-50 sm:scale-75 lg:scale-100">
      {sponsors4.map((sponsor, idx) => (
        <SponsorCard key={idx} image={sponsor.image} alt={sponsor.alt} />
      ))}
    </div>
  );
}