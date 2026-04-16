import { useState } from "react";

const ManageData = () => {
    const [numero, setNumber] = useState(10);

    return(
        <div>
            <button onClick={() => setNumber(20)}>Atualizar valor</button>
            <p>Valor state: {numero}</p>
        </div>
    )
};

export default ManageData;