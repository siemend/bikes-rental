import React from "react";
import { useState } from "react";
import axios from "axios";
import "../home/hero.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { OfficerId } from "./OfficerId";

export const Officers = ({ setApproved }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [firstName, setName] = useState("");
  const [lastName, setSurname] = useState("");
  const [info, setInfo] = useState([]);
  const [newWorker, setNewWorker] = useState(false);
  const [detail, setDetail] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  
  const allWorkers = async () => {
    setLoading(true);
    const result = await axios.get(
      "https://sf-final-project-be.herokuapp.com/api/officers/",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    setLoading(false);
    setInfo(result.data.officers);
    setApproved(result.data.officers);
  };

  useEffect(() => {
    allWorkers();
  }, [newWorker]);

  
  const changeMail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://sf-final-project-be.herokuapp.com/api/officers",
        { email, password, firstName, lastName },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setName("");
        setPassword("");
        setEmail("");
        setSurname("");
        setMessage("Новый сотрудник успешно зарегистрирован");
        allWorkers();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAdd = () => {
    setNewWorker(!newWorker);
  };
  const handleClose = () => {
    setNewWorker(!newWorker);
    setMessage("");
  };

  return (
    <main>
      <h2 className="title">Employee list</h2>
      <div className="officerContainer">
        <ol className="officers">
          {(loading && <div className="loading">loading...</div>) ||
             info.map((worker) => (
              <div key={worker._id} className="approve">
                <Link
                  onClick={() => setDetail(!detail)}
                  className="link"
                  to={`/officers/${worker._id}`}
                >
                  <li>{worker.email}</li>
                </Link> 
              </div>
            ))}
        </ol>
        {(info.length === 0 && <div></div>) || (
          <button className="addButton" onClick={handleAdd}>
            Add employee
          </button>
        )}
        {(newWorker && (
          <form method="post" className="addOfficer" onSubmit={handleSubmit}>
            <div className="relat">
              <span
                style={{
                  color: "white",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                {message}
              </span>
              <label>E-mail </label>
              <input
                onChange={changeMail}
                type="text"
                name="email"
                value={email}
                required
              />

              <label>Password</label>
              <input
                onChange={changePassword}
                type="password"
                name="password"
                value={password}
                required
              />

              <label>Name</label>
              <input
                onChange={changeName}
                type="text"
                name="name"
                value={firstName}
              />

              <label>Surname</label>
              <input
                onChange={changeSurname}
                type="text"
                name="surname"
                value={lastName}
              />
              <span onClick={handleClose} className="close">
                X
              </span>
              <button>Add</button>
            </div>
          </form>
        )) ||
          (detail && (
            <OfficerId
              detail={detail}
              setDetail={setDetail}
              info={info}
              allWorkers={allWorkers}
            />
          )) ||
          null}
      </div>
    </main>
  );
};