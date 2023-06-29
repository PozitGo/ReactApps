import CommentItem from "./CommentItem";
import styles from "./CommentsList.module.css";
import React from "react";
const CommentsList = (props) => {
  return (
    <ul className={styles.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
