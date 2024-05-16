import { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/PostContext";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
/* import useInput from "../hooks/useInput";
 */

const CreatePost = () => {
  const { currentUser } = useContext(AuthContext);
  const { postID } = useParams();
  const { posts, setPosts } = useContext(PostContext);
  const [postBody, setPostBody] = useState("");
  const [title, setTitle] = useState("");
  /*const [userInput, setUserInput] = useState({
    title: "",
    bodyText: "",
    author: "",
  });*/

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  useEffect(() => {
    const updatedPost = posts.find((post) => post.id === parseInt(postID));
    if (updatedPost) {
      setTitle(updatedPost.title);
      setPostBody(updatedPost.bodyText);
    }
  }, [postID, posts]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "postBody") {
      setPostBody(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && postBody) {
      const newPost = {
        id: Date.now(),
        title: title,
        bodyText: postBody,
        author: currentUser.email,
      };
      setPosts([...posts, newPost]);
      setTitle("");
      setPostBody("");
    }
  };

  const handleEdit = () => {
    const updatedPostArray = posts.map((post) => {
      if (post.id === parseInt(postID)) {
        return {
          ...post,
          title: title,
          bodyText: postBody,
        };
      }
      return post;
    });
    setPosts(updatedPostArray);
  };

  return (
    <form className="flex flex-column bg-sky-200 border-2 border-solid border-sky-400">
      <input type="text" name="title" value={title} onChange={handleChange} />
      <input
        type="text"
        name="postBody"
        value={postBody}
        onChange={handleChange}
      />
      <button type="submit" onClick={postID ? handleEdit : handleSubmit}>
        {postID ? "Save" : "Create post"}
      </button>
      {postID && <Link to="/home">Cancel</Link>}
    </form>
  );
};

export default CreatePost;
/*   const { setUserName } = useContext(UserContext);
  const authorInput = useInput();
  const titleInput = useInput();
  const postInput = useInput();

  const onSubmit = (event) => {
    event.preventDefault();

    setUserName(authorInput.value);
    titleInput.reset();
    postInput.reset();
  };

  return (
    <section>
      <h2>Create post</h2>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input type="text" {...titleInput} />
        <label>Write blogpost</label>
        <input type="text" {...postInput} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}; */
