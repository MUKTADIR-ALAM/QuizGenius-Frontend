import React from "react";
import useLesson from "../../CustomHook/useLesson";

const LessonDetails = () => {
  const { data, error, isLoading } = useLesson();
  console.log(data);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error.message}</div>;

  // Ensure `data` is available before rendering
  if (!data) {
    return <div className="text-center py-10 text-red-500">No lesson data found</div>;
  }

  return (
    <div className="container mx-auto px-12  lg:px-28 py-12 h-full ">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Lesson Detail</h1>

      <div
        key={data._id}
        className="p-6 flex flex-col py-12"
      >
        <h2 className="text-3xl md:text-4xl  font-bold my-4 text-gray-800">{data.title}</h2>
        <p className="text-lg text-gray-600 my-4">
          {data.introduction ? data.introduction.slice(0, 130) : "No introduction available"}...
        </p>

        {/* Render Objectives */}
        {data.objectives && data.objectives.length > 0 ? (
          <div className="py-2">
            <h3 className="text-xl md:text-3xl my-2 font-semibold text-gray-700 ">Objectives:</h3>
            <ul className="list-disc list-inside mb-4 text-gray-600 text-sm space-y-1 md:text-lg">
              {data.objectives.map((obj, i) => (
                <li className="my-2 md:my-3" key={i}>{obj}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No objectives available.</p>
        )}

        {/* Render Sections */}
        {data.sections && data.sections.length > 0 ? (
          data.sections.map((section, secIndex) => (
            <div
              key={secIndex}
              className="my-4 p-4 border-l-4 border-gray-500"
            >
              <h4 className="text-xl mb-2 font-semibold text-gray-800">{section.heading}</h4>
              <p className="text-gray-600 text-sm md:text-lg">{section.content}</p>
              
              {section.subSections && section.subSections.length > 0 ? (
                <ul className="list-disc list-inside mt-4">
                  {section.subSections.map((subSection, subIndex) => (
                    <li key={subIndex} className="text-gray-600 text-sm md:text-lg">
                      {subSection}
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          ))
        ) : (
          <p>No sections available.</p>
        )}

        {/* Conclusion Section */}
        {data.conclusion && (
          <div>
            <h3 className="text-2xl py-2 font-semibold text-gray-700 mt-4">Conclusion:</h3>
            <p className="text-gray-600 text-sm md:text-lg">{data.conclusion}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonDetails;
