import "./Vertical-Card.css";

import { useNavigate } from "react-router";

import { IoRemoveCircle, IoAddCircle } from "react-icons/io5";

import { useCart } from "../../../contexts/CartContext";

const Vertical_Card = ({ round }) => {
  const navigate = useNavigate();
  const { addToCart, decreaseQuantity, getProductQuantity } = useCart();
  return (
    <>
      <div className="vertical-card" key={round.id}>
        <img
          className="vl-c-image"
          src={`/images/${round.image}`}
          onClick={() => navigate(round.id)}
          alt=""
        />
        <div className="vl-c-data">
          <div className="vl-c-named">{round.name}</div>
          <div className="vl-c-details">{round.details}</div>
          <div className="vl-c-expenses">
            <div className="vl-c-price">
              {`${Intl.NumberFormat("ru-Ru").format(round.price)} ₸`}
            </div>
            <div className="vl-c-counter">
              {getProductQuantity(round.id) > 0 && (
                <>
                  <IoRemoveCircle
                    className="vl-c-counter-button"
                    onClick={() => decreaseQuantity(round.id)}
                  />
                  {getProductQuantity(round.id)}
                </>
              )}
              <IoAddCircle
                className="vl-c-counter-button"
                onClick={() => addToCart(round)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vertical_Card;