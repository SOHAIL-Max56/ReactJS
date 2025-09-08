import IteamList from "./IteamList";
import { clearcart } from "../utlis/CartSlice";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
    const handleClearCart = () => {
        // Dispatch the action
        dispatch(clearcart());
    }
  return (
    <div className="bg-gray-200">
      <h1 className="p-2 m-2 text-center font-bold">CART</h1>
      <div className="w-6/12 m-auto ">
        <div className="Clear-cart">
          <button
            className="bg-black text-white p-1 rounded-lg cursor-pointer"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && <h1>Your cart is empty !</h1>}
        </div>
        <IteamList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
