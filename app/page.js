"use client";

import { GiDiceSixFacesOne } from "react-icons/gi";
import { GiDiceSixFacesTwo } from "react-icons/gi";
import { useState } from "react";
import styles from "./page.module.css";
import info from "./components/info";

export default function Home() {
  const [initialPrompt, SetInitialPrompt] = useState(
    `You find yourself in a dimly lit, cramped server room. The air is thick with the smell of old computers and stale coffee. In front of you, a bank of ancient computers hums and whirs, their screens flickering with lines of code. A piece of paper on the floor catches your eye - it reads 'Meet me at the hackathon registration desk at 9am. Come alone.' The room is otherwise empty, 
    except for a small table in the corner with a laptop and a note that reads 'Use me'.`
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
        <h2>{initialPrompt}</h2>
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
