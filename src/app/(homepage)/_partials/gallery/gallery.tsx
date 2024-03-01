"use client";

import Image from "next/image";
import GalleryData from "./_data/gallery.data";
import useSelectImage from "./_hooks/useSelectImage";
import iconArrowLeft from "./_images/arrow-left.svg";
import GalleryType from "./_type/gallery.type";

export default function Gallery() {
  const { id, handleId, backward, forward, imageShow } = useSelectImage();

  return (
    <section className="pt-28 px-6 md:px-32">
      <h1 data-test="title-gallery" className="title__section">
        GALERI SUDIRMAN RUN 2022
      </h1>

      <div className="mt-10">
        <figure className="flex__center">
          <Image
            src={imageShow}
            alt="preview image"
            className="rounded-[32px] transition duration-500 aspect-video"
            quality={100}
            priority
          />
          <div className="absolute flex__center justify-between w-full px-8 md:px-44">
            <button onClick={backward}>
              <Image
                src={iconArrowLeft}
                alt="arrow left icon"
                width={50}
                height={50}
              />
            </button>
            <button onClick={forward}>
              <Image
                src={iconArrowLeft}
                alt="arrow right icon"
                width={50}
                height={50}
                className="rotate-180"
              />
            </button>
          </div>
        </figure>

        <figure className="grid grid-cols-4 gap-4 mt-4">
          {GalleryData.map((gallery: GalleryType) => (
            <button key={gallery.id} onClick={() => handleId(gallery.id)}>
              <Image
                src={gallery.image}
                alt={`gallery image ${gallery.id}`}
                loading="lazy"
                className={`aspect-video rounded-[16px] transition duration-500 ${
                  id !== gallery.id ? "saturate-0" : ""
                }`}
              />
            </button>
          ))}
        </figure>
      </div>
    </section>
  );
}
