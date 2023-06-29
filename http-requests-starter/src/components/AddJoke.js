import React, { useRef } from "react";
import styles from "./AddJoke.module.css";
function AddJoke(props) {
  const typeRef = useRef("");
  const setupRef = useRef("");
  const punchlineRef = useRef("");

  function SumbitHandler(event) {
    event.preventDefault();

    const joke = {
      type: typeRef.current.value,
      setup: setupRef.current.value,
      punchline: punchlineRef.current.value,
    };

    props.onAddJoke(joke);
  }

  return (
    <form onSubmit={SumbitHandler}>
      <div className={styles.control}>
        <label htmlFor="type">Type</label>
        <input type="text" id="type" ref={typeRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="setup">Type</label>
        <textarea rows={5} type="text" id="setup" ref={setupRef}></textarea>
      </div>
      <div className={styles.control}>
        <label htmlFor="punchline">Type</label>
        <textarea
          rows={5}
          type="text"
          id="punchline"
          ref={punchlineRef}
        ></textarea>
      </div>
      <button>Add Joke</button>
    </form>
  );
}

export default AddJoke;
