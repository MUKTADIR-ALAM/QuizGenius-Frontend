import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";
import lessonsReducer from "./LessonSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    lessons: lessonsReducer,
    theme: themeReducer,
  },
});
