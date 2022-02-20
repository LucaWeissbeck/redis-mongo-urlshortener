const mongoose = require("mongoose")
const MONGO_CON_STRING = process.env.MONGO_CON_STRING

// redis pw: JWlZPosmOW49saf06HFuONsHeuI5N8DV
// mongodb+srv://<username>:<password>@systemdesigncluster.smdy5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
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

