import Image from "next/image";
import Plank from "@/assets/images/datePlank.png"
import Shield from "@/assets/svg/eventCardShield.svg"

export function PlankImage() {
  return (
    <div>
        <Image src={Plank} alt="" />
    </div>
  );
}

export function EventCardShield() {
  return (
    <div>
        <Image src={Shield} alt="" />
    </div>
  );
}