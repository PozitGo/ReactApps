import React from "react";
import JokeForm from "../Components/jokes/JokeForm";
const AddJoke = () => {
  const addJokeHandler = (jokeData) => {
    console.log(jokeData);
  };

  return <JokeForm onAddJoke={addJokeHandler} />;
};

export default AddJoke;
