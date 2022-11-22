import "./ProjectDetails.css";
import Button from "@mui/material/Button";
import GitHub from "@mui/icons-material/GitHub";

export default function ProjectDetails(prop: any) {
  console.log("This is project detals " + prop);

  return (
    <div className="details-container">
      <div className="details">
        <div className="title">
          <h1>{prop.data.title}</h1>
          <p>Tech Stack: {prop.data.stack}</p>
        </div>
        <div className="links">
          <Button
            sx={{ mr: "4em", mt: "2em" }}
            onClick={() => window.open(`${prop.data.demo}`, "_blank")}
            color="secondary"
            variant="contained"
          >
            See demo
          </Button>
          <Button
            sx={{ mt: "2em" }}
            onClick={() => window.open(`${prop.data.github}`, "_blank")}
            color="primary"
            variant="contained"
          >
            Github Repo <GitHub sx={{ ml: "0.5em" }} />
          </Button>
        </div>
      </div>
      <div className="details-content">
        <div className="pro-demo">
          <h1>Project Demo</h1>
          <img
            src={prop.data.media}
            alt="demo of project"
            width="700"
            height="405"
          />
        </div>
        <div className="prob">
          <h1>Problem</h1>
          <p>{prop.data.prob}</p>
        </div>
        <div className="details-desc">
          <h1>Project Description</h1>
          <p>{prop.data.desc}</p>
        </div>
      </div>
    </div>
  );
}
