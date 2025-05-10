import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import LoginPage from "./authPage/Login";
import RegisterPage from "./authPage/Register";
import MainLayout from "./Layout/MainLayout";
import AboutUs from "./Pages/About us/AboutUs";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";

// Create a client
import ContactUs from "./Pages/Contact us/ContactUs";

import Dashboard from "./Pages/Dashboard/Dashboard";
import EditProfile from "./Pages/Edit Page/EditProfile";
import LessonPage from "./Pages/Lesson/LessonPage";
import LessonDetails from "./Pages/LessonDetails/LessonDetails";
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
          <Route path="/lesson" element={<LessonPage />} />
          <Route path="/lesson/:id" element={<LessonDetails />} />
          <Route path="/quiz-page" element={<QuizPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
