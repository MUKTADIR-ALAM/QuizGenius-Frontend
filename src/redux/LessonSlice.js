import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topicsR: [],
  selectedSubject: "",
  selectedTopic: "",
};

const lessonSlice = createSlice({
  name: "lessonSlice",
  initialState,
  reducers: {
    setLessons: (state, action) => {
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
    setSelectedSubject: (state, action) => {
      state.selectedSubject = action.payload;
    },
    setSelectedTopic: (state, action) => {
      state.selectedTopic = action.payload;
    },
  },
});

export const { setLessons, addLesson, removeLesson, updateLesson } = lessonSlice.actions;

export default lessonSlice.reducer;
