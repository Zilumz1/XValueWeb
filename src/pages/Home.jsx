import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import ProductShowcase from "../components/sections/ProductShowcase";
import Categories from "../components/sections/Categories";
import CommercialSolutions from "../components/sections/CommercialSolutions";
import Partners from "../components/sections/Partners";
import MissionCta from "../components/sections/MissionCta";
import Newsletter from "../components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProductShowcase />
      <Categories />
      <CommercialSolutions />
      <Partners />
      <MissionCta />
      <Newsletter />
    </>
  );
}
