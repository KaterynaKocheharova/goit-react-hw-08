import Text from "../Text/Text";
import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = ({ children }) => {
  return (
    <div className={css.backdrop}>
      <div className={css["loader-group"]}>
        <Text isLoaderText isCentered>{children}</Text>
        <Circles  color="rgb(140, 153, 221)" />
      </div>
    </div>
  );
};

export default Loader;
