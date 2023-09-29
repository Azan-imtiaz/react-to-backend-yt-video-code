const mongoose=require("mongoose");

const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   AridNo:{
     type:String,
     required:true,
     unique:true
    },
    Section:{
        type:String,
        required:true
       },
       Marks:{
        type:Number,
        required:true
       },

})

const ReactForm=new mongoose.model("ReactForm",schema);

module.exports=
    ReactForm
;