import { createContext, useState, useEffect } from "react";

/* Koppla ihop med createpost */

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || [
      {
        id: 1,
        title: "My first blogpost",
        bodyText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis lectus ligula, a porta lacus bibendum pulvinar. Curabitur consectetur odio vel ornare condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed rhoncus euismod placerat. In in facilisis enim. Proin massa magna, ornare a dolor a, interdum sollicitudin tortor. Mauris sollicitudin vehicula mattis. Donec vitae finibus quam. Nulla ultricies ultrices enim, et placerat diam venenatis id. Quisque at eleifend eros, vitae mollis neque. Morbi condimentum ipsum cursus lorem tempor, sed condimentum tortor condimentum. Morbi eu risus vitae leo aliquet mollis in et enim.     Pellentesque vitae erat consequat, maximus magna in, aliquam sapien. Nam ac porta lectus. Duis ex eros, tristique id augue sed, suscipit vestibulum leo. Cras fringilla sollicitudin nunc accumsan tristique. In vulputate at mi nec imperdiet. Maecenas ultricies justo sit amet tortor euismod, eget tempor elit congue. Etiam sodales dictum posuere. Praesent vulputate aliquet tellus ac consequat. Phasellus dui tellus, tincidunt id porttitor nec, hendrerit eu lorem.",
        author: "Anonymous",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};
