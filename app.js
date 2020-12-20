const express = require('express');
const bodyPraser = require('body-parser');
const moment = require('moment');

const app = express();
let tasks = [];
app.use(bodyPraser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    const today = moment().format('dddd Do MMM YYYY');
    //let day = '';

    res.render('list', {kindOfDay: today, newTask: tasks});
});

app.post('/', (req, res) => {
    const task = req.body.task;
    tasks.push(task)
    //task = req.body.task;
    res.redirect('/')
    console.log(task);
});

app.listen(3000, () => {
    console.log('Listening on Port 3000');
});