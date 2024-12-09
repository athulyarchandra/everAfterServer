const users = require('../models/userModel');
const jwt = require('jsonwebtoken')
//register
exports.registerController = async (req, res) => {
    console.log("Inside registerControllern");
    console.log(req.body);
    const { username, email, password } = req.body
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("Existing User Please login")
        } else {
            const newUser = new users({
                username, email, password, phone: "", gender: "", dob: "", height: "", fatherName: "", city: "", age: "", weight: "", motherName: "", address: "", job: "", companyName: "", degree: "", school: "", collage: "", whatsApp: "", facebook: "", instagram: "", twitter: "", hobbies: "", profilePic: ""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

//login
exports.loginController = async (req, res) => {
    console.log("Inside loginController");
    const { email, password } = req.body
    console.log(email, password);
    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, process.env.JWTPASSWORD)
            res.status(200).json({
                user: existingUser, token
            })
        } else {
            res.status(404).json("Incorrect email or password")
        }

    } catch (err) {
        res.status(401).json(err)

    }

}

//profile-updation
exports.editUserController = async (req,res)=>{
    console.log("Inside editUserController");
    const {username,email,password,profilePic} = req.body
    const uploadProfilePic = req.file?req.file.filename:profilePic
    const userId = req.userId
    try {
        const updatedUser = await users.findByIdAndUpdate({_id:userId},{
            username,email,password,profilePic:uploadProfilePic
        },{new:true})
        await updatedUser.save()
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(401).json(err)
    }

    
}

