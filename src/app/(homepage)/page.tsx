import About from "./_partials/about/about";
import Gallery from "./_partials/gallery/gallery";
import Hero from "./_partials/hero/hero";
import Sponsor from "./_partials/sponsor/sponsor";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Sponsor />
      <Gallery />
    </main>
  );
}
