import React from "react";

const PostItem = (props) => {
  return (
    <div className="post__item">
      <div className="post__body">
        <strong>{props.number}: </strong>
        {props.post.body}
      </div>
      <div className="delete__btn">
        <button onClick={() => props.remove(props.post)}>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
