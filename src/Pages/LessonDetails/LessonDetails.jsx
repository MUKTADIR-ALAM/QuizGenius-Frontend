import React, { Fragment } from "react";
import useLesson from "../../CustomHook/useLesson";
import Loader from "../../components/Loader";

const LessonDetails = () => {
  const { data, isLoading } = useLesson();

  return (
    <div className="container mx-auto px-12  lg:px-28 py-12 h-full ">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Lesson Detail
      </h1>

      {isLoading ? (
        <Loader className="w-full"></Loader>
      ) : (
        <div key={data._id} className="p-6 flex flex-col py-12">
          <h2 className="text-3xl md:text-4xl  font-bold my-4 text-gray-800">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 my-4">
            {data.introduction
              ? data.introduction
              : "No introduction available"}
          </p>

          {/* Render Objectives */}
          {data.objectives && data.objectives.length > 0 ? (
            <div className="py-2">
              <h3 className="text-xl md:text-3xl my-2 font-semibold text-gray-700 ">
                Objectives:
              </h3>
              <ul className="list-disc list-inside mb-4 text-gray-600 text-sm space-y-1 md:text-lg">
                {data.objectives?.map((obj, i) => (
                  <li className="my-2 md:my-3" key={i}>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No objectives available.</p>
          )}

          {/* Render Sections */}
          {data.sections && data.sections.length > 0 ? (
            data.sections?.map((section, secIndex) => (
              <div key={secIndex} className="my-4 p-4">
                <h4 className="text-xl mb-2 font-semibold text-gray-800">
                  {section.heading}
                </h4>
                <p className="text-gray-600 text-sm md:text-lg">
                  {section.content}
                </p>

                {section.subSections && section.subSections.length > 0 ? (
                  section.subSections.map((subSec, idx) => (
                    <div key={idx} className="pl-4 my-4">
                      <h5 className="text-lg my-2">{subSec.heading}</h5>
                      <p className="text-gray-600 text-sm md:text-base">
                        {subSec.content}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 mt-2">
                    No subsections available.
                  </p>
                )}
              </div>
            ))
          ) : (
            <p>No sections available.</p>
          )}

          {/* Conclusion Section */}
          {data.conclusion && (
            <div>
              <h3 className="text-2xl py-2 font-semibold text-gray-700 mt-4">
                Conclusion:
              </h3>
              <p className="text-gray-600 text-sm md:text-lg">
                {data.conclusion}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LessonDetails;
