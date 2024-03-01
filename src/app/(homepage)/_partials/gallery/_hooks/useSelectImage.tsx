import { StaticImageData } from "next/image";
import React from "react";
import GalleryData from "../_data/gallery.data";

const useSelectImage = (): {
  id: number;
  handleId: (index: number) => void;
  forward: () => void;
  backward: () => void;
  imageShow: string | StaticImageData;
} => {
  const [id, setId] = React.useState<number>(1);

  const handleId = (index: number) => {
    setId(index);
  };

  const forward = () => {
    id > GalleryData.length - 1 ? setId(1) : setId(id + 1);
  };

  const backward = () => {
    id <= 1 ? setId(4) : setId(id - 1);
  };

  return {
    id,
    handleId,
    forward,
    backward,
    imageShow: GalleryData[id - 1].image,
  };
};

export default useSelectImage;
