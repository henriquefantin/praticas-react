import { useState } from "react"

const CondicionalRender = () => {
    const [x] = useState(true);
    const [name, setName] = useState('Matheus');

    return (
        <div>
            <h4>Teste exibir condicional render</h4>
            {x && <p>Pode exibir</p>}
            
            <h4>Render ternário:</h4>
            <button onClick={() => setName('João')}>Atualizar Nome</button>
            {name === "João" ? (
                <div>
                <p>O nome é João</p>
                </div>
            ) : (
                <div>
                <p>Nome não encontrado!</p>
                </div>
            )}
        </div>
    )
}

export default CondicionalRender