import React, {useEffect, useRef, useState} from "react";

const messageList = [
    {
        author: '',
        text: ''
    }];

function App() {
    const [messages, setMessages] = useState(messageList);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const refAuthor = useRef(null);
    const refText = useRef(null);
    const refButton = useRef(null);

    const refAnswer = useRef();


    function addMessage() {
        let obj = {
            author: author,
            text: text
        }
        setMessages([...messages, obj])
    }

    function handleClick() {
        refText.current.style.color = "green";
        refAuthor.current.style.color = "red";
        refButton.current.style.cursor = "pointer";
        refButton.current.style.color = "blue";
    }

    useEffect(() => {
        setTimeout(() => {
            refAnswer.current.textContent = "added message!"
        }, 2000);
    }, [messageList]);

    return (
        <div>
            <div className="list">
                {messages.map((item) => <p>{item.author}{item.text}</p>)}
            </div>

            <div className="messager">
                <label htmlFor="author">Автор: </label>
                <input ref={refAuthor} type="text" value={author} onChange={(event) => setAuthor(event.target.value)}/>
                <label htmlFor="message">Сообщение: </label>
                <input ref={refText} type="text" value={text} onChange={(event) => setText(event.target.value)}/>

                <button ref={refButton} className="button" onClick={()=> {addMessage(); handleClick()}}> Отправить </button>
            </div>

            <div className="answer">
                <div className="title" ref={refAnswer}></div>
            </div>
        </div>
    );
}

export default App;
