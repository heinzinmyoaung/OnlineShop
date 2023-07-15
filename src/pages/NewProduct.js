import { json, redirect } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import UseHttp from "../Hook/UseHttp";
import { useCallback, useEffect, useState } from "react";

const NewProductPage = () => {
  const { sendHttp } = UseHttp();

  const [category, setCategory] = useState([]);
  const loadedCategory = (category) => {
    setCategory(category);
  };
  const fetchFakeStore = useCallback(() => {
    sendHttp(
      {
        url: "https://fakestoreapi.com/products/categories",
      },
      loadedCategory
    );
  }, []);

  useEffect(() => {
    fetchFakeStore();
  }, [fetchFakeStore]);

  return <ProductForm categories={category} />;
};

export default NewProductPage;

export async function action({ request, params }) {
  const data = await request.formData();

  const productData = {
    title: data.get("title"),
    price: data.get("price"),
    description: data.get("description"),
    image: data.get("image"),
    category: data.get("selectCategory"),
  };

  console.log(productData);

  const response = await fetch("https://fakestoreapi.com/products", {
    method: request.method, //POST
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (response.status === 422) {
    return response; //response data => invalid title, invalid price , .....
  }

  if (!response.ok) {
    throw json({ message: "Could not create product. " }, { status: 500 });
  }
  console.log(response);
  return redirect("/");
}
