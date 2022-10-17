import React from 'react';
import {useSelector} from "react-redux";
import {authSelectorCurrentUser} from "../redux/reducers/authReducer/authSelector";

const ProfilePage = () => {
    const user = useSelector(authSelectorCurrentUser);
    return (
        <div>
            <h3>{user.displayName}</h3>
        </div>
    );
};

export default ProfilePage;