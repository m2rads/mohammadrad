import "./ProjectDetails.css";
import Button from "@mui/material/Button";
import GitHub from "@mui/icons-material/GitHub";

export default function ProjectDetails(prop: any) {
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
          <div
            style={{
              height: "0",
              paddingBottom: "calc(55.16%)",
              position: "relative",
              width: "100%",
            }}
          >
            <iframe
              allow="autoplay; gyroscope;"
              allowFullScreen
              height="100%"
              referrerPolicy="strict-origin"
              src={prop.data.media}
              style={{
                border: "0",
                height: "100%",
                left: "0",
                overflow: "hidden",
                position: "absolute",
                top: "0",
                width: "100%",
              }}
              title="Embedded content made on Kapwing"
              width="100%"
            ></iframe>
          </div>
          <p style={{ fontSize: "12px", textAlign: "right" }}>
            Video edited on{" "}
            <a href="https://www.kapwing.com/video-editor">Kapwing</a>
          </p>
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
