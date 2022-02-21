const mongoose = require("mongoose")
const MONGO_CON_STRING = process.env.MONGO_CON_STRING

mongoose.connect(MONGO_CON_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if(err){
        console.log(err);
        throw err;
    }
    console.log("Connected to MongoDB!")
})

