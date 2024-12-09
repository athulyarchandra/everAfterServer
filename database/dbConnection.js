const mongoose = require('mongoose')

const connectionString = process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log("MongoDB Atlas connected successfully");
    
}).catch(err=>{
    console.log("MongoDB connecton failed");
    console.log(err);
    
})