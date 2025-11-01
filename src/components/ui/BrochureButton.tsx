import Image from "next/image";
import broucherButton from "../../assets/svg/brouchureButton.svg"

export default function BrochureButton() {
    return (
        <button>
            <Image src={broucherButton} alt="Brochure Button" />
        </button>
    );
}