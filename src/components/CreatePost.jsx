import { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/PostContext";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { currentUser } = useContext(AuthContext);
  const { postID } = useParams();
  const { posts, setPosts } = useContext(PostContext);
  let [userInput, setUserInput] = useState({
    title: "",
    bodyText: "",
    author: "",
  });
  const navigate = useNavigate();

  /* Jag var tvungen att ändra min const userInput till en let då jag annars fick varningar om att jag försökte ändra ett kontrollerat värde till ett okontrollerat värde. 
  Detta skedde när jag la till min handleEdit-funktion. Varför jag valt att ha value på mina inputs är för att jag vill att de ska vara fyllda med samma data som jag skickat in tidigare när jag ska redigera ett inlägg. */

  useEffect(() => {
    const updatedPost = posts.find((post) => post.id === parseInt(postID));
    if (updatedPost) {
      setUserInput((prevInput) => ({
        ...prevInput,
        title: updatedPost.title,
        bodyText: updatedPost.bodyText,
      }));
    }
    console.log(posts);
  }, [postID, posts]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput) {
      const newPost = {
        id: Date.now(),
        title: userInput.title,
        bodyText: userInput.bodyText,
        author: currentUser.email,
      };
      setPosts([...posts, newPost]);
    }
    setUserInput("");
    navigate("/home");
  };

  const handleEdit = () => {
    const updatedPostArray = posts.map((post) => {
      if (post.id === parseInt(postID)) {
        return {
          ...post,
          title: userInput.title,
          bodyText: userInput.bodyText,
        };
      }
      return post;
    });
    setPosts(updatedPostArray);
    navigate("/home");
  };

  return (
    <form className="flex flex-col w-4/5 shadow-xl pb-5 border border-purple-900 rounded-md">
      <input
        className="py-5 px-4 border-solid rounded-t-md"
        type="text"
        name="title"
        value={userInput.title}
        placeholder="Write title here.."
        onChange={handleChange}
      />
      <input
        className="py-5 px-4 mb-5 min-h-32"
        type="text"
        name="bodyText"
        value={userInput.bodyText}
        placeholder="Write content here.."
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
