import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom'; // Import Link from React Router

const Home = () => {
    const [theme, setTheme] = useState("light");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);

        // Simulate loading delay for demonstration purposes
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "synthwave" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <div>
            {/* Navbar */}
            <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50">
                <div className="navbar-start ml-10">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="../" >Home</Link> {/* Example of Link */}
                            </li>
                            <li>
                                <Link to="../Article">Article</Link> {/* Example of Link */}
                            </li>
                            <li>
                                <Link to="../Contact" >Contact</Link> {/* Example of Link */}
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">Regina</Link> {/* Example of Link */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="../Home" >Home</Link> {/* Example of Link */}
                        </li>
                        <li>
                            <Link to="../Article">Article</Link> {/* Example of Link */}
                        </li>
                        <li>
                            <Link to="../Contact">Contact</Link> {/* Example of Link */}
                        </li>
                    </ul>
                </div>
                
                <div className="navbar-end mr-10">
                    <label className="swap swap-rotate">
                        <input
                            type="checkbox"
                            className="theme-controller"
                            checked={theme === "synthwave"}
                            onChange={toggleTheme}
                        />
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
            </div>

            {/* Biodata */}
            <div className="container mx-auto mt-28 px-4 flex justify-between items-center">
                <div className="flex flex-col items-start">
                    <p className="text-2xl font-normal font-LaoSansPro leading-[50px]">Hi There,</p>
                    <p className="text-2xl font-normal font-LaoSansPro leading-[50px]">I Am Regina</p>
                    <p className="text-4xl font-normal font-LaoSansPro leading-[50px]">I'm Still Learning to be a Web Development</p>
                </div>
                <div className="avatar">
                    <div className="w-60 h-60 rounded-full overflow-hidden">
                        <img src="./src/assets/S.jpeg" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

          
            <div className="p-6 rounded-lg border border-rose-600 mx-auto max-w-4xl my-40">
                <p className="text-2xl font-normal font-LaoSansPro leading-[50px] text-center">
                    Hi, I am a student from Ranai city, Natuna district. I am currently studying Bachelor of Information Engineering at Maritim Raja Ali Haji  University.
                </p>
            </div>

            {/* Skill */}
            <div className="container mt-24 ml-4 lg:ml-20 my-32">
                <div className="justify-center text-center">
                    <a className="text-rose-600 text-[50px] font-bold leading-[50px]">Skill</a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 mt-20">
                    <div className="w-full bg-base shadow-xl p-4">
                        <img src="src/assets/HTML.png" alt="HTML" className="mb-4"/>
                        <label className="block mb-2">HTML</label>
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                                <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                            </div>
                        </div>
                        <p className="text-sm font-LaoSansPro">80%</p>
                    </div>

                    <div className="w-full bg-base shadow-xl p-4">
                        <img src="src/assets/CSS.png" alt="CSS" className="mb-4"/>
                        <label className="block mb-2">CSS</label>
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                                <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                            </div>
                        </div>
                        <p className="text-sm font-LaoSansPro">75%</p>
                    </div>

                    <div className="w-full bg-base shadow-xl p-4">
                        <img src="src/assets/Java.png" alt="JavaScript" className="mb-4"/>
                        <label className="block mb-2">JavaScript</label>
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                                <div style={{ width: "45%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                            </div>
                        </div>
                        <p className="text-sm font-LaoSansPro">45%</p>
                    </div>

                    <div className="w-full bg-base shadow-xl p-4">
                        <img src="src/assets/T.png" alt="Tailwind" className="mb-4"/>
                        <label className="block mb-2">Tailwind CSS</label>
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                                <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                            </div>
                        </div>
                        <p className="text-sm font-LaoSansPro">50%</p>
                    </div>

                    <div className="w-full bg-base shadow-xl p-4">
                        <img src="src/assets/R.png" alt="React" className="mb-4"/>
                        <label className="block mb-2">React</label>
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                                <div style={{ width: "45%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                            </div>
                        </div>
                        <p className="text-sm font-LaoSansPro">45%</p>
                    </div>
                </div>
            </div>

                    {/* Projects */}
            <div className="container mt-24 ml-4 lg:ml-20 my-32">
                <div className="justify-center text-center lg:ml-20">
                    <a className="text-rose-600 text-[50px] font-bold leading-[50px]">My Project</a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
                    <div className="card w-full bg-base-100 shadow-xl mx-auto">
                        <figure><img src="src/assets/q.png" alt="Droid Game" className="w-full h-64 object-cover" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Droid Game
                            </h2>
                            <p>A seek and hide game, which consists of search droids and evasion droids</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-outline btn-info">Details</button>
                                <button className="btn btn-outline btn-info">
                                    <a href="https://github.com/Regina158/Project-PAA-2023 " target="_blank" rel="noopener noreferrer">Repo</a>
                                </button>
                            </div>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Java</div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-base-100 shadow-xl mx-auto">
                        <figure><img src="src/assets/ws.png" alt="WDJ" className="w-full h-64 object-cover" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Website Desa
                            </h2>
                            <p> SISTEM INFORMASI DESA which functions as an information portal</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-outline btn-info">Details</button>
                                <button className="btn btn-outline btn-info">
                                    <a href="https://github.com/Regina158/Web_Desa_Jurang " target="_blank" rel="noopener noreferrer">Repo</a>
                                </button>
                            </div>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">HTML</div>
                                <div className="badge badge-outline">CSS</div>
                                <div className="badge badge-outline">Bootstrap</div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-base-100 shadow-xl mx-auto">
                        <figure><img src="src/assets/N.png" alt="Droid Game" className="w-full h-64 object-cover" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Sistem Prediksi Persediaan Obat Menggunakan Metode Naive Bayes
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-outline btn-info">Details</button>
                                <button className="btn btn-outline btn-info">
                                    <a href="https://github.com/Regina158/Naive-Bayes " target="_blank" rel="noopener noreferrer">Repo</a>
                                </button>
                            </div>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">HTML</div>
                                <div className="badge badge-outline">CSS</div>
                                <div className="badge badge-outline">Python</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience */}
            <div className="container mt-24 ml-4 lg:ml-20 my-32">
                <div className="justify-center text-center">
                    <a className="text-rose-600 text-[50px] font-bold leading-[50px]">Experience</a>
                </div>
                <div className="flex justify-start pt-16 mx-auto">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-center">
                                Studi Independen Web Development
                            </h2>
                            <ul className="list-disc list-inside pt-5 ml-5 text-justify">
                                <li>Developed a comprehensive understanding of front-end web technologies including HTML, CSS, and JavaScript.</li>
                                <li>Worked on various projects to implement responsive design and improve user experience.</li>
                                <li>Learned advanced JavaScript frameworks such as React.js to build dynamic web applications.</li>
                                <li>Collaborated with peers to develop and deploy web applications, following agile methodologies.</li>
                                <li>Gained experience in using version control systems like Git and GitHub.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
