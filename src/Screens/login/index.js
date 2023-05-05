import React, { useState } from "react";
import "./styles.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // validation logic here
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // validation logic here
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
    setError("");
  };

  return (
    <div className="App">
      <form className="form">
        <h2>{isSignup ? "Sign up" : "Login"}</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        {isSignup && (
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Confirm password"
              required
            />
          </div>
        )}
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          {isSignup ? (
            <button onClick={handleSignup}>Sign up</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </div>
        <div className="toggle">
          {isSignup ? (
            <span>
              Already have an account?{" "}
              <button onClick={toggleSignup}>Login</button>
            </span>
          ) : (
            <span>
              Don't have an account?{" "}
              <button onClick={toggleSignup}>Sign up</button>
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
