import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  selectedAnswers: {},
  score: 0,
  quizCompleted: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    selectAnswer: (state, action) => {
      const { questionId, selectedOption, isCorrect } = action.payload;
      state.selectedAnswers[questionId] = selectedOption;
      if (isCorrect) {
        state.score += 1;
      }
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.quizCompleted = true;
      }
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.selectedAnswers = {};
      state.score = 0;
      state.quizCompleted = false;
    },
  },
});

export const { setQuestions, selectAnswer, nextQuestion, resetQuiz } =
  quizSlice.actions;

export default quizSlice.reducer;
