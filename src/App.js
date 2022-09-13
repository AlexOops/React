import './App.scss';
import Message from "./Message";


function App() {
    const name = "Alex";

    return (
        <div className="App">
            <Message name={name}/>
        </div>
    );
}

export default App;
