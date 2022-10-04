import React, {useState} from "react";
import {
    Avatar,
    Button,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    TextField,
    Typography
} from "@mui/material";

import CommentIcon from "@mui/icons-material/Comment";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chatSelector} from "../redux/reducers/chatReducer/chatSelector";

const ChatsPage = () => {
    const [newChat, setNewChat] = useState('');

    const chats = useSelector(chatSelector)
    const dispatch = useDispatch();

    const handleAdd = () => {
        const obj = {
            id: Date.now(),
            name: newChat,
        }
        dispatch({type: 'add', payload: obj})
        setNewChat("");
    }

    const handleDelete = (id) => {
        dispatch({type: 'delete', payload: id})
    }

    return (
        <div className="message-list">
            <Typography variant="h5" color="primary">Chat List</Typography>

            {chats.map((item) =>
                <ListItem disablePadding key={item.id}>
                    <Link to={`/messages/${item.id}`} key={item.id}>
                        <ListItemButton>
                            <ListItemAvatar><Avatar><CommentIcon/></Avatar></ListItemAvatar>
                            <ListItemText primary={item.name}/>
                        </ListItemButton>
                    </Link>
                    <button onClick={() => handleDelete(item.id)}>x</button>
                </ListItem>
            )}

            <div className="chat-add">
                <TextField
                    className="text"
                    placeholder="enter the name"
                    value={newChat}
                    onChange={(e) => setNewChat(e.target.value)}
                />

                <Button
                    className="button"
                    variant="contained"
                    type="submit"
                    onClick={handleAdd}
                > Send </Button>
            </div>
        </div>
    );
}

export default ChatsPage;