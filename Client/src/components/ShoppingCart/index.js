import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import style from "./ShoppingCart.module.scss";

import Button from "components/Button";
import { useDispatch, useSelector } from "react-redux";
import { hideCart } from "features/ShoppingCart/shoppingcartSlice";

const cx = classNames.bind(style);

function ShoppingCart({ visiable, hidden }) {
  const isShowCart = useSelector((state) => state.shoppingcart.isShowCart);
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);

  const handleClickCloseCart = () => {
    dispatch(hideCart());
  };

  return (
    <div
      ref={wrapperRef}
      className={cx("wrapper", isShowCart ? "visible" : "hidden")}
    >
      <div className={cx("space")} onClick={handleClickCloseCart}></div>
      <div className={cx("content", isShowCart ? "showCart" : "hideCart")}>
        <FontAwesomeIcon
          className={cx("close-icon")}
          icon={faXmark}
          onClick={handleClickCloseCart}
        />
        <h2>Shopping Cart</h2>
        <div className={cx("product-list")}>
          {/* Add product item here */}
          <span>Your cart is empty !!!</span>
        </div>
        <p className={cx("total")}>
          Total: <span>1000</span>
        </p>
        <div className={cx("action")}>
          <Button primary>View Cart</Button>
          <span></span>
          <Button outline>
            <FontAwesomeIcon icon={faCreditCard} />
            &ensp;Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
