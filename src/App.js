import './App.scss';
import React, {useState} from "react";
import {ThemeContext, themes} from "./context"
import {ThemeProvider, createTheme} from "@material-ui/core/styles";

import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import ApiPage from "./pages/ApiPage";
import HomePage from "./pages/HomePage";
import ChatsPage from "./pages/ChatsPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage";
import Messages from "./components/Messages";
import {useSelector} from "react-redux";
import {authSelectorCurrentUser} from "./redux/reducers/authReducer/authSelector";


const themeMui = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3f51b5',
        }
    },
});

function App() {
    const [theme, setTheme] = useState(themes.light);
    const user = useSelector(authSelectorCurrentUser);

    const toggleTheme = () => {
        setTheme(prevState => prevState === themes.light ? themes.dark : themes.light);
    }

    return (
        <ThemeProvider theme={themeMui}>
            <ThemeContext.Provider value={{themes: theme, toggleTheme: toggleTheme}}>
                <div className="App">
                    <Routes>
                        <Route to path={"/"} element={<Layout/>}>
                            <Route index element={<HomePage/>}></Route>
                            <Route path={"/chats"} element={<ChatsPage/>}></Route>
                            <Route path={"/messages/:id"} element={<Messages/>}></Route>
                            <Route path={"/api"} element={<ApiPage/>}></Route>
                            <Route path={"/profile"} element={user ? <ProfilePage/> : null}></Route>
                            <Route path={"/register"} element={<RegisterPage/>}></Route>
                            <Route path={"/login"} element={<LoginPage/>}></Route>
                            <Route path={"*"} element={<NotFoundPage/>}></Route>
                        </Route>
                    </Routes>
                </div>
            </ThemeContext.Provider>
        < /ThemeProvider>
    );
}

export default App;