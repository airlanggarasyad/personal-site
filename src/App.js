import React, { useState, useEffect } from "react";

import ProjectCard from "./components/projectCard";
import SendMail from "./components/sendMail";
import EducationCard from "./components/education";
import ExperienceCard from "./components/experiences";

import TECH_STACKS from "./constants/techStacks";

import fb from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  getFirestore,
  orderBy,
} from "firebase/firestore";

import "./App.css";
import fetchImage from "./services/fetchImage";

const TitleSection = () => {
  return (
    <div style={{ marginBottom: "5vh" }}>
      <div className="left" style={{ display: "flex", paddingRight: "2em" }}>
        {/* <img
        style={{ width: "8em", height: "8em" }}
        src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Phil_Collins_1_%28cropped%29.jpg"
      /> */}
      </div>
      <div className="right">
        <h1 style={{ marginBottom: 0 }}>Airlangga R. Fidiyanto</h1>
        <h3 style={{ margin: 0, fontSize: "1.1em" }}>
          (Now a) software engineer
        </h3>
        <p>
          {/* Long life learner software engineer mainly focused on Web Development
          and UI/UX design. Interested in computer science, web development,
          IoT, and embedded system.{" "} */}
        </p>
      </div>
    </div>
  );
};

const ProjectSection = (props) => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const initialDisplayCount = 3;

  const handleToggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div>
      <div>
        <h2>
          <span style={{ paddingLeft: 0 }}>🛠️ Projects</span>
        </h2>
      </div>
      <div
        className="project-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "2.2em 0",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {props.data
            .slice(0, showAllProjects ? undefined : initialDisplayCount)
            .map((project, i) => (
              <div className="card" key={i}>
                <ProjectCard {...project} />
              </div>
            ))}
        </div>
        <button
          onClick={handleToggleProjects}
          style={{ marginTop: "1em" }}
          className="show-more-button"
        >
          {showAllProjects ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

const TechStackSection = (props) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const urls = await Promise.all(
          props.data.map(async (item) => {
            const imageUrl = await fetchImage(item.imageURL);
            return { id: item.id, imageUrl };
          })
        );

        setImageUrls(urls);
        setLoading(false); // Set loading to false once all images are fetched
      } catch (error) {
        console.error("Error fetching image URLs:", error);
        setLoading(false); // Make sure to set loading to false in case of an error
      }
    };

    fetchImageUrls();
  }, [props.data]);

  return (
    <div>
      {loading ? (
        <p>Loading images...</p>
      ) : (
        <div>
          <h2>
            <span style={{ paddingLeft: 0 }}>🖥️ Tech Stacks</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", margin: "2.2em 0" }}>
            {props.data.map((stack, i) => (
              <div key={i} className="tech-stacks-icon">
                <img
                  style={{ width: "5em" }}
                  src={imageUrls[i].imageUrl}
                  alt={`Tech Stack ${i}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SocialSection = () => {
  return (
    <div>
      <h2>
        <span style={{ paddingLeft: 0 }}>📝 Let's Get Connected</span>
      </h2>
      <div className="home-mail-container" style={{ margin: "2em" }}>
        <SendMail />
      </div>
    </div>
  );
};

const PublicationSection = () => (
  <div>
    <div>
      <h2>
        <span style={{ paddingLeft: 0 }}>📝 Academic Publication</span>
      </h2>
      <div style={{ margin: "2.2em 1rem" }}>
        <h3>
          Development of Campus Bus Tracker Firmware using GNSS Module on STM32
          Platform
        </h3>
        <span>
          The 2023 International Conference on Digital Business and Technology
          Management
        </span>
        <ul>
          <li>
            Authors: I Wayan Mustika, Agus Bejo,{" "}
            <b>Airlangga Rasyad Fidiyanto</b>, and Dini Wahjoe Hapsari
          </li>
          <li>Publisher: Institute of Electrical and Electronics Engineers</li>
          <li>DOI: TBA</li>
        </ul>
      </div>
    </div>
  </div>
);

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(fb);

        const educationQuery = query(collection(db, "education"));
        const experiencesQuery = query(
          collection(db, "experience"),
          orderBy("expID", "desc")
        );
        const projectQuery = query(
          collection(db, "project"),
          orderBy("projectID", "desc")
        );
        const stackQuery = query(
          collection(db, "stack"),
          orderBy("sID", "desc")
        );

        const educationUnsubscribe = onSnapshot(
          educationQuery,
          (querySnapshot) => {
            let educationArr = [];
            querySnapshot.forEach((doc) => {
              educationArr.push({ ...doc.data(), id: doc.id });
            });
            setData((prevData) => ({ ...prevData, education: educationArr }));
            setIsLoading(false); // Data has been loaded
          }
        );

        const experiencesUnsubscribe = onSnapshot(
          experiencesQuery,
          (querySnapshot) => {
            let experiencesArr = [];
            querySnapshot.forEach((doc) => {
              experiencesArr.push({ ...doc.data(), id: doc.id });
            });
            setData((prevData) => ({
              ...prevData,
              experience: experiencesArr,
            }));
            setIsLoading(false); // Data has been loaded
          }
        );

        const projectUnsubscribe = onSnapshot(projectQuery, (querySnapshot) => {
          let projectArr = [];
          querySnapshot.forEach((doc) => {
            projectArr.push({ ...doc.data(), id: doc.id });
          });
          setData((prevData) => ({ ...prevData, project: projectArr }));
          setIsLoading(false); // Data has been loaded
        });

        const stackUnsubscribe = onSnapshot(stackQuery, (querySnapshot) => {
          let stackArr = [];
          querySnapshot.forEach((doc) => {
            stackArr.push({ ...doc.data(), id: doc.id });
          });
          setData((prevData) => ({ ...prevData, stack: stackArr }));
          setIsLoading(false); // Data has been loaded
        });

        // Return functions to unsubscribe when component is unmounted or updated
        return () => {
          educationUnsubscribe();
          experiencesUnsubscribe();
          projectUnsubscribe();
          stackUnsubscribe();
        };
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    // Render a loading indicator while data is being fetched
    return <p>Loading...</p>;
  }

  return (
    <>
      <TitleSection />
      <ProjectSection data={data.project} />
      <div>
        <div>
          <h2>
            <span style={{ paddingLeft: 0 }}>💼 Experience</span>
          </h2>
        </div>
        <div>
          {data.experience.slice(0).map((experience, i) => (
            <ExperienceCard {...experience} key={i}/>
          ))}
        </div>
      </div>
      <PublicationSection />
      <div>
        <div>
          <h2>
            <span style={{ paddingLeft: 0 }}>🎓 Education</span>
          </h2>
        </div>
        <div className="education-container">
          {data.education.map((education, i) => (
            <EducationCard {...education} key={i}/>
          ))}
        </div>
      </div>
      <TechStackSection data={data.stack} />
      <SocialSection />
    </>
  );
}

export default App;
