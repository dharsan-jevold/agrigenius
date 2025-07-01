import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "./assets/logo.png";

interface NavbarProps {
  toggleTheme: () => void;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, setIsLoggedIn }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
          AgriGenius
        </div>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/dashboard" className={styles.link}>Dashboard</Link>
          <Link to="/shop" className={styles.link}>Shop</Link>
          <Link to="/about" className={styles.link}>About</Link>
          <Link to="/help" className={styles.link}>Help</Link>
          <button className={styles.toggleButton} onClick={toggleTheme}>🌓</button>
          <div className={styles.profile} ref={dropdownRef}>
            <div className={styles.profileIcon} onClick={() => setShowDropdown(!showDropdown)}>
              Profile
            </div>
            {showDropdown && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownItem} onClick={() => navigate("/settings")}>Settings</div>
                <div className={styles.dropdownItem} onClick={handleLogout}>Logout</div>
              </div>
            )}
          </div>
        </div>
        <button className={styles.hamburger} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/dashboard" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
          <Link to="/shop" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link to="/about" className={styles.link} onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/help" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Help</Link>
          <button className={styles.toggleButton} onClick={toggleTheme}>🌓</button>
          <div className={styles.profile} ref={dropdownRef}>
            <div className={styles.profileIcon} onClick={() => setShowDropdown(!showDropdown)}>
              Profile
            </div>
            {showDropdown && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownItem} onClick={() => navigate("/settings")}>Settings</div>
                <div className={styles.dropdownItem} onClick={handleLogout}>Logout</div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
