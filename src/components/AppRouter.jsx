import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Post from "../pages/Post";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {useContext} from "react";
import {AuthContext} from "../contex/contex";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth);
    return (
        <Routes>
            <Route path="/About" element={<About/>} />
            <Route exact path="/posts" element={<Post/>} />
            <Route path="/posts/:postId" element={<PostIdPage />} />
            <Route path="*" element={<Error/>} />
            <Route path="/" element={<Post/>} />
        </Routes>
    );
};

export default AppRouter;
