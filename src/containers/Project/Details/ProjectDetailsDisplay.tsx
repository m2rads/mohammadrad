import "./ProjectDetails.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import PageNotFound from "../../../components/PageNoteFound";

export default function ProjectDetailsDisplay() {
  let { id } = useParams();
  const proURL = `https://portfolio-serverside.herokuapp.com/api/${id}`;
  const [proDetails, setProDetails] = useState({
    details: {},
    isLoading: true,
    error: null,
  });
  useEffect(() => {
    fetch(proURL)
      .then((res) => res.json())
      .then((data) => {
        setProDetails({ details: data[0], isLoading: false, error: null });
      })
      .catch((err) => console.log("error occured"));
  }, []);

  const displayDetails = () => {
    if (proDetails.details != undefined) {
      return <ProjectDetails data={proDetails.details} />;
    } else {
      return <PageNotFound />;
    }
  };

  return (
    <div className="projects">
      {proDetails.isLoading ? "Loading..." : displayDetails()}
    </div>
  );
}
