import React, { useState } from "react";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";
import "./styles/App.css";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { key: 123123, title: "obj2", body: "text1" },
    { key: 123234, title: "obj3", body: "text2" },
  ]);

  const [input, setInput] = useState(" ");

  const handleCreate = (e) => {
    e.preventDefault();
    setPosts([...posts, { key: Date.now(), body: input }]);
    setInput(" ");
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.key !== post.key));
  };

  return (
    <div className="post">
      <form>
        <MyInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your description"
        ></MyInput>
        <MyButton onClick={handleCreate}>Create new post</MyButton>
      </form>
      <div className="post__list">
        <PostList remove={removePost} posts={posts} />
      </div>
    </div>
  );
}

export default App;
