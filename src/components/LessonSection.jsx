import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { FaAnglesRight } from "react-icons/fa6";
const LessonSection = () => {
  const { topicsR } = useSelector((state) => state.lessons);
  console.log(topicsR)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 justify-center items-start w-full p-6">
      {/* Loop through all the lesson plans */}
      {topicsR && topicsR.length > 0 ? (
        topicsR.map((lesson, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md md:w-[20rem] lg:w-86  md:h-[23rem] lg:h-96 flex flex-col justify-around bg-gray-100"
          >
            {/* Render Lesson Title and Introduction */}
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              {lesson.title}
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              {lesson.introduction.slice(0, 130)}...
            </p>

            {/* Render Objectives */}
            {/* <h3 className="text-xl font-semibold text-gray-700">Objectives:</h3>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              {lesson.objectives && lesson.objectives.length > 0 ? (
                lesson.objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))
              ) : (
                <p>No objectives available.</p>
              )}
            </ul> */}

            {/* Render Sections */}
            {/* {lesson.sections && lesson.sections.length > 0 ? (
              lesson.sections.map((section, secIndex) => (
                <div
                  key={secIndex}
                  className="mb-4 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-md"
                >
                  <h4 className="text-lg font-semibold text-gray-800">
                    {section.heading}
                  </h4>
                  <p className="text-gray-600">{section.content}</p>

                
                  {section.subSections && section.subSections.length > 0 ? (
                    <ul className="list-disc list-inside mt-4">
                      {section.subSections.map((subSection, subIndex) => (
                        <li key={subIndex} className="text-gray-600">
                          {subSection}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No subsections available.</p>
                  )}
                </div>
              ))
            ) : (
              <p>No sections available.</p>
            )} */}

            {/* <h3 className="text-xl font-semibold text-gray-700 mt-4">Conclusion:</h3>
            <p className="text-gray-600">{lesson.conclusion}</p> */}

            <Link to={`/lesson/${lesson._id}`} className="flex justify-center items-center gap-2 hover:text-xl">
              <span className="text-lg font-semibold">Show more</span> <FaAnglesRight />
            </Link>
          </div>
        ))
      ) : (
        <p>No lessons available yet.</p>
      )}
    </div>
  );
};

export default LessonSection;
