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

exports.order_update_get= async function(req, res){
    const orderInfo = await orderDAO.get_Order_By_ID(req.params.id);

    res.render('orders/update', { pageTitle: 'Cập nhật đơn hàng',
        order: orderInfo,
    });

};

exports.order_update_post = async function(req, res){
    const orderInfo = await orderDAO.get_Order_By_ID(req.params.id);
    if(orderInfo == null)
        res.status(404).send();

    orderInfo.status = req.body.status;

    orderInfo.save(err => {
        if(err) throw err;
        res.redirect('../list');
    });
};