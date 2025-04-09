import { Route, Routes } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import LoginPage from "./authPage/Login";
import RegisterPage from "./authPage/Register";
import Pricing from "./Pages/Pricing/Pricing";
import AboutUs from "./Pages/About us/AboutUs";
import ContactUs from "./Pages/Contact us/ContactUs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import LessonPage from "./Pages/Lesson/LessonPage";
import QuizPage from "./Pages/Quiz/QuizPage";

const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/lesson" element={<LessonPage />}>
        <Route path="/:id" element={}></Route>
        </Route>
        <Route path="/quiz-page" element={<QuizPage />} />
      </Route>
    </Routes>
    </QueryClientProvider>
  );
}

export default App;
