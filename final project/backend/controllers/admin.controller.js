const adminModel=require('../models/user.model')
const userModel=require('../models/user.model')
const productModel=require('../models/product.model')

const {resBuilder} = require("../helper/app.helper")

class Admin{
    static addAdmin = async(req,res)=>{
        try{
            const adminData =new adminModel(req.body)
            await adminData.save()
            resBuilder(res,true, adminData, " admin added")
        }
        catch(e){
            resBuilder(res,false, e, e.message)
        }
    }
    
    static ShowAllUsers = async (req, res)=>{
        try{
          
            const users = await userModel.find();
            resBuilder(res,true, users, " all users")
        }
        catch(e){
            resBuilder(res,false, e, e.message)
        }
        
    }
    static editProduct =async(req,res)=>{
        try {
            const productId =req.params.id
            const product =await productModel.findById(productId)
            if(!product) throw new Error("Product not found")
            for(let key in req.body){
                if (req.body[key]){
                    product[key]=req.body[key]
                }
            }
            product.save()
            resBuilder(res,true, product, "product edit")
    
        } catch (e) {
            resBuilder(res,false, e, e.message)

        }
    }
    
    

}
module.exports=Admin