import React from 'react';
import {Outlet} from 'react-router-dom';
import CustomLink from "./CustomLink";

const Layout = () => {
    return (
        <div>
            <>
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
            </>
        </div>
    );
};

export default Layout;