import { useParams } from "react-router";

function ProductPage() {
  const { id } = useParams();
  return <>{id ? id : ""}</>;
}

export default ProductPage;
