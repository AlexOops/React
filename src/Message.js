import React from 'react';

function Message({name}) {
    return (
        <div className="message">
            <h1>Hello from {name}</h1>
        </div>
    );
}

export default Message;