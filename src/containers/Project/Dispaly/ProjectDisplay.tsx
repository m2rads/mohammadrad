import ProjectOverview from "../Overview/ProjectOverview";
import ProjectOverviewCol from "../Overview/ProjectOverviewCol";
import "./ProjectDisplay.css";

function ProjectDisplay(projects: any) {
  const displayProjects = () => {
    if (projects.proData.displayCol) {
      return (
        <div className="project-container">
          {projects.proData.items.map((index: any, item: any) => (
            <ProjectOverviewCol projects={index} />
          ))}
        </div>
      );
    } else {
      return projects.proData.items.map((index: any, item: any) => (
        <ProjectOverview projects={index} />
      ));
    }
  };
  return (
    <div className="projects">
      {projects.proData.isLoading ? "Loading..." : displayProjects()}
    </div>
  );
}

export default ProjectDisplay;
