import Link from "next/link";
import Card from "./_components/card";
import contents from "./_data/about.data";
import map from "./_images/maps.png";
import ContentType from "./_type/about.type";

export default function About() {
  return (
    <section
      id="about"
      className="pt-14 pb-28 px-6 md:px-32 flex__center flex-col gap-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          image={map}
          title="10K FUN RUN"
          description="Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari dimulai dari Bundaran HI hingga Patung Pemuda Membangun di Senayan lalu kembali lagi ke Bundaran HI!"
        />

        <div className="space-y-6">
          {contents.map((content: ContentType, i: number) => (
            <Card
              key={i}
              image={content.image}
              title={content.title}
              isHorizontal={content.isHorizontal}
              description={content.description}
            />
          ))}
        </div>
      </div>

      <div>
        <Link href="https://event.detik.com" data-test="btn-about">
          <button className="btn primary">Daftar Sekarang</button>
        </Link>
      </div>
    </section>
  );
}
