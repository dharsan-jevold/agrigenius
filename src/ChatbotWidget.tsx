import React, { useState } from "react";
import styles from "./ChatbotWidget.module.css";

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.chatbotWrapper}>
      {isOpen && (
        <div className={styles.chatbotBox}>
          <div className={styles.chatHeader}>
            <span>AgriGenius Chatbot</span>
            <button onClick={toggleChatbot} className={styles.closeBtn}>×</button>
          </div>
          <div className={styles.chatContent}>
            <p>Hello! 🌾 How can I assist you with farming, weather, or plants?</p>
            <input
              type="text"
              placeholder="Type your question..."
              className={styles.input}
            />
          </div>
        </div>
      )}

      <button className={styles.chatToggle} onClick={toggleChatbot}>
        💬
      </button>
    </div>
  );
};

export default ChatbotWidget;
