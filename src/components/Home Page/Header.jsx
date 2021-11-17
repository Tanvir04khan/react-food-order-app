import React from "react";

import tableFullOfFastFood from "../../assets/fast-food-table.jpg";
import locateMeSymbol from "../../assets/location.png";

const Header = ({ cartItems, onCartClick }) => {
  const cartClickHandler = () => {
    onCartClick(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-10 w-full bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-center md:justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-800 cursor-pointer dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                Khan's Fast Food
              </span>
            </div>
          </div>

          <div className="items-center md:flex anima">
            <div className="flex flex-col items-center md:flex-row md:mx-6">
              <span className="my-1 text-sm font-medium text-gray-700 cursor-pointer dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">
                Home
              </span>
              <span className="my-1 text-sm font-medium text-gray-700 cursor-pointer dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">
                Terms & Conditions
              </span>
              <span className="my-1 text-sm font-medium text-gray-700 cursor-pointer dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">
                Contact
              </span>
              <span className="my-1 text-sm font-medium text-gray-700 cursor-pointer dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">
                Privacy Policy
              </span>
            </div>

            <div
              className="flex justify-center md:block"
              onClick={cartClickHandler}
            >
              <span className="relative flex items-center justify-center text-gray-700 cursor-pointer dark:text-gray-200 hover:text-gray-600 dark:hover:text-graydelay-300">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full"></span>
                <span className="w-6 h-6 font-semibold text-center text-white bg-red-700 rounded-full">
                  {cartItems}
                </span>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center mt-8">
        <img
          src={tableFullOfFastFood}
          alt="Table full of fast food."
          className="w-1/2 pt-2 mt-8 ml-5 rounded-xl"
        />
        <div className="flex flex-col items-center justify-center w-1/2 mx-auto my-5 ">
          <h1 className="text-xl font-semibold">
            Please select location, so that we can find a restaurant that
            delivers to you!
          </h1>
          <div className="flex items-center justify-center w-full">
            <input
              type="text"
              className="w-1/2 h-10 pl-10 pr-4 m-5 text-gray-700 bg-white border border-gray-300 rounded-md y-3 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Enter your delivery address"
            />
            <div className="flex items-center justify-center w-32 h-8 text-center text-white bg-green-400 rounded-md shadow-sm cursor-pointer">
              <img
                src={locateMeSymbol}
                alt="Locate me symbol"
                className="w-4 h-4 m-1"
              />
              <span className="font-bold">Locate me</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
