import { StaticImageData } from "next/image";

type GalleryType = {
  id: number;
  image: string | StaticImageData;
};

export default GalleryType;
