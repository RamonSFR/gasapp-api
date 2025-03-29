import express from 'express'

const app = express()

app.post('/calc', (req, res) => {
    res.send('Hello World')
})

const PORT = '3000'
app.listen(3000, () => console.log(`server running on port ${PORT}`))