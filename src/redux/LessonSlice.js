import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topicsR: [],
};

const lessonSlice = createSlice({
  name: "lessonSlice",
  initialState,
  reducers: {
    setLessons: (state, action) => {
      // Corrected the assignment
      state.topicsR = action.payload;
    },
    addLesson(state, action) {
      const { topicName, newLesson } = action.payload;
      const topic = state.topicsR.find((topic) => topic.name === topicName);
      if (topic) {
        topic.lessons.push(newLesson);
      }
    },
    removeLesson(state, action) {
      const { topicName, lessonTitle } = action.payload;
      const topic = state.topicsR.find((topic) => topic.name === topicName);
      if (topic) {
        topic.lessons = topic.lessons.filter(
          (lesson) => lesson.title !== lessonTitle
        );
      }
    },
    updateLesson(state, action) {
      const { topicName, lessonTitle, updatedLesson } = action.payload;
      const topic = state.topicsR.find((topic) => topic.name === topicName);
      if (topic) {
        const lessonIndex = topic.lessons.findIndex(
          (lesson) => lesson.title === lessonTitle
        );
        if (lessonIndex !== -1) {
          topic.lessons[lessonIndex] = updatedLesson;
        }
      }
    },
  },
});

export const { setLessons, addLesson, removeLesson, updateLesson } = lessonSlice.actions;

export default lessonSlice.reducer;
