import './styles/projectCard.css'

const ProjectCard = (props) => {
  return (
    <div
      className="project-card-container"
      style={CardStyle.projectCardContainer}
    >
      <img
        className="project-img"
        style={CardStyle.projectImage}
        src={props.imageURL}
      />
      <div className="content-contaiener" style={{ padding: "1em" }}>
        <h3 className="project-title" style={CardStyle.projectTitle}>
          {props.title}
        </h3>
        <div
          className="project-tech-stacks"
          style={{ padding: "0.5em 0", display: "flex" }}
        >
          {props.techStacks.map((techStack, i) => (
            <span key={i} style={CardStyle.techStacks}>{techStack}</span>
          ))}
        </div>
        <div style={{ width: "100%" }}>
          <p style={{ fontSize: "0.8em", margin: 0 }}>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

const CardStyle = {
  projectCardContainer: {
    background: "rgb(255,255,255)",
    borderRadius: "8px",
    margin: "1em",
    boxShadow: "0px 0px 6px 2px rgba(0,0,0,0.05)",
    transition: "0.3s"
  },
  projectImage: {
    borderRadius: "8px",
    aspectRatio: "2.5/1",
    width: "100%",
    objectFit: "cover",
  },
  projectTitle: {
    margin: 0,
  },
  techStacks: {
    backgroundColor: "rgba(0,0,0,0.08)",
    fontSize: "0.7em",
    padding: "0.3em 0.6em",
    borderRadius: "6px",
    marginRight: "0.3em",
  },
};
