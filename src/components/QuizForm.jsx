import React, { useState } from "react";
import { PiMathOperationsBold } from "react-icons/pi";
import {
  FaFlask,
  FaLandmark,
  FaGlobe,
  FaCode,
  FaBook,
  FaBusinessTime,
  FaBrain,
  FaBalanceScale,
  FaHeartbeat,
  FaPalette,
  FaWrench,
  FaGavel,
} from "react-icons/fa";
import { setQuestions } from "../redux/quizSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const subjects = {
  Math: {
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

const QuizForm = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [subTopics, setSubTopics] = useState("");
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const [levelOfQuestions, setLevelOfQuestions] = useState("beginner");
  const [isCustomSubject, setIsCustomSubject] = useState(false);
  const [isCustomTopic, setIsCustomTopic] = useState(false);
  const [customSubject, setCustomSubject] = useState("");
  const [customTopic, setCustomTopic] = useState("");

  const [formData, setFormData] = useState(null);

  const levels = ["beginner", "intermediate", "hard"];

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFormData = {
      selectedSubject: isCustomSubject ? customSubject : selectedSubject,
      selectedTopic: isCustomTopic ? customTopic : selectedTopic,
      subTopics,
      numOfQuestions,
      levelOfQuestions,
    };
    setFormData(newFormData);

    try {
      const res = await axios.get("http://localhost:5000/quizzes", {
        params: newFormData,
      });
      dispatch(setQuestions(res.data));
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
    }
    console.log(formData);
  };

  return (
    <div
      className={`p-6 my-12 bg-white shadow-lg rounded-lg max-w-md mx-auto `}
    >
      <div>
        <h2 className="text-xl font-semibold mb-4 text-center">
          Generate Your AI-Powered Quiz
        </h2>
        <form onSubmit={handleSubmit} className="">
          <select
            className="w-full p-2 input rounded mb-4"
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setIsCustomSubject(false); // Reset custom subject flag when selecting predefined subject
            }}
          >
            <option value="">-- Choose Subject --</option>
            {Object.keys(subjects).map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
            <option value="custom">-- Add Custom Subject --</option>
          </select>
          {selectedSubject === "custom" && (
            <input
              type="text"
              placeholder="Enter your custom subject"
              className="input mb-4 w-full"
              value={customSubject}
              onChange={(e) => setCustomSubject(e.target.value)}
            />
          )}

          {selectedSubject && selectedSubject !== "custom" && (
            <>
              <label className="block mb-2">Select Topic:</label>
              <select
                className="w-full p-2 input rounded mb-4"
                value={selectedTopic}
                onChange={(e) => {
                  setSelectedTopic(e.target.value);
                  setIsCustomTopic(false); 
                }}
              >
                <option value="">-- Choose Topic --</option>
                {subjects[selectedSubject].topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
                <option disabled={!setCustomTopic} value="custom">-- Add Custom Topic --</option>
              </select>
            </>
          )}

          {selectedTopic === "custom" && (
            <input
              type="text"
              placeholder="Enter your custom topic"
             
              className="input mb-4 w-full"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
            />
          )}

          <label className="block mb-2">Write Subtopics:(optional)</label>
          <input
            type="text"
            className="input mb-4 w-full"
            placeholder="Limits,L’Hôpital’s Rule"
            value={subTopics}
            onChange={(e) => setSubTopics(e.target.value)}
          />
          <label className="block mb-2">Select Difficulty Level:</label>
          <select
            className="w-full p-2 input rounded mb-4"
            value={levelOfQuestions}
            onChange={(e) => setLevelOfQuestions(e.target.value)}
          >
            <option value="">-- Difficulty Level --</option>
            {levels.map((level, idx) => (
              <option key={idx}>{level}</option>
            ))}
          </select>
          <label className="block mb-2">Number Of questions:</label>
          <input
            className="w-full p-2 input rounded mb-4"
            type="number"
            value={numOfQuestions}
            onChange={(e) => setNumOfQuestions(e.target.value)}
          />

          <button className="buttons w-full">Generate Quiz</button>
        </form>
      </div>
    </div>
  );
};

export default QuizForm;
