import React from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../Components/comments/Comments";
import HighlightedJoke from "../Components/jokes/HighlightedJoke";

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
const JokeDetails = () => {
  const params = useParams();
  const Joke = DUMMY_JOKES.find((joke) => joke.id === params.jokeId);

  if (!Joke) {
    return <h1>Шуток не найдено</h1>;
  }

  return (
    <React.Fragment>
      <HighlightedJoke text={Joke.text} topic={Joke.topic} />
      <Route path="/jokes/:jokeId/comments">
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default JokeDetails;
