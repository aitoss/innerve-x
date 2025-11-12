import Image from "next/image";
import Rope from "@/assets/svg/finalRope.svg"

export default function RopeImage() {



  return (
    <div>
        <Image src={Rope} alt="" />
    </div>
  );
}