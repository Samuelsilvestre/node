import app from './app.js'

const port = 8000



app.use((req, res) => {
    res.redirect('/')
})

app.listen(port)