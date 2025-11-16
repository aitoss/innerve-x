'use client';
import BrochureButton from "../ui/BrochureButton";
import InnerveNavbarLogo from "../ui/InnerveNavbarLogo";
import NavigationBar from "../ui/NavigationBar";


export default function xNavbar() {

  const navItems = ["Prizes", "Tracks", "Timeline", "Sponser"];

  return (
    <nav className="absolute z-50 top-0 w-full bg-transparent">
      <div className="flex justify-between items-center p-3 px-4 sm:p-4 sm:px-6 md:p-5 md:px-8 lg:px-14">
        <InnerveNavbarLogo />
        <NavigationBar />
        {/* Hide BrochureButton on mobile since it's now in the hamburger menu */}
        <div className="hidden md:block">
          <BrochureButton />
        </div>
      </div>
    </nav>
  );
}