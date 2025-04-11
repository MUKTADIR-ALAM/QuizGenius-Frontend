import GenerateLessons from "../../components/GenerateLessons";
import LessonSection from "../../components/LessonSection";
import SelectSub from "../../components/SelectSub";

const LessonPage = () => {
  return (
    <div className="px-4 mx-auto ">
      <div className="my-12">
        <SelectSub></SelectSub>
      </div>
      <div>
        <LessonSection></LessonSection>
      </div>

      <GenerateLessons></GenerateLessons>

      {/* <CreateQuiz></CreateQuiz> */}
    </div>
  );
};

export default LessonPage;
