import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "./AppLayout.css";

const AppLayout = () => {
  return (
    <div className="background">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
