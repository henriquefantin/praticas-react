import { useState } from "react";

const ChallengeEvent = () => {
    const [result, setResult] = useState(null);
    const firstValue = 15;
    const secondValue = 153;

    const handleCalc = () => {
        let resultCalc = firstValue + secondValue;
        setResult(resultCalc);
    }

    return(
        <div>
            <p>Valor 1: {firstValue}</p>
            <p>Valor 2: {secondValue}</p>
            <button onClick={handleCalc}>Calcular</button>
            {result !== null && <p>Resultado: {result}</p>}
        </div>
    );
};

export default ChallengeEvent;