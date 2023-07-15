import ProductDisplay from "../components/ProductDisplay";
import { useLoaderData, json } from "react-router-dom";

const ProductsPage = () => {
  const products = useLoaderData();

  return (
    <>
      <ProductDisplay products={products} />
    </>
  );
};

export default ProductsPage;

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw json({ message: "could be occor Fetch error " }, { status: 500 });
  } else {
    return response;
  }
}
