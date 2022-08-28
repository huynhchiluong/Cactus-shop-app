import classnames from "classnames/bind";
import style from "./Button.module.scss";

const cx = classnames.bind(style);

function Button({ children, primary, outline, onClick, type }) {
  const classes = cx("btn", { primary, outline });
  return (
    <button type={type} onClick={() => onClick()} className={classes}>
      {children}
    </button>
  );
}

export default Button;
