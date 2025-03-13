import { RiAiGenerate } from "react-icons/ri";
import { SiFastapi, SiOpensourcehardware } from "react-icons/si";


const Values = () => {
  const features = [
    {
      id: "ai_quizzes",
      title: "AI-Generated Quizzes",
      description:
        "Experience limitless quiz variations tailored to your learning needs.",
      imgLink: <RiAiGenerate />
      ,
    },
    {
      id: "adaptive_difficulty",
      title: "Adaptive Difficulty",
      description:
        "Challenge yourself with quizzes that evolve based on your performance.",
      imgLink: <SiOpensourcehardware />,
    },
    {
      id: "performance_analytics",
      title: "Performance Analytics",
      description:
        "Gain insights with detailed analytics to track your progress.",
      imgLink: <SiFastapi />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 justify-center items-center w-10/12 mx-auto">
      {features.map((item) => (
        <div key={item.id} className="card bg-base-100 shadow-md w-full">
          <div className="card-body p-5 lg:p-8 flex items-start justify-start">
            <h3 className="text-2xl md:text-4xl lg:text-6xl flex justify-start items-start">{item.imgLink}</h3>
            <h2 className="card-title">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
            <div className="card-actions justify-end">
              <button className="buttons">Learn More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Values;
