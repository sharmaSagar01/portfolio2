import React, { useState } from "react";
import "./ContactMe.css";
import imgBack from "../../../src/assets/ContactMe/mail.jpg";
import load1 from "../../../src/assets/ContactMe/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/animations";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading
        subHeading={"Any Question ? Please do contact me."}
        title={"Contact Me"}
      />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {""}
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1500]} />
          </h2>
          <a href="https://www.facebook.com/sa.g.ar.779" target="_blank">
            <i class="fa fa-facebook-square"></i>
          </a>
          {/* <a href=''>
                        <i class="fa fa-google-plus-square"></i>
                        </a> */}
          <a href="https://twitter.com/sa_sagaarpkr" target="_blank">
            <i class="fa fa-twitter-square"></i>
          </a>
          <a href="https://github.com/sagar6462" target="_blank">
            <i class="fa fa-github-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here... </h4>
            <img src={imgBack} alt="Network Problem" />
          </div>
          <form action="" onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Send <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="Image not Loading" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
