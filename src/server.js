import express from 'express'
import { rateLimit } from 'express-rate-limit'


const app = express()

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 15,
})

app.use(limiter)
app.use(express.json())


app.get('/calc', (req, res) => {
    const { ethConsume, gasConsume, ethPrice, gasPrice } = req.body

    if (!ethConsume || !gasConsume || !ethPrice || !gasPrice) {
        res.status(400).json({ "error": "all atributes are necessary" })
    }

    const costForKmGas = gasPrice / gasConsume
    const costForKmEth = ethPrice / ethConsume

    let mostEfficentFuel = ''

    if (costForKmGas > costForKmEth) {
        mostEfficentFuel = "Ethanol"
    } else if (costForKmEth > costForKmGas) {
        mostEfficentFuel = "Gasoline"
    } else {
        mostEfficentFuel = "Equal consumption on both fuels"
    }

    res.send({
        "costForKmGas": costForKmGas,
        "costForKmEth": costForKmEth,
        "mostEfficentFuel": mostEfficentFuel
    })
})

const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log(`server running on port ${PORT}`))