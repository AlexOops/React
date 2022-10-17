import React from 'react';
import CustomLink from "./CustomLink";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {authSelectorCurrentUser} from "../redux/reducers/authReducer/authSelector";
import {useNavigate} from "react-router-dom";
import {logoutInitiate} from "../redux/reducers/authReducer/authReducer";

const Auth = () => {
    const user = useSelector(authSelectorCurrentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(user)

    function handleOut() {
        if (user) {
            dispatch(logoutInitiate())

            setTimeout(() => {
                navigate('/login')
            }, 2000);
        }
    }

    if (user) {
        return (
            <div className="header-user">
                <p>{user.displayName}</p>
                <Button
                    className="button"
                    variant="contained"
                    onClick={handleOut}> exit </Button>
            </div>)
    } else {
        return (
            <div className="header-auth">
                {user && <p>{user.displayName}</p>}
                <CustomLink to={"/register"}>Sign up</CustomLink>
                <CustomLink to={"/login"}>Sign in</CustomLink>
            </div>
        )
    }

};

export default Auth;