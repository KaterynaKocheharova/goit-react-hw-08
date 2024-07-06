import { NavLink } from "react-router-dom";
import { buildActiveClass } from "./NavLinkHelpers";


const CustomNavLink = ({ children, to }) => {

  return (
    <NavLink className={buildActiveClass} to={to}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
