import { useState, useEffect } from "react";
import Ps from "../../containers/ps/Ps";
import ProjectDisplay from "../../containers/Project/Dispaly/ProjectDisplay";
import Container from "@mui/material/Container";
import "../Blog/Blog.css";

function Projects() {
  const projectURL = "https://portfolio-serverside.herokuapp.com/api/projects";
  const [projects, setProjects] = useState({
    items: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    fetch(projectURL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setProjects({ items: data, isLoading: false, error: null });
      });
  }, []);

  return (
    <div className="blogs">
      <div className="hero">
        <h1>Projects</h1>
        <p>
          An in depth detail of some of the projects that I have completed in
          the recent years
        </p>
      </div>
      <div>
        <ProjectDisplay proData={projects} />
      </div>
      <Ps />
    </div>
  );
}

export default Projects;
