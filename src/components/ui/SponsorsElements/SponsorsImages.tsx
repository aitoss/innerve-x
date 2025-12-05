import Image from 'next/image';
import planks from '@/assets/svg/WoodPlanks.svg';
import sponsorCard from '@/assets/svg/SponsorCard.svg';
import udchalo from '@/assets/images/UdChalo.png'
import backgroundImage from '@/assets/images/SponsorsBackground.png'
import headingEnds from '@/assets/svg/SponsorHeadingEnds.svg'
import sparkgif from '@/assets/gif/sparks.gif'
import ethIndiaImage from '@/assets/svg/ETHIndiaLogo.png'
import devfolioImage from '@/assets/svg/DevfolioLogo.svg'
import codeCraftersImage from '@/assets/images/CodeCraftersLogo.png';
import keychainlogo from '@/assets/svg/keyChainLogo.svg';
import keychainlogo2 from '@/assets/svg/keyChainLogo2.svg';
import keplologo from "@/assets/images/keploLogo.png"
import givemycertificate from "@/assets/images/givemycertficateLogo.png";

export function Planks() {
  return (
    <div className="overflow-hidden">
      <Image
        src={planks}
        alt="planks"
        className="min-w-max md:h-30 h-18"
        draggable={false}
      />  
    </div>
  );
}

export function SponsorCardBorder() {
  return (
    <div >
      <Image src={sponsorCard} alt="sponsor card" draggable={false}/>
    </div>
  );
}

export function UdchaloImage() {
  return (
    <div className='max-w-[220px]'>
      <Image src={udchalo} alt="sponsor card" draggable={false}/>
    </div>
  );
}

export function BackgroundImage() {
  return (
    <div className='overflow-hidden'>
      <Image className="min-w-max h-auto w-screen" src={backgroundImage} alt="sponsor card" draggable={false}/>
    </div>
  );
}

export function HeadingEndLeft() {
  return (
    <div>
      <Image src={headingEnds} alt="sponsor card" draggable={false}/>
    </div>
  );
}

export function HeadingEndRight() {
  return (
    <div className='scale-x-[-1]'>
      <Image src={headingEnds} alt="sponsor card" draggable={false}/>
    </div>
  );
}

export function SparkGif() {
  return (
    <div className="">
      <Image src={sparkgif} alt="sparks background" fill className='h-full w-full min-w-4xl' draggable={false}/>
    </div>
  );
}

export function DevfolioImage() {
  return (
    <div className='max-w-[220px]'>
      <Image src={devfolioImage} alt="Devfolio Sponsor" draggable={false}/>
    </div>
  );
}

export function ETHIndiaImage() {
  return (
    <div className='max-w-[220px]'>
      <Image src={ethIndiaImage} alt="ETHIndia Sponsor" draggable={false}/>
    </div>
  );
}


export function Keychainlogo() {
  return (
    <div className='flex px-[25%] py-[13%] mt-0.5 rounded-lg justify-center items-center '>
      <Image src={keychainlogo} alt="ETHIndia Sponsor" draggable={false} className='scale-140' />
    </div>
  );
}

export function Keplologo() {
  return (
    <div className='max-w-[220px]'>
      <Image src={keplologo} alt="ETHIndia Sponsor" draggable={false}/>
    </div>
  );
}

export function CodeCraftersLogo() {
  return (
    <div className='max-w-[220px]'>
      <Image src={codeCraftersImage} alt="ETHIndia Sponsor" draggable={false}/>
    </div>
  );
}

export function Givemycertificate() {
  return (
    <div className='max-w-[220px]'>
      <Image src={givemycertificate} alt="ETHIndia Sponsor" draggable={false}/>
    </div>
  );
}