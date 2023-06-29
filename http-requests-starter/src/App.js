import React, { useState, useEffect, useCallback } from "react";

import JokeList from "./components/JokeList";
import "./App.css";
import AddJoke from "./components/AddJoke";

function App() {
  const [Jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(false);

  const fetchJokesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://myproject-65c1b-default-rtdb.firebaseio.com/jokes.json"
      );

      if (!response.ok) {
        throw new Error("Что-то пошло не так");
      }

      const data = await response.json();

      const loadedJokes = [];

      for (const key in data) {
        loadedJokes.push({
          id: key,
          type: data[key].type,
          setup: data[key].setup,
          punchline: data[key].punchline,
        });
      }

      setJokes(loadedJokes);
    } catch (Ex) {
      setError(Ex.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchJokesHandler();
  }, [fetchJokesHandler]);

  async function addJokeHandler(joke) {
    const response = await fetch(
      "https://myproject-65c1b-default-rtdb.firebaseio.com/jokes.json",
      {
        method: "POST",
        body: JSON.stringify(joke),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Шуток не найдено</p>;

  if (Jokes !== null && !Jokes !== undefined && Jokes.length > 0) {
    content = <JokeList jokes={Jokes} />;
  }

  if (Error) {
    content = <p>{Error}</p>;
  }

  if (isLoading) {
    content = <p>Загрузка шуток</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddJoke onAddJoke={addJokeHandler} />
      </section>
      <section>
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
