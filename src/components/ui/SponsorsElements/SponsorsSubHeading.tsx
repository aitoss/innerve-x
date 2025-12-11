

type SponsorSubHeadingProps = {
  heading: string;
};

export default function SponsorSubHeading({ heading }: SponsorSubHeadingProps) {
  return (
    <div className="flex justify-center items-center text-stroke-h text-2xl md:text-4xl lg:text-5xl text-white  my-2 md:my-8  lg:my-14 ">
      {heading}
    </div>
  );
}