const {resBuilder} = require("../helper/app.helper")
const userModel = require("../models/user.model")
const adminModel = require("../models/user.model")
const productModel=require('../models/product.model')
const Product = require("../models/product.model")
const bcryptjs=require('bcryptjs')
// const fs=require("fs")
// const path= require("path")
class User{
       //Register Endpoint (Post) finshed
       static register = async(req,res)=>{
        try{
            const userData =new userModel(req.body)
            userData.userType="user"
            await userData.save()
            resBuilder(res,true, userData, " admin added")
        }
        catch(e){
            resBuilder(res,false, e, e.message)
        }
    }
       //Log in Endpoint (Post) finshed
       static login = async(req,res)=>{
        try{
            const userData = await userModel.login(req.body.email, req.body.password)
            const token = await userData.generateToken()
            resBuilder(res,true, {userData, token}, "log in")
        }
        catch(e){
            resBuilder(res,false, e, e.message)
        }
    }

    static logOut = async(req,res)=>{
        try{
            req.user.tokens = req.user.tokens.filter(t=> t.token != req.token)
            await req.user.save()     
        resBuilder(res,true, [] , "logged out")
        }
        catch(e){
            resBuilder(res,false, req.user , e.message)

        }
    }
    static me  = async(req,res)=>{
        try{
            req.user.token
        resBuilder(res,true, req.user.token , "user data")
        }
        catch(e){
            resBuilder(res,false, req.user , e.message)

        }
    }
    
    static editUser =async(req,res)=>{
        try{
            const Data = req.body
            const UserID = req.user._id
            const Profile= await userModel.findById(UserID);
               for(const key in Data){
                Profile[key] = Data[key]
               }
               Profile.save()
        resBuilder(res,true, Profile, "User Edit")
     } catch (e) {
        resBuilder(res,false, e, "user edit error")
     }
    }
    
    static editPassword =async (req, res)=>{
        const User = req.user
       
        const Newpassword = req.body.password
        try{
            const CheckPassword = await bcryptjs.compare(Newpassword  ,User.password)
            if(CheckPassword) throw new Error("New Password equal Newpassword") 
            User.password = Newpassword
            await User.save();
            resBuilder(res,true, User, "User password Edit")
        }
        catch(e){
            resBuilder(res,false, e, e.message)
        }
    } 
    
    static addToCart =async(req,res)=>{

        try {
           const productId=req.params.id
            const userCart=req.user
            // console.log(productId,userfav)    
            const product =await productModel.findById(productId)
            //console.log(product)
            userCart.MyCart.push({
                productName:product.name,
                productId:product._id
          });
          //console.log(productName,productId)
           await userCart.save();
        //console.log(userCart);
        resBuilder(res,true, userCart, "product add to cart success")
     } catch (e) {
        resBuilder(res,false, e, "cart added error")
     }
    }
    
    static CartDeleteProduct =async(req,res)=>{

        try {
            const productId=req.params.id
            const User = req.user;
//            const product =await productModel.findById(productId)
   
            User.MyCart = User.MyCart.filter((c)=>c.productId != productId)
            await User.save();
            resBuilder(res,true, User, "product deleted from cart")
     } catch (e) {
        resBuilder(res,false, e, "cart delete error")
     }
    }
    static addTofavList =async(req,res)=>{

        try {
            const productId=req.params.id
            const userfav=req.user
            // console.log(productId,userfav)    
            const product =await productModel.findById(productId)
            //console.log(product)
            userfav.myFavProd.push({
                productName:product.name,
                productId:product._id 
          });
           await userfav.save();
        //console.log(userCart);
        resBuilder(res,true, userfav, "product add to favourite list")
     } catch (e) {
        resBuilder(res,false, e, "fav added error")
     }
    }
    
    
    static favlist =async(req,res)=>{

        try {
            // console.log(productId,userfav)    
            const userfav =await productModel.find(req.user)
            //console.log(product)
            userfav.myFavProd.find();
           
        //console.log(userCart);
        resBuilder(res,true, myFavProd, " favourite list")
     } catch (e) {
        resBuilder(res,false, e, "fav ")
     }
    }


    static DeleteFavProduct =async(req,res)=>{
        const productId = req.params.id;
        const User = req.user;
        try{
            User.myFavProd = User.myFavProd.filter((c)=>c.productId != productId)
            await User.save();          
            resBuilder(res,true, User, "product deleted from cart")
     } catch (e) {
        resBuilder(res,false, e, "cart delete error")
     }
    }
    // static addImgProfile = async(req,res)=>{
    //     try{
    //         fs.renameSync(req.file.path, `${req.file.path}${path.extname(req.file.originalname)}`)
    //         req.user.profileImage = `${req.file.path}${path.extname(req.file.originalname)}`
    //         await req.user.save()
    //         resBuilder(res, true, req.user, "addded")
    //     }
    //     catch(e){
    //         resBuilder(res, false, e, e.message)
    //     }
    // }
static addImg = async(req,res)=>{
 try{
    
    req.user.profileImage = req.file.path.replace("static\\", "")
    await req.user.save()
    resBuilder(res, true, req.user, "done")
 }
 catch(e){
    resBuilder(res, false, e, e.message)
 }
}
}
module.exports=User