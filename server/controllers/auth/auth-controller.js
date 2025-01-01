const bycrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../../models/User")

//register
const registerUser = async (req, res) => {
	const { userName, email, password } = req.body

	try {
		const hashPassword = await bycrypt.hash(password, 6)
		const newUser = new User({
			userName,
			email,
			password:hashPassword,
		})
		await newUser.save()
    res.status(200).json({
      success: true,
			message: "Registeration successful",
    })
	} catch (e) {
		console.log(e)
		res.status(500).json({
			success: false,
			message: "some error accured",
		})
	}
}

//login
const login = async (req, res) => {
	try {
	} catch (e) {
		console.log(e)
		res.status(500).json({
			success: false,
			message: "some error accured",
		})
	}
}

//logout

//auth middleware



module.exports={registerUser}