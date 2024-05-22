import { useState } from "react";

export default function Prompt({ onSubmit, loading }) {
  const [prompt, setPrompt] = useState("");

  return (
    <div>
      {loading ? (
        <div className={styles.responseLoading}>
          <h6>UCCAHN</h6>
          <p className={styles.response}>
            <span></span>
            <span></span>
            <span></span>
          </p>
        </div>
      ) : (
        ""
      )}

      <form
        className={styles.form}
        id="aiRequest"
        onSubmit={(e) => {
          e.preventDefault();
          // fire callback...
          if (prompt === "") {
            return;
          }
          onSubmit(prompt);
          setPrompt("");
        }}
      >
        <input
          className={styles.input}
          type="text"
          placeholder="Enter mission statement..."
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          required
        />
        <input className={styles.button} type="submit" disabled={loading} />
      </form>
    </div>
  );
}
