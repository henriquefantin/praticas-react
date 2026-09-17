import { useState, useEffect, useMemo } from 'react';

const HookUseMemo = () => {
    const [number, setNumber] = useState(0);
    // const premiumNumbers = ["0", "100", "200", "4", "5"];

    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200", "4", "5"];
    }, []);

    useEffect(() => {
        console.log("Premium number alterado");
    }, [premiumNumbers]);


    return (
        <div>
            <h2>Use Memo</h2>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
            {premiumNumbers.includes(number) ? <p>Acertou o numero</p> : <p>Errou o numero</p>}
            <hr />
        </div>
    )
}

export default HookUseMemo