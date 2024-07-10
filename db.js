const mongoose= require('mongoose');
require('dotenv').config();
//define mongodb connection
// const mongoURL = 'mongodb://localhost:27017/person'
const mongoURL = process.env.MONGODB_URL;
//setup mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
//define event listeners
db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});
db.on('error',(err)=>{
    console.log('error',err);
});
db.on('disconnected',()=>{
    console.log('disconnected to MongoDB server');
});

//export
module.exports= db;