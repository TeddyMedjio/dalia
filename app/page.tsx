import Categories from "./components/acceuil/categories";
import Engagement from "./components/acceuil/engagement";
import HeroSection from "./components/acceuil/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Engagement />
      <Categories />
    </>
  );
}
