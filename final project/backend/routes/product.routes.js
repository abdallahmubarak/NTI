const router = require("express").Router()
const Product =require('../controllers/product.controller')
const {auth, authAdmin, authUser} = require("../middleware/auth.middleware")
const upload = require("../middleware/fileUpload.middleware")


router.post('/addproduct/:id',auth,authAdmin,upload.single('img'),Product.addprod)
router.get('/allproducts/:page',Product.showAllProducts)
router.get('/product/:id',auth,Product.singleProduct)
router.delete('/productdel/:id',auth,Product.deleteProduct)

router.post('/addcomment/:id',auth,authUser,Product.addComment)
//router.post('/showallcomment/:id',Product.showAllComment)

module.exports = router