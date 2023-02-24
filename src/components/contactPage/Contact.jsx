import React, { useRef } from "react";
import Navbar from "../navigation/Navbar";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { hideAlert } from "../alerts";
import { showAlert } from "../alerts";

function Contact() {
  const inputData = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_13ea9k8",
        "template_vpoq5pl",
        inputData.current,
        "6dDXpbDUVZb9J98Mi"
      )
      .then(
        (result) => {
          hideAlert();
          showAlert("success", "message sent successfully!");
        },
        (error) => {
          showAlert("error", error.text);
        }
      );
  };
  return (
    <div className="container">
      <div className="navbar--styled">
        <Navbar />
      </div>
      <div className="contact--information">
        <div className="contact--description">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            dolorum est nostrum, molestias illo vel aperiam laboriosam sequi
          </p>
        </div>
        <div className="form--sec">
          <h2>Leave a message</h2>
          <form action="" ref={inputData} onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter name" name="name" required />
            <input
              type="text"
              placeholder="Enter subject"
              name="subject"
              required
            />
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Message"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
