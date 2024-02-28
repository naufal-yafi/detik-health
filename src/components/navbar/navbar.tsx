import Image from "next/image";
import logo from "./_images/navbar-brand.png";
import Navigation from "./_partials/navigation";

export default function Navbar() {
  return (
    <header className="fixed left-0 w-full top-0 px-6 md:px-32 mt-8 z-20">
      <nav className="flex__center justify-between px-8 py-3 w-full rounded-full backdrop-blur-lg bg-white/30">
        <div>
          <Image
            src={logo}
            alt="logo"
            width={145}
            height={30}
            className="w-[100px] md:w-[145px]"
          />
        </div>

        <Navigation />
      </nav>
    </header>
  );
}
