import Food from "./Food";

const FoodList = ({ foodList, getCartFoodList }) => {
  return (
    <div className="grid grid-cols-1 gap-5 mx-auto max-w-7xl md:grid-cols-3 sm:grid-cols-2">
      {foodList.map((food) => (
        <Food food={food} key={food.id} getCartFoodList={getCartFoodList} />
      ))}
    </div>
  );
};

export default FoodList;
