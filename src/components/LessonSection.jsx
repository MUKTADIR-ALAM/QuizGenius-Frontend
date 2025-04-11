import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { FaAnglesRight } from "react-icons/fa6";
import { setLessons } from "../redux/LessonSlice";
import useAllLessons from "../CustomHook/useAllLessons";
const LessonSection = () => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const { topicsR, selectedSubject, selectedTopic } = useSelector(
    (state) => state.lessons
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const { Lessons, isLoading, isError } = useAllLessons(
    selectedSubject,
    selectedTopic,
    currentPage,
    itemsPerPage
  );
  console.log(Lessons)
  useEffect(() => {
    if (Lessons) {
      dispatch(setLessons(Lessons.result));
      setCount(Lessons?.count)
    }
  }, [Lessons, dispatch]);
  console.log(topicsR.length);
  const numberOfPages = Math.ceil(Lessons?.count / itemsPerPage) || 0;

  return (
    <div className="">
      <div className="grid max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 justify-center items-center w-full p-6">
        {topicsR && topicsR.length > 0 ? (
          topicsR.map((lesson, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md md:w-[19rem] lg:w-86  md:h-[24rem] lg:h-96 flex flex-col justify-around bg-gray-100"
            >
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                {lesson.title}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {lesson.introduction.slice(0, 130)}...
              </p>

              <Link
                to={`/lesson/${lesson._id}`}
                className="flex justify-center items-center gap-2 hover:text-xl"
              >
                <span className="text-lg font-semibold">Show more</span>{" "}
                <FaAnglesRight />
              </Link>
            </div>
          ))
        ) : (
          <p>No lessons available yet.</p>
        )}
      </div>
      {/* Pagination controls */}
      <div className="flex justify-center items-center mt-6 gap-1 text-xs lg:text-sm">
        <button
          className="btn"
          onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {[...Array(numberOfPages)].map((_, idx) => (
          <button
            key={idx}
            className={` ${currentPage === idx ? "btn" : "btn bg-gray-200"}`}
            onClick={() => setCurrentPage(idx)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          className="btn"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, numberOfPages - 1))
          }
          disabled={currentPage === numberOfPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LessonSection;
