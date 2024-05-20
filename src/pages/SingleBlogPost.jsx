import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { CommentContext } from "../context/CommentContext";

const SingleBlogPost = () => {
  const { posts } = useContext(PostContext);
  const { comments } = useContext(CommentContext);
  const { postID } = useParams();

  const singlePost = posts.find((post) => {
    return post.id == postID;
  });

  const commentflow = comments.filter((comment) => comment.postID == postID);

  return (
    <section className="flex flex-col px-5 border border-purple-950 mx-5 bg-purple-50">
      <h2 className="font-bold text-2xl my-2">{singlePost.title}</h2>
      <h3 className="italic font-extralight my-2">By: {singlePost.author}</h3>
      <p>{singlePost.bodyText}</p>
      {commentflow.map((comment) => {
        return (
          <div
            key={comment.id}
            className="bg-purple-50 border border-purple-900 py-4 px-2 my-5"
          >
            <p className="border-b border-purple-100">{comment.body}</p>
            <p className="italic font-extralight">{comment.author}</p>
          </div>
        );
      })}
    </section>
  );
};

export default SingleBlogPost;
