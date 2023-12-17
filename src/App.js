import {BrowserRouter} from 'react-router-dom';
import Navbar from "./components/UI/navbar/navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./contex/contex";
import {useState} from "react";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;
