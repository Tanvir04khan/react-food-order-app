import { useState } from "react";

const Food = ({ food, getCartFoodList }) => {
  const [quantity, setQuantity] = useState(1);

  const quantityInputHandler = (event) => {
    setQuantity(event.target.value);
  };

  const addToCartBtnHandler = () => {
    const cartFood = {
      id: food.id,
      name: food.name,
      img: food.imgUrl,
      amount: food.price,
      quantity: +quantity,
    };

    getCartFoodList(cartFood);
    const cartFoodList = localStorage.getItem("cartFoodList");
    localStorage.removeItem("cartFoodList");
    if (cartFoodList) {
      localStorage.setItem(
        "cartFoodList",
        JSON.stringify([cartFood, ...JSON.parse(cartFoodList)])
      );
    } else {
      localStorage.setItem("cartFoodList", JSON.stringify([cartFood]));
    }
    console.log(JSON.parse(localStorage.getItem("cartFoodList")));
  };

  return (
    <div className="my-10 overflow-hidden rounded shadow-lg mx-1.5">
      <img className="w-full" src={food.imgUrl} alt="Fast food" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{food.name}</div>
        <p className="text-base text-gray-700">{food.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="p-3 m-3 text-3xl">${food.price}</div>
        <div className="flex items-center justify-center px-6 pt-4 pb-2">
          <div className="flex flex-col items-center justify-center mx-2.5">
            <p className="">Quantity</p>
            <input
              type="number"
              max="4"
              min="1"
              value={quantity}
              onChange={quantityInputHandler}
              className="m-3 text-center border border-black border-solid"
            />
          </div>
          <button
            type="button"
            onClick={addToCartBtnHandler}
            className="p-1 text-white bg-green-400 border border-green-500 border-solid rounded-lg"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
