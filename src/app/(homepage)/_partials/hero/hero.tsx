import Image from "next/image";
import Link from "next/link";
import background from "./_images/bg-desktop.png";
import logoEvent from "./_images/logo-event.png";

export default function Hero() {
  return (
    <section className="flex__center md:justify-end">
      <Image
        src={background}
        alt="Background Event"
        width={1440}
        height={960}
        className="h-screen object-cover md:w-fit md:translate-y-0 md:translate-x-0"
      />

      <figure className="absolute md:left-0 left-auto top-32 md:top-auto md:ps-32 px-14 md:px-0">
        <Image src={logoEvent} alt="Logo Event" />
        <figcaption>
          <Link href="/#about">
            <button
              className="uppercase btn primary mt-12"
              data-test="goto-about"
            >
              Tentang Acara
            </button>
          </Link>
        </figcaption>
      </figure>
    </section>
  );
}
