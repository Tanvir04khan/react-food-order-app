import React, { useState, useEffect } from "react";

import Header from "./Home Page/Header";
import FoodList from "./Home Page/FoodList";
import CartPage from "./Cart Page/CartPage";
import CartItem from "./Cart Page/CartItem";

const foodList = [
  {
    id: 1,
    name: "Veggie Paradise",
    imgUrl: "https://images.dominos.co.in/new_veggie_paradise.jpg",
    price: 400,
    description:
      "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
  },
  {
    id: 2,
    name: "Cheese n Corn",
    imgUrl: "https://images.dominos.co.in/new_cheese_n_corn.jpg",
    price: 300,
    description:
      "Sweet & Juicy Golden corn and 100% real mozzarella cheese in a delectable combination !",
  },
  {
    id: 3,
    name: "Pepper Barbecue Chicken",
    imgUrl: "https://images.dominos.co.in/new_pepper_barbeque_chicken.jpg",
    price: 499,
    description: "Pepper barbecue chicken for that extra zing",
  },
  {
    id: 4,
    name: "Paneer Tikka Stuffed Garlic Bread",
    imgUrl: "https://images.dominos.co.in/BRD0030.png",
    price: 199,
    description:
      "Freshly Baked Stuffed Garlic Bread with Cheese, Onion and Paneer Tikka fillings. Comes with a dash of Basil Parsley Sprinkle on top",
  },
  {
    id: 5,
    name: "Moroccan Spice Chicken Chunks",
    imgUrl: "https://images.dominos.co.in/MoroccanSpiceChickenChunks.jpg",
    price: 300,
    description:
      "Soft juicy chicken pieces coated with spicy harissa sauce and sprinkled with basil parsley",
  },
  {
    id: 6,
    name: "Crinkle Fries",
    imgUrl: "https://images.dominos.co.in/Crinkle_Fries.png",
    price: 99,
    description:
      "Crispy wavy masala coated fries served with a spicy tomato chilli sauce",
  },
  {
    id: 7,
    name: "Potato Cheese Shots",
    imgUrl: "https://images.dominos.co.in/potato_cheese_shots.png",
    price: 79,
    description:
      "Crisp and golden outside, flavorful burst of cheese, potato & spice inside",
  },
  {
    id: 8,
    name: "Taco Mexicana Veg",
    imgUrl: "https://images.dominos.co.in/Taco_Veg.png",
    price: 159,
    description:
      "Truly irresistible! Crispy taco with veg patty & creamy harissa sauce",
  },
];

const App = () => {
  const [cartFoodList, setCartFoodList] = useState([]);
  const [isCartClicked, setIsCartClicked] = useState(false);

  const getCartFoodList = (food) => {
    setCartFoodList((prevList) => [food, ...prevList]);
  };

  useEffect(() => {
    const cartFoods = JSON.parse(localStorage.getItem("cartFoodList"));
    if (cartFoods.length) {
      setCartFoodList(cartFoods);
    }
  }, []);

  const cartItemsQuantity = cartFoodList.reduce(
    (prevVal, currVal) => prevVal + currVal.quantity,
    0
  );

  const handleCartPageDisplay = (isUserClickedCart) => {
    setIsCartClicked(isUserClickedCart);
  };

  return (
    <>
      {!isCartClicked && (
        <div>
          <Header
            cartItems={cartItemsQuantity}
            onCartClick={handleCartPageDisplay}
          />
          <FoodList foodList={foodList} getCartFoodList={getCartFoodList} />
        </div>
      )}
      {isCartClicked && (
        <CartPage
          cartItems={cartFoodList}
          onHomePageClick={handleCartPageDisplay}
        />
      )}
      {/* <CartItem /> */}
    </>
  );
};

export default App;
