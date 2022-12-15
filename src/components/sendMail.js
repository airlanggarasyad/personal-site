import React, { useRef } from "react";
import {
  FaSpotify,
  FaInstagram,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";

const SendMail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2kudn2o",
        "template_dfipvw3",
        form.current,
        "user_82JTKdn9VselWViT649y0"
      )
      .then(
        (result) => {
          alert("Message sent!");
          window.location.reload()
        },
        (error) => {
          console.alert(error.text);
        }
      );
  };

  return (
    <>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "50%", padding: "0.5em" }}>
            <h3 style={{ fontSize: "1.5 em" }}>👇 Send me an e-mail!</h3>
            <form
              ref={form}
              onSubmit={sendEmail}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div style={style.formItem}>
                <label style={style.label}>Name</label>
                <input style={style.input} type="text" name="user_name" />
              </div>
              <div style={style.formItem}>
                <label>Email</label>
                <input style={style.input} type="email" name="user_email" />
              </div>
              <div style={style.formItem}>
                <label>Message</label>
                <textarea style={style.textArea} name="message" />
              </div>
              <div style={style.formItem}>
                <input style={style.button} type="submit" value="Send" />
              </div>
            </form>
          </div>
          <div
            style={{
              width: "50%",
              padding: "0.5em",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.5 em" }}>
                📱 Or visit my social media
              </h3>
              <a
                href="https://open.spotify.com/user/airlanggarsyd"
                target="_blank"
              >
                <div style={style.socialIcon}>
                  <FaSpotify
                    color="#1DB954"
                    size={40}
                    style={{ marginRight: "0.5em" }}
                  />
                  <span>
                    <b>Spotify</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    airlanggarsyd
                  </span>
                </div>
              </a>
              <a
                href="https://github.com/airlanggarasyad"
                target="_blank"
              >
                <div style={style.socialIcon}>
                  <FaGithub
                    color="#333"
                    size={40}
                    style={{ marginRight: "0.5em" }}
                  />
                  <span>
                    <b>GitHub</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    airlanggarasyad
                  </span>
                </div>
              </a>
              <a
                href="https:/instagram.com/airlanggarasyad"
                target="_blank"
              >
                <div style={style.socialIcon}>
                  <FaInstagram
                    color="#833ab4"
                    size={40}
                    style={{ marginRight: "0.5em" }}
                  />
                  <span>
                    <b>Instagram</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    airlanggarasyad
                  </span>
                </div>
              </a>
              <a
                href="airlanggarasyad.com"
              >
                <div style={style.socialIcon}>
                  <FaStackOverflow
                    color="#f48024"
                    size={40}
                    style={{ marginRight: "0.5em" }}
                  />
                  <span>
                    <b>Stack Overflow</b> : Airlangga Fidiyanto
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMail;

const style = {
  label: {
    fontSize: "1em",
  },
  formItem: {
    display: "flex",
    flexDirection: "column",
    margin: "0.2em 0em",
  },
  input: {
    fontFamily: "Roboto Mono",
    fontSize: "1.1em",
    padding: "0.4em 0.8em",
    margin: "0.4em 0",
    border: "1.5px solid rgba(0,0,0,0.3)",
    borderRadius: "8px",
  },
  textArea: {
    fontFamily: "Roboto Mono",
    fontSize: "1.1em",
    padding: "0.4em 0.8em",
    margin: "0.4em 0",
    border: "1.5px solid rgba(0,0,0,0.3)",
    borderRadius: "8px",
    resize: "none",
    height: "20vh",
  },
  button: {
    fontFamily: "Roboto Mono",
    fontSize: "1.1em",
    background: "black",
    color: "white",
    width: "6em",
    padding: "0.3em 1em",
    borderRadius: "1200px",
  },
  socialIcon: {
    display: "flex",
    alignItems: "center",
    margin: "0.5em 0",
  },
};
