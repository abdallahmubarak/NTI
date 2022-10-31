const router = require("express").Router()
const User = require("../controllers/user.controller")
const {auth, authAdmin, authUser} = require("../middleware/auth.middleware")

router.post('/register', User.register)

router.post("/login",User.login)

router.post('/logout',auth,User.logOut)
router.post('/editpassword/:id',auth,User.editPassword)

router.post('/edituser',auth,User.editUser)
router.post('/addtocart/:id',auth,authUser,User.addToCart)
router.delete('/cartdeleteitem/:id', auth,authUser, User.CartDeleteProduct);
router.post('/addtofav/:id',auth,authUser,User.addTofavList)
router.get('/favlist',auth,authUser,User.favlist)

router.delete('/deletefromfav/:id', auth,authUser, User.DeleteFavProduct);
router.post('/addimage/:id',auth,authUser,User.addImg)


router.get("/me", auth,authUser,User.me)

// const multer  = require('multer')
// const upload = multer({ dest: 'static/' })
// router.post("/imgUpload",auth, upload.single("img"), User.addImgProfile)

//const upload = require("../middleware/fileUpload.middleware")
//router.post("/imgUpload", auth,upload.single("img"), User.addImg)
module.exports = router