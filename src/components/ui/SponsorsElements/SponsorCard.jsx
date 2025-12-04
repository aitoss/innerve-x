
import { SponsorCardBorder } from "@/components/ui/SponsorsElements/SponsorsImages";

export default function SponsorCard({ image: ImageComponent, alt }) {
  return (
    <div className="relative w-fit m-4 flex items-center justify-center">
      <SponsorCardBorder />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-73/80 flex justify-center items-center mx-auto">
          {ImageComponent ? <ImageComponent alt={alt} /> : null}
        </div>
      </div>
    </div>
  );
}
