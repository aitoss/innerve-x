import BrochureButton from "../ui/BrochureButton";
import InnerveNavbarLogo from "../ui/InnerveNavbarLogo";
import NavigationBar from "../ui/NavigationBar";


export default function Navbar() {

  const navItems = ["Prizes", "Tracks", "Timeline", "Sponser"];

  return (
    <nav className="absolute z-50 top-0 w-full flex justify-between items-center p-5 px-14 bg-transparent">
      <InnerveNavbarLogo />
      <NavigationBar />
      <BrochureButton />
    </nav>
  );
}