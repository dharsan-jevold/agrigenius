import React from "react";
import styles from "./About.module.css";

const team = [
  {
    name: "Dharsan",
    role: "Frontend UI/UX Developer",
    img: "https://i.imgur.com/FWZfM5r.png",
  },
  {
    name: "Hemadharshini",
    role: "Team Lead & Backend Developer",
    img: "https://i.imgur.com/y0yDNhN.png",
  },
  {
    name: "Dharun Kumar",
    role: "AIML Developer",
    img: "https://i.imgur.com/0CA9zZp.png",
  },
  {
    name: "Darshan",
    role: "Content Manager & Testing Lead",
    img: "https://i.imgur.com/kAVTP6q.png",
  },
];

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>Meet Our Team</h1>
      <p className={styles.description}>
        We are a passionate team working on sustainable agriculture and smart farming solutions through AgriGenius.
      </p>
      <div className={styles.teamGrid}>
        {team.map((member, index) => (
          <div className={styles.card} key={index}>
            <img src={member.img} alt={member.name} className={styles.avatar} />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
