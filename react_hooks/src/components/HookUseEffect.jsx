import { useEffect, useState } from "react";

const HookUseEffect = () => {
    // useEffect sem dependências
    const [number, setNumber] = useState(1);
    const someNumber = () => {
        setNumber(number + 1);
    };
    useEffect(() => {
        console.log('Use effect executado');
    });

    // useEffect com array dependências vazio
    useEffect(() => {
        console.log('Use effect 2 executado');
    }, []);

    // useEffect, executa apenas quando algum item é alterado
    // array de dependencia
    const [secNumber, setSecNumber] = useState(0);
    const someSecNumber = () => {
        setSecNumber(secNumber + 1);
    };
    useEffect(() => {
        if (secNumber > 0) {
            console.log('secNumber alterado');
        }
    }, [secNumber]);

    // cleanup
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log('Timer secNumber executado')
    //     }, 2000);
    //     return () => clearTimeout(timer);
    // }, [secNumber]);

    return (
        <div>
            <h2>HookUseEffect</h2>
            <p>Número: {number}</p>
            <button onClick={someNumber}>Somar +1</button>
            <p>Segundo número: {secNumber}</p>
            <button onClick={someSecNumber}>Somar +1</button>
            <hr />
        </div>
    )
}

export default HookUseEffect