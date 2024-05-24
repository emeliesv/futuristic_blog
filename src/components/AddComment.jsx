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
    <form onSubmit={submitComment} className="flex flex-col max-w-64">
      <input
        className="h-12 my-1 px-2 border border-solid border-purple-950"
        type="text"
        name="body"
        onChange={handleChange}
        placeholder="Write a comment here.."
      />
      <input
        className="h-12 my-1 px-2 border border-solid border-purple-950"
        type="text"
        name="author"
        onChange={handleChange}
        placeholder="Your name.."
      />
      <button type="submit" onClick={submitComment} className="text-sm my-2">
        Add Comment
      </button>
    </form>
  );
};

export default AddComment;
