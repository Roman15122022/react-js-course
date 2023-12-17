import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import About from "./pages/About";
import Post from "./pages/Post";
import Navbar from "./components/UI/navbar/navbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";
const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;
