import React, {useState} from 'react';
import {Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {messageSelector} from "../redux/reducers/messageReducer/messageSelector";

const Messages = () => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const messageList = useSelector(messageSelector)
    const dispatch = useDispatch();

    const {id} = useParams();

    let messages = messageList.filter((item) => {
        if (!id) return true
        return item.chatId === Number(id)
    })

    const handleAdd = () => {
        const obj = {
            id: Date.now(),
            author: author,
            text: text,
            chatId: Number(id)
        }
        dispatch({type: 'submit', payload: obj})
        setAuthor("");
        setText("");
    }

    return (
        <div className="wrapper">
            <div className="messages">
                {messages.map((item) => {
                    return (
                        <Card className="msg-text" key={item.id}>
                            <CardContent>
                                <Typography variant="subtitle2" color="primary">{item.author}</Typography>
                                <Typography variant="body" color="primary">{item.text}</Typography>
                            </CardContent>
                        </Card>
                    )
                })
                }
            </div>
            <div className="message-form">
                    <TextField
                        className="author"
                        label="Автор"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                    />

                    <TextField
                        className="text"
                        label="Сообщение"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
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

export default Messages;