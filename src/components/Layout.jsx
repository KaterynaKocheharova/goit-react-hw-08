import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={<div>Loading</div>}>{children}</Suspense>
    </div>
  );
};

export default Layout;
