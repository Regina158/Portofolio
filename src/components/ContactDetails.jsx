import { FiInstagram } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2 lg:px-10 mt-10">
      <div className="text-left max-w-xl lg::px-6">
        <div className="mb-5">
          <h2 className="font-semibold text-lg">Email </h2>
          <h2 className="text-lg">reginantx5@gmail.com</h2>
        </div>
        <div className="mb-5">
          <h2 className="font-semibold text-lg">Phone </h2>
          <h2 className="text-lg">+62 926 9176 182</h2>
        </div>
        <div className="mb-5">
          <h2 className="font-semibold text-lg mb-5">Follow Me </h2>
          <div className="flex flex-row">
            <a
              href="https://www.instagram.com/157reginaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram
                className="bg-violet-500 hover:bg-violet-700 p-3 rounded-full text-white"
                size={40}
              />
            </a>
            <a
              href="https://github.com/Regina158"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
            >
              <FaGithub
                className="bg-violet-500 hover:bg-violet-700 p-3 rounded-full text-white"
                size={40}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/regina157"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="bg-violet-500 hover:bg-violet-700 p-3 rounded-full text-white"
                size={40}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
