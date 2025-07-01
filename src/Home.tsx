import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.heroSection}>
        <h1>Welcome to AgriGenius</h1>
        <p>Your Smart Companion for Sustainable Farming</p>
      </header>

      <section className={styles.featuresSection}>
        <div className={styles.featureCard}>
          <h3>🌱 Eco Shield</h3>
          <p>Protect your crops with smart eco alerts and AI-driven forecasting.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>📊 Crop & Soil Insights</h3>
          <p>Get real-time recommendations for improving soil health and productivity.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>💧 Water Usage Optimization</h3>
          <p>Save water with intelligent usage tracking and irrigation suggestions.</p>
        </div>
      </section>

      <section className={styles.statsSection}>
        <h2>🌍 Live Eco Stats</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statBox}>
            <h3 className={styles.counter}>120+</h3>
            <p>Farmers Joined</p>
          </div>
          <div className={styles.statBox}>
            <h3 className={styles.counter}>5000+</h3>
            <p>Litres of Water Saved</p>
          </div>
          <div className={styles.statBox}>
            <h3 className={styles.counter}>20+</h3>
            <p>Regions Supported</p>
          </div>
        </div>
      </section>

      <section className={styles.leaderboardSection}>
        <h2>🏆 Leaderboard</h2>
        <ul className={styles.leaderboard}>
          <li><span>1. Ramesh Kumar</span> – 3200 pts</li>
          <li><span>2. Sunita Devi</span> – 2900 pts</li>
          <li><span>3. Ali Khan</span> – 2750 pts</li>
        </ul>
      </section>

      <section className={styles.infoSection}>
        <h2>🔍 How It Works</h2>
        <p>AgriGenius uses AI and satellite data to provide eco-friendly, real-time suggestions tailored to your land and crops.</p>
      </section>

      <section className={styles.testimonialSection}>
        <h2>💬 What Farmers Say</h2>
        <div className={styles.testimonial}>
          <p>"AgriGenius helped me save water and increase yield. The app is simple and powerful!"</p>
          <span>– Suresh Patel, Maharashtra</span>
        </div>
      </section>

      <section className={styles.comingSoon}>
        <h2>🗺️ Eco Map – Coming Soon!</h2>
        <p>Visualize your region's eco activity and contribute to your community's green goals.</p>
      </section>

      <footer className={styles.footer}>
        <p>🤝 In partnership with KrishiVikas, JalSuraksha & AgriConnect</p>
      </footer>
    </div>
  );
};

export default Home;
