import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart, removeFromCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPayment = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <h1>🛒</h1>
      <button
        style={{
          border: "1px solid #ccc",
          borderRadius: "25px",
          padding: "10px",
          background: "white",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "flex-start",
        }}
      >
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} onRemove={handleRemoveItem} />
        ))}
      </div>

      <div>
        <h1>Total Amount: ₹{totalPayment / 100}</h1>
      </div>
    </>
  );
};

export default Cart;
