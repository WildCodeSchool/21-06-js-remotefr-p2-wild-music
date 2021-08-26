import { useContext } from "react";
import "./FavPlaylist.css";
import FavContext from "../context/cart/FavContext";

const FavPlaylist = ({ genre }) => {
  const { removeItem } = useContext(FavContext);
  return (
    <li className='CartItem__item'>
      <img src={genre.img_card} alt='genreImg' />
      <button className='CartItem__button' onClick={() => removeItem(genre.genre)}>
        Remove
      </button>
    </li>
  );
};

export default FavPlaylist;