"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import NewsData from "./_data/news.data";
import useChangeTab from "./_hooks/useChangeTab";
import iconCamera from "./_images/camera.svg";
import iconPlay from "./_images/play.svg";
import NewsType from "./_types/news.type";

export default function News() {
  const { tab, handleTab } = useChangeTab();

  return (
    <section id="news" className="flex__center flex-col px-6 md:px-32 pb-14">
      <div className="bg__gradient my-8 rounded-full">
        <button
          className={`btn font-semibold ${tab === "artikel" ? "active" : ""}`}
          onClick={() => handleTab("artikel")}
        >
          Artikel
        </button>
        <button
          className={`btn font-semibold ${tab === "foto" ? "active" : ""}`}
          onClick={() => handleTab("foto")}
        >
          Foto
        </button>
        <button
          className={`btn font-semibold ${tab === "video" ? "active" : ""}`}
          onClick={() => handleTab("video")}
        >
          Video
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-5">
        {NewsData.map((news: NewsType, index) => (
          <div key={index} className="group">
            <Link href="https://health.detik.com/kebugaran/d-7056398/sukses-finish-marathon-di-jakarta-osha-penyandang-autisme-beberkan-prosesnya">
              <figure className="overflow-hidden rounded-[32px] flex justify-end items-start">
                <Image
                  src={news.image}
                  alt={`article image ${index}`}
                  className="transition-transform duration-500 group-hover:scale-150"
                  loading="lazy"
                />

                {tab !== "artikel" && (
                  <div className="absolute flex__center gap-2 btn px-2 mt-4 mr-4 rounded-[5px] text-[12px] font-semibold bg-[#212427]/50">
                    {tab === "video" && (
                      <React.Fragment>
                        <Image src={iconPlay} alt="icon play" />
                        <span>01:45</span>
                      </React.Fragment>
                    )}
                    {tab === "foto" && (
                      <React.Fragment>
                        <Image src={iconCamera} alt="icon camera" />
                        <span>5 Foto</span>
                      </React.Fragment>
                    )}
                  </div>
                )}
              </figure>
              <figcaption>
                <h2 className="text-[16px] font-bold mt-2 line-clamp-2 group-hover:text-orange-400">
                  {news.title}
                </h2>
                <p className="text-[12px] text-[#CACACA] font-medium mt-3">
                  {news.date}
                </p>
              </figcaption>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
