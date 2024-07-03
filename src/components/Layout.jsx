import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import Loader from "../components/common/Loader/Loader";



const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader>Loading page. Please, wait.</Loader>}>{children}</Suspense>
    </div>
  );
};

export default Layout;
