const CartPage = ({ cartItems, onHomePageClick }) => {
  const homePageClickHandler = () => {
    onHomePageClick(false);
  };

  return (
    <div>
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
              <span
                className="my-1 text-sm font-medium text-gray-700 cursor-pointer dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                onClick={homePageClickHandler}
              >
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CartPage;
