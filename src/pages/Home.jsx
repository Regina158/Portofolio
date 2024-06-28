import AppBanner from "../components/AppBanner";
import ProjectsGrid from "../components/ProjectsGrids.jsx";
import { ProjectsProvider } from "../context/ProjectsContext";
// import { IoLogoJavascript } from "react-icons/io5";
// import { FaJava } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { FaHtml5 } from "react-icons/fa";
// import { FiFigma } from "react-icons/fi";
import HTML5 from "../images/HTML.png";
import CSS from "../images/CSS.png";
import JS from "../images/JS.png";
import T from "../images/T.png";
import R from "../images/R.png";
export default function Home() {
  return (
    <>
      <div className="container mx-auto px-20">
        <AppBanner></AppBanner>

        <section>
          <div className="p-6 rounded-lg border border-violet-600 mx-auto max-w-4xl my-40">
            <p className="text-2xl font-normal font-LaoSansPro leading-[50px] text-center dark:text-white">
              Hi, I am a student from Ranai city, Natuna district. I am
              currently studying Bachelor of Information Engineering at Maritim
              Raja Ali Haji University.
            </p>
          </div>
        </section>
        <section className="py-5 sm:py-10 mt-5 sm:mt-10">
          <div className="text-center mb-20">
            <p className="font-bold text-gray-800 text-2xl sm:text-4xl mb-1  dark:text-ternary-light">
              Skills
            </p>
          </div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-10">
            <div className="w-full bg-base shadow-xl p-4 rounded-3xl dark:bg-violet-200 bg-violet-50 mb-10">
              <img src={HTML5} alt="HTML" className="mb-4 rounded-3xl" />
              <label className="block mb-2">HTML</label>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                  <div
                    style={{ width: "80%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                  ></div>
                </div>
              </div>
              <p className="text-sm font-LaoSansPro">80%</p>
            </div>
            <div className="w-full bg-base shadow-xl p-4 rounded-3xl dark:bg-violet-200 bg-violet-50 mb-10">
              <img src={CSS} alt="CSS" className="mb-4 rounded-3xl" />
              <label className="block mb-2">CSS</label>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                  <div
                    style={{ width: "75%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                  ></div>
                </div>
              </div>
              <p className="text-sm font-LaoSansPro">75%</p>
            </div>
            <div className="w-full bg-base shadow-xl p-4 rounded-3xl dark:bg-violet-200 bg-violet-50  mb-10">
              <img src={JS} alt="JavaScript" className="mb-4 rounded-3xl" />
              <label className="block mb-2">JavaScript</label>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                  <div
                    style={{ width: "45%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                  ></div>
                </div>
              </div>
              <p className="text-sm font-LaoSansPro">45%</p>
            </div>
            <div className="w-full bg-base shadow-xl p-4 rounded-3xl dark:bg-violet-200 bg-violet-50 mb-10">
              <img src={T} alt="Tailwind" className="mb-4 rounded-3xl" />
              <label className="block mb-2">Tailwind CSS</label>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                  <div
                    style={{ width: "50%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                  ></div>
                </div>
              </div>
              <p className="text-sm font-LaoSansPro">50%</p>
            </div>
            <div className="w-full bg-base shadow-xl p-4 rounded-3xl dark:bg-violet-200 bg-violet-50 mb-10">
              <img src={R} alt="React" className="mb-4" />
              <label className="block mb-2">React</label>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                  <div
                    style={{ width: "45%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                  ></div>
                </div>
              </div>
              <p className="text-sm font-LaoSansPro">45%</p>
            </div>
          </div>
        </section>

        <ProjectsProvider>
          <ProjectsGrid></ProjectsGrid>
        </ProjectsProvider>

        <section className="py-5 sm:py-10 ">
          <div className="text-center mb-20">
            <p className="font-bold text-gray-800 text-2xl sm:text-4xl mb-1 dark:text-ternary-light">
              Experiences
            </p>
          </div>
          <div className="dark:bg-violet-200 bg-violet-50 px-10 py-4 shadow-xl rounded-2xl">
            <h2 className="text-2xl font-bold">
              Studi Independen Web Development - Infinite Learning
            </h2>
            <p>Agu 2023 - Des 2023</p>
            <p>Batam, Kepulauan Riau, Indonesia</p>
            <ul className="list-disc list-inside pt-5 ml-5 text-justify">
              <li>
                Developed a comprehensive understanding of front-end web
                technologies including HTML, CSS, and JavaScript.
              </li>
              <li>
                Worked on various projects to implement responsive design and
                improve user experience.
              </li>
              <li>
                Learned advanced JavaScript frameworks such as React.js to build
                dynamic web applications.
              </li>
              <li>
                Collaborated with peers to develop and deploy web applications,
                following agile methodologies.
              </li>
              <li>
                Gained experience in using version control systems like Git and
                GitHub.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
