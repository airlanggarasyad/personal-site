import ProjectCard from "./components/projectCard";

import PROJECTS from "./constants/projects";
import TECH_STACKS from "./constants/techStacks";

import "./App.css";

function App() {
  return (
    <>
      <div style={{ marginBottom: "5vh" }}>
        {/* <div className="left" style={{ display: "flex", paddingRight: "2em" }}>
          <img
            style={{ width: "8em", height: "8em" }}
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Phil_Collins_1_%28cropped%29.jpg"
          />
        </div> */}
        <div className="rigt" >
          <h1 style={{ marginBottom: 0 }}>Airlangga Fidiyanto</h1>
          <h3 style={{ margin: 0, fontSize: "1.1em" }}>
            Front-end Developer and IoT Enthusiast
          </h3>
          <p>
            Long life learner software engineer mainly focused on Web
            Development and UI/UX design. Interested in computer science, web
            development, IoT, and embedded system.{" "}
          </p>
        </div>
      </div>
      <div>
        <h2>
          <span style={{paddingLeft:0}}>🛠️ Projects</span>
        </h2>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "2.2em 0" }}>
        {PROJECTS.slice(0)
          .reverse()
          .map((project, i) => (
            <div key={i} style={{ width: "33.33%" }}>
              <ProjectCard {...project} />
            </div>
          ))}
      </div>
      <div>
        <h2>
          <span style={{paddingLeft:0}}>🖥️ Tech Stacks</span>
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "2.2em 0" }}>
          {TECH_STACKS.map((stack, i) => (
            <div key={i} className="tech-stacks-icon">
              <img style={{ width: "5em" }} src={stack.imageURL} />
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        <h2>
          <span style={{paddingLeft:0}}>📝 Let's Get Connected</span>
        </h2>
        <div
          style={{ display: "flex", flexWrap: "wrap", margin: "2.2em 0.8em" }}
        >
          LinkedIN
        </div>
      </div> */}
    </>
  );
}

export default App;
