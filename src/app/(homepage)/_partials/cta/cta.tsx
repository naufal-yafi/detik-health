import Image from "next/image";
import Link from "next/link";
import React from "react";
import background from "./_images/bg.jpg";

export default function Cta() {
  return (
    <React.Fragment>
      <Link
        href="https://www.detik.com/search/searchall?query=fun+run&siteid=2"
        data-test="btn-cta"
        className="flex__center mt-8"
      >
        <button className="absolute btn primary">Lihat Lebih Banyak</button>
      </Link>
      <section className="flex__center mt-10">
        <Image src={background} alt="bg" className="object-contain" />
      </section>
    </React.Fragment>
  );
}
