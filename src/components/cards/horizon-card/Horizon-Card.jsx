import "./Horizon-Card.css";

import React from "react";

import { useNavigate } from "react-router";

import { IoRemoveCircle, IoAddCircle } from "react-icons/io5";

import { useCart } from "../../../contexts/CartContext";

const Horizon_Card = ({ round }) => {
  const navigate = useNavigate();
  const { addToCart, decreaseQuantity, getProductQuantity } = useCart();
  return (
    <>
      <div className="horizon-card">
        <div className="hn-c-image"></div>
        <div className="hn-c-data">
          <div className="hn-c-named">{round.name}</div>
          <div className="hn-c-details">{round.details}</div>
          <div className="hn-c-expenses">
            <div className="hn-c-price" onClick={() => addToCart(round)}>
              {Intl.NumberFormat("ru-RU").format(round.price)} ₸
            </div>
            <div className="hn-c-counter">
              {getProductQuantity(round.id) > 0 && (
                <>
                  <IoRemoveCircle
                    className="hn-c-counter-icon"
                    onClick={() => decreaseQuantity(round.id)}
                  />
                  <div className="hn-c-quantity">
                    {getProductQuantity(round.id)}
                  </div>
                </>
              )}
              <IoAddCircle
                className="hn-c-counter-icon"
                onClick={() => addToCart(round)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Horizon_Card;