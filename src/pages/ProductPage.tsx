import { useParams } from "react-router";
import ProductHeroSection from "../components/ProductHeroSection";
import AccordionSection from "../components/Accordions";
import ProductCarousel from "../components/ProductCarousel";

function ProductPage() {
  const { id } = useParams();
  return (
    <>
      <ProductHeroSection />
      <AccordionSection />
      <ProductCarousel />
    </>
  );
}

export default ProductPage;
