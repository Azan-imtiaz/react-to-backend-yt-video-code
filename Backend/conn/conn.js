const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/reactForm",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,

}).then(()=>{ console.log("connected succesfuly")})
.catch((err)=>{ console.log(err)} )