# CRUD-Node
Um simples sistema de cadastro, alteração e exclusão de clientes utilizando Node.js, MongoDB Atlas e ReactJS.
Há também um esboço feito para uma consulta de empresas a partir do CNPJ, que não está implementado por hora.

## Guia de instalação

Entre na pasta `backend` pelo terminal e rode o comando `npm i` ou `yarn install`.
Agora digite `npm run dev` ou `yarn dev`

Abra outro terminal e entre na pasta `frontend` e rode o comando `npm i` ou `yarn install`.
Agora digite `npm start` ou `yarn start`

## Endpoints
***GET*** lista todos os clientes na raiz - **/**
***GET*** busca um cliente pelo seu id - **/update**
***POST*** cadastra um cliente - **/create**
***POST*** edita as informações de um cliente - **/update/{user_id}**
***DELETE*** deleta um cliente na raiz - **/** (Foi usado o método POST)

### Detalhamento das rotas
Se encontra na pasta `backend`, no arquivo *Insomnia_CRUD-Node.json* e pode ser aberta com a instalação do software Insomnia: https://insomnia.rest

