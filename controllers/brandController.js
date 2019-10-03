const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://nhom2:mohinhhoanhom2@cluster0-lq7bm.mongodb.net/loptap';

const brandDAO = require('../models/DAO/brandDAO')
exports.brand_list = async function(req,res){
    const brandList = await brandDAO.get_Brand_List();
    res.render('brands/list', {
        pageTitle: 'Danh sách thương hiệu',
        brandList: brandList
    });
};

exports.brand_add= function (req,res)
{
    res.render('brands/add',{pageTitle:'Thêm thương hiệu'})
}