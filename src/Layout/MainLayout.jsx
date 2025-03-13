import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="font-inter">
      <header>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
