import style from "./Footer.module.scss";
import classNames from "classnames/bind";
import logo from "assets/imgs/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Footer() {
  return (
    <>
      <div className={cx("wrapper" )}>
        <div className={cx("container")}>
          <div className={cx("space")}></div>
          <div className={cx("row")}>
            <div className={cx("col", "summary")}>
              <aside>
                <div className={cx("logo")}>
                  <img className={cx("logo-img")} src={logo} alt="logo" />
                  <span className={cx("logo-name")}>LuongHC</span>
                </div>
                <p className={cx("summary-text")}>
                  Empowering all people to be plant people — a collection of
                  articles from The Sill’s team of Plant Experts.
                </p>
                <p className={cx("hotline")}>
                  <span>hotline:</span>
                  <a href="tel:(+00) 987 877 821">(+84) 938 191 091</a>
                </p>
                <div className={cx("social-media")}>
                  <a href="/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </aside>
            </div>
            <div className={cx("col", "information")}>
              <h5>Information</h5>
              <ul>
                <li>
                  <Link to="/home">
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>Payments & Returns</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>Product Care</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contacts">
                    <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>FAQ</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={cx("col", "quick-links")}>
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <Link to="/">
                    <span>My orders</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>Terms & Conditions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>Returns & Exchanges</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contacts">
                    <span>Shipping & Delivery</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>Privacy Policy</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={cx("col", "shop-instagram")}>
              <h5>Shop Instagram</h5>
            </div>
          </div>
          <div className={cx("space")}></div>
        </div>
      </div>
      <div className={cx("copy-right")}>Copyright © 2022 by LuongHC</div>
    </>
  );
}
export default Footer;
