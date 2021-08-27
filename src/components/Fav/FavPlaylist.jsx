import { useContext } from "react";
import { Link } from 'react-router-dom';
import "./FavPlaylist.css";
import FavContext from "../context/cart/FavContext";

const FavPlaylist = ({ item }) => {
  const { removeItem } = useContext(FavContext);
  return (
    <li className='CartItem__item'>
      <h4>{item.genre} :</h4>
      <Link to={{ pathname: `/musics/${item.genre}` }}>
        <img src={item.img_card} alt='genreImg' className="favImg"/>
      </Link>
      <button className='CartItem__button' onClick={() => removeItem(item.genre)}>
        Remove
      </button>
    </li>
  );
};

export default FavPlaylist;