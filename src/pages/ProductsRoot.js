import { Outlet, ScrollRestoration } from "react-router-dom";
import NavigationBar from "./Navigation";

const ProductRootLayout = () => {
  return (
    <>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ProductRootLayout;
