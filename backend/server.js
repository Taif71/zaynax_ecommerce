const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express();

const api = require('./API/routes');
const adminRoutes = require('./API/admin');


const MONGODB_URI = 'mongodb+srv://taif:bakshi@cluster0.748zr.mongodb.net/zaynexDB'
app.use(bodyParser.json());


app.use(api);
app.use('/admin', adminRoutes);



const port = 8000;
mongoose.connect(MONGODB_URI).then(res => {
    app.listen(port)
    console.log(res);
    console.log(`App has started at port ${port}`);
}).catch(err => {
    console.log('Error starting the server\n\n' + err);
});

// app.listen(8000, (req,res) => {
//     console.log('Server has started at port 8000');
// });