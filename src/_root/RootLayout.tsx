import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Context, { ContextProps } from "../context/GlobalContext";

const RootLayout = () => {
  const { isAuthenticated } = useContext(Context) as ContextProps;

  if (!isAuthenticated) {
    return <Navigate to="/sign-up" />;
  }

  return (
    <main>
      <Navbar />

      <section className="">
        <Outlet />
      </section>
    </main>
  );
};

export default RootLayout;
