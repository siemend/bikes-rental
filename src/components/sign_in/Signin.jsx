import React from "react";

export const Signin = ({
  admin,
  password,
  setPassword,
  email,
  setEmail,
  message,
  handleSubmit,
  loading,
}) => {
  return (
    <main>
      {(loading && (
        <div className="loading" style={{ alignSelf: "center" }}>
          loading...
        </div>
      )) ||
        (!admin && (
          <div style={{ marginTop: "90px" }} className="report">
           
            <form className="formSignin" onSubmit={handleSubmit}>
              <h2>Please log in</h2>
              <label>E-mail</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                required
              />
              <label>Password</label>
              <input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button style={{ margin: "30px 0 20px 0" }} className="register">
                Sign in
              </button>

              <p>{message}</p>
            </form>
          </div>
        )) }
    </main>
  );
};
