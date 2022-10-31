const mongoose = require("mongoose")
const productSchema = mongoose.Schema({    
    name:{
        type:String,
        required:true,
        trim:true
    }, 
    price:{
        type:String,
        required:true,
        trim:true
    }, 
    img:{
        type:String,
        default:""
    },
    description:{
        type:String,
        trim:true
    },
    comments:[{
        commentbody:{type:String,require:true},
        userId:{type:mongoose.Schema.Types.ObjectId,ref: "User"}
    }],
    adminId:{
        type:mongoose.Schema.Types.ObjectId,
    required:true
}
},
{timestamps:true})


const Product = mongoose.model("Product", productSchema)
module.exports = Product