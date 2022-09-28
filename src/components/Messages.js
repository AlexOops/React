import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent, TextField, Typography} from "@mui/material";

function Messages() {
    const [messageList, setMessageList] = useState([]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessageList(prevState => [...prevState, {
            id: giveLastId(prevState),
            author: author,
            text: text
        }])
        setAuthor("");
        setText("");
    }

    function giveLastId(array) {
        return array.length ? array[array.length - 1].id + 1 : 0;
    }

    function botAnswer() {
        const lastAuthor = messageList[messageList.length - 1];
        if (lastAuthor && lastAuthor.author) {
            setMessageList(prevState => [...prevState, {
                id: giveLastId(prevState),
                text: `Сообщение автора ${lastAuthor.author} отправлено!`
            }])
        }
    }

    useEffect(() => {
        setTimeout(() => {
            botAnswer();
        }, 2000);
    }, [messageList]);


    return (
        <div className="wrapper">
            <div className="messages">
                {messageList.map((item) => {
                    return (<div className="msg-text">
                        <Card>
                            <CardContent>
                                <Typography variant="subtitle2" color="primary">{item.author}</Typography>
                                <Typography variant="body2" color="primary">{item.text}</Typography>
                            </CardContent>
                        </Card>
                    </div>)
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