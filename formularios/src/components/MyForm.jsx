import './MyForm.css';

import { useState } from 'react';

const MyForm = ({user}) => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita o comportamento padrão de recarregar a página
        console.log('Enviando o formulário');
        console.log(name, email, bio, role);

        // 7 - Limpar formulário
        setName('');
        setEmail('');
        setBio('');
        setRole('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* 1 - Criacao de formulario */}
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={handleChangeName} value={name} />
                </div>
                {/* 2 - Label envolvendo o input */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(event) => setEmail(event.target.value)} value={email} />
                </label>
                {/* 8 - textarea */}
                <label>
                    <span>Biografia</span>
                    <textarea name="bio" placeholder="Digite sua biografia" onChange={(event) => setBio(event.target.value)} value={bio} />
                </label>
                {/* 9 - select */}
                <label>
                    <span>Função</span>
                    <select name="role" onChange={(event) => setRole(event.target.value)} value={role}>
                        <option value="">Selecione um valor</option>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm