import { createContext, useState, useEffect } from "react";

export const CommentContext = createContext();

export const CommentProvider = (props) => {
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")) || [
      {
        body: "Wow! Insiktsfullt",
        author: "Jag är också anonym..",
        postID: 1,
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      {props.children}
    </CommentContext.Provider>
  );
};
