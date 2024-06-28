import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ url, title, category, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 dark:bg-violet-200 bg-violet-50">
        <div>
          <img
            src={image}
            className="w-full h-60 object-cover rounded-t-xl"
            alt="Single Project"
          />
        </div>
        <div className="px-4 rounded-b-xl h-60 flex flex-col justify-center dark:bg-violet-200 bg-violet-50">
          <p className="font-medium text-lg md:text-xl text-ternary-dark dark:text-gray-900 mb-2">
            {title}
          </p>
          <p className="text-sm text-ternary-dark dark:text-gray-900">
            {category}
          </p>
          <div className="flex mt-5">
            <button className="mx-3 border-2 border-violet-400 px-4 py-2 rounded-xl hover:bg-violet-400">
              <a href={url} target="_blank">
                Repo
              </a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
