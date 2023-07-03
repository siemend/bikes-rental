import React from "react";
import "../home/hero.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const OfficerId = ({ detail, setDetail, info, allWorkers }) => {
  const { id } = useParams();
  let officer = info.find(({ _id }) => _id === id);
  const [editMode, setEdit] = useState(false);
  const [password, setPassword] = useState("");
  const [firstName, setName] = useState(officer.firstName);
  const [lastName, setSurname] = useState(officer.lastName);
  const [approved, setApproved] = useState(officer.approved);

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(!editMode);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(!editMode);

    axios
      .put(
        `https://sf-final-project-be.herokuapp.com/api/officers/${officer._id}`,
        {
          firstName: firstName,
          lastName: lastName,
          approved: approved,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        allWorkers();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(
        `https://sf-final-project-be.herokuapp.com/api/officers/${officer._id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        allWorkers(); 
        setDetail(!detail); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <main className="details">
      <div className="businessCard">
        <div className="detailContainer">
          <div>
            <Link to={`/officers/`}>
              <span className="link" onClick={() => setDetail(!detail)}>
                X
              </span>
            </Link>

            <form className="surname">
              <label htmlFor="">Name:</label>
              <input
                onChange={(e) => setName(e.target.value)}
                disabled={!editMode ? true : false}
                type="text"
                value={firstName}
              />
              <label htmlFor="">Second name:</label>
              <input
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                value={lastName}
                disabled={!editMode ? true : false}
              />
              <label>E-mail:</label>
              <input type="text" value={officer.email} disabled />
              <label>Password:</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                disabled
              />
              <label>ID number:</label>
              <input type="text" value={officer._id} disabled />
              <div className="approved">
                <label>Approved</label>
                <input
                  type="checkbox"
                  value={approved}
                  disabled={!editMode ? true : false}
                  checked={approved}
                  onChange={() => setApproved(!approved)}
                />
              </div>
              <div className="butts">
                {(!editMode && (
                  <button className="edit" onClick={handleEdit}>
                    redact
                  </button>
                )) || (
                  <button className="saveRedact" onClick={handleSubmit}>
                    save
                  </button>
                )}
                <button className="delete" onClick={handleDelete}>
                  remove
                </button> 
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};