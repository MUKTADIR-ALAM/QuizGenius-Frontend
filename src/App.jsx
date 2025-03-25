import { Route, Routes } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import LoginPage from './authPage/Login';
import RegisterPage from './authPage/Register';
import Pricing from "./Pages/Pricing/Pricing";
import MainDashboard from "./Pages/Dashboard/MainDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<MainDashboard></MainDashboard>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
