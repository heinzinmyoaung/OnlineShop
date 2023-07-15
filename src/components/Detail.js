import { Link, useSubmit } from "react-router-dom";
import Coventer from "../Hook/Coventer";
// import { useEffect } from "react";
import Stars from "../Hook/Stars";

const Detail = (props) => {
  const { priceFormat } = Coventer();
  const { CreateStars } = Stars();

  const productDetail = props.productDetail;
  console.log(productDetail);

  const stars = CreateStars(productDetail);

  const submit = useSubmit();

  const startDeleteHandler = (event) => {
    event.preventDefault();
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "DELETE" });
      // submit({title: 'hello',}, {method: 'DELETE', action: '/a-different-path'})
    }
  };

  return (
    <section>
      <div className="container mx-auto  p-2 md:p-4">
        <div className="p-2 text-xs">
          <Link to={".."} className="  hover:underline underline-offset-8">
            Home
          </Link>
          <span className="px-2">/</span>
          <span> {productDetail.title}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-2 md:p-4  border-b border-[#ddd]">
          <div className=" w-full h-72 md:h-[22rem] lg:h-96 max-h-[28rem] lg:col-span-2 overflow-hidden mx-auto py-3 ">
            <img
              className=" w-full h-full object-contain "
              src={productDetail.image}
              alt="Beautiful"
            ></img>
          </div>

          <div className="w-full h-full md:px-4 max-h-[42rem] box-border md:border border-[#ddd] py-3">
            <div className=" py-2">
              <p className=" text-3xl">{productDetail.title}</p>
            </div>
            <div className=" py-2 flex flex-row  items-center">
              <span className=" text-base">
                <span className=" text-sm pr-1">
                  {productDetail.rating.rate}
                </span>
                {stars}
              </span>
              <p className=" pl-2 font-medium text-gray-900  text-sm">
                {`(${productDetail.rating.count} reviews)`}
              </p>
            </div>

            <form>
              <span className="py-2">
                <span className=" text-lg font-semibold">
                  {priceFormat(productDetail.price)}
                </span>
              </span>
              <p className="py-2 font-semibold">
                Color: <span className="font-light">Red</span>
              </p>

              <div className="flex justify-between">
                <span className="font-semibold">Size:</span>
                <span>Size Charrt</span>
              </div>

              <div className="py-2">
                <select
                  defaultValue={"DEFAULT"}
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="DEFAULT" disabled>
                    Please Select
                  </option>
                  <option value="US">Small</option>
                  <option value="CA">Medium</option>
                  <option value="FR">Large</option>
                  <option value="DE">Extra-Large</option>
                </select>
              </div>

              <div className="py-2">Size Charrt</div>
              <div className=" w-full h-20 border border-red-400 flex flex-row my-2">
                <div className=" my-auto mx-4">Logo</div>
                <div className=" flex flex-col justify-center ">
                  <p className="font-semibold">Ship to me </p>
                  <p className=" font-light text-sm">
                    Arrives in 3-5 business days
                  </p>
                </div>
              </div>
              <button className="w-full h-11 bg-black mt-2 text-white">
                Add To Card
              </button>
              <button
                onClick={startDeleteHandler}
                className="w-full h-11 bg-red-500 mt-2 text-white"
              >
                Delete
              </button>
            </form>
          </div>
        </div>

        <div className=" p-2 md:p-4 ">
          <p className=" text-xl mb-2 ">Product Details</p>
          <p>Product #: {productDetail.id}</p>
          <p className="my-1 text-justify">{productDetail.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
