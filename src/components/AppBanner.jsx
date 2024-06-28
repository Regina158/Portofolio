import React, { useState, useEffect } from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import developerLight from "../images/regina.png";
import { motion } from "framer-motion";

const TypingText = ({ text, className, delay }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentText = "";
    const timer = setInterval(() => {
      if (currentText.length < text.length) {
        currentText += text[currentText.length];
        setDisplayedText(currentText);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: delay,
      }}
      className={className}
    >
      <div>{displayedText}</div>
    </motion.span>
  );
};

const AppBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:flex-row justify-between items-center mt-12 md:mt-5 mb-20"
    >
      <div className="w-full md:w-auto justify-start order-last md:-order-last">
        <TypingText
          text="Hi, I AM REGINA"
          className="font-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-gray-800 dark:text-primary-light uppercase"
          delay={0.1}
        />
        <TypingText
          text="I'm Still Learning to be a Developer"
          className="font-light mt-4 text-sm md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
          delay={0.2}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:block"
        >
          <a
            href="/src/assets/CV - Muhamad Nur Syami.pdf"
            target="_blank"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-slate-300 focus:ring-1 focus:ring-violet-950 hover:bg-violet-600 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100" />
            <span className="text-sm sm:text-lg font-general-medium duration-100">
              Download CV
            </span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full md:w-auto flex justify-end"
      >
        <img
          src={developerLight}
          alt="Developer"
          className="md:w-2/3 text-right"
        />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
