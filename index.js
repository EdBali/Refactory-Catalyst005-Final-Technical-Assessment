//importing dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose')






const app = express();

//connect to the database
mongoose.connect('mongodb+srv://Eddie:9zaVVkLayDzdxilf@refactory.gdjen.mongodb.net/coviddb?retryWrites=true&w=majority'
,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true, // commented out currently
    useFindAndModify: false
})

mongoose.connection.on('connected',() => {
    console.log('mongooe!!!')
})


app.set('view engine','pug');
app.set('views' , './views');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))


    
//test routes
app.get('/', (req,res) => {
    res.render('form');
})





//returns an error message if an unrecognized route is specified
app.get('*', (req,res) => {
    res.send('error');
})
//listening on the server
app.listen(3000, () => {console.log("Running on the server");});

