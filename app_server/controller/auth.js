const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../model/user');
const User = require('../model/user');

const register = async (req,res) => {
    try{
        const {
            firstName,
            lastName,
            email,
            password,
        } = req.body;
        
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        const newUser = new user({
            firstName,
            lastName,
            email,
            password: passwordHash,
        });
        const savedUser  = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const login = async (req,res)=>{
    try{

        const {email,password} = req.body;
        const user = await User.findOne({email:email});
        if(!user) return res.status(400).json({msg : "user does not exits. "});

        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) return res.status(400).json({msg : "Invalid credentials. "});

        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token, user});

    } catch (err){

        res.status(500).json({error: err.message});
    }
};

module.exports = {register,login};