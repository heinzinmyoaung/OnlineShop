import { Link } from "react-router-dom";
import Coventer from "../Hook/Coventer";
// import { useDispatch, useSelector } from "react-redux";
// import { scrollAction } from "../store/scrollRestore";
// import { useEffect } from "react";

const Category = (props) => {
  const categoryProduct = props.product;
  console.log(categoryProduct);
  const { CapitalFirstWord, priceFormat } = Coventer();

  //   const dispath = useDispatch();
  //   const scrollPosition = useSelector((state) => state.scrollPosition);
  //   //   console.log(window.screenY);
  //   const scrollHandle = () => {
  //     dispath(scrollAction.scrollPositionReducer(window.scrollY));
  //   };

  //   useEffect(() => {
  //     console.log(scrollPosition);
  //     window.scrollTo(0, scrollPosition);
  //   }, [scrollPosition]);

  return (
    <section>
      <div className=" container mx-auto p-3 md:p-4 ">
        <Link to={".."} className="  hover:underline underline-offset-8">
          Home
        </Link>
        <div>
          <div className="py-8">
            <label className=" text-2xl ">
              {CapitalFirstWord(categoryProduct[0].category)}
            </label>
          </div>
          <div className="card-grid">
            {categoryProduct.map((product) => (
              <Link
                to={`/products/${product.id}`}
                className="card "
                key={product.id}
                preventScrollReset
              >
                <div className="card-header">
                  <img
                    className="w-full h-28 sm:h-36 object-contain "
                    src={product.image}
                    alt="beautiful"
                  ></img>
                </div>

                <div className="card-footer">
                  <p className="leading-5 font-light h-11 line-clamp-2 my-2">
                    {product.title}
                  </p>
                  <span>{priceFormat(product.price)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
