const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

// Middleware para analisar solicitações do tipo application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para analisar solicitações do tipo application/json
app.use(express.json());

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.post('/inserir-nome', async (req, res) => {  
    const name = req.body.name; // Capturar o parâmetro da URL    
    console.log('Name passado pelo body:', name);
    const sql = "insert into people (name) values (?);"
    connection.query(sql, [name], (err, result) => {
      if (err) {
        console.error('Erro ao inserir dados:', err);
        return;
      }
      console.log('Dados inseridos com sucesso!');
      res.send('Nome '+ name +' inserido com sucesso!') 
    });    
});


app.get('/', (req, res) => {

    connection.query('select * from people', (err, rows) => {
        if (err) {
            console.error('Erro ao consultar o banco de dados:', err);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
        
        // Montagem do cabeçalho da tabela
        let resultado = '<table style="width:100%"><tr><th style="border:1px solid black;">Id</th><th style="border:1px solid black;">Nome</th></tr>';

        // Loop for para iterar sobre o array e concatenar os elementos recuperados no banco de dados
        if(rows.length > 0) {

            for (let i = 0; i < rows.length; i++) {
              resultado += '<tr><td style="border:1px solid black;">' + rows[i].id + '</td><td style ="border:1px solid black;">' + rows[i].name + '</td>'
            }
            resultado += "</table>"
        }
        else{
            resultado = ''
            resultado = '<h3>Nenhum usuário encontrado no banco de dados</h3>'
        }

        // Imprime os valores na tela
        res.send('<h1>Full Cycle Rocks!!!</h1>' + resultado) 

        });
});

app.listen(port, () =>{
    console.log('Rodando na porta ' + port)
});