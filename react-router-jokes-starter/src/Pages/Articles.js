import React from "react";
import { Link } from "react-router-dom";
const Articles = () => {
  return (
    <section>
      <h1>Articles Page</h1>
      <ul>
        <li>
          <Link to="/articles/a1">Article 1</Link>
        </li>
        <li>
          <Link to="/articles/a2">Article 2</Link>
        </li>
        <li>
          <Link to="/articles/a3">Article 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Articles;
