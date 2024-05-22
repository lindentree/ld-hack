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
  const [choiceOne, setChoiceOne] = useState("Run towards the exit");
  const [choiceTwo, setChoiceTwo] = useState("look for tools");
  const [showRules, setShowRules] = useState("Rules");

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  const handleOptionOneClick = () => {
    if (showRules) {
      // Handle the click event for option 1 in the "RULES" section
      setInitialPrompt("You check all the exit doors and all are locked");
      setChoiceOne("Run through the window");
      setChoiceTwo("Find a place to hide");
    }
  };

  const handleOptionTwoClick = () => {
    if (showRules) {
      // Handle the click event for option 2 in the "RULES" section
      setInitialPrompt(
        "You find a can of cold Sprite, meanwhile 3 others have turned into zombies"
      );
      setChoiceOne("Keep searching for tools");
      setChoiceTwo("Drink Sprite");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <h1 className={styles.title}>DailyDarkly</h1>
        <button className={styles.help} onClick={toggleRules}>
          {showRules ? "How to play" : "Go back to Game"}
        </button>
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
