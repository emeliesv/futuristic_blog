import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Comments from "./Comments";

const Posts = () => {
  const { posts, setPosts } = useContext(PostContext);
  const { currentUser } = useContext(AuthContext);
  const [categoryPosts, setCategoryPosts] = useState([]);

  const handleDelete = (id) => {
    const updatedPostArray = posts.filter((post) => post.id !== id);
    setPosts(updatedPostArray);
  };

  const filterByCategory = (category) => {
    if (category === "All") {
      setCategoryPosts([]);
    } else {
      const filteredByCategory = posts.filter(
        (post) => post.category == category
      );
      setCategoryPosts(filteredByCategory);
    }
  };

  const postList = categoryPosts.length > 0 ? categoryPosts : posts;

  return (
    <div>
      <div className="flex flex-wrap justify-around">
        <button onClick={() => filterByCategory("All")} className="my-2">
          All
        </button>
        <button onClick={() => filterByCategory("Everyday")} className="my-2">
          Everyday
        </button>
        <button onClick={() => filterByCategory("Cars")} className="my-2">
          Cars
        </button>
        <button onClick={() => filterByCategory("Garden")} className="my-2">
          Garden
        </button>
        <button onClick={() => filterByCategory("Cooking")} className="my-2">
          Cooking
        </button>
      </div>
      {postList
        .sort((a, b) => b.id - a.id)
        .map((post) => {
          return (
            <div
              className="border-solid border-purple-950 border m-5 p-5 bg-purple-50 max-w-2xl"
              key={post.id}
            >
              <h3 className="text-purple-800 font-medium text-xl">
                {post.title}
              </h3>
              <p className="italic font-light">Written by: {post.author}</p>
              <p className="mb-5">{post.bodyText}</p>
              <p className="italic font-medium">{post.category}</p>
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
