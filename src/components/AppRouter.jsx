
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Post from "../pages/Post";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/About" element={<About/>} />
            <Route exact path="/posts" element={<Post/>} />
            <Route path="/posts/:postId" element={<PostIdPage />} />
            <Route path="*" element={<Error/>} />
        </Routes>
    );
};

export default AppRouter;
