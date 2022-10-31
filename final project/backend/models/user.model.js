const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userSchema = mongoose.Schema({
    name:{type:String, required:true, trim:true}, 
    age:{type:Number,trim:true,require:true},
    email:{ type:String,trim:true, unique: true,require:true,
        validate:function(value){
            if(!validator.isEmail(value)) throw new Error("invalid email")}
    }, 
    password:{type:String, required:true, trim:true}, 
    profileImage:{type:String, trim:true, default:"app.webp"}, 
    userType:{type:String, required:false, trim:true, enum:["admin", "user"]},
    MyCart:
    [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product'
                }
      }
    ]
  ,
   myFavProd:[{
            productId:{ type: mongoose.Schema.Types.ObjectId, ref:"Product"}}
               ] ,
    tokens:[{
        token:{type:String}
    }
]
},
{timestamps:true})
userSchema.virtual("adminProduct", {
    ref:"Product",
    localField:"_id",
    foreignField:"adminId"
})
userSchema.methods.toJSON = function(){
    const userData = this.toObject()
    delete userData.__v
    return userData
}
userSchema.pre("save", async function(){
    const userData = this
    if(userData.isModified("password"))
        userData.password = await bcrypt.hash(userData.password, 10)
})
userSchema.statics.login = async(email, password)=>{
    const userData = await User.findOne({email})
    if(!userData) throw new Error("invalid email")
    const isvalid = await bcrypt.compare(password, userData.password)
    if(!isvalid) throw new Error("invalid password")
    return userData
}
userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id}, process.env.JWTKEY)
    user.tokens.push({token})
    await user.save()
    return token
}
userSchema.methods.removeFromCart = function(productId) {
    const updatedCartItems = this.cart.items.filter(item => {
      return item.productId.toString() !== productId.toString();
    });
    this.cart.items = updatedCartItems;
    return this.save();
  };

const User = mongoose.model("User", userSchema)
module.exports = User