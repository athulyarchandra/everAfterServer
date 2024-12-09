const express = require('express')
const userController = require('../controllers/userController')
const profileController = require('../controllers/profileController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')
const router = new express.Router()

//register
router.post('/register',userController.registerController)
//login
router.post('/login',userController.loginController)
//addProfile
router.post('/add-profile',jwtMiddleware,multerMiddleware.single('profilePic'),profileController.addProfileController)
//home-Profiles
router.get('/home-Profiles',profileController.getHomeProfileController)
//allProfiles
router.get('/all-Profiles',jwtMiddleware,profileController.getAllProfilesController)
//getUserDetails
router.get('/user-Profile',jwtMiddleware,profileController.getUserDetailsController)
//edit-user
router.put('/edit-user',jwtMiddleware,multerMiddleware.single('profilePic'),userController.editUserController)
//profile/id/edit
router.put('/profile/:id/edit',jwtMiddleware,multerMiddleware.single('profilePic'),profileController.editprofileDetailsController)
//profile/id/delete
router.delete('/profile/:id/delete',jwtMiddleware,profileController.deleteProfileController)

module.exports = router 