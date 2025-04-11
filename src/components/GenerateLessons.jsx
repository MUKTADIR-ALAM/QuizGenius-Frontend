import React, { useEffect, useState } from "react";
import {
  FaBalanceScale,
  FaBook,
  FaBrain,
  FaBusinessTime,
  FaCode,
  FaFlask,
  FaGavel,
  FaGlobe,
  FaHeartbeat,
  FaLandmark,
  FaPalette,
  FaWrench,
} from "react-icons/fa";
import { PiMathOperationsBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setLessons } from "../redux/LessonSlice";
import axios from "axios";
import useAllLessons from "../CustomHook/useAllLessons";


const GenerateLessons = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [topics, setTopics] = useState("");
  const [subTopics, setSubTopics] = useState("");
  const [levelOfQuestions, setLevelOfQuestions] = useState("beginner");
  const levels = ["beginner", "intermediate", "hard"];
  const dispatch = useDispatch();
  const subjects = {
    Mathematics: {
      topics: [
        "Algebra",
        "Geometry",
        "Calculus",
        "Probability",
        "Statistics",
        "Trigonometry",
      ],
      icon: <PiMathOperationsBold />,
    },
    Science: {
      topics: ["Physics", "Chemistry", "Biology", "Astronomy", "Earth Science"],
      icon: <FaFlask />,
    },
    History: {
      topics: [
        "World War I",
        "World War II",
        "Ancient Civilizations",
        "Modern History",
        "Renaissance",
      ],
      icon: <FaLandmark />,
    },
    Geography: {
      topics: [
        "Physical Geography",
        "Human Geography",
        "Climate Change",
        "Cartography",
      ],
      icon: <FaGlobe />,
    },
    ComputerScience: {
      topics: [
        "Programming",
        "Data Structures",
        "Algorithms",
        "Artificial Intelligence",
        "Cybersecurity",
      ],
      icon: <FaCode />,
    },
    English: {
      topics: [
        "Grammar",
        "Literature",
        "Poetry",
        "Creative Writing",
        "Linguistics",
      ],
      icon: <FaBook />,
    },
    Business: {
      topics: [
        "Economics",
        "Marketing",
        "Finance",
        "Entrepreneurship",
        "Management",
      ],
      icon: <FaBusinessTime />,
    },
    Psychology: {
      topics: [
        "Cognitive Psychology",
        "Behavioral Psychology",
        "Developmental Psychology",
        "Social Psychology",
      ],
      icon: <FaBrain />,
    },
    Philosophy: {
      topics: ["Ethics", "Metaphysics", "Epistemology", "Political Philosophy"],
      icon: <FaBalanceScale />,
    },
    Health: {
      topics: ["Nutrition", "Mental Health", "Human Anatomy", "Public Health"],
      icon: <FaHeartbeat />,
    },
    Art: {
      topics: [
        "Painting",
        "Sculpture",
        "Photography",
        "Music Theory",
        "Film Studies",
      ],
      icon: <FaPalette />,
    },
    Engineering: {
      topics: [
        "Mechanical Engineering",
        "Electrical Engineering",
        "Civil Engineering",
        "Software Engineering",
        "Biomedical Engineering",
      ],
      icon: <FaWrench />,
    },
    Law: {
      topics: [
        "Criminal Law",
        "Civil Law",
        "Constitutional Law",
        "International Law",
        "Corporate Law",
      ],
      icon: <FaGavel />,
    },
  };

const { Lessons } = useAllLessons();

useEffect(() => {
  if (Lessons) {
    dispatch(setLessons(Lessons.result)); 
  }
}, [Lessons, dispatch]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFormData = {
      selectedSubject,
      topics,
      subTopics,
      levelOfQuestions,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/lessons",
        newFormData
      );
      if(response){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        return
      }
     
    } catch (error) {
      console.error("Error fetching lessons:", error);
    }
  };

  return (
    <div className="p-6 my-12 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-center">
          Generate Your AI-Powered Lessons
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Subject selection */}
          <label className="block mb-2">Select Subject:</label>
          <select
            className="w-full p-2 input rounded mb-4"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">-- Choose Subject --</option>
            {Object.keys(subjects).map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>

          {/* Topic and Sub-topic inputs */}
          <label className="block mb-2">Write Topic: </label>
          <input
            type="text"
            className="input mb-4 w-full capitalize"
            placeholder="Algebra"
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
          />
          <label className="block mb-2">Write Subtopics (optional):</label>
          <input
            type="text"
            className="input mb-4 w-full capitalize"
            placeholder="Limits, L’Hôpital’s Rule"
            value={subTopics}
            onChange={(e) => setSubTopics(e.target.value)}
          />

          {/* Difficulty level */}
          <label className="block mb-2">Select Difficulty Level:</label>
          <select
            className="w-full p-2 input rounded mb-4"
            value={levelOfQuestions}
            onChange={(e) => setLevelOfQuestions(e.target.value)}
          >
            <option value="">-- Difficulty Level --</option>
            {levels.map((level, idx) => (
              <option key={idx} value={level}>
                {level}
              </option>
            ))}
          </select>

          <button className="buttons w-full">Generate Quiz</button>
        </form>
      </div>
    </div>
  );
};

export default GenerateLessons;
