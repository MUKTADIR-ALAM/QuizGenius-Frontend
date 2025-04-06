import React from "react";
import QuizForm from "../../components/QuizForm";

import Quizzes from "../../components/Quizzes";
import { useSelector } from "react-redux";

const QuizPage = () => {

  const { questions} = useSelector(
    (state) => state.quiz
  );


  return (
    <>
      {questions.length > 0 ? (
        <>
          <Quizzes></Quizzes>
        </>
      ) : (
        <>
          <div className="my-16">
            <div className="capitalize text-center ">
              <h2 className=" heading">Generate Your AI-Powered Quiz</h2>
              <p className="text-gray-600 text-lg max-w-lg mx-auto">
                Select a subject, topic, and a subtopic(optionally) to generate
                a customized quiz instantly.
              </p>
            </div>
            <QuizForm></QuizForm>
          </div>
        </>
      )}
    </>
  );
};

export default QuizPage;
