import React from "react";
import JokeList from "../Components/jokes/JokeList";

const DUMMY_JOKES = [
  {
    id: "j1",
    topic: "Programming",
    text: "Now many programmers does it take to change a light bulb? None - It`s a hardware problem",
  },
  {
    id: "j2",
    topic: "General",
    text: "Now many bones are in the human hand? A handful of them.",
  },
];
const Jokes = () => {
  return <JokeList jokes={DUMMY_JOKES} />;
};

export default Jokes;
