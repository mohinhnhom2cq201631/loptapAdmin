const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://nhom2:mohinhhoanhom2@cluster0-lq7bm.mongodb.net/loptap';

const orderDAO = require('../models/DAO/orderDAO')

exports.order_list = async function (req,res) 
{
    const orderList = await orderDAO.get_Order_List();
    res.render('orders/list',{ 
        pageTitle:'Danh sách đơn hàng',
        orderList: orderList
    })
}