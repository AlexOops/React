import './App.scss';
import React, {useEffect, useRef, useState} from "react";
import {Button, List, TextField, Typography} from "@mui/material";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Chats from './Chats.js';
import Message from "./Message";

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3f51b5',
        }
    },
});

function App() {
    const [messageList, setMessageList] = useState([]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [chatList, setChatList] = useState([
        {name: "chat 1", id: "1"},
        {name: "chat 2", id: "2"},
        {name: "chat 3", id: "3"}
    ])

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
                id: giveLastId(prevState), text: `Сообщение автора ${lastAuthor.author} отправлено!`
            }])
        }
    }

    useEffect(() => {
        setTimeout(() => {
            botAnswer();
        }, 2000);
    }, [messageList]);


    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <div className="message-list">
                    <Typography variant="h5" component="body2" color="primary">Chat List</Typography>
                    <List>
                        {chatList.map((item) =>
                            <Chats name={item.name} key={item.id}/>
                        )}
                    </List>
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

                <div className="messages">
                    {messageList.map((item) => {
                        return (<Message author={item.author} text={item.text} id={item.id}/>)
                    })
                    }
                </div>
            </div>
        < /ThemeProvider>);
}
export default App;