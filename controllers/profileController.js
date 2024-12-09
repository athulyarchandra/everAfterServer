
const profiles = require('../models/profileModel');
const jwt = require('jsonwebtoken')

//add-profile
exports.addProfileController= async(req,res)=>{
    console.log("Inside addProfileController");
    const userId = req.userId
    console.log(userId);
    const {username,email,phone,gender,dob,height,fatherName,city,age,weight,motherName,address,job,degree,school,collage,whatsApp,facebook,instagram,twitter,hobbies} = req.body
    const profilePic = req.file.filename
    // console.log(username,email,phone,gender,dob,height,fatherName,city,age,weight,motherName,address,job,degree,school,collage,whatsApp,facebook,instagram,twitter,hobbies,profilePic);
    try {
        const existingProfile = await profiles.findOne({email})
        if(existingProfile){
            res.status(406).json("This profile already exist can't upload again")
        }else{
            const newProfile = new profiles({
                username,email,phone,gender,dob,height,fatherName,city,age,weight,motherName,address,job,degree,school,collage,whatsApp,facebook,instagram,twitter,hobbies,profilePic,userId
            })
            await newProfile.save()
            res.status(200).json(newProfile)

        }
    } catch (err) {
        res.status(401).json(err)
    }    
}
//getHomeProfiles
exports.getHomeProfileController = async(req,res)=>{
    console.log(":Inside getHomeProfileController");
    try {
        const allHomeProfiles = await profiles.find().limit(3)
        res.status(200).json(allHomeProfiles)
    } catch (err) {
        res.status(401).json(err)
    }

}
//getAllProfiles
exports.getAllProfilesController = async(req,res)=>{
    console.log(":Inside getHomeProfileController");
    const searchKey = req.query.search
    const query = {
        city:{
            $regex:searchKey,$options:'i'
        }
    }
    try {
        const allProfiles = await profiles.find(query)
        res.status(200).json(allProfiles)
    } catch (err) {
        res.status(401).json(err)
    }

}
//getUserDetails
exports.getUserDetailsController = async(req,res)=>{
    console.log("Inside getUserDetailsController");
    const userId = req.userId
    try {
        const allUserDetails = await profiles.find({userId})
        res.status(200).json(allUserDetails)
    } catch (err) {
        res.status(401).json(err)
    }

}
//editProfileDetails
exports.editprofileDetailsController = async (req,res)=>{
    console.log(" Inside editprofileDetailsController");
    const id = req.params.id
    const userId = req.userId
    const {username, email, phone, gender, dob, height, fatherName, city, age, weight, motherName, address, job, degree, school, collage, whatsApp, facebook, instagram, twitter, hobbies, profilePic } = req.body
    const reUploadProfileImg = req.file?req.file.filename:profilePic
    try {
        const updateProfile = await profiles.findByIdAndUpdate({_id:id},{
            username,email,phone,gender,dob,height,fatherName,city,age,weight,motherName,address,job,degree,school,collage,whatsApp,facebook,instagram,twitter,hobbies,profilePic:reUploadProfileImg,userId
        },{new:true})
        await updateProfile.save()
        res.status(200).json(updateProfile)
    } catch (err) {
        res.status(401).json(err)
    }
}
//deleteProfile
exports.deleteProfileController = async (req,res)=>{
    console.log(" Inside editprofileDetailsController");
    const {id} = req.params
    try {
        const deleteProfile = await profiles.findByIdAndDelete({_id:id})
        res.status(200).json(deleteProfile)
    } catch (err) {
        res.status(401).json(err)
    } 
}


