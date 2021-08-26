import { useContext } from "react";
import "./Fav.css";
import FavContext from "../context/cart/FavContext";
import FavPlaylist from "./FavPlaylist";

const Fav = () => {
  const { showCart, cartItems, showHideCart } = useContext(FavContext);
 
  return (
    <>
      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Your favorite list is empty</h4>
            ) : (
              <ul>
                  <FavPlaylist />
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Fav;