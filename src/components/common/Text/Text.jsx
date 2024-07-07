import { buildTextClassName } from "./TextHelpers.js";

const Text = ({ children, isCentered, accented }) => {
  return <div className={buildTextClassName(isCentered, accented)}>{children}</div>;
};

export default Text;
