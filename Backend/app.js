const express = require("express");
const port = 5000;
const app = express();
const bodyParser = require("body-parser");
const UserRouter = require("./routes/UserRouter")
const cors = require('cors');
const mongoose = require("mongoose")
const dbUrl = "mongodb+srv://oluwanisholaopeyemi2004:MernAssignment@cluster0.yz5lt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


app.get("/", (req, res)=>{
    res.send("welcome to our server  ")
})
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(()=>{
    console.log("connected to database")
})
.catch((err)=>{
    console.error("Error connecting to mongoDB: " + err) 
})


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/", UserRouter)

app.listen(port, ()=>{
    console.log(`server is currently running on http://localhost:${port}`)
})