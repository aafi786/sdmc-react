const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors middleware
app.use(cors());

mongoose
    .connect('mongodb://sdmc:sdmc%401234@ds125526.mlab.com:25526/sdmc', { useNewUrlParser: true })
    .then(console.log('MongoDbConnected'))
    .catch(err => console.log(err));

let Park = require('./models/Park');

app.post('/new/park', (req, res) => {



    let GetPark = new Park({
        num: req.body.num,
        slot: req.body.slot,
        park_stat: 1,
    })

    GetPark.save((err) => {
        if (err) {
            res.send('Unable to Add Data', 422)
        }
        else {
            res.send('Vehicle Added', 201);
        }
    })

})

app.get('/get/all', (req, res) => {
    Park.find({}, (err, data) => {
        if (err) {
            console.log(err)
            res.send('No Data Found', 404)
        }
        else {
            res.send(data, 200)
        }
    })
})
app.put('/out/:id', (req, res) => {
    Park.update({ _id: req.params.id }, { $set: { park_stat: '0' } }, (err) => {
        if (err) {
            console.log(err)
            res.send('Unable to out vehicle', 422)
        }
        else {
            res.send('Car Parked Out', 201)
        }
    })
})
app.listen(3000, () => {
    console.log('Server Stated on port 3000');
})