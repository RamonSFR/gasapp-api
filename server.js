import express from 'express'

const app = express()

app.use(express.json())

app.post('/calc', (req, res) => {
    const { ethConsume, gasConsume, ethPrice, gasPrice, fuelingValue } = req.body
    
    if (!ethConsume || !gasConsume || !ethPrice || !gasPrice || !fuelingValue) {
        res.status(400).json({"error" : "all atributes are necessary"})
    }

    res.send(`${ethConsume} ${gasConsume} ${ethPrice} ${gasPrice} ${fuelingValue}`)
})

const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log(`server running on port ${PORT}`))