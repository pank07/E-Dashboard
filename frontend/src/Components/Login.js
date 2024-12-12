import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []); // Dependency array ensures this runs only once

  const handleLogin = async () => {
    if (!email || !password) {
      console.warn("Email and password are required.");
      alert("Please enter both email and password.");
      return;
    }

    console.log("Attempting login with", { email, password });

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      console.warn("API Response:", data);

      if (data.name) {
        // Store user info and redirect
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      } else {
        alert("Please enter correct details");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your email and password.");
    }
  };

  return (
    <div className="container-fluid form-2 col-12">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent form submission reload
          handleLogin();
        }}
      >
        <h2>Welcome Login Page</h2>
        <div className="col-4 mt-5">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
        </div>
        <div className="col-4">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
        </div>
        <div className="wel-btn">
          <button type="submit" className="btn btn-primary mb-5 mx-3">
            Login
          </button>
          <p>or</p>
          <Link to="/signup">
            <button type="button" className="btn btn-success mx-3">
              Sign Up
            </button>
          </Link>
        </div>
        <p className="forgot">
          <Link to="/">Forgot password?</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
