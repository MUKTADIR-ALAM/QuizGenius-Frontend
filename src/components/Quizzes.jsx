import { useDispatch, useSelector } from "react-redux";

import { selectAnswer, nextQuestion } from "../redux/quizSlice";

const Quizzes = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, quizCompleted, score } = useSelector(
    (state) => state.quiz
  );
 

  if (quizCompleted) {
    return <h2>Quiz Completed! 🎉 Your Score: {score}</h2>;
  }

  if (!questions.length) return <h2>Loading questions...</h2>;

  const currentQuestion = questions[currentQuestionIndex];
  console.log(questions)

  return (
    <div className="max-w-3xl mx-auto my-12">
      <h2 className="text-3xl font-bold text-center">Quizzes</h2>
      <div className="card max-w-lg mx-auto py-8">
        <h2 className="pt-2 pb-6">{currentQuestion.question}</h2>
        <div className="grid grid-cols-2 gap-4 mt-2 mb-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              className="btn "
              onClick={() =>
                dispatch(
                  selectAnswer({
                    questionId: currentQuestion.id,
                    selectedOption: option,
                    isCorrect: option === currentQuestion.correctAnswer,
                  })
                )
              }
            >
              {option}
            </button>
          ))}
        </div>
        <button className="buttons" onClick={() => dispatch(nextQuestion())}>Next</button>
      </div>
    </div>
  );
};

export default Quizzes;
