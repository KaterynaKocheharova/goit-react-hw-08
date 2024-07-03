import css from "./NavLink.module.css";
import clsx from "clsx";

export const buildActiveClass = ({ isActive }) => {
    return clsx(css.link, isActive && css["active-link"]);
  };