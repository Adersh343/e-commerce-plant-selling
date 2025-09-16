import React from "react";
import logo from "../assets/icons/logo.svg";
import search from "../assets/icons/search.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="bg-[#EDF8EA]">
      <div className="flex justify-between items-center container mx-auto">
        {/* image and text  */}
        <div className="flex items-center p-2">
          <div>
            <img src={logo} />
          </div>
          <div>Garden</div>
        </div>

        <div className="flex gap-10">
          <a>Home</a>
          <a>Shop</a>
          <a>Blog</a>
          <a>Pages</a>
          <a>About</a>
        </div>

        <div className="flex gap-5 items-center">
          <div>
            <img className=" w-7" src={search} />
          </div>
          <div>Add to cart</div>
          <div><Button/></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
