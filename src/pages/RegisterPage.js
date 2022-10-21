import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Button, TextField} from "@mui/material";
import {registerInitiate} from "../redux/reducers/authReducer/authReducer";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();
        if (password !== passwordConfirm) {
            console.log("Something went wrong!");
            setEmail("");
            setPassword("");
            setPasswordConfirm("");
            setDisplayName("");
            return
        }
        dispatch(registerInitiate(email, password, displayName))
        console.log("You are registered!")

        setTimeout(() => {
            navigate('/')
        }, 3000);
    }

    return (
        <div className="wrp-register">
            <h3 className="sing-up">sing up</h3>
            <div className="reg-form">
                <TextField
                    className="display-name"
                    label="First name"
                    value={displayName}
                    onChange={(event) => setDisplayName(event.target.value)}
                />

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

                <TextField
                    className="conf-password"
                    label="Password confirm"
                    value={passwordConfirm}
                    onChange={(event) => setPasswordConfirm(event.target.value)}
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

export default RegisterPage;