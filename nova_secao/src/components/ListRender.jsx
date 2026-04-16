import { useState } from "react";

const ListRender = () => {
    const [listaNomes] = useState(["Ana Silva", "Bruno Costa", "Carla Souza", "Diego Lima", "Fernanda Rocha"]);
    const [users, setUsers] = useState([
        { id: 1, name: "Matheus", age: 31 },
        { id: 2, name: "Jones", age: 19 },
        { id: 3, name: "Scorpion", age: 201 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

    return (
        <div>
            <ul>
                {
                    listaNomes.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))
                }
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age} anos
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    );
};

export default ListRender;