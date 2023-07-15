import { useLoaderData } from "react-router-dom";
import Category from "../components/Category";

const CategoryProductPage = () => {
  const product = useLoaderData();

  return <Category product={product} />;
};

export default CategoryProductPage;
