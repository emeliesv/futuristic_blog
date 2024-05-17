import { useContext, useState } from "react";
import { CommentContext } from "../context/CommentContext";

const AddComment = ({ postID }) => {
  const { comments, setComments } = useContext(CommentContext);
  const [comment, setComment] = useState({
    body: "",
    author: "anonymous",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment((commentInput) => ({
      ...commentInput,
      [name]: value,
    }));
  };

  const submitComment = (event) => {
    event.preventDefault();
    if (comment) {
      const newComment = {
        id: Date.now(),
        body: comment.body,
        author: comment.author,
        postID: postID,
      };
      setComments([...comments, newComment]);
    }
    setComment({ body: "", author: "anonymous" });
  };

  return (
    <form onSubmit={submitComment}>
      <input
        type="text"
        name="body"
        onChange={handleChange}
        placeholder="Write a comment here.."
      />
      <input
        type="text"
        name="author"
        onChange={handleChange}
        placeholder="Your name.."
      />
      <button type="submit" onClick={submitComment}>
        Add Comment
      </button>
    </form>
  );
};

export default AddComment;
