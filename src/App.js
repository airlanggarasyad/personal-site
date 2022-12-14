import ProjectCard from "./components/projectCard";

import PROJECTS from "./constants/projects";
import TECH_STACKS from "./constants/techStacks";

import './App.css';

function App() {
  return (
    <>
      <div style={{ margin: "0 10vw" }}>
        <div>
          <h2>🛠️ Projects</h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {PROJECTS.slice(0)
            .reverse()
            .map((project, i) => (
              <div key={i} style={{ width: "33.33%" }}>
                <ProjectCard {...project} />
              </div>
            ))}
        </div>
        <div>
          <h2>🖥️ Tech Stacks</h2>
          <div style={{display:"flex"}}>
          {TECH_STACKS.map((stack, i) => (
              <div key={i} className="tech-stacks-icon">
                <img style={{width:"5em"}} src={stack.imageURL}/>
              </div>
            ))}
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
