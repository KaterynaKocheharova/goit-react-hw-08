import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { IoIosLogOut } from "react-icons/io";
import { Wave } from "react-animated-text";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const username = useSelector(selectUser).name;
  const dispatch = useDispatch();
  const handlelogOutClick = () => {
    dispatch(logOut());
  };

  const text = `Hello! Welcome, ${username}!`;

  return (
    <div className={css["user-menu-container"]}>
      <Wave text={text} className={css["user-menu-text"]} />
      <a className={css["logout-link"]} onClick={handlelogOutClick}>
        <IoIosLogOut className={css["logout-icon"]} />
      </a>
    </div>
  );
};

export default UserMenu;
