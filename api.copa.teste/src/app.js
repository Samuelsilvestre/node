import express from "express";
import con from './infra/conexao.js'

const app = express()


app.get('/', (req, res) => {
    const selectAll = 'SELECT * FROM tb_selecao;'
    con.query(selectAll, (error , result) => {
        if(error){
            res.status(404).json(error)
        }else{
            res.status(200).json(result)
        }
    })
})

app.get('/selecao/:id', (req, res) => {
    const id = req.params.id
    const selectId = 'SELECT * FROM tb_selecao WHERE id=?'
    con.query(selectId, id, (error, result) => {
        if(error){
            res.status(404).json(error)
        }else{
            res.status(200).json(result)
        }
    })
})

app.post('/post/selecao', (req, res) => {
    const bodySelecao = req.body
    const insertSelecao = 'INSERT INTO selecao SET ?;'
    con.query(insertSelecao, bodySelecao, (error, result) => {
        if(error){
            res.status(400).json(error)
        }else{
            res.status(201).json(result)
        }
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params
    const deleteSelecao = 'DELETE FROM tb_selecao WHERE id=?;'
    con.query(deleteSelecao, id, (error, result) => {
        if(error){
            res.status(400).json(error)
        }else{
            res.status(201).json(result)
        }
    })
})

app.put('/update/:id', (req, res) => {
    const id = req.params.id
    const selecao = req.body
    const updateSelecao = 'UPDATE tb_selecao SET? WHERE id=?;'
    con.query(updateSelecao, [selecao, id], (error, result) => {
        if(error){
            res.status(201).json(error)
        }else{
            res.status(201).json(result)
        }
    })
})







export default app