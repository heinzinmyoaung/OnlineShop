import { Await, defer, json, redirect, useLoaderData } from "react-router-dom";
import Detail from "../components/Detail";
import ProductDisplay from "../components/ProductDisplay";
import { Suspense } from "react";
// import ScrollRestWrap from "../components/ScrollRestWrap";

const ProductDetailPage = () => {
  // const productDetail = useLoaderData();

  const { product, products } = useLoaderData();
  console.log(product, products);

  return (
    <>
      {/* <Detail productDetail={productDetail} /> */}

      <Suspense fallback={<p className=" text-center">Loading...</p>}>
        <Await resolve={product}>
          {(loadedProduct) => <Detail productDetail={loadedProduct} />}
        </Await>

        <Await resolve={products}>
          {(loadedProducts) => <ProductDisplay products={loadedProducts} />}
        </Await>
      </Suspense>
    </>
  );
};
export default ProductDetailPage;

async function product(id) {
  const response = await fetch("https://fakestoreapi.com/products/" + id);

  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData;
  }
}

async function products() {
  const response = await fetch("https://fakestoreapi.com/products?limit=4");

  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData;
  }
}

export async function loader({ request, params }) {
  // console.log(request);
  // const response = await fetch(
  //   "https://fakestoreapi.com/products/" + params.productId
  // );

  // if (!response.ok) {
  // } else {
  //   const resData = await response.json();
  //   return resData;
  // }
  const productId = params.productId;
  return defer({
    product: await product(productId),
    products: products(),
  });
}

export async function action({ request, params }) {
  const id = params.productId;
  const response = await fetch("https://fakestoreapi.com/products/" + id, {
    method: request.method, //'DELETE"
  });

  if (!response.ok) {
    throw json({ message: "Could not delete product" }, { status: 500 });
  }
  return redirect("/");
}
