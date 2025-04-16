import React, { useState } from "react";
import useAxiosPublic from "../../../CustomHook/useAxiosPublic";
import { useDispatch } from "react-redux";
import { setQuestions } from "../../../redux/quizSlice";
import { useNavigate } from "react-router";

const InsertLink = () => {
  const [link, setLink] = useState("https://");
  const axiosPublic = useAxiosPublic();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInsert = async () => {
    console.log("Inserting link:", link);

    const res = await axiosPublic.get("/generate-quiz-from-link", {
      params: { link },
    });
    console.log("Quiz:", res.data.quiz);
    //  const data = await res.json();
    dispatch(setQuestions(res.data.quiz));
    navigate("/give-quiz");
  };
  return (
    <div className="space-y-4 flex flex-col mx-7 justify-center items-center">
      <label className="input validator">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </g>
        </svg>
        <input
          type="url"
          required
          placeholder="https://"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
          title="Must be valid URL"
        />
      </label>
      <p className="validator-hint">Must be valid URL</p>

      {/* {selectedFile && (
        <div className="text-center text-sm text-gray-700">
          <span className="font-medium">Selected File:</span>{" "}
          {selectedFile.name}
        </div>
      )} */}

      <button
        onClick={handleInsert}
        className="px-4 py-2 bg-black text-white rounded-md w-40 mx-auto  mt-2 mb-6"
      >
        Generate Quiz
      </button>
    </div>
  );
};

export default InsertLink;
