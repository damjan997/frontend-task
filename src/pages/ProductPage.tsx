import { useParams } from "react-router";

function ProductPage() {
  const { id } = useParams();
  return <div>{id ? id : ""}</div>;
}

export default ProductPage;
