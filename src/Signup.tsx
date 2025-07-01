import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import logo from "./assets/logo.png";

interface SignupProps {
  toggleTheme: () => void;
}

const Signup: React.FC<SignupProps> = ({ toggleTheme }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }
    // Save user logic can be added here
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.themeToggle}>
        <button onClick={toggleTheme}>🌓</button>
      </div>
      <div className={styles.card}>
        <img src={logo} alt="AgriGenius Logo" className={styles.logo} />
        <h2>Create AgriGenius Account</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p onClick={() => navigate("/login")}>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Signup;
