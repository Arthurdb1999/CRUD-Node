import React, { useEffect, useState } from 'react';
import api1 from '../../services/api1';
import './styles.css'


export default function Initial({ history }) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function loadUsers() {
            const response = await api1.get('/');
            setUsers(response.data);
        }

        loadUsers();
    }, []);

    async function handleDelete(user) {
        console.log(user);

        await api1.post('/', { user });

        const response = await api1.get('/');
        setUsers(response.data);

    }

    return (
        <>
            <ul className="users-list">
                {users.map(user => (
                    <li key={user._id}>
                        <strong>Nome:</strong> {user.nome} <br />
                        <strong>Idade:</strong> {user.idade} <br />
                        <strong>Email:</strong> {user.email} <br />
                        <strong>Cidade:</strong> {user.cidade} <br />

                        <button className="btnEditar" onClick={() => history.push(`/update/${user._id}`)}>
                            Editar
                        </button>

                        <button className="btnDeletar" onClick={() => handleDelete(user)}>
                            Deletar
                        </button>
                    </li>
                ))}
            </ul>

            <button className="btnCriar" onClick={() => history.push('/create')}>
                Cadastrar Cliente
        </button> <br/>

        <span>Procurar CNPJ</span>
        <br/>
        <input type="text"/>
        <br/>
        <button className="procurarCNPJ">Procurar</button>
        </>
    );
}