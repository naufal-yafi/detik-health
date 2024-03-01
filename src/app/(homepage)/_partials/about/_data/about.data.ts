import { StaticImageData } from "next/image";
import map from "./../_images/maps.png";
import people from "./../_images/people.png";
import ContentType from "../_type/about.type";

const contents: ContentType[] = [
  {
    title: "10K FUN RUN",
    isHorizontal: null,
    image: map,
    description:
      "Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari dimulai dari Bundaran HI hingga Patung Pemuda Membangun di Senayan lalu kembali lagi ke Bundaran HI!",
  },
  {
    title: "GRATIS DAN BERHADIAH",
    isHorizontal: null,
    image: null,
    description:
      "Pendaftaran gratis! Ajak keluarga anda dan menangkan hadiah total puluhan juta rupiah doorprize menarik!",
  },
  {
    title: "50+ TENANT BAZZAR",
    isHorizontal: null,
    image: null,
    description:
      "Dapatkan promo menarik pada booth-booth tenant bazzar Sudirman Run 2023 mulai dari F&B hingga fashion",
  },
  {
    title: "SPECIAL PERFORMANCE",
    isHorizontal: true,
    image: people,
    description:
      "Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta hiburan lainnya!",
  },
];

export default contents;
