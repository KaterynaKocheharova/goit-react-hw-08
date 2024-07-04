import { buildTextClassName } from "./TextHelpers.js";

const Text = ({ children, isCentered, accented }) => {
  return <p className={buildTextClassName(isCentered, accented)}>{children}</p>;
};

export default Text;
