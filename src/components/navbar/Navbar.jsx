import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#282C33]">
      <div className="max-w-[1560px] mx-auto flex pt-2 my-1 items-center justify-between">
        <div className="left ml-5 flex items-center ">
          <img
            className="w-20"
            src="https://i.ibb.co/NxNWQWm/logo-removebg-preview.png"
            alt="logo"
          />
          <h1 className="text-white text-3xl ml-3 font-semibold">
            {" "}
            <span className="text-[#b86acd]">Shahriyar</span> Mahbub
          </h1>
        </div>
        <div className="right  items-center ">
          <div className="sm:hidden lg:block md:block">
            <div className="flex mr-5">
              <a href="/#">
                <li className="text-[#ABB2BF] list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>home
                </li>
              </a>
              <a href="/#">
                <li className="text-[#ABB2BF] list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>work
                </li>
              </a>
              <a href="/#">
                <li className="text-[#ABB2BF] list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>about-me
                </li>
              </a>
              <a href="/#">
                <li className="text-[#ABB2BF] list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>contacts
                </li>
              </a>
            </div>
          </div>
          <div className="dropdown dropdown-end lg:hidden md:hidden mr-4">
            <label tabIndex={0} className="btn m-1">
              Menu
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/#">Home</a>
              </li>
              <li>
                <a href="/#">work</a>
              </li>
              <li>
                <a href="/#">about-me</a>
              </li>
              <li>
                <a href="/#">contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
