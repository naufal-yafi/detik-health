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
          <Link href="/" data-test="menu-1">
            <button>Home</button>
          </Link>
        </li>
        <li className="font-bold">
          <Link href="/#about" data-test="menu-2">
            <button>Tentang</button>
          </Link>
        </li>
        <li className="font-bold">
          <Link href="/#gallery" data-test="menu-3">
            <button>Galeri</button>
          </Link>
        </li>
        <li className="font-bold">
          <Link href="/#news" data-test="menu-4">
            <button>Berita</button>
          </Link>
        </li>
        <li>
          <Link href="https://event.detik.com" data-test="menu-5">
            <button className="btn gradient">Registrasi</button>
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
}
