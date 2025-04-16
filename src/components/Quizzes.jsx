import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectAnswer, nextQuestion } from "../redux/quizSlice";

const Quizzes = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, quizCompleted, score } = useSelector(
    (state) => state.quiz
  );

  const [selectedOption, setSelectedOption] = useState(null);

  if (quizCompleted) {
    return <h2>Quiz Completed! 🎉 Your Score: {score}</h2>;
  }

  if (!questions.length) return <h2>Loading questions...</h2>;

  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswer = currentQuestion.correctAnswer;

  const handleSelect = (option) => {
    if (selectedOption) return;
    setSelectedOption(option);

    dispatch(
      selectAnswer({
        questionId: currentQuestion.id,
        selectedOption: option,
        isCorrect: option === correctAnswer,
      })
    );
  };

  const getButtonClass = (option) => {
    if (!selectedOption) return "btn bg-gray-200 w-full lg:w-72 h-16 lg:h-20";
    if (option === selectedOption)
      return "btn bg-gray-400 text-white w-full lg:w-72 h-16 lg:h-20";

    return "btn opacity-80 bg-gray-200 hover:bg-gray-300 w-full lg:w-72 h-16 lg:h-20";
  };

  const handleNext = () => {
    setSelectedOption(null);
    dispatch(nextQuestion());
  };

  return (
    <div className="mt-8 mb-12 fixed h-screen w-screen mx-auto">
      <h2 className="text-3xl font-bold text-center mt-12">Quizzes</h2>
      <div className="card max-w-lg mx-auto py-8">
        <h2 className="pt-2 pb-6 text-lg md:text-xl">
          {currentQuestion.question}
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mt-2 mb-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              className={getButtonClass(option)}
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          className="buttons mt-4"
          onClick={handleNext}
          disabled={!selectedOption}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quizzes;
