const router = require("express").Router()
const Admin=require('../controllers/admin.controller')
const {auth, authAdmin, authUser} = require("../middleware/auth.middleware")
const upload = require("../middleware/fileUpload.middleware")

router.post('/addadmin',Admin.addAdmin)
router.get('/users',auth,authAdmin,Admin.ShowAllUsers)
router.patch('/editproduct/:id',auth,authAdmin,Admin.editProduct)


module.exports = router