import { useRouteLoaderData } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const EditProductPage = () => {
  const data = useRouteLoaderData("product-detail");

  return <ProductForm method="PATCH" product={data} />;
};
export default EditProductPage;
