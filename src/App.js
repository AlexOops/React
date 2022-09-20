import React, {useEffect, useRef, useState} from "react";

function App() {
    const [messageList, setMessageList] = useState([]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const refAuthor = useRef(null);
    const refText = useRef(null);
    const refButton = useRef(null);

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

    function handleClick() {
        refText.current.style.color = "green";
        refAuthor.current.style.color = "red";
        refButton.current.style.cursor = "pointer";
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="author">Автор: </label>
                <input ref={refAuthor} type="text" name="author" value={author}
                       onChange={(event) => setAuthor(event.target.value)}/>
                <label htmlFor="message">Сообщение: </label>
                <input ref={refText} type="text" name="message" value={text}
                       onChange={(event) => setText(event.target.value)}/>

                <button ref={refButton} type="submit" onClick={handleClick}> Отправить</button>
            </form>

            <div>
                {messageList.map((item) => <p>{item.author}{item.text}</p>)}
            </div>
        </div>
    );
}

export default App;
