const CartItem = (props) => {
  return (
    <div className="flex items-center justify-around max-w-2xl m-auto bg-gray-100 shadow-lg rounded-3xl">
      <img
        src="https://images.dominos.co.in/new_veggie_paradise.jpg"
        alt="Fast food"
        className="m-1.5 p-2 rounded-xl h-28 w-52"
      />
      <h1>Veggie Paradise</h1>
      <div className="flex">
        <button
          type="button"
          className="w-6 h-8 text-center bg-gray-300 rounded-l-lg"
        >
          +
        </button>
        <h1 className="w-6 h-8 pt-1 text-center bg-gray-300 border">2</h1>
        <button
          type="button"
          className="w-6 h-8 text-center bg-gray-300 rounded-r-lg"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;
