import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.pageTitle}>Dashboard</h1>

      <div className={styles.statsSection}>
        <div className={styles.statCard}>
          <h3>Eco Points</h3>
          <p>1,250</p>
        </div>
        <div className={styles.statCard}>
          <h3>Water Saved</h3>
          <p>320 Liters</p>
        </div>
        <div className={styles.statCard}>
          <h3>Active Fields</h3>
          <p>3</p>
        </div>
        <div className={styles.statCard}>
          <h3>Optimizations</h3>
          <p>5</p>
        </div>
      </div>

      <div className={styles.insightsSection}>
        <h2>Water Usage Insights</h2>
        <p>
          You've saved 14% more water this week compared to last week. Keep up
          the sustainable practices!
        </p>
      </div>

      <div className={styles.recentActivity}>
        <h2>Recent Activity</h2>
        <ul>
          <li>✅ Irrigation adjusted on Field 1</li>
          <li>🌱 Crop rotation strategy updated</li>
          <li>💧 50L water saved using smart schedule</li>
          <li>📈 Leaderboard rank improved to #8</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
