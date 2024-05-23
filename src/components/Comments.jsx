import { useContext } from "react";
import { CommentContext } from "../context/CommentContext";
import AddComment from "./AddComment";

const Comments = ({ postID }) => {
  const { comments } = useContext(CommentContext);

  const filteredComments = comments.filter(
    (comment) => comment.postID === postID
  );

  return (
    <>
      <AddComment postID={postID} />
      {filteredComments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>{comment.body}</p>
            <p className="italic font-extralight">{comment.author}</p>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
