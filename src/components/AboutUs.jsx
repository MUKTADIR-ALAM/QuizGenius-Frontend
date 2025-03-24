import aboutImg from '../assets/about.webp';

const AboutUs = () => {
    return (
        <div className="bg-sky-300">
            <button className="btn btn-lg bg-sky-500 my-6 ml-16">Lead Generation</button>
            <h3 className="font-bold text-4xl text-center py-4">Best quiz maker apps for maximum engagement</h3>
            <p className="font-semibold text-sm text-center pb-4">Discover the top quiz apps to transform engagement and learning. <br /> Innovative platforms for educators,learners, and businesses</p>
            <div className="flex gap-4 items-center px-6 py-4">
                <div className="bg-orange-200 p-4 mb-30">
                    <p>The best quiz makers provide a seamless experience for both quiz creators and participants, featuring intuitive interfaces, diverse question types, and rich multimedia integration capabilities. From free quiz makers designed for casual use to advanced online quiz tools tailored for educational and corporate training, the options are vast and varied.</p>
                </div>
                <div className="bg-orange-200 p-4 mb-12">
                    <p>In the digital age, the quest to create a quiz that is both engaging and informative has led to the development of an excess of quiz maker apps and online quiz tools. These platforms offer a unique blend of entertainment and education, making them indispensable tools for educators, marketers, and content creators.</p>
                </div>
                <div className="bg-orange-200 p-4">
                    <p>Quiz Genious's advanced features and analytical capabilities make it one of the best online quiz tools for professional and research-oriented applications. The ability to create quizzes that are both informative and secure positions SurveyMonkey as a top choice for businesses.</p>
                </div>
            </div>
            <div className='pb-6'>
            <img src={aboutImg} className='w-1/2 h-20 mx-auto object-cover' alt="" />
            </div>
        </div>
    );
};

export default AboutUs;