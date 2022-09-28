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

function ChatsPage() {
    const [chatList, setChatList] = useState([
        {name: "chat 1", id: 1},
        {name: "chat 2", id: 2},
        {name: "chat 3", id: 3}
    ]);

    const [newChat, setNewChat] = useState('');

    const handleAdd = () => {
        const obj = {
            id: Date.now(),
            name: newChat,
        }
        setChatList(prevState => [...prevState, obj]);
    }

    const handleDelete = (id) => {
        const filtered = chatList.filter((item) => item.id !== id);
        setChatList(filtered);
    }

    return (
        <div className="message-list">
            <Typography variant="h5" component="body2" color="primary">Chat List</Typography>

            {chatList.map((item) =>
                <ListItem disablePadding>
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
                    onChange={(e) => setNewChat(e.target.value)}
                />

                <Button
                    className="button"
                    variant="contained"
                    type="submit"
                    onClick={handleAdd}> Send </Button>

            </div>
        </div>
    );
}

export default ChatsPage;