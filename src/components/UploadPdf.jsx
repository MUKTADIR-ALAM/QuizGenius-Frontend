import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuestions } from "../redux/quizSlice";
import { useNavigate } from "react-router";

const UploadPdf = () => {
  const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", selectedFile);

    try {
      const res = await fetch("http://localhost:5000/upload-pdf", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      dispatch(setQuestions(data.quiz));
      navigate('/give-quiz')
     
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  return (
    <div className="space-y-4 flex flex-col mx-7">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5A5.5 5.5 0 0 0 5.2 5.02A4 4 0 0 0 5 13h2.2M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">PDF only. Max 10MB.</p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {selectedFile && (
        <div className="text-center text-sm text-gray-700">
          <span className="font-medium">Selected File:</span>{" "}
          {selectedFile.name}
        </div>
      )}

      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-black text-white rounded-md w-40 mx-auto  mt-2 mb-6"
      >
        Generate Quiz
      </button>
    </div>
  );
};

export default UploadPdf;
