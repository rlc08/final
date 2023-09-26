const express = require('express')



const login = (req,res)=>{
    res.render('login',{title:'Login'});
}
const register  = (req,res)=>{
    res.render('register',{title:"Register"});
}

const about = (req,res)=>{
    res.render('about',{title:'About'});
}

const contact = (req,res)=>{
    res.render('contact',{title:'contact'})
}



module.exports = {login,register,about,contact}