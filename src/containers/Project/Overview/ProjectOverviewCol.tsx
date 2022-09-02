import Programmer from "../../../assets/programmer.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./ProjectOverview.css";
import "./ProjectOverviewCol.css";

function ProjectOverviewCol(proDetails: any) {
  const text = proDetails.projects.desc;
  var description = text.replace(/<[^>]+>/g, "");
  let navigate = useNavigate();
  return (
    <div className="project-wrap">
      <div className="pro-image">
        <img src={Programmer} />
      </div>
      <div className="">
        <div className="">
          <h1>{proDetails.projects.title}</h1>
        </div>
        <div className="">
          <p>Tech Stack: {proDetails.projects.stack} </p>
        </div>
        <div className="">
          <p>
            {description.substring(0, 100)}
            <span> ...</span>
          </p>
        </div>
        <div className=" ">
          <Button
            sx={{ mr: "2em", mt: "1em" }}
            onClick={() =>
              navigate(`/projects/${proDetails.projects.project_id}`, {
                replace: true,
              })
            }
            variant="contained"
          >
            Read More
          </Button>
          <Button
            sx={{ mr: "2em", mt: "1em" }}
            color="secondary"
            onClick={() => window.open(`${proDetails.projects.demo}`, "_blank")}
            variant="contained"
          >
            See Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectOverviewCol;
