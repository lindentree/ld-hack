"use client";

import { GiDiceSixFacesOne } from "react-icons/gi";
import { GiDiceSixFacesTwo } from "react-icons/gi";
import { useState } from "react";
import styles from "./page.module.css";
import info from "./components/info";

export default function Home() {
  const [initialPrompt, setInitialPrompt] = useState(
    "You are at Devcon hackathon, it suddenly becomes dark, and someone just turned into a zombie, what do you do next:"
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
      setInitialPrompt("You Win!!");
      setChoiceOne("Play again.");
      setChoiceTwo("Exit.");
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

      {showRules ? (
        <div className={styles.gameContainer}>
          <div className={styles.text}>
            <h2>{initialPrompt}</h2>
            <br />
          </div>
          <div className={styles.userInput}>
            <form className={styles.form}>
              <div className={styles.option}>
                <h3 className={styles.prompt}>
                  Option 1: <strong>{choiceOne}</strong> ?
                </h3>
                <GiDiceSixFacesOne
                  className={styles.option1}
                  onClick={handleOptionOneClick}
                />
              </div>
              <div className={styles.option}>
                <h3 className={styles.prompt}>
                  Option 2: <strong>{choiceTwo}</strong> ?
                </h3>
                <GiDiceSixFacesTwo
                  className={styles.option2}
                  onClick={handleOptionTwoClick}
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className={styles.gameContainer}>
          <h1>Adventure Game</h1>
          <p>
            Enter the Game: You can start playing immediately without the need
            to sign in.
          </p>

          <h2>Game Mechanics:</h2>
          <ul>
            <li>
              <strong>Puzzle Generation:</strong> In the background, an LLM
              generates a puzzle, possible solutions, and a list of scenarios
              that will be presented to you.
            </li>
            <li>
              <strong>First Scenario:</strong> The game begins with the first
              scenario displayed prominently on your screen.
            </li>
            <li>
              <strong>Making Choices:</strong> You will have two buttons, each
              representing a choice. Select one of the two choices to proceed.
            </li>
            <li>
              <strong>Next Scenario:</strong> After making a choice, if the
              puzzle is still solvable, you will be presented with a new
              scenario.
            </li>
          </ul>

          <h2>Winning and Losing:</h2>
          <ul>
            <li>
              <strong>Winning:</strong> You win if you successfully navigate to
              the correct solution within 10 steps.
            </li>
            <li>
              <strong>Losing:</strong> You lose if you choose a path without a
              solvable solution. Note: Running out of steps is unlikely, as the
              game is designed to be completed within 10 steps.
            </li>
          </ul>
        </div>
      )}
    </main>
  );
}
