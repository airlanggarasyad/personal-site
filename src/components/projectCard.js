import "./styles/projectCard.css";

import { useState, useEffect } from "react";
import fetchImage from "../services/fetchImage";

const ProjectCard = (props) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchImage(props.imageURL)
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        console.error("Error downloading image: ", error);
      });
  }, []);

  return (
    <a
      target="_blank"
      href={props.link}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        className="project-card-container"
        style={CardStyle.projectCardContainer}
      >
        <img
          className="project-img"
          style={CardStyle.projectImage}
          src={imageUrl}
        />
        <div
          className="content-contaiener"
          style={{ padding: "0.5em 1em 1.3em 1em" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "row",
            }}
          >
            <h3 className="project-title" style={CardStyle.projectTitle}>
              {props.title}
            </h3>
            {props.isConfidential ? (
              <div
                style={{
                  background: "#9c0606",
                  margin: "0.3em 0.3em 0 0",
                  padding: "0.2em 0.3em",
                  borderRadius: "4px",
                }}
              >
                <h3
                  style={{
                    color: "white",
                    fontWeight: 400,
                    fontSize: "0.9em",
                  }}
                >
                  confidential
                </h3>
              </div>
            ) : null}
          </div>
          <div
            className="project-tech-stacks"
            style={{ padding: "0.5em 0", display: "flex" }}
          >
            {props.techStacks.map((techStack, i) => (
              <span key={i} style={CardStyle.techStacks}>
                {techStack}
              </span>
            ))}
          </div>
          <div style={{ width: "100%" }}>
            <p style={{ fontSize: "0.8em", margin: 0 }}>{props.description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

const CardStyle = {
  projectCardContainer: {
    background: "rgb(255,255,255)",
    borderRadius: "8px",
    margin: "1em",
    boxShadow: "0px 0px 6px 2px rgba(0,0,0,0.05)",
    transition: "0.3s",
    height: "auto",
  },
  projectImage: {
    borderRadius: "8px",
    aspectRatio: "2.5/1",
    width: "100%",
    objectFit: "cover",
  },
  projectTitle: {
    margin: 0,
    fontSize: "1.2em",
    marginRight: "0.3em",
  },
  techStacks: {
    backgroundColor: "rgba(0,0,0,0.08)",
    fontSize: "0.7em",
    padding: "0.3em 0.6em",
    borderRadius: "6px",
    marginRight: "0.3em",
  },
};
