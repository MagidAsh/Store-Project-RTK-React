import { useProducts } from "../context/ProductContext";

function DetailsPage() {
  const products = useProducts();

  console.log(products);

  return <div>DetailsPage</div>;
}

export default DetailsPage;
