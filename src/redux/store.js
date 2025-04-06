import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";
import lessonsReducer from "./LessonSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    lessons: lessonsReducer,
  },
});
