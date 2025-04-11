import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

// Full question bank
const allQuestions = [
  {
    question:
      "What is the Arabic name for the festival celebrated at the end of Ramadan?",
    options: ["Eid al-Adha", "Eid al-Fitr", "Mawlid", "Laylat al-Qadr"],
    answer: "Eid al-Fitr",
  },
  {
    question: "What special prayer is performed on the morning of Eid?",
    options: ["Taraweeh", "Jumu'ah", "Eid Salah", "Tahajjud"],
    answer: "Eid Salah",
  },
  {
    question: "What is traditionally given to children as a gift on Eid?",
    options: ["Books", "Toys", "Eidi (money)", "Clothes"],
    answer: "Eidi (money)",
  },
  {
    question:
      "Which sweet dish is commonly prepared in South Asian households for Eid?",
    options: ["Baklava", "Sheer Khurma", "Kunafa", "Tiramisu"],
    answer: "Sheer Khurma",
  },
  {
    question: "Which country hosts the largest Eid prayer gathering?",
    options: ["Saudi Arabia", "Pakistan", "India", "Bangladesh"],
    answer: "Bangladesh",
  },
  {
    question: "What is the significance of Eid al-Fitr?",
    options: [
      "Commemorating Prophet Muhammad’s birth",
      "Celebrating the end of Ramadan",
      "Remembering the sacrifice of Ibrahim",
      "Honoring the first revelation of the Quran",
    ],
    answer: "Celebrating the end of Ramadan",
  },
  {
    question: "What is the traditional greeting exchanged on Eid?",
    options: ["Ramadan Mubarak", "Happy Holidays", "Eid Mubarak", "JazakAllah"],
    answer: "Eid Mubarak",
  },
  {
    question: "Which act of charity is obligatory before Eid prayer?",
    options: ["Sadaqah", "Zakat", "Fidyah", "Zakat al-Fitr"],
    answer: "Zakat al-Fitr",
  },
  {
    question: "Eid al-Fitr falls on which Islamic month?",
    options: ["Ramadan", "Dhul-Hijjah", "Shawwal", "Rabi' al-Awwal"],
    answer: "Shawwal",
  },
  {
    question: "What is encouraged before performing the Eid prayer?",
    options: [
      "Fasting",
      "Eating something sweet",
      "Giving Zakat",
      "Staying awake all night",
    ],
    answer: "Eating something sweet",
  },
  {
    question: "What is the night before Eid called?",
    options: ["Laylat al-Qadr", "Shab-e-Barat", "Chand Raat", "Lailatul Eid"],
    answer: "Chand Raat",
  },
  {
    question: "What should Muslims say when they see the Eid moon?",
    options: [
      "Alhamdulillah",
      "Eid Mubarak",
      "Allahu Akbar",
      "Dua for new moon",
    ],
    answer: "Dua for new moon",
  },
  {
    question: "Which Prophet is associated with the sacrifice in Eid al-Adha?",
    options: ["Prophet Musa", "Prophet Ibrahim", "Prophet Isa", "Prophet Nuh"],
    answer: "Prophet Ibrahim",
  },
  {
    question: "How many Rak'ahs are there in the Eid prayer?",
    options: ["2", "4", "6", "8"],
    answer: "2",
  },
  {
    question: "What should be done after the Eid prayer?",
    options: [
      "Stay at the mosque",
      "Listen to the Eid khutbah",
      "Immediately eat",
      "Perform another prayer",
    ],
    answer: "Listen to the Eid khutbah",
  },
  {
    question: "Which Sunnah act is recommended before going for Eid Salah?",
    options: ["Taking a bath", "Fasting", "Wearing perfume", "Sleeping early"],
    answer: "Taking a bath",
  },
  {
    question: "Which Islamic pillar is related to Eid al-Fitr?",
    options: ["Salah", "Zakat", "Hajj", "Fasting"],
    answer: "Fasting",
  },
  {
    question: "What should be done when greeting someone on Eid?",
    options: [
      "Give a handshake",
      "Give a hug",
      "Say 'Eid Mubarak'",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "How do Muslims typically start their day on Eid?",
    options: [
      "By fasting",
      "By eating dates",
      "By going to work",
      "By visiting graves",
    ],
    answer: "By eating dates",
  },
  {
    question: "What is a common Eid tradition in Turkey?",
    options: [
      "Exchanging gifts",
      "Visiting cemeteries",
      "Eating baklava",
      "All of the above",
    ],
    answer: "All of the above",
  },
];

// Function to shuffle the questions and get 5 random ones
const getRandomQuestions = () => {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5);
};

const EidQuizGame = () => {
  const [quizQuestions, setQuizQuestions] = useState(getRandomQuestions());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const stopTimer = setTimeout(() => {
      setShowFireworks(false);
    }, 10000);

    return () => {
      clearTimeout(stopTimer);
    };
  }, []);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
      if(score>2){
        setShowFireworks(true);
      }
      setTimeout(() => setShowFireworks(false), 5000);
    }
  };
  console.log(score)

  return (
    <div className="text-center flex z-[10000] flex-col justify-center items-center pt-4">
      {showFireworks &&  (
        <div className="transition-opacity duration-2000 opacity-100">
          <Confetti width={width} height={height} />
        </div>
      )}

      <h2 className="text-xl font-semibold mb-3">
        <span className="animate-pulse duration-200">🎉</span> Eid Quiz Game{" "}
        <span className="animate-pulse duration-200">🎉</span>
      </h2>
      {!showQuestions ? (
        <button
          className="buttons animate-bounce"
          onClick={() => {
            setQuizQuestions(getRandomQuestions()); 
            setShowQuestions(true);
          }}
        >
          Start Quiz
        </button>
      ) : showResult ? (
        <div className="py-4">
          <h3 className="text-lg font-bold">Quiz Completed!</h3>
          <p className="text-black">
            Your Score: {score} / {quizQuestions.length}
          </p>
          <button
            className="buttons"
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowResult(false);
              setShowFireworks(false);
              setShowQuestions(false);
              setQuizQuestions(getRandomQuestions()); 
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <dialog open={showQuestions} className="modal fixed bg-gra p-4 pt-6">
          <div className="modal-box">
            <h3 className="text-lg font-bold">
              {quizQuestions[currentQuestion].question}
            </h3>
            <div className="mt-4 space-y-2 w-sm mx-auto px-4">
              {quizQuestions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  className="btn btn-outline border-gray-200 w-full"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="modal-action">
              <button className="btn" onClick={() => setShowQuestions(false)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default EidQuizGame;
