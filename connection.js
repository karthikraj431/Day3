var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://krj431:Karthik@cluster0.jmgzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
    console.log('Connected to MongoDB');
    })
    .catch(() => {
    console.log(err)
})