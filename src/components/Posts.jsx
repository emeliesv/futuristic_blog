import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

/* Om inte inloggad: Tooltip Logga in för att läsa, annars klickbara */

const Posts = () => {
  const { posts } = useContext(PostContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3 className="text-pink-700">{post.title}</h3>
            <p>{post.author}</p>
            <p>{post.bodyText}</p>
            {currentUser.email === post.author && (
              <>
                <Link to={`/edit/${post.id}`}>Edit</Link>
                <button>Delete</button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
