import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import SOCIALS from "../constants/socials";

import "./styles/sendMail.css";

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
          window.location.reload();
        },
        (error) => {
          console.alert(error.text);
        }
      );
  };

  return (
    <>
      <div
        className="social-container"
        style={{ display: "flex", alignItems: "center" }}
      >
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
            <h3 style={{ fontSize: "1.5 em" }}>📱 Or visit my social media</h3>
            <div style={{ margin:"0.8em 0"}}>
              {SOCIALS.map((social, i) => (
                <a href={social.socialURL}>
                  <div style={style.socialIcon}>
                    {social.socialComponent}
                    <div style={{ display: "flex", flexDirection: "column", margin:"0.3em 0" }}>
                      <span>
                        <b>{social.title}</b>
                      </span>
                      <span>{social.socialName}</span>
                    </div>
                  </div>
                </a>
              ))}
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
