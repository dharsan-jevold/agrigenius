import React from "react";
import styles from "./Shop.module.css";

const products = [
  {
    id: 1,
    name: "Smart Irrigation Kit",
    price: "₹999",
    description: "Save water with automated irrigation.",
    image: "https://i.imgur.com/qK2Z3wN.png",
  },
  {
    id: 2,
    name: "Organic Seed Pack",
    price: "₹199",
    description: "Grow your crops chemical-free.",
    image: "https://i.imgur.com/8z1pBhM.png",
  },
  {
    id: 3,
    name: "Soil Testing Kit",
    price: "₹299",
    description: "Check pH and nutrient levels at home.",
    image: "https://i.imgur.com/I0FQIG4.png",
  },
  {
    id: 4,
    name: "Compost Bin",
    price: "₹799",
    description: "Turn food waste into fertilizer.",
    image: "https://i.imgur.com/F5jsBgX.png",
  },
];

const Shop: React.FC = () => {
  return (
    <div className={styles.shopContainer}>
      <h1 className={styles.pageTitle}>Eco Shop</h1>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>{product.price}</p>
            <button className={styles.button}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
