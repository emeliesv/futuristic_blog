import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { CommentContext } from "../context/CommentContext";
import AddComment from "../components/AddComment";

const SingleBlogPost = () => {
  const { posts } = useContext(PostContext);
  const { comments } = useContext(CommentContext);
  const { postID } = useParams();

  const singlePost = posts.find((post) => {
    return post.id == postID;
  });

  const commentflow = comments.filter((comment) => comment.postID == postID);

  return (
    <section className="flex flex-col border border-purple-950 mx-5 bg-purple-50">
      <Link to="/" className="px-5 font-bold hover:underline">
        Back to posts
      </Link>
      <h2 className="font-bold px-5 text-2xl my-2">{singlePost.title}</h2>
      <h3 className="px-5 italic font-extralight my-2">
        Written by: {singlePost.author}
      </h3>
      <p className="px-5 ">{singlePost.bodyText}</p>
      <div className="my-5">
        <p className="px-5 font-semibold bg-purple-300">Categories:</p>
        <p className="px-5 italic">{singlePost.category}</p>
      </div>
      <div className="mx-5">
        {commentflow.length > 0 ? (
          <h4 className="font-semibold">Comments: {commentflow.length}</h4>
        ) : (
          <h4 className="font-semibold">There are no comments yet</h4>
        )}
        <AddComment postID={postID} />
      </div>
      {commentflow.map((comment) => {
        return (
          <div
            key={comment.id}
            className="mx-5 bg-white border border-purple-900 py-4 px-2 my-5"
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
