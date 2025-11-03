import Image from "next/image";
import Plank from "@/assets/images/datePlank.png"

export default function PlankImage() {



  return (
    <div>
        <Image src={Plank} alt="" />
    </div>
  );
}