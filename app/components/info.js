import React from "react";

const info = () => {
  return (
    <div class="container">
      <h1>Adventure Game</h1>
      <p>
        Enter the Game: You can start playing immediately without the need to
        sign in.
      </p>

      <h2>Game Mechanics:</h2>
      <ul>
        <li>
          <strong>Puzzle Generation:</strong> In the background, an LLM
          generates a puzzle, possible solutions, and a list of scenarios that
          will be presented to you.
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
          <strong>Next Scenario:</strong> After making a choice, if the puzzle
          is still solvable, you will be presented with a new scenario.
        </li>
      </ul>

      <h2>Winning and Losing:</h2>
      <ul>
        <li>
          <strong>Winning:</strong> You win if you successfully navigate to the
          correct solution within 10 steps.
        </li>
        <li>
          <strong>Losing:</strong> You lose if you choose a path without a
          solvable solution. Note: Running out of steps is unlikely, as the game
          is designed to be completed within 10 steps.
        </li>
      </ul>
    </div>
  );
};

export default info;
