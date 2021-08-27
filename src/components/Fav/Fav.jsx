import { useContext, useEffect, useState } from "react";
import "./Fav.css";
import axios from 'axios';
import FavContext from "../context/cart/FavContext";
import FavPlaylist from "./FavPlaylist";

const Fav = () => {
  const { showCart, cartItems, showHideCart } = useContext(FavContext);

  const [genres, setGenres] = useState([]);
 
  useEffect(() => {
      axios
      .get("http://localhost:8000/musics/")
      .then((res) => res.data)
      .then((data) => setGenres(data))
  }, [])
 
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
              <div>
                {cartItems.map((item) => (
                  <FavPlaylist key={item.id} item={item} />
                ))}
                </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Fav;