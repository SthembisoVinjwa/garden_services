import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "./AppLayout.css";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div className="background">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
