import '../App.scss';
import React from "react";
import {ThemeProvider, createTheme} from "@material-ui/core/styles";

import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";

import HomePage from "../pages/HomePage";
import ChatsPage from "../pages/ChatsPage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";
import Messages from "./Messages";

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3f51b5',
        }
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Routes>
                    <Route to path={"/"} element={<Layout/>}>
                        <Route index element={<HomePage/>}></Route>
                        <Route path={"/chats"} element={<ChatsPage/>}></Route>
                        <Route path={"/profile"} element={<ProfilePage/>}></Route>
                        <Route path={"/messages/:id"} element={<Messages/>}></Route>
                        <Route path={"*"} element={<NotFoundPage/>}></Route>
                    </Route>
                </Routes>
            </div>
        < /ThemeProvider>
    );
}

export default App;