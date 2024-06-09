import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      Register, Login
      <NavLink to="/register" />
      <NavLink to="/login" />
    </div>
  );
};

export default AuthNav;
