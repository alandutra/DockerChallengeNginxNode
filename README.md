# Docker Challenge Nginx Node

Para rodar o projeto basta rodar o docker-compose up -d

No endereço [localhost:8080](localhost:8080) terá a mensagem do desafio FullCycle Rocks, mais os nomes capturados no banco de dados, porém na primeira vez que acessar receberá a mensagem que Nenhum usuário foi encontrado no banco de dados.

Para a inserção dos nomes no banco de dados será necessário acessar via postman por verbo post o endereço [localhost:8080/inserir-nome](localhost:8080/inserir-nome), poderá inserir quantos nomes for necessário que será exibido em tela.

Segue payload do corpo da requisição:

```
{
    "name": "Digite o nome"
}
```
