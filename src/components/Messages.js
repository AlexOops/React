import React, {useState} from 'react';
import {Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {useParams} from "react-router-dom";

const Messages = () => {
    const [messageList, setMessageList] = useState([
        {
            id: 0,
            author: "Alex",
            text: "hello",
            chatId: 1
        },
        {
            id: 1,
            author: "Andrey",
            text: "hey hey",
            chatId: 1
        },
        {
            id: 2,
            author: "Anton",
            text: "hey",
            chatId: 2
        }
    ]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const {id} = useParams();
    let messages = messageList.filter((item) => {
        if (!id) return true
        return item.chatId === Number(id)
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(id)
        setMessageList(prevState => [...prevState, {
            id: giveLastId(prevState),
            author: author,
            text: text,
            chatId: Number(id)
        }])
        setAuthor("");
        setText("");
    }

    function giveLastId(array) {
        return array.length ? array[array.length - 1].id + 1 : 0;
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
                <box component="span" sx={{p: 2, border: '1px dashed grey'}}>
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
                        onClick={handleSubmit}> Send </Button>
                </box>
            </div>
        </div>
    );
}

export default Messages;