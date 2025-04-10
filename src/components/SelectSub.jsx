import { useEffect, useRef, useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
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
import useAllLessons from "../CustomHook/useAllLessons";

const SelectSub = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const subjectsContainerRef = useRef(null);
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

  const scrollSubjects = (direction) => {
    if (subjectsContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      const start = subjectsContainerRef.current.scrollLeft;
      const end = start + scrollAmount;
      const duration = 500;
      let startTime = null;

      const easeInOut = (t) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      const animateScroll = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;
        const easeProgress = easeInOut(progress);

        subjectsContainerRef.current.scrollLeft =
          start + (end - start) * easeProgress;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          subjectsContainerRef.current.scrollLeft = end;
        }
      };
      requestAnimationFrame(animateScroll);
    }
  };

  useEffect(() => {
    setSelectedTopic("");
  }, [selectedSubject]);

  const { data, isLoading } = useAllLessons(selectedSubject, selectedTopic); 

  console.log("Selected data", data);




  return (
    <div>
      <div className="my-12">
        <h3 className="heading text-center my-16">Lessons</h3>
        <div className="flex justify-between items-center my-6">
          <button
            onClick={() => scrollSubjects("left")}
            className="px-3 py-3 shadow-lg bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            <FaAngleLeft size={24} />
          </button>

          <div
            className="flex overflow-x-auto gap-3 items-center justify-start scrollbar-none select-sub mx-12"
            ref={subjectsContainerRef}
          >
            {Object.keys(subjects).map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 shadow-2xl text-lg border-r-3 border-b-3 border-gray-300  ${
                  selectedSubject === sub ? "bg-gray-300 " : ""
                }`}
              >
                <span>{subjects[sub].icon}</span>
                <span>{sub}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollSubjects("right")}
            className="px-3 py-3 shadow-lg bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            <FaAngleRight size={24} />
          </button>
        </div>
        <div>
          {selectedSubject ? (
            <div className="">
              {subjects[selectedSubject].topics.length > 0 ? (
                <div className="flex gap-3 text-lg justify-center flex-wrap ">
                  {subjects[selectedSubject].topics.map((topic, index) => (
                    <p key={index}>
                      <button
                        key={index}
                        onClick={() => setSelectedTopic(topic)}
                        className={`bg-gray-200 px-7 text-center py-2 font-[500] rounded-3xl hover:bg-gray-300 ${
                          selectedTopic === topic
                            ? "bg-gray-400 text-white"
                            : ""
                        }`}
                      >
                        {topic}
                      </button>
                    </p>
                  ))}
                </div>
              ) : (
                <p>No topics available</p>
              )}
            </div>
          ) : (
            <div className="flex gap-3 text-lg justify-center flex-wrap">
              {subjects[Object.keys(subjects)[0]].topics.map((topic, index) => (
                <p key={index}>
                  <button
                    key={index}
                    onClick={() => setSelectedTopic(topic)}
                    className={`bg-gray-200 px-7 text-center py-2 font-[500] rounded-3xl hover:bg-gray-300 ${
                      selectedTopic === topic ? "bg-gray-400 text-white" : ""
                    }`}
                  >
                    {topic}
                  </button>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectSub;
