const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://farzanaycet2009:Farzanaatlas@cluster0.iia8s4c.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("connected to DB")
}).catch(()=>{
    console.log("error!!! Connection Lost")
})