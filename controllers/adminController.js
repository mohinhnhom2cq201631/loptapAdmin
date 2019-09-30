const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://nhom2:mohinhhoanhom2@cluster0-lq7bm.mongodb.net/loptap';

const adminDAO = require('../models/DAO/adminDAO')

exports.admin_list = async function (req,res) 
{
    const adminList = await adminDAO.get_Admin_List();
    res.render('admins/list',{ 
        pageTitle:'Danh sách nhân viên',
        adminList: adminList
    })
}