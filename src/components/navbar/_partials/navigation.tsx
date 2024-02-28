"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import useShowNavbarMobile from "../hooks/useShowNavbarMobile";
import menuIcon from "./../_images/menu-icon.svg";

export default function Navigation() {
  const { open, handleOpen } = useShowNavbarMobile();

  return (
    <React.Fragment>
      <div className="block md:hidden">
        <button
          className="w-[40px] h-[40px] flex__center bg-white rounded-full"
          onClick={handleOpen}
        >
          <Image src={menuIcon} alt="menu icon" width={20} height={20} />
        </button>
      </div>

      <ul
        className={`absolute md:relative mt-16 md:mt-0 rounded-xl top-0 right-0 flex__center flex-col md:flex-row px-4 py-6 gap-8 md:gap-20 bg-white md:bg-transparent ${
          open ? "translate-x-0" : "translate-x-[1000%]"
        } transition duration-500 md:translate-x-0`}
      >
        <li className="font-bold">
          <Link href="/">
            <button data-test="menu">Home</button>
          </Link>
        </li>
        <li className="font-bold">
          <Link href="/#about">
            <button data-test="menu">Tentang</button>
          </Link>
        </li>
        <li className="font-bold">
          <Link href="/#gallery">
            <button data-test="menu">Galeri</button>
          </Link>
        </li>
        <li className="font-bold">
          <Link href="/#news">
            <button data-test="menu">Berita</button>
          </Link>
        </li>
        <li>
          <Link href="https://event.detik.com">
            <button data-test="menu" className="btn gradient">
              Registrasi
            </button>
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
}
