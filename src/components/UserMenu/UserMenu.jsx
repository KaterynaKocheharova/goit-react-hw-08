import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { IoIosLogOut } from "react-icons/io";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const username = useSelector(selectUser).name;
  const dispatch = useDispatch();
  const handlelogOutClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={css["user-menu-container"]}>
      <p className={css["user-menu-text"]}>Welcome, {username}!</p>
      <a className={css["logout-link"]} onClick={handlelogOutClick}>
        <IoIosLogOut className={css["logout-icon"]} />
      </a>
    </div>
  );
};

export default UserMenu;
