import { StaticImageData } from "next/image";

type ContentType = {
  title: string;
  isHorizontal: boolean;
  image: null | string | StaticImageData;
  description: string;
};

export default ContentType;
