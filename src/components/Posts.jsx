import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Comments from "./Comments";

/* Om inte inloggad: Tooltip Logga in för att läsa, annars klickbara */

const Posts = () => {
  const { posts, setPosts } = useContext(PostContext);
  const { currentUser } = useContext(AuthContext);

  const handleDelete = (id) => {
    const updatedPostArray = posts.filter((post) => post.id !== id);
    setPosts(updatedPostArray);
  };

  return (
    <div>
      {posts
        .sort((a, b) => b.id - a.id)
        .map((post) => {
          return (
            <div
              className="border-solid border-purple-950 border m-5 p-5 bg-purple-50"
              key={post.id}
            >
              <h3 className="text-purple-800 font-medium text-xl">
                {post.title}
              </h3>
              <p className="italic font-light">{post.author}</p>
              <p className="mb-5">{post.bodyText}</p>
              {currentUser.email === post.author && (
                <div className="flex my-5">
                  <Link className="buttonstyle" to={`/edit/${post.id}`}>
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
              )}
              <Link
                to={`/${post.id}`}
                className="font-bold text-purple-900 underline hover:text-purple-700"
              >
                Read more
              </Link>
              <Comments postID={post.id} />
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
