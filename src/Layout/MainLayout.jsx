import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EidQuizGame from "../components/EidQuizGame";
// import EidFireWorks from "../components/EidFireWorks";

const MainLayout = () => {
  const location = useLocation();

  const isQuizPage = location.pathname === "/give-quiz";

  if (isQuizPage) {
    return (
      <div className="font-inter relative">
        <Outlet></Outlet>
      </div>
    );
  }

  return (
    <div className="font-inter">
      <div className="font-inter relative">
        {/* <EidFireWorks /> */}
        <EidQuizGame />
      </div>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
