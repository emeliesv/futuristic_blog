import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import { PostProvider } from "./context/PostContext";
import About from "./pages/About";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import RegisterUser from "./components/RegisterUser";
import PrivateRoutes from "./components/PrivateRoutes";
import CreatePost from "./components/CreatePost";

const App = () => {
  return (
    <PostProvider>
      <BrowserRouter>
        <h1>YAY BLOG</h1>
        <Header />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/edit/:postID" element={<CreatePost />} />
          </Route>

          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/" element={<h1>Public</h1>} />
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
};

export default App;
