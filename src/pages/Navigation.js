import { useCallback, useEffect, useState } from "react";
import UseHttp from "../Hook/UseHttp";
import Navbar from "../components/Navbar";

const NavigationBar = () => {
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

  return <Navbar category={category} />;
};

export default NavigationBar;
