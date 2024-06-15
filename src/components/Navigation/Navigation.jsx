import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import CustomNavLink from "../NavLink/NavLink";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      {isLoggedIn ? (
        <CustomNavLink to="/contacts">Contacts</CustomNavLink>
      ) : (
        <CustomNavLink to="/">Home</CustomNavLink>
      )}
    </nav>
  );
};

export default Navigation;
