import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EidQuizGame from "../components/EidQuizGame";
import EidFireWorks from "../components/EidFireWorks";

const MainLayout = () => {
  return (
    <div>
      <div className="font-inter relative">
        <EidFireWorks></EidFireWorks>
        <div>
          <EidQuizGame></EidQuizGame>
        </div>
        <header className="sticky top-0 z-50">
          <Navbar></Navbar>
        </header>
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
