import { Link } from "react-router-dom";
import Coventer from "../Hook/Coventer";

const ProductDisplay = ({ products }) => {
  // const products = props.products;
  const allCategory = products.map((product) => product.category);
  const category = [...new Set(allCategory)];
  const { CapitalFirstWord, priceFormat } = Coventer();

  return (
    <section>
      <div className=" container mx-auto p-3 md:p-4 ">
        {category.map((categoryName) => (
          <div key={categoryName}>
            <div className="py-8">
              <label className=" text-2xl ">
                {CapitalFirstWord(categoryName)}
              </label>
            </div>
            <div className="card-grid">
              {products
                .filter((product) => product.category === categoryName)
                .map((product) => (
                  <Link
                    to={`/products/${product.id}`}
                    className="card "
                    key={product.id}
                    // preventScrollReset={true}
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
        ))}
      </div>
    </section>
  );
};

export default ProductDisplay;
