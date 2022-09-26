import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';

function Chats({name}) {
    return (
        <ListItem disablePadding>
            <ListItemButton >
                <ListItemAvatar><Avatar><CommentIcon /></Avatar></ListItemAvatar>
                <ListItemText  primary={name}/>
            </ListItemButton>
        </ListItem>
    );
}

export default Chats;