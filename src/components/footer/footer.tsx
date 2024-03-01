import Image from "next/image";
import facebook from "./_images/facebook.svg";
import instagram from "./_images/instagram.svg";
import linkedin from "./_images/linkedin.svg";
import logo from "./_images/logo-event.png";
import x from "./_images/x.svg";
import yt from "./_images/yt.svg";

const socials = [facebook, instagram, linkedin, x, yt];

export default function Footer() {
  return (
    <footer className="px-6 py-8 md:px-32 bg-[#28A997]">
      <Image src={logo} alt="logo event" />

      <div className="flex flex-col md:flex-row items-start md:items-end pr-0 md:pr-24">
        <p className="text-white text-[16px] mt-12 mb-4">
          Event olahraga lari sejauh 10 kilometer yang diselenggarakan oleh
          Detikhealth secara gratis untuk masyarakat Indonesia. Ajak keluarga
          dan kerabat anda untuk ikut keseruan Sudirman Run 2023 lalu menangkan
          hadiah utama serta doorprize dengan total puluhan juta rupiah
        </p>

        <div className="mb-5">
          <h3 className="text-white text-nowrap mb-2">Connect With Us</h3>

          <div className="flex gap-2">
            {socials.map((img, index) => (
              <Image src={img} alt="Logo" key={index} />
            ))}
          </div>
        </div>
      </div>

      <hr className="border" />

      <p className="text-[16px] text-white mt-4">
        Copyright @ 2023 detikcom. All right reserved
      </p>
    </footer>
  );
}
