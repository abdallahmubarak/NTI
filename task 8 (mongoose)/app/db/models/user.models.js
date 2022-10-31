const mongoose =require('mongoose')
const bcrypt =require('bcryptjs')

const validator=require('validator')
const userSchema =mongoose.Schema('User',{

    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        requied:true,
        unique:true,
        validate:function(value){
            if(!validator.isEmail(value)) throw new Error('invalid email form')
        }       
    },
    username:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    timestamps:true
})

userSchema.statics.getLogin=async(email,password)=>{
    const isFound=await User.findOne({email})
    if(!isFound) throw new Error('invlid email')
    const isValid=await bcrypt.compare(password,isFound.password)
    if(!isValid) throw new Error('invalid password')
    return isValid
}



userSchema.methods.toJSON=function(){
    const data= this.toObject()
    delete data.password
    return data
}
userSchema.pre("save", async function(){
    if(this.isModified("password")){
        this.password = await bcyptjs.hash(data.password, 12)
    }
})

userSchema.statics.cheakPass = async(user,oldPass)=>{
    const isValid =await bcrypt.hash(this.password,8)
    return isValid
}



const User = mongoose.model("User", userSchema)
module.exports = User

