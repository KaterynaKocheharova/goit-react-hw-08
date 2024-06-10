import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <p>Welcome!</p>
      <button onClick={handleLogoutClick}>Logout</button>
    </>
  );
};

export default UserMenu;
