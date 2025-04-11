import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { FaAnglesRight } from "react-icons/fa6";
import { setLessons } from "../redux/LessonSlice";
import useAllLessons from "../CustomHook/useAllLessons";
const LessonSection = () => {
  const dispatch = useDispatch();
  const { topicsR, selectedSubject, selectedTopic } = useSelector(
    (state) => state.lessons
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(8);
  const subject = selectedSubject || "";
  const topic = selectedTopic || "";
  const { Lessons, isLoading, isError } = useAllLessons(
    subject,
    topic,
    currentPage,
    itemsPerPage
  );

  useEffect(() => {
    if (!isLoading && Lessons) {
      dispatch(setLessons(Lessons.result));
    }
  }, [Lessons, dispatch, isLoading]);
  
 
  console.log(Lessons);
  console.log(topicsR);
  const numberOfPages = Math.ceil(Lessons?.count / itemsPerPage) || 8;

  return (
    <div className="flex flex-col justify-center ">
      <div className="grid justify-center items-center lg:max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6  p-6 ">
      {isLoading ? (
          <h2 className="text-center text-lg font-semibold col-span-full">Loading...</h2>
        ) : topicsR && topicsR.length > 0 ? (
          topicsR.map((lesson, index) => (
            <div
              key={index}
              className="p-8 px-10 sm:px-6 sm:py-8 rounded-lg shadow-md md:h-[34rem] flex flex-col justify-center items-center sm:bg-gray-100 odd:bg-gray-200"
            >
              <h2 className="text-2xl text-center py-12 font-bold text-gray-800">
                {lesson.title}
              </h2>
              <p className="my-4 px-4 bg-gray-400 text-white rounded-2xl py-2">
                {lesson.subject}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                {lesson.introduction.slice(0, 130)}...
              </p>

              <Link
                to={`/lesson/${lesson._id}`}
                className="flex justify-center items-center gap-2 hover:text-xl"
              >
                <span className="text-lg font-semibold">Show more</span>
                <FaAnglesRight />
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            No lessons available yet.
          </p>
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
