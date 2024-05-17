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
      {posts.map((post) => {
        return (
          <div
            className="border-solid border-sky-950 border-2 m-5 p-5"
            key={post.id}
          >
            <h3 className="text-sky-800 font-medium">{post.title}</h3>
            <p className="italic font-light">{post.author}</p>
            <p>{post.bodyText}</p>
            {currentUser.email === post.author && (
              <div className="flex">
                <Link
                  className="mx-2 px-2 border-solid border-sky-800 border-2 rounded-full bg-sky-900 text-sky-100"
                  to={`/edit/${post.id}`}
                >
                  Edit
                </Link>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            )}
            <Comments postID={post.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
