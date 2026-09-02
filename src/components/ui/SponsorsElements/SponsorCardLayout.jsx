import SponsorCard from "./SponsorCard";

import {
  DevfolioImage,
  ETHIndiaImage,
  MiniOrange,
  UdchaloImage,
  Givemycertificate,
  Keplologo,
  Keychainlogo,
  CodeCraftersLogo,
  MlhLogoSponser,
  AccopsLogoImage,
  MastraAiLogo,
  MongoDbLogo,
  EventopiaLogo,
  JoshLogoImage,
  BankOfBarodaLogoImage,
} from "@/components/ui/SponsorsElements/SponsorsImages";

import Link from "next/link";

const sponsors1 = [
  // { image: UdchaloImage, alt: 'Udchalo Sponsor' },
  { image: Keychainlogo, alt: "Sponsor 2", link: "https://www.keychain.com/" },
  // { image: DevfolioImage, alt: 'Sponsor 3' },
];

const sponsors2 = [
  {
    image: DevfolioImage,
    alt: "Udchalo Sponsor",
    link: "https://devfolio.co/discover",
  },
  // { image: ETHIndiaImage, alt: 'Sponsor 2' },
  // { image: UdchaloImage, alt: 'Sponsor 3' },
];

const sponsors3 = [
  { image: MongoDbLogo, alt: "mongodb", link: "https://www.mongodb.com/" },
  {
    image: ETHIndiaImage,
    alt: "Udchalo Sponsor",
    link: "https://ethindia-villa.devfolio.co/",
  },
  {
    image: Givemycertificate,
    alt: "Sponsor 2",
    link: "https://givemycertificate.com/",
  },
  { image: Keplologo, alt: "Sponsor 3", link: "https://keplo.com/" },
  {
    image: CodeCraftersLogo,
    alt: "Sponsor 4",
    link: "https://codecrafters.io/",
  },
  { image: MastraAiLogo, alt: "mastra", link: "https://mastra.ai/" },
];

const sponsors4 = [
  {
    image: MiniOrange,
    alt: "MiniOrange",
    link: "https://ethindia-villa.devfolio.co/",
  },
  // { image: UdchaloImage, alt: 'Sponsor 2' },
  // { image: UdchaloImage, alt: 'Sponsor 3' },
];

const sponsors5 = [
  { image: MlhLogoSponser, alt: "Mlh Logo Sponsor", link: "https://mlh.io/" },
  // { image: UdchaloImage, alt: 'Sponsor 2' },
  // { image: UdchaloImage, alt: 'Sponsor 3' },
];

const sponsors6 = [
  {
    image: AccopsLogoImage,
    alt: "Accops Logo Sponsor",
    link: "https://www.accops.com/",
  },
  // { image: UdchaloImage, alt: 'Sponsor 2' },
  // { image: UdchaloImage, alt: 'Sponsor 3' },
];

const sponsors7 = [
  {
    image: EventopiaLogo,
    alt: "Eventopia Logo Sponsor",
    link: "https://eventopia.in/",
  },
  // { image: UdchaloImage, alt: 'Sponsor 2' },
  // { image: UdchaloImage, alt: 'Sponsor 3' },
];

const sponsors8 = [
  // { image: UdchaloImage, alt: 'Udchalo Sponsor' },
  {
    image: BankOfBarodaLogoImage,
    alt: "bank of baroda",
    link: "https://bankofbaroda.bank.in/",
  },
  // { image: DevfolioImage, alt: 'Sponsor 3' },
];

const sponsors9 = [
  { image: JoshLogoImage, alt: "josh", link: "https://www.joshsoftware.com/" },
  // { image: ETHIndiaImage, alt: 'Sponsor 2' },
  // { image: UdchaloImage, alt: 'Sponsor 3' },
];

export function SponsorCardLayout1() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center items-center scale-50 sm:scale-75 lg:scale-100 mx-[10%] mt-0 sm:-mt-1 md:-mt-15 lg:-my-4 xl:my-0">
      {sponsors1.map((sponsor, idx) => (
        <Link
          href={sponsor.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/2 lg:w-1/4 flex justify-center"
        >
          <SponsorCard image={sponsor.image} alt={sponsor.alt} />
        </Link>
      ))}
    </div>
  );
}

export function SponsorCardLayout2() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center items-center scale-50 sm:scale-75 lg:scale-100 mx-[10%] mb-2 mt-0 sm:mt-2 md:-mt-10 lg:-my-4 xl:my-0">
      {sponsors2.map((sponsor, idx) => (
        <Link
          href={sponsor.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/2 lg:w-1/4 flex justify-center"
        >
          <SponsorCard image={sponsor.image} alt={sponsor.alt} />
        </Link>
      ))}
    </div>
  );
}

export function SponsorCardLayout3() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center items-center scale-50 sm:scale-75 lg:scale-100 mx-[10%] mt-0 mb-0 sm:mb-0 sm:-mt-12 md:-mt-25 lg:-my-4 xl:my-0">
      {sponsors3.map((sponsor, idx) => (
        <Link
          href={sponsor.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/2 lg:w-1/4 flex justify-center"
        >
          <SponsorCard image={sponsor.image} alt={sponsor.alt} />
        </Link>
      ))}
    </div>
  );
}

export function SponsorCardLayout4() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center items-center scale-50 sm:scale-75 lg:scale-100 mx-[10%] my-0 sm:-mt-2 md:-mt-15 lg:-my-4 xl:my-0">
      {sponsors4.map((sponsor, idx) => (
        <Link
          href={sponsor.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/2 lg:w-1/4 flex justify-center"
        >
          <SponsorCard image={sponsor.image} alt={sponsor.alt} />
        </Link>
      ))}
    </div>
  );
}

export function SponsorCardLayout5() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-10 justify-center items-start scale-50 sm:scale-75 lg:scale-100 mx-[10%] my-0 lg:-my-4 xl:my-0">
      {sponsors5.map((sponsor, idx) => (
        <Link
          href={sponsor.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/2 lg:w-1/4 flex justify-center"
        >
          <SponsorCard image={sponsor.image} alt={sponsor.alt} />
        </Link>
      ))}
    </div>
  );
}

export function SponsorCardLayout6() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-10 justify-center items-start scale-50 sm:scale-75 lg:scale-100 mx-[10%] my-0 lg:-my-4 xl:my-0">
      {sponsors6.map((sponsor, idx) => (
        <Link
          href={sponsor.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/2 lg:w-1/4 flex justify-center"
        >
          <SponsorCard image={sponsor.image} alt={sponsor.alt} />
        </Link>
      ))}
    </div>
  );
}

export function SponsorCardLayout7() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-10 justify-center items-start scale-50 sm:scale-75 lg:scale-100 mx-[10%] my-0 lg:-my-4 xl:my-0">
      {sponsors7.map((sponsor, idx) => (
        <Link
          href={sponsor.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/2 lg:w-1/4 flex justify-center"
        >
          <SponsorCard image={sponsor.image} alt={sponsor.alt} />
        </Link>
      ))}
    </div>
  );
}

export function SponsorCardLayout8() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-10 justify-center items-start scale-50 sm:scale-75 lg:scale-100 mx-[10%] my-0 lg:-my-4 xl:my-0">
      {sponsors8.map((sponsor, idx) => (
        <Link
          href={sponsor.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/2 lg:w-1/4 flex justify-center"
        >
          <SponsorCard image={sponsor.image} alt={sponsor.alt} />
        </Link>
      ))}
    </div>
  );
}

export function SponsorCardLayout9() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-10 justify-center items-start scale-50 sm:scale-75 lg:scale-100 mx-[10%] my-0 lg:-my-4 xl:my-0">
      {sponsors9.map((sponsor, idx) => (
        <Link
          href={sponsor.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-1/2 lg:w-1/4 flex justify-center"
        >
          <SponsorCard image={sponsor.image} alt={sponsor.alt} />
        </Link>
      ))}
    </div>
  );
}
