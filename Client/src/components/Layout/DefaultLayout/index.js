import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import classNames from "classnames/bind";
import style from "./DefaultLayout.module.scss";
import ShoppingCart from "components/ShoppingCart";

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("space")}></div>
      <div className={cx("body")}>
        <div className={cx("content")}>{children}</div>
        <div className={cx("shopping-cart")}>
          <ShoppingCart />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
