import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, remove }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <PostItem remove={remove} post={post} number={index + 1} />
      ))}
    </div>
  );
};

export default PostList;
