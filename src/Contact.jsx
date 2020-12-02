import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classnames from "classnames";
import database from "./Firebase.js";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { register, handleSubmit, errors } = useForm({});

  const handleForm = () => {
    database
      .collection("contact")
      .add({
        name: name,
        email: email,
        message: message,
        Date: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((ec) => {
        alert("message send successful");
        console.log(ec);
      })
      .catch((e) => {
        alert(e);
      });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <div className="col-md-5 " style={{ margin: "0 auto", width: "80%" }}>
        <div
          className="card 
          shadow p-3 mb-5 bg-white rounded"
        >
          <div className="card-body ">
            <h1
              className="text-center text-primary"
              style={{ fontFamily: "sans-serif" }}
            >
              Contact Us
            </h1>
            <form
              className="form"
              onSubmit={handleSubmit(handleForm)}
              style={{ marginTop: "10px" }}
            >
              <label>FullName</label>
              <br />
              <input
                name="name"
                type="name"
                placeholder="name"
                value={name}
                autoCorrect={""}
                className={classnames("form-control", {
                  "is-invalid": errors.name,
                })}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                ref={register({
                  required: true,
                })}
              />
              {errors.name?.type === "required" && (
                <div className="invalid-feedback"> This field is required</div>
              )}
              <br />
              <label>Email</label>
              <br />
              <input
                type="email"
                value={email}
                placeholder="Email"
                name="email"
                className={classnames("form-control", {
                  "is-invalid": errors.email,
                })}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                ref={register({
                  required: "This field is required",
                  pattern: {
                    value: /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "please enter valid email",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback"> {errors.email.message}</div>
              )}
              <br />
              <label>message</label>
              <br />
              <textarea
                name="message"
                className={classnames("form-control", {
                  "is-invalid": errors.message,
                })}
                value={message}
                rows="2"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                ref={register({
                  required: true,
                })}
              ></textarea>
              {errors.message?.type === "required" && (
                <div className="invalid-feedback"> This field is required</div>
              )}
              <br />
              <button type="submit " className="submit-btn ">
                send
                <SendIcon style={{ marginLeft: "5px" }} />
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
