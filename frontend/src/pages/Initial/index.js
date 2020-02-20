import React, { useEffect, useState } from 'react';
import api1 from '../../services/api1';


export default function Initial({ history }) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function loadUsers() {
            const response = await api1.get('/');
            setUsers(response.data);
        }

        loadUsers();
    }, []);

    async function handleDelete() {

    }

    return (
        <>
            <button className="btnCriar" onClick={() => history.push('/create')}>
                Cadastrar Cliente
        </button>

            <ul className="users-list">
                {users.map(user => (
                    <li key={user._id}>
                        Nome: {user.nome} <br />
                        Idade: {user.idade} <br />
                        Email: {user.email} <br />
                        Cidade: {user.cidade} <br />

                        <button className="btnEditar" onClick={() => history.push('/update')}>
                            Editar
                        </button>

                        <button className="btnDeletar" onClick={handleDelete}>
                            Deletar
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}