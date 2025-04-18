import { Route, Routes } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import LoginPage from "./authPage/Login";
import RegisterPage from "./authPage/Register";
import Pricing from "./Pages/Pricing/Pricing";
import AboutUs from "./Pages/About us/AboutUs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
import ContactUs from "./Pages/Contact us/ContactUs";
import LessonPage from "./Pages/Lesson/LessonPage";
import QuizPage from "./Pages/Quiz/QuizPages/QuizPage";
import LessonDetails from "./Pages/LessonDetails/LessonDetails";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import GiveQuiz from "./Pages/Quiz/QuizPages/GiveQuiz";
import DashBoardLayout from "./Layout/DashBoardLayout";
import AdminDashboard from "./DashboardPages/AdminDashboard";

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
          <Route path="/give-quiz" element={<GiveQuiz />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Route>
        <Route path="/dashboard" element={<DashBoardLayout></DashBoardLayout>}>
          <Route path="/dashboard/user" element={<Dashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
