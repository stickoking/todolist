const express = require('express');
const bodyPraser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();
let tasks = [];
let workTask = [];
app.use(bodyPraser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    
    const today = date.getDate();

    res.render('list', {listTitle: today, newTask: tasks});
});

app.get('/work', (req, res) => {
    res.render('list', {listTitle: 'Work List', newTask: workTask})
});

app.get('/about', (req, res) => {
    res.render('about')
})

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