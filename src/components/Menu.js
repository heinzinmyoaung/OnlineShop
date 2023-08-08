import { Link } from "react-router-dom";
import Coventer from "../Hook/Coventer";

const Menu = (props) => {
  const { CapitalFirstWord } = Coventer();
  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-white">
      <Link
        to={"/"}
        onClick={props.closeMenu || undefined}

        // className={({ isActive }) => (isActive ? "bg-red-200" : undefined)}
        className="block md:inline-block px-3 py-2 rounded-md text-white hover:bg-[#2F2F2F] focus:outline-none focus:text-white focus:bg-[#2F2F2F]"
      >
        Home
      </Link>
      <div className=" inline-block">
        <button className="peer px-3 py-2 hover:bg-[#2F2F2F] rounded-md                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ">
          Cateogry
        </button>

        <div
          className="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white text-sm text-black  drop-shadow-lg absolute"
        >
          {props.category.map((category) => (
            <Link
              to={`/products/category/${category}`}
              onClick={props.closeMenu || undefined}
              className="px-5 py-3 hover:bg-[#2F2F2F]  hover:text-white"
              key={category}
            >
              {CapitalFirstWord(category)}
            </Link>
          ))}
        </div>
      </div>
      <Link
        // href=""
        to={"/products"}
        // className={({ isActive }) => (isActive ? "bg-red-200" : undefined)}
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-[#2F2F2F] focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Add Product
      </Link>
    </div>
  );
};

export default Menu;
