const productModel =require('../models/product.model')
const {resBuilder} = require("../helper/app.helper")

class Product{

    static addprod=async(req,res)=>{
        try {
            const prductData= new productModel(req.body)
            console.log(prductData)
            prductData.adminId=req.user._id
            await prductData.save()
            resBuilder(res,true, prductData, "added")
        } catch (e) {
            resBuilder(res,false, e, "product do not added")
        }
    }
    static singleProduct=async(req,res)=>{
        try {
            const productID = req.params.id;
            //console.log(productID)
            const ProductInfo = await productModel.findById(productID);
            //console.log(ProductInfo)
            if(!ProductInfo) throw new Error("Product show sucsess")
            console.log(ProductInfo)

            resBuilder(res,true, ProductInfo, "product info")
        } catch (e) {
            resBuilder(res,false, e, "product error")
        }
    }
    static showAllProducts=async(req,res)=>{
        try {
            const allProducts = await productModel
            .find()
            .limit(2)
            .skip((req.params.page - 1) * 2);
            //console.log(allProducts)
            resBuilder(res,true, allProducts, "all product ")

        } catch (e) {
            resBuilder(res,false, e, "product error")

        }
    }
    static deleteProduct=async(req,res)=>{
        try {
            const productId=req.params.id
            //console.log(productId)
            const product = await productModel.findById(productId)            
            if (!product) throw new Error("Product not found")
            //console.log(product)
            await product.remove();
            resBuilder(res,true, "delted product", "product delete")
        } catch (e) {
            resBuilder(res,false, e, "product error")

        }
    }

    static addComment=async(req,res)=>{
        try {
            const productId = req.params.id;
            //console.log(productId)

            const product = await productModel.findById(productId)
            //console.log(product)
            if (!product) throw new Error("Product not found")
            product.comments.push({ 
                commentbody: req.body.commentbody, 
                userId: req.user._id })

            await product.save()
            //product.comments.push({ commentbody: req.body.commentbody, userId: req.user._id })
            //const {commentbody} = product.comments[0];
            //console.log(commentbody)
            //await commentbody.save();
            resBuilder(res,true, product, "comment added")
        } catch (e) {
            resBuilder(res,false, e, "no add comment")
        }
    }

    


}
module.exports=Product