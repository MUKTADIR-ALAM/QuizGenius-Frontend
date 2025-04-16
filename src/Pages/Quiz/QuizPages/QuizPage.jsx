import React, { useEffect, useState } from "react";
import Quizzes from "../../../components/Quizzes";
import { useSelector } from "react-redux";
import UploadPdf from "../quiz-Components/UploadPdf";
import { useNavigate } from "react-router";
import QuizForm from "../quiz-Components/QuizForm";
import InsertLink from "../quiz-Components/InsertLink";

const QuizPage = () => {
  const { questions } = useSelector((state) => state.quiz);
  const [view, setView] = useState("form");
  const navigate = useNavigate();

  console.log(view);

  useEffect(() => {
    if (questions.length > 0) {
      navigate("/give-quiz");
    }
  }, [questions, navigate]);

  return (
    <>
      <div className="my-16">
        <div className="capitalize text-center mb-6">
          <h2 className="heading">Generate Your AI-Powered Quiz</h2>
          <p className="text-lg max-w-lg mx-auto">
            Select a subject, topic, and a subtopic (optionally) or upload a PDF
            to generate a customized quiz instantly.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-4 space-x-4">
          <button
            onClick={() => setView("form")}
            className={`px-4 py-2 rounded ${
              view === "form" ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            Generate with Form
          </button>
          <button
            onClick={() => setView("upload")}
            className={`px-4 py-2 rounded ${
              view === "upload" ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            Upload PDF
          </button>
          <button
            onClick={() => setView("insert-link")}
            className={`px-4 py-2 rounded ${
              view === "insert-link" ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            Insert Link
          </button>
        </div>

        {/* Conditional Component Rendering */}
        <div className="border border-gray-300 p-4 rounded-lg max-w-2xl mx-auto">
          {view === "form" ? (
            <QuizForm />
          ) : view === "insert-link" ? (
            <InsertLink />
          ) : (
            <UploadPdf />
          )}
        </div>
      </div>
    </>
  );
};

export default QuizPage;
