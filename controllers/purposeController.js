const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://nhom2:mohinhhoanhom2@cluster0-lq7bm.mongodb.net/loptap';

const purposeDAO = require('../models/DAO/purposeDAO')
exports.purpose_list = async function(req,res){
    const purposeList = await purposeDAO.get_Purpose_List();
    res.render('purposes/list', {
        pageTitle: 'Danh sách loại laptop',
        purposeList: purposeList
    });
};