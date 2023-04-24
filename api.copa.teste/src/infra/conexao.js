import mysql2 from 'mysql2'

const con = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123ssg',
    database: 'db_copa'
})

con.connect((error) => {
    if(error){
        console.log(error)
    }else{
        console.log('conexão bem sucedida')
    }
})
export default con