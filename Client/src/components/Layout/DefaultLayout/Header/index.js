import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./Header.module.scss";
import logo from "assets/imgs/logo.svg";
import avt from "assets/imgs/avt.jpg";
import userIcon from "assets/imgs/user-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faShoppingCart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { showCart } from "features/ShoppingCart/shoppingcartSlice";
import useScrollDirection from "components/hooks/useScrollDirection";
import Register from "components/Register";
import Login from "Login";

const cx = classNames.bind(style);

const menuList = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/products" },
  { title: "Contact", path: "/contact" },
];

function Header() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const isLogin = useSelector((state) => state.login.isLogin);
  const [toggleAction, setToggleAction] = useState(false);
  const [isShowRegister, setIsShowRegister] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);
  const getSrollDirection = useScrollDirection();
  const navigate = useNavigate();

  //Scroll to show/hide header
  useEffect(() => {
    if (getSrollDirection === "up" || Math.round(window.pageYOffset) === 0) {
      setVisible(true);
    } else setVisible(false);
  }, [getSrollDirection]);

  const cls = visible ? "header_visible" : "header_hidden";

  //Handle toggle show/hide menu in tablet, mobile
  const handleToggle = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const handleClickCart = () => {
    dispatch(showCart());
  };

  //handle menu click
  const handleMenuClick = (page) => {
    if (isMenuOpen) {
      setisMenuOpen(false);
    }
    setActivePage(page);
  };

  //haddle set toggle avatar action
  const haddleToggleAction = () => {
    setToggleAction(!toggleAction);
  };

  const handleCloseRegister = (isShow) => {
    setIsShowRegister(!isShow);
    setToggleAction(false);
  };
  const handleCloseLogin = (isShow) => {
    setIsShowLogin(!isShow);
    setToggleAction(false);
  };

  return (
    <div className={cx("wrapper", cls)}>
      <div className={cx("container")}>
        <div className={cx("header_left")}>
          <div className={cx("logo")} onClick={() => navigate("/")}>
            <img className={cx("logo-img")} src={logo} alt="logo" />
            <span className={cx("logo-name")}>LuongHC</span>
          </div>
        </div>
        {/* Navigation */}
        <div className={cx("header_right")}>
          <ul className={cx("menu", isMenuOpen ? "showMenu-mobile" : "")}>
            {menuList.map((item, index) => (
              <li
                key={index}
                className={cx("menu_item")}
                onClick={() => handleMenuClick(item.title)}
              >
                <Link
                  className={cx(
                    "menu_link",
                    item.title === activePage ? "menu_link-active" : ""
                  )}
                  to={item.path}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          {/* Customize */}
          <ul className={cx("customize")}>
            <li className={cx("customize_item")}>
              <Link
                className={cx("customize_Link", "customize_search", "active")}
                to="/"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
              <div className="search-container"></div>
            </li>
            {/* Shopping cart */}

            <li className={cx("customize_item")} onClick={handleClickCart}>
              <span className={cx("customize_Link", "shoppingcart-icon")}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className={cx("counter")}>4</span>
              </span>
            </li>
            {isLogin && (
              <li className={cx("customize_item")}>
                <Link className={cx("customize_Link")} to="/">
                  <img className={cx("avt-img")} src={avt} alt="avatar" />
                  <span className={cx("dot-notification")}></span>
                </Link>
              </li>
            )}
            {!isLogin && (
              <li className={cx("customize_item")}>
                <span
                  className={cx("customize_Link")}
                  onClick={haddleToggleAction}
                >
                  <img
                    className={cx(
                      "avt-img",
                      toggleAction ? "avt-img_active" : ""
                    )}
                    src={userIcon}
                    alt="avatar"
                  />
                </span>
                {toggleAction && (
                  <ul className={cx("user-dropdown")}>
                    <li
                      className={cx("user-dropdown-item")}
                      onClick={() => setIsShowLogin(!isShowLogin)}
                    >
                      Login
                    </li>
                    <Login
                      isShow={isShowLogin}
                      handleClose={handleCloseLogin}
                    />
                    <li
                      className={cx("user-dropdown-item")}
                      onClick={() => setIsShowRegister(!isShowRegister)}
                    >
                      Register
                    </li>
                    <Register
                      isShow={isShowRegister}
                      handleClose={handleCloseRegister}
                    />
                  </ul>
                )}
              </li>
            )}
          </ul>
          <div className={cx("toggle")} onClick={handleToggle}>
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
