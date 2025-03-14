import { Route, Routes } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import Login from "./authPage/Login";
import Register from "./authPage/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
