import Programmer from "../../../assets/programmer.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./ProjectOverview.css";
import "./ProjectOverviewCol.scss";

function ProjectOverviewCol(proDetails: any) {
  const text = proDetails.projects.desc;
  const cssColor = proDetails.projects.background;
  var description = text.replace(/<[^>]+>/g, "");
  let navigate = useNavigate();
  return (
    <div className="project-wrap" style={{ background: cssColor }}>
      <a>
        <div className="pro-image">
          <img src={Programmer} />
        </div>
        <div className="col-wrap">
          <div className="col-title title layout">
            <h1>{proDetails.projects.title}</h1>
          </div>
          <div className="col-sub-title">
            <p>Tech Stack: {proDetails.projects.stack} </p>
          </div>
          <div className="col-desc">
            <p>
              {description.substring(0, 100)}
              <span> ...</span>
            </p>
          </div>
          <div className="col-button">
            <Button
              sx={{ mr: "1em", mt: "1em" }}
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
              sx={{ mt: "1em" }}
              color="secondary"
              onClick={() =>
                window.open(`${proDetails.projects.demo}`, "_blank")
              }
              variant="contained"
            >
              See Demo
            </Button>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectOverviewCol;
