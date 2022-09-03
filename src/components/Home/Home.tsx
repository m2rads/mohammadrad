import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MediumIcon from "../../assets/medium-icon.png";
import ProjectOverview from "../../containers/Project/Overview/ProjectOverview";
import Pokey from "../../assets/developer-poky.json";
import DisplayLottie from "../../containers/DisplayLottie";
import ProjectDisplay from "../../containers/Project/Dispaly/ProjectDisplay";
import Ps from "../../containers/ps/Ps";
import "./Home.css";

function Home() {
  const projectURL = "https://portfolio-serverside.herokuapp.com/api/featured";
  const [featured, setFeatured] = useState({
    items: [],
    isLoading: true,
    error: null,
    displayCol: false,
  });

  useEffect(() => {
    fetch(projectURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeatured({
          items: data,
          isLoading: false,
          error: null,
          displayCol: false,
        });
      });
  }, []);

  return (
    <div className="home">
      <header className="header">
        <Container>
          <div className="content-wrap header-grid">
            <div>
              <div className="intro">
                <h1>Hi! I'm Mo </h1>
                <span className="wave-emoji">
                  <img
                    alt="👋"
                    draggable="false"
                    src="http://twemoji.maxcdn.com/2/72x72/1f44b.png"
                  />
                </span>
                <h1 className="last">I'm a softwre developer.</h1>
              </div>
              <p className="about">
                {" "}
                I'm also a computer science student 🚀, and I love learning new
                technologies by building useful tools.{" "}
                <span>
                  <a href="#featured">Have a look!</a>
                </span>
              </p>
              <div className="icons">
                <IconButton
                  sx={{ mr: ".5em" }}
                  onClick={() =>
                    window.open("https://github.com/m2rads", "_blank")
                  }
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton
                  sx={{ mr: ".5em" }}
                  onClick={() =>
                    window.open("https://twitter.com/Mohamma92787832", "_blank")
                  }
                >
                  <TwitterIcon fontSize="large" />
                </IconButton>
                <IconButton
                  sx={{ mr: ".5em" }}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/mohammad-esmaeilirad-778935168/",
                      "_blank"
                    )
                  }
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton
                  sx={{ mr: ".5em" }}
                  onClick={() =>
                    window.open("https://medium.com/@mohammadrad", "_blank")
                  }
                >
                  <img src={MediumIcon} width={35} height={35} />
                </IconButton>
              </div>
            </div>
            <div className="lottie">
              <DisplayLottie lottie={Pokey} />
            </div>
          </div>
        </Container>
      </header>
      <div className={` title  `}>
        <Typography>
          <h2 id="featured">Featured Projects</h2>
        </Typography>
        <ProjectDisplay proData={featured} />
      </div>
      <Ps />
    </div>
  );
}

export default Home;
