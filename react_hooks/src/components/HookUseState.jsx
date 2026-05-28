import { useState } from 'react';

const HookUseState = () => {
    // 1 - useState
    let userName = 'João';
    const [name, setName] = useState('Márcio');

    const changeNames = () => {
        userName = 'João Souza';
        setName('Matheus Batista');
    }

    // 2 - useState input
    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault();

        // envio a uma api
        console.log(age);
    }


    return (
        <div>
            {/* 1- useState */}
            <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name} </p>
            <button onClick={changeNames}>Mudar Nomes</button>
            <hr />
            {/* useState input */}
            <h2>useState e input</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input type="submit" value="Enviar" />
            </form>
            <p>Você tem {age} anos</p>
            <hr />
        </div>
    )
}

export default HookUseState