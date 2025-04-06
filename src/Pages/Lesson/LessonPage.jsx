import GenerateLessons from "../../components/GenerateLessons";
import SelectSub from "../../components/SelectSub";

const LessonPage = () => {
  return (
    <div className="px-4 mx-auto ">
      <div className="my-12">
        <SelectSub></SelectSub>
      </div>

      <GenerateLessons></GenerateLessons>

      {/* <CreateQuiz></CreateQuiz> */}
    </div>
  );
};

export default LessonPage;
