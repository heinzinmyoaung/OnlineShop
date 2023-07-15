import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductsPage, { loader as productsPageLoader } from "./pages/Products";
import ProductsRootLayout from "./pages/ProductsRoot";

import ProductDetailPage, {
  loader as productDetailPageLoader,
  action as productDetailAction,
} from "./pages/ProductDetail";

import CategoryProductPage from "./pages/CategoryProduct";
import ErrorPage from "./pages/Error";
import NewProductPage, { action as NewProductAction } from "./pages/NewProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsRootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
        loader: productsPageLoader,
      },
      {
        path: "products/:productId",
        element: <ProductDetailPage />,
        loader: productDetailPageLoader,
        action: productDetailAction,
      },
      {
        path: "products/new",
        element: <NewProductPage />,
        action: NewProductAction,
      },
      {
        path: "products/category/:categoryName",
        element: <CategoryProductPage />,
        loader: async ({ params }) => {
          const response = await fetch(
            "https://fakestoreapi.com/products/category/" + params.categoryName
          );

          if (!response.ok) {
          } else {
            const resData = await response.json();
            return resData;
          }
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
