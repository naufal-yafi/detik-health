import Image, { StaticImageData } from "next/image";
import React from "react";

const Figure = ({
  image,
  title,
  description,
  isHorizontal,
}: {
  image: string | StaticImageData;
  title: string;
  description: string;
  isHorizontal?: boolean;
}) => {
  return (
    <React.Fragment>
      <figure
        className={
          isHorizontal
            ? "md:grid md:grid-cols-2 space-y-4 md:space-y-0 break-words"
            : ""
        }
      >
        <Image
          src={image}
          alt={title}
          className="overflow-hidden rounded-[20px]"
        />

        <figcaption>
          <h1
            data-test="card-title"
            className={`card__title ${isHorizontal ? "" : "mt-8"}`}
          >
            {title}
          </h1>
          <p data-test="card-description" className="card__desc">
            {description}
          </p>
        </figcaption>
      </figure>
    </React.Fragment>
  );
};

export default function Card({
  title,
  description,
  image,
  isHorizontal,
}: {
  title: string;
  description: string;
  image?: null | string | StaticImageData;
  isHorizontal?: boolean;
}) {
  return (
    <div className="px-6 py-6 bg__gradient rounded-[30px] break-words">
      {image ? (
        <Figure
          image={image}
          title={title}
          description={description}
          isHorizontal={isHorizontal}
        />
      ) : (
        <React.Fragment>
          <h1 data-test="card-title" className="card__title">
            {title}
          </h1>
          <p data-test="card-description" className="card__desc">
            {description}
          </p>
        </React.Fragment>
      )}
    </div>
  );
}
