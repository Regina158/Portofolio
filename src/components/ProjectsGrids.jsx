import { useContext } from "react";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../context/ProjectsContext";

const ProjectsGrid = () => {
  const {
    projects,
    searchProject,
    searchProjectsByTitle,
    selectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  const displayedProjects = selectProject
    ? selectProjectsByCategory
    : searchProject
    ? searchProjectsByTitle
    : projects;

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center mb-20">
        <p className="font-bold text-gray-800 text-2xl sm:text-4xl mb-1  dark:text-ternary-light">
          Projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {displayedProjects.map((project) => (
          <ProjectSingle
            key={project.id}
            title={project.title}
            category={project.category}
            image={project.img}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
