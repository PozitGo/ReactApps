import React from "react";
import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import AddJoke from "./Pages/AddJoke";
import Jokes from "./Pages/Jokes";
import JokeDetails from "./Pages/JokeDetails";
import Layout from "./Components/layout/Layout";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/jokes" />
        </Route>
        <Route path="/jokes" exact>
          <Jokes />
        </Route>
        <Route path="/jokes/:jokeId">
          <JokeDetails />
        </Route>
        <Route path="/add-joke">
          <AddJoke />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
