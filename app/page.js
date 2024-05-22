"use client";

import { GiDiceSixFacesOne } from "react-icons/gi";
import { GiDiceSixFacesTwo } from "react-icons/gi";
import { useState } from "react";
import styles from "./page.module.css";
import info from "./components/info";

export default function Home() {
  const [initialPromtp, SetInitialPromtp] = useState(
    "You are at Devcon hackathon, it suddenly becomes dark, the doors are locked, and someone just turned into a zombie, what do you do next:"
  );
  const [inputValue, setInputValue] = useState("");
  const [rules, setRules] = useState(0);

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
        <h1 className={styles.title}>DailyDarkly</h1>
        <button className={styles.help}>How to play</button>
      </div>

      <div className={styles.text}>
        <h2>{initialPromtp}</h2>
        <br />
      </div>

      <div className={styles.userInput}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className={styles.prompt}>
            Option 1: Do you carefully inspect the painting on the wall
          </p>
          <GiDiceSixFacesOne className={styles.option1} />
          <GiDiceSixFacesTwo className={styles.option2} />
          <p className={styles.prompt}>
            Option 2: check the drawers of the desk?
          </p>
        </form>
      </div>
    </main>
  );
}
