import './App.scss';
import React, {useState} from "react";
import {ThemeProvider, createTheme} from "@material-ui/core/styles";

import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import ChatsPage from "./pages/ChatsPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Messages from "./components/Messages";
import {ThemeContext, themes} from "./context"

import ApiPage from "./pages/ApiPage";

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
                            <Route path={"/profile"} element={<ProfilePage/>}></Route>
                            <Route path={"/messages/:id"} element={<Messages/>}></Route>
                            <Route path={"/api"} element={<ApiPage/>}></Route>
                            <Route path={"*"} element={<NotFoundPage/>}></Route>
                        </Route>
                    </Routes>
                </div>
            </ThemeContext.Provider>
        < /ThemeProvider>
    );
}

export default App;