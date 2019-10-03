const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://nhom2:mohinhhoanhom2@cluster0-lq7bm.mongodb.net/loptap';

const userDAO = require('../models/DAO/userDAO')

exports.user_list = async function (req,res) 
{
    const userList = await userDAO.get_User_List();
    res.render('users/list',{ 
        pageTitle:'Danh sách người dùng',
        userList: userList
    })
}

exports.user_add=function(req,res)
{
    res.render('users/add',{pageTitle:'Thêm tài khoản'})
}