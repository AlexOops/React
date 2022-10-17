import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {loginInitiate} from "../redux/reducers/authReducer/authReducer";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            console.log("Invalid username or password");
            setEmail("");
            setPassword("");
            return
        }
        dispatch(loginInitiate(email, password))
        console.log("You are logged in!")

        setTimeout(() => {
            navigate('/')
        }, 500);
    }

    return (
        <div className="wrp-login">
            <h3 className="sing-in">sing in</h3>
            <div className="login-form">
                <TextField
                    className="email"
                    label="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <TextField
                    className="password"
                    label="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <Button
                    className="button"
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}> Send </Button>
            </div>
        </div>
    );
};

export default LoginPage;