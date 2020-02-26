import React, { useState, useEffect } from 'react';
import api1 from '../../services/api1';
import './styles.css'

export default function Update({ match, history }) {

    let [nome, setNome] = useState('');
    let [idade, setIdade] = useState();
    let [email, setEmail] = useState('');
    let [cidade, setCidade] = useState('');


    useEffect(() => {
        async function fillFields() {
            const response = await api1.get('/update', {
                headers: {
                    user: match.params.id,
                }
            })

            setNome(response.data.nome);
            setIdade(response.data.idade);
            setEmail(response.data.email);
            setCidade(response.data.cidade);

        }

        fillFields();

        //console.log(match.params.id)

    }, [match.params.id]);

    async function handleSubmit(event) {
        event.preventDefault();

        await api1.post(`/update/${match.params.id}`, {
            nome,
            idade,
            email,
            cidade
        });

        alert('Usuário editado');
        history.push('/');

    }

    return (
        <>
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

                <button className="btnEditar" type="submit">Editar</button>
                <button className="btnVoltar" onClick={() => history.push('/')}>Voltar</button>

            </form>
        </>
    );
}
