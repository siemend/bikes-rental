import React from "react";
import Header from "../common/header/Header";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import Using from "../home/using/Using";
import ChoosePlan from "../home/plan/ChoosePlan";
import Contact from "../common/contact/Contact";
import { Officers } from "../officers/Officers";
import { Messages } from "../messages/Messages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {Signup} from "../sign_up/Signup";
import {Signin} from "../sign_in/Signin";
import {Report} from "../report/Report";


function Pages() {
  const [data, setData] = useState([]);
  const [approved, setApproved] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [admin, setAdmin] = useState(
    localStorage.getItem(localStorage.getItem("admin") || false)
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        "https://sf-final-project-be.herokuapp.com/api/auth/sign_in",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )

      .then((response) => {
        setLoading(false);
        setData(response.data);
        localStorage.setItem("token", response.data.data.token);
        console.log(response);
        if (response.data.data.user.approved === true) {
          setAdmin(!admin);
          localStorage.setItem("admin", true);
        }
        setMessage("");
      })
      .catch((error) => {
        setMessage("You have entered an incorrect username or password");
      });
  };

  return (
    <div className="Pages">
      <Router>
        <Header admin={admin} setAdmin={setAdmin} />
        <Switch>
          <Route exact path="/" element={<Home />}></Route>
        </Switch> 
        <Switch>
          <Route exact path="auth/sign_up" element={<Signup />}></Route>
        </Switch>
        <Switch>
          <Route exact path="/sign_in"><div>Sign in</div></Route>
          <Route
            exact path="/sign_in"
            element={
              <Signin
                admin={admin}
                setAdmin={setAdmin}
                data={data}
                setData={setData}
                password={password}
                setPassword={setPassword}
                setEmail={setEmail}
                message={message}
                email={email}
                handleSubmit={handleSubmit}
                loading={loading}
              />
            }
          ></Route>
          <Route exact path="public/report" element={<Report admin={admin} />}></Route>
          <Route path="/officers" element={<Officers approved={approved} setApproved={setApproved} />}
          ></Route>
          <Route path="/cases/" element={<Messages approved={approved} setApproved={setApproved} />}
          ></Route>
          <Route path="/officers/:id" element={<Officers approved={approved} setApproved={setApproved} />}
          ></Route>
          <Route
            exact path="/cases/:id"
            element={<Messages approved={approved} setApproved={setApproved} />}
          ></Route>
        </Switch>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/signin' component={Signin}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/using' component={Using}></Route>
          <Route exact path='/report' component={Report}></Route>
          <Route exact path='/chooseplan' component={ChoosePlan}></Route>
          <Route exact path='/contact' component={Contact}></Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default Pages