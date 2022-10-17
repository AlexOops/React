import React, {useContext} from 'react';
import {Outlet} from 'react-router-dom';
import CustomLink from "./CustomLink";
import {Paper, Switch} from "@mui/material";
import {ThemeContext} from "../context";
import Auth from "./Auth";
import {useSelector} from "react-redux";
import {authSelectorCurrentUser} from "../redux/reducers/authReducer/authSelector";

const Layout = () => {
    const {themes, toggleTheme} = useContext(ThemeContext)
    const user = useSelector(authSelectorCurrentUser);

    return (
        <div>
            <Paper style={{background: themes.background, color: themes.text}}>
                <div className="header">
                    <Switch checked={themes.light} onClick={() => toggleTheme(!themes.light)}></Switch>
                    <Auth/>
                </div>
                <header className="navi">
                    <CustomLink to={"/"}>Home</CustomLink>
                    <CustomLink to={"/chats"}>Chats</CustomLink>
                    <CustomLink to={"/api"}>API</CustomLink>
                    {user ? <CustomLink to={"/profile"}>Profile</CustomLink> : null}
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