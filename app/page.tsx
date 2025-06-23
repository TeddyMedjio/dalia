import Categories from "./components/acceuil/categories";
import Clients from "./components/acceuil/clients";
import Engagement from "./components/acceuil/engagement";
import Faq from "./components/acceuil/faq";
import HeroSection from "./components/acceuil/hero-section";
import Slider from "./components/acceuil/slider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Slider />
      <Engagement />
      <Categories />
      <Clients />
      <Faq />
    </>
  );
}
