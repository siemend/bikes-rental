import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "../home/hero.css";

export const ForAuth = ({
  newMessage,
  setNewMessage,
  approved,
  setApproved,
}) => {
  const [licenseNumber, setLicenseNumber] = useState("");
  const [ownerFullName, setOwnerFullName] = useState("");
  const [color, setColor] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [officer, setOfficer] = useState("");

  let listOfApproved = approved.filter((officer) => officer.approved === true);
  const handleNumber = (e) => {
    setLicenseNumber(e.target.value);
  };
  const handleName = (e) => {
    setOwnerFullName(e.target.value);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleInfo = (e) => {
    setDescription(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  };
  const handleOfficer = (e) => {
    const chosenId = e.target.value;
    const chosenPerson = approved.filter((p) => p._id === chosenId)[0];
    setOfficer(chosenPerson._id);
  };

  useEffect(() => {
    setOfficer(officer);
  }, [officer]);
  useEffect(() => {
    setType(type);
  }, [type]);
  useEffect(() => {
    allWorkers();
  }, [newMessage]);

  const allWorkers = async () => {
    const result = await axios.get(
      "https://sf-final-project-be.herokuapp.com/api/officers/",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    setApproved(result.data.officers);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://sf-final-project-be.herokuapp.com/api/cases/",
        {
          licenseNumber,
          ownerFullName,
          color,
          date,
          description,
          type,
          officer,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setLicenseNumber("");
        setOwnerFullName("");
        setColor("");
        setType("");
        setDate("");
        setDescription("");
        setMessage("Заявка отправлена");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="modalForm" method="post" onSubmit={handleSubmit}>
      <h2>Report Theft</h2>
      <p>{message}</p>
      <div className="modalSubContainer">
        <span onClick={() => setNewMessage(!newMessage)}>X</span>

        <div>
          <label>Responsible employee</label>
          <select onChange={handleOfficer} value={officer}>
            <option>Choose employee</option>
            {listOfApproved.map((officer) => (
              <option key={officer._id} value={officer._id}>
                {officer.firstName} {officer.lastName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Licence number</label>
          <input
            onChange={handleNumber}
            value={licenseNumber}
            type="text"
            required
          />
          <label>Full name</label>
          <input
            onChange={handleName}
            value={ownerFullName}
            type="text"
            required
          />
        </div>
        <div>
          <label>Bike color</label>
          <input onChange={handleColor} value={color} type="text" />
          <label>Date of theft</label>
          <input onChange={handleDate} value={date} type="date" />
        </div>
        <div>
          <label>Additional information</label>
          <input onChange={handleInfo} value={description} type="text" />
          <label>Bike type</label>
          <select onChange={handleType} value={type} required>
            <option value="">Choose bike type</option>
            <option value="general">general</option>
            <option value="sport">sport</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};