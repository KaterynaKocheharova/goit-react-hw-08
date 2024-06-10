import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./PrivateRoute";
import { refreshUser } from "./redux/auth/operations";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
// add not found page

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const refresh = async () => {
      await dispatch(refreshUser());
      if (isLoggedIn) {
        navigate("/contacts");
      }
    };
    refresh();
  }, [dispatch, isLoggedIn, navigate]);

  return (
    <Layout>
      {isRefreshing && <p>Refreshing your info. Please, wait</p>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirect="/login" />
          }
        />
      </Routes>
    </Layout>
  );
}
