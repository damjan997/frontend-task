import { useParams } from "react-router";
import ProductHeroSection from "../components/ProductHeroSection";
import AccordionSection from "../components/Accordions";

function ProductPage() {
  const { id } = useParams();
  return (
    <>
      <ProductHeroSection />
      <AccordionSection />
    </>
  );
}

export default ProductPage;
