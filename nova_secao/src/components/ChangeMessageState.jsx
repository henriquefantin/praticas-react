import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
    const messages = ["oi","olá","tudo bem?"];
    return (
        <div>
            <button onClick={() => handleMessage(messages[0])}>Msg 1</button>
            <button onClick={() => handleMessage(messages[1])}>Msg 2</button>
            <button onClick={() => handleMessage(messages[2])}>Msg 3</button>
        </div>
    )
}

export default ChangeMessageState