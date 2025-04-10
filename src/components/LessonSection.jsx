import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { FaAnglesRight } from "react-icons/fa6";
const LessonSection = () => {
  const { topicsR } = useSelector((state) => state.lessons);
  console.log(topicsR);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 justify-center items-start w-full p-6">
        {topicsR && topicsR.length > 0 ? (
          topicsR.map((lesson, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md md:w-[20rem] lg:w-86  md:h-[23rem] lg:h-96 flex flex-col justify-around bg-gray-100"
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
    </div>
  );
};

export default LessonSection;
