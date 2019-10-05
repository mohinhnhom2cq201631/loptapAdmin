const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://nhom2:mohinhhoanhom2@cluster0-lq7bm.mongodb.net/loptap';

const componentDAO = require('../models/DAO/componentDAO')
exports.component_list = async function(req,res){
    const componentList = await componentDAO.get_Component_List();
    res.render('components/list', {
        pageTitle: 'Danh sách thông số',
        componentList: componentList
    });
};

exports.component_add = function(req,res) {
    res.render('components/add', {pageTitle:'Thêm linh kiện'});
}