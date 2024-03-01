import { StaticImageData } from "next/image";

type NewsType = {
  image: StaticImageData;
  title: string;
  date: string;
};

export default NewsType;
