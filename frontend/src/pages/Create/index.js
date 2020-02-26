import React, { useState } from 'react';
import api1 from '../../services/api1';
import './styles.css';

export default function Create({ history }) {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState();
    const [email, setEmail] = useState('');
    const [cidade, setCidade] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        await api1.post('/create', {
            nome,
            idade,
            email,
            cidade
        });

        alert('Usuário criado!');
        history.push('/');
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">NOME: </label>
                <input
                    type="nome"
                    id="nome"
                    value={nome}
                    autoComplete="off"
                    onChange={event => setNome(event.target.value)}
                />

                <label htmlFor="idade">IDADE: </label>
                <input
                    type="idade"
                    id="idade"
                    value={idade}
                    autoComplete="off"
                    onChange={event => setIdade(event.target.value)}
                />

                <label htmlFor="email">EMAIL: </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    autoComplete="off"
                    onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="cidade">CIDADE: </label>
                <input
                    type="cidade"
                    id="cidade"
                    value={cidade}
                    autoComplete="off"
                    onChange={event => setCidade(event.target.value)}
                />

                <button
                    className="btnCadastrar"
                    type="submit"
                >
                    Cadastrar
                    </button>

                <button
                    className="btnVoltar"
                    onClick={() => history.push('/')}
                >
                    Voltar
                    </button>

            </form>
        </div>
    );
}
