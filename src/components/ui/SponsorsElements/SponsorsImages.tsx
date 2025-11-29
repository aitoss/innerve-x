import Image from 'next/image';
import planks from '@/assets/svg/WoodPlanks.svg';
import sponsorCard from '@/assets/svg/SponsorCard.svg';
import udchalo from '@/assets/images/UdChalo.png'
import backgroundImage from '@/assets/images/SponsorsBackground.png'
import headingEnds from '@/assets/svg/SponsorHeadingEnds.svg'
import sparkgif from '@/assets/gif/sparks.gif'
import ethIndiaImage from '@/assets/svg/ETHIndiaLogo.png'
import devfolioImage from '@/assets/svg/DevfolioLogo.svg'

export function Planks() {
  return (
    <div className="overflow-hidden">
      <Image
        src={planks}
        alt="planks"
        className="min-w-max h-36"
      />
    </div>
  );
}

export function SponsorCardBorder() {
  return (
    <div>
      <Image src={sponsorCard} alt="sponsor card" />
    </div>
  );
}

export function UdchaloImage() {
  return (
    <div>
      <Image src={udchalo} alt="sponsor card" />
    </div>
  );
}

export function BackgroundImage() {
  return (
    <div className='overflow-hidden'>
      <Image className="min-w-max h-auto w-screen" src={backgroundImage} alt="sponsor card" />
    </div>
  );
}

export function HeadingEndLeft() {
  return (
    <div>
      <Image src={headingEnds} alt="sponsor card" />
    </div>
  );
}

export function HeadingEndRight() {
  return (
    <div className='scale-x-[-1]'>
      <Image src={headingEnds} alt="sponsor card" />
    </div>
  );
}

export function SparkGif() {
  return (
    <div className="w-full h-full">
      <Image src={sparkgif} alt="sparks background" fill className="object-cover w-full h-full" priority />
    </div>
  );
}

export function DevfolioImage() {
  return (
    <div>
      <Image src={devfolioImage} alt="Devfolio Sponsor" />
    </div>
  );
}

export function ETHIndiaImage() {
  return (
    <div>
      <Image src={ethIndiaImage} alt="ETHIndia Sponsor" />
    </div>
  );
}