import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import { PostProvider } from "./context/PostContext";
import { CommentProvider } from "./context/CommentContext";
import About from "./pages/About";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import RegisterUser from "./components/RegisterUser";
import PrivateRoutes from "./components/PrivateRoutes";
import CreatePost from "./components/CreatePost";
import SingleBlogPost from "./pages/SingleBlogPost";

const App = () => {
  return (
    <PostProvider>
      <CommentProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<LandingPage />} />
              <Route path="/userpage" element={<UserPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/edit/:postID" element={<CreatePost />} />
              <Route path="/:postID" element={<SingleBlogPost />} />
            </Route>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<RegisterUser />} />
          </Routes>
        </BrowserRouter>
      </CommentProvider>
    </PostProvider>
  );
};

export default App;
