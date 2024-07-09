import { buildTextClassName } from "./TextHelpers.js";

const Text = ({ children, isCentered, accented, isLoaderText }) => {
  return <div className={buildTextClassName(isCentered, accented, isLoaderText)}>{children}</div>;
};

export default Text;
