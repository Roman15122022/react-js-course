import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Post from "../pages/Post";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/posts" element={<Post />} />
            <Route path="*" element={<Error/>} />
        </Routes>
    );
};

export default AppRouter;