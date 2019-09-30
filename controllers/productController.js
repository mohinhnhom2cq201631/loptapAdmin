const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://nhom2:mohinhhoanhom2@cluster0-lq7bm.mongodb.net/loptap';

const productDAO = require('../models/DAO/productDAO')

exports.product_list = async function (req,res) 
{
    const productList = await productDAO.get_Product_List();
    res.render('products/list',{ 
        pageTitle:'Danh sách sản phẩm',
        productList: productList
    })
}