import React from "react";
import styles from "./Help.module.css";

const faqs = [
  {
    question: "How do I earn eco-points?",
    answer: "You can earn eco-points by performing eco-friendly tasks such as conserving water, using organic farming practices, or participating in community agriculture events.",
  },
  {
    question: "How does water usage optimization work?",
    answer: "Our AI analyzes weather forecasts, crop type, and soil data to give you smart irrigation suggestions in real time—no extra sensors required.",
  },
  {
    question: "Where can I redeem my eco-points?",
    answer: "Eco-points can be redeemed in the Shop section of the app, where you’ll find tools, seeds, and other farming essentials.",
  },
  {
    question: "How can I contact support?",
    answer: "Use the chatbot on the bottom-right corner for instant assistance or reach out via our Help page contact form (coming soon).",
  },
];

const Help: React.FC = () => {
  return (
    <div className={styles.helpContainer}>
      <h1 className={styles.title}>Need Help?</h1>
      <p className={styles.subtitle}>
        Find answers to frequently asked questions below:
      </p>
      <div className={styles.faqs}>
        {faqs.map((faq, index) => (
          <div className={styles.faqItem} key={index}>
            <h3 className={styles.question}>{faq.question}</h3>
            <p className={styles.answer}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
