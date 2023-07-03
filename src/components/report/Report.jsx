import React, { useState } from "react";
import "../home/hero.css";
import axios from "axios";
import { useEffect } from "react";

export const Report = () => {
  const [licenseNumber, setLicenseNumber] = useState("");
  const [ownerFullName, setOwnerFullName] = useState("");
  const [color, setColor] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

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
    console.log(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://sf-final-project-be.herokuapp.com/api/public/report",
        {
          ownerFullName: ownerFullName,
          licenseNumber: licenseNumber,
          type: type,
          clientId: ' 1a883ec6-7633-4265-b284-5be7d882927c ', 
          color: color,
          date: date,
          description: description,
        }
      )
      .then((res) => {
        setLicenseNumber("");
        setOwnerFullName("");
        setColor("");
        setType("");
        setDate("");
        setDescription("");
        setMessage("Reqest sent");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log(type);
  }, [type]);
  return (
    <>
      <main className="report">
        <form className="" method="post" onSubmit={handleSubmit}>
          <p>{message}</p>
          <h2>Report a bike theft:</h2>
          <label>Licence number* </label>
          <input
            onChange={handleNumber}
            value={licenseNumber}
            type="text"
            required
          />
          <label>Name and second name* </label>
          <input
            onChange={handleName}
            value={ownerFullName}
            type="text"
            required
          />
          <label>Bike color </label>
          <input onChange={handleColor} value={color} type="text" />
          <label>Date of theft</label>
          <input className='dateTheft' onChange={handleDate} value={date} type="date" />
          <label>Bike color*</label>
          <select onChange={handleType} value={type} required>
            <option value="">Choose bike type</option>
            <option value="general">general</option>
            <option value="sport">sport</option>
          </select>
          <label>Additional information</label>
          <textarea onChange={handleInfo} value={description} type="text" cols='30' rows='10' />
          <button>Report</button>
        </form>
      </main>
    </>
  );
};