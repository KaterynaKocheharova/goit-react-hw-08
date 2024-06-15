import { NavLink } from "react-router-dom";
import css from "./NavLink.module.css";
import clsx from "clsx";

const CustomNavLink = ({ children, to }) => {
  const buildActiveClass = ({ isActive }) => {
    return clsx(css.link, isActive && css["active-link"]);
  };

  return (
    <NavLink className={buildActiveClass} to={to}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
