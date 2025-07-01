import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import logo from "./assets/logo.png";

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn, toggleTheme }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !password) {
      alert("Please fill in all fields");
      return;
    }
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.themeToggle}>
        <button onClick={toggleTheme}>🌓</button>
      </div>
      <div className={styles.card}>
        <img src={logo} alt="AgriGenius" className={styles.logo} />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
        </form>
        <p onClick={() => navigate("/signup")}>Don't have an account? Sign Up</p>
      </div>
    </div>
  );
};

export default Login;
