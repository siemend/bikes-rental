import React from 'react';
import { useState } from "react";
import "./signup.css";
import axios from "axios";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [clientId, setClientId] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      
      axios
        .post(
          "https://sf-final-project-be.herokuapp.com/api/auth/sign_up",
          { email, password, firstName, lastName, clientId },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(
          (response) => {
            setEmail("");
            setPassword("");
            setFirstName("");
            setLastName("");
            setClientId("");
            setMessage("You have successfully registrated!");
            console.log(response);
          },
          {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          }
        )
        .catch((error) => {
          setMessage(error.response.data.message);
        });
    };
  
    const changeMail = (e) => {
      setEmail(e.target.value);
    };
    const changePassword = (e) => {
      setPassword(e.target.value);
    };
    const changeName = (e) => {
      setFirstName(e.target.value);
    };
    const changeSurname = (e) => {
      setLastName(e.target.value);
    };
    const changeId = (e) => {
      setClientId(e.target.value);
    };
  
    return (
      <main className="report">
        <form className="formPublic" method="post" onSubmit={handleSubmit}>
          <h2>Please fillup this Registration form</h2>
          <label>
            E-mail* <br />
            <input
              onChange={changeMail}
              type="text"
              name="email"
              value={email}
              required
            />
          </label>
          <label>
            Password* <br />
            <input
              onChange={changePassword}
              type="password"
              name="password"
              value={password}
              required
            />
          </label>
          <label>
            Name <br />{" "}
            <input
              onChange={changeName}
              type="text"
              name="name"
              value={firstName}
            />
          </label>
          <label>
            Second name <br />
            <input
              onChange={changeSurname}
              type="text"
              name="second name"
              value={lastName}
            />
          </label>
          <label>
            Client ID* <br />{" "}
            <input
              onChange={changeId}
              type="text"
              name="client id"
              value={clientId}
              required
            />
          </label>
          <button style={{ width: "200px", marginTop: "15px" }}>
            REGISTER
          </button>
          <p style={{ textAlign: "center", marginTop: "20px" }}>{message}</p>
        </form>
      </main>
    );
  };