"use client";

import { MdOutlineArrowCircleRight } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic here for handling the input value, like calling the Gen AI API
    console.log("Input value:", inputValue);
    // Reset input value
    setInputValue("");
  };

  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <h1 className={styles.title}>Adventure Game</h1>
      </div>
      <div className={styles.description}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your adventure command..."
            className={styles.input}
          />
          <MdOutlineArrowCircleRight type="submit" className={styles.button} />
        </form>
      </div>
    </main>
  );
}
