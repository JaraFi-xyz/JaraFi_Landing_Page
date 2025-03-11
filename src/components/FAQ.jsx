import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";

const qs = [
  {
    id: 1,
    tag: "01",
    question: "What is JaraFi?",
    answer:
      "JaraFi is a blockchain-powered platform designed to enable seamless financial transactions with enhanced security and efficiency.",
  },
  {
    id: 2,
    tag: "02",
    question: "How does JaraFi work?",
    answer:
      "JaraFi leverages smart contracts and decentralized finance (DeFi) to provide users with fast and secure transactions.",
  },
  {
    id: 3,
    tag: "03",
    question: "Is JaraFi secure?",
    answer:
      "Yes! JaraFi uses blockchain encryption and decentralized protocols to ensure top-notch security for its users.",
  },
  {
    id: 4,
    tag: "04",
    question: "Can I use JaraFi on mobile?",
    answer:
      "Absolutely! JaraFi is mobile-friendly and accessible via web browsers on smartphones and tablets.",
  },
  {
    id: 5,
    tag: "05",
    question: "Are there any fees?",
    answer:
      "JaraFi maintains low transaction fees, ensuring affordability while providing high-speed transactions.",
  },
  {
    id: 6,
    tag: "06",
    question: "How do I get started with JaraFi?",
    answer:
      "Simply sign up, create an account, and start using JaraFi for seamless financial transactions.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full p-6 text-white flex flex-col justify-center items-center">
      <h1 className="text-center text-[35px] font-bold font-[Merriweather Sans] text-[#F2EDE4] flex items-center gap-2 justify-center">
        FAQ
        <span className="w-[15px] h-[15px] rounded-full bg-[#F2E205] inline-block"></span>
      </h1>

      <div className="mt-6 space-y-4 md:w-1/2 w-full">
        {qs.map((q, index) => (
          <div
            key={q.id}
            className={`p-4 border rounded-lg transition-all duration-300 ${
              openIndex === index
                ? "bg-[#F2E205] text-black"
                : "bg-white text-black"
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-[14px] md:text-[20px] font-semibold flex items-center gap-2">
                <span>{q.tag}.</span> {q.question}
              </h2>
              {openIndex === index ? (
                <FiMinus className="text-2xl border-2 bg-white rounded-full p-1" />
              ) : (
                <FiPlus className="text-2xl border-2 bg-white rounded-full p-1" />
              )}
            </div>

            {openIndex === index && (
              <motion.p
                className="mt-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {q.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>

      <section className="flex items-center justify-center flex-col mt-20">
        <img
          src="/JaraFi-yellow.png"
          alt="faq"
          className="mt-6 w-full max-w-[339px] max-sm:w-full"
        />

        <button
          className="flex
          gap-[2px] items-center text-[16px] bg-[#F2EDE4] p-[10px] rounded-[10px] text-[#262526] font-[Montserrat] my-10 "
        >
          Get on Playstore <img src="/icons8-playstore-48.png" className="w-[16px]" />
        </button>
      </section>
    </section>
  );
};

export default FAQ;
