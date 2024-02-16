const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {

    connection.query('select * from people', (err, rows) => {
        if (err) {
          console.error('Erro ao consultar o banco de dados:', err);
          return res.status(500).json({ error: 'Erro interno do servidor' });
        }
        
        // Variável para armazenar o select do banco de dados
        let resultado = '';

        // Loop for para iterar sobre o array e concatenar os elementos recuperados no banco de dados
        if(rows.length > 0) {

            for (let i = 0; i < rows.length; i++) {
                resultado += '<h3>O nome ' + rows[i].name + ' com o id #' + rows[i].id + ' foi retornado do banco de dados</h3>';
            }
        }
        else{
            resultado = '<h3>Nenhum usuário encontrado no banco de dados</h3>'
        }

        // Imprime os valores na tela
        res.send('<h1>Full Cycle Rocks!!!</h1>' + resultado) 

      });
})

app.listen(port, () =>{
    console.log('Rodando na porta ' + port)
})