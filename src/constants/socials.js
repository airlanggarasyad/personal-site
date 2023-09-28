import {
  FaSpotify,
  FaInstagram,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";

const SOCIAL = [
  {
    title: "GitHub",
    socialName: "airlanggarasyad",
    socialURL: "https://www.github.com/airlanggarasyad",
    socialComponent: (
      <FaGithub color="#333" size={40} style={{ marginRight: "0.5em" }} />
    ),
    socialColor: "#333",
  },
  {
    title: "Stack Overflow",
    socialName: "Airlangga Fidiyanto",
    socialURL: "https://www.airlanggarasyad.com",
    socialComponent: (
      <FaStackOverflow
        color="#f48024"
        size={40}
        style={{ marginRight: "0.5em" }}
      />
    ),
    socialColor: "#f48024",
  },
  {
    title: "Instagram",
    socialName: "airlanggarasyad",
    socialURL: "https://www.instagram.com/airlanggarasyad",
    socialComponent: (
      <FaInstagram color="#833ab4" size={40} style={{ marginRight: "0.5em" }} />
    ),
    socialColor: "#833ab4",
  },
  {
    title: "Spotify",
    socialName: "airlanggarsyd",
    socialURL: "https://open.spotify.com/user/airlanggarsyd",
    socialComponent: (
      <FaSpotify color="#1DB954" size={40} style={{ marginRight: "0.5em" }} />
    ),
    socialColor: "#333",
  },
];

export default SOCIAL;
