import { useLayoutEffect, useEffect, useState } from 'react'

const HookUseLayoutEffect = () => {
    const [name, setName] = useState('');
    
    useEffect(() => {
        console.log('Entrou useEffect');
        setName('Mudou de novo');
    }, []);

    useLayoutEffect(() => {
        console.log('Entrou useLayoutEffect');
        setName('Outro nome');
    }, []);

    return (
        <div>
            <h2>useLayoutEffect</h2>
            <p>Nome: {name}</p>
            <hr />
        </div>
    )
}

export default HookUseLayoutEffect