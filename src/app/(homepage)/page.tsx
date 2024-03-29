import About from "./_partials/about/about";
import Article from "./_partials/article/article";
import Cta from "./_partials/cta/cta";
import Gallery from "./_partials/gallery/gallery";
import Hero from "./_partials/hero/hero";
import News from "./_partials/news/news";
import Sponsor from "./_partials/sponsor/sponsor";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Sponsor />
      <Gallery />
      <Article />
      <News />
      <Cta />
    </main>
  );
}
