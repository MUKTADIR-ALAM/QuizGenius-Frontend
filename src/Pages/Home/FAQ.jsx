import React, { useState } from "react";

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const faqSection = [
    {
      id: 1,
      question: "What exactly is QuizGenius?",
      description:
        "QuizGenius is an AI-driven learning platform that crafts personalized quizzes to match your learning pace and style. Think of it as your smart study buddy, adjusting quiz difficulty based on your performance to keep you challenged and engaged.",
    },
    {
      id: 2,
      question: "How does the AI-generated quiz feature work?",
      description:
        "Our AI algorithms dynamically generate quizzes tailored to your chosen topics and past performance. This ensures a diverse and relevant set of questions, making your learning experience both effective and enjoyable.",
    },
    {
      id: 3,
      question: "Can I upload my own study materials to create quizzes?",
      description:
        "Absolutely! With our PDF to Quiz Converter, you can upload PDFs, and our AI will extract key topics to generate interactive quizzes, transforming your static notes into dynamic learning sessions.",
    },
    {
      id: 4,
      question: "What payment options are available for premium features?",
      description:
        "We embrace the future of finance by supporting cryptocurrency payments, including Bitcoin and Ethereum, for seamless transactions. Traditional payment methods are also available, catering to all preferences.",
    },
    {
      id: 5,
      question: "How does the adaptive difficulty feature enhance my learning?",
      description:
        "QuizGenius monitors your responses in real-time, adjusting the difficulty of subsequent questions to match your evolving skill level. This personalized approach ensures you're always learning at an optimal pace, maximizing retention and growth.",
    },
    {
      id: 6,
      question:
        "What makes QuizGenius different from other learning platforms?",
      description:
        "QuizGenius stands out by combining AI-generated, personalized quizzes with adaptive difficulty, cryptocurrency payment options, and the ability to convert your own materials into interactive quizzes. This comprehensive approach offers a unique, user-centric learning experience.",
    },
  ];

  return (
    <div className="my-12 py-12">
      <div className="flex flex-col justify-center items-center text-center my-12">
        <h3 className="text-4xl lg:text-5xl font-bold">
          Frequently Asked Questions?
        </h3>
        <p className="my-5 text-gray-700">
          Got questions about QuizGenius? We've got answers! Explore the FAQs
          below to learn more about our AI-powered learning platform.
        </p>
      </div>
      <div className="mb-12 flex flex-col gap-2">
        {faqSection.map((faq) => (
          <div
            key={faq.id}
            className="collapse collapse-plus bg-base-100 border border-base-300"
          >
            <input
              onClick={() => toggleAccordion(faq.id)}
              type="radio"
              name="my-accordion-3"
              defaultChecked
            />
            <div className="collapse-title font-semibold">{faq.question}</div>

            {openId === faq.id && (
              <div className="collapse-content text-sm">{faq.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
