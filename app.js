const express = require('express');
const bodyPraser = require('body-parser');
const moment = require('moment');

const app = express();
let tasks = [];
let workTask = [];
app.use(bodyPraser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    const today = moment().format('dddd Do MMM YYYY');
    

    res.render('list', {listTitle: today, newTask: tasks});
});

app.get('/work', (req, res) => {
    res.render('list', {listTitle: 'Work List', newTask: workTask})
});

// app.post('/work', (req, res) => {
//     const task = req.body.task;
//     workTask.push(task);
//     res.redirect('/work');
    
    

// });

app.post('/', (req, res) => {
    const task = req.body.task;
   
    if(req.body.list === 'Work List'){
        workTask.push(task);
        res.redirect('/work')
    } else {
        tasks.push(task)
        res.redirect('/')

    }
   
});



app.listen(3000, () => {
    console.log('Listening on Port 3000');
});