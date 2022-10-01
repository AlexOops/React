import React, {useContext} from 'react';
import {Outlet} from 'react-router-dom';
import CustomLink from "./CustomLink";
import {Paper, Switch} from "@mui/material";
import {ThemeContext} from "../context";

const Layout = () => {

    const {themes, toggleTheme} = useContext(ThemeContext)

    return (
        <div>
            <Paper style={{background: themes.background, color: themes.text}}>
                <Switch checked={themes.light} onClick={() => toggleTheme(!themes.light)}></Switch>
                <header className="header">
                    <CustomLink to={"/"}>Home</CustomLink>
                    <CustomLink to={"/chats"}>Chats</CustomLink>
                    <CustomLink to={"/profile"}>Profile</CustomLink>
                </header>

                <main>
                    <Outlet/>
                </main>

                <footer>
                    Footer
                </footer>
            </Paper>
        </div>
    );
};

export default Layout;