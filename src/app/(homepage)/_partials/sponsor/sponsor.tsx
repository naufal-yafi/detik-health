import Image from "next/image";
import Marquee from "react-fast-marquee";
import sponsor1 from "./_images/sponsor-1.png";
import sponsor2 from "./_images/sponsor-2.png";
import sponsor3 from "./_images/sponsor-3.png";
import sponsor4 from "./_images/sponsor-4.png";
import sponsor5 from "./_images/sponsor-5.png";
import sponsor6 from "./_images/sponsor-6.png";
import sponsor7 from "./_images/sponsor-7.png";
import sponsor8 from "./_images/sponsor-8.png";

const sponsors = [
  {
    id: 1,
    image: sponsor1,
  },
  {
    id: 2,
    image: sponsor2,
  },
  {
    id: 3,
    image: sponsor3,
  },
  {
    id: 4,
    image: sponsor4,
  },
  {
    id: 5,
    image: sponsor5,
  },
  {
    id: 6,
    image: sponsor6,
  },
  {
    id: 7,
    image: sponsor7,
  },
  {
    id: 8,
    image: sponsor8,
  },
];

export default function Sponsor() {
  return (
    <section className="py-16 bg__gradient flex__center flex-col">
      <h1 className="font-black text-4xl text-white">DIDUKUNG OLEH</h1>

      <Marquee className="mt-8">
        {sponsors.map((sponsor) => (
          <Image
            key={sponsor.id}
            src={sponsor.image}
            width={216}
            height={94}
            alt={`sponsor ${sponsor.id}`}
            className="bg-white px-9 py-4 rounded-lg mr-4"
          />
        ))}
      </Marquee>
    </section>
  );
}
