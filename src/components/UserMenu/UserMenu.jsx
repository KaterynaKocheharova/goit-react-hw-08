import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const handlelogOutClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <p>Welcome!</p>
      <button onClick={handlelogOutClick}>logOut</button>
    </>
  );
};

export default UserMenu;
