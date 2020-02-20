import React, { useState } from 'react';
import api from '../../services/api1';
import api1 from '../../services/api1';


export default function Create() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState();
    const [email, setEmail] = useState('');
    const [cidade, setCidade] = useState('');

    const [users, setUsers] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();

        const res = await api1.post('/create', {
            nome, 
            idade,
            email,
            cidade
        });

        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">NOME: </label>
                <input
                    type="nome"
                    id="nome"
                    value={nome}
                    onChange={event => setNome(event.target.value)}
                />

                <label htmlFor="idade">IDADE: </label>
                <input
                    type="idade"
                    id="idade"
                    value={idade}
                    onChange={event => setIdade(event.target.value)}
                />

                <label htmlFor="email">EMAIL: </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="cidade">CIDADE: </label>
                <input
                    type="cidade"
                    id="cidade"
                    value={cidade}
                    onChange={event => setCidade(event.target.value)}
                />

                <button className="btn" type="submit">Cadastrar</button>

            </form>
        </>
    );
}
