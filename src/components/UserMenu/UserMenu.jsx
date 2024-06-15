import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const username = useSelector(selectUser).name;
  const dispatch = useDispatch();
  const handlelogOutClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <p>Hello! Welcome, {username}!</p>
      <button onClick={handlelogOutClick}>logOut</button>
    </>
  );
};

export default UserMenu;
