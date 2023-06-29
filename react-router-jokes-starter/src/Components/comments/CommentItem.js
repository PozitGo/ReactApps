import styles from "./CommentItem.module.css";
import React from "react";
const CommentItem = (props) => {
  return (
    <li className={styles.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
