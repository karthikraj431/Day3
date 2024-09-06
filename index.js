// 1. Import express and assign it into a variable
const express = require('express')
require('./connection')
var Empmodel = require('./model/employee')
// 2. Initialize express
const app = new express()

// mid
app.use(express.json())

// 3.API Creation
app.get('/', (req, res) => {
    res.send('Hello, World!')
})
app.get('/trial', (req, res) => {
    res.send('Its a trial Message')
})

// to delete
app.delete('/remove/:id', async (req, res) => {
    try {
        await Empmodel.findByIdAndDelete(req.params.id)
        res.send({ message: 'Data deleted' })
    }
    catch (error)
    {
        console.log(error)
    }
})

// to update
app.put('/update/:id', async (req, res) => {
    try {
        await Empmodel.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: 'Data updated' })
    }
    catch (error) {
        console.log(error)
    }
})

// 4.Port
app.listen(3004, () => {
    console.log('Server is running on port 3004')
})

// Add Api
app.post("/add", async (req, res) => {
    try {
        await Empmodel(req.body).save();
        res.send({ message: 'Data stored' })
    }
    catch (error) {
        console.log(error)
    }
})

app.get("/find", async (req, res) => {
    try {
         var show = await Empmodel.find();
        res.send(show)
    }
    catch (error) {
        console.log(error)
    }
})

