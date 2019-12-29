const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://nhom2:mohinhhoanhom2@cluster0-lq7bm.mongodb.net/loptap';
var async = require('async');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const Admin = require('../models/admins');
const adminDAO = require('../models/DAO/adminDAO');

exports.admin_list = async function(req, res) {
	const adminList = await adminDAO.get_Admin_List();
	res.render('admins/list', {
		pageTitle : 'Danh sách nhân viên',
		adminList : adminList
	});
};

exports.admin_login_get= function(req,res)
{
    res.render('admins/login',{pageTitle:"Đăng nhập"});
};

exports.admin_register_get= function(req,res)
{
    res.render('admins/register',{pageTitle:"Đăng kí"});
};

exports.admin_register_post= function(req,res)
{
    const {  email, password, password2, position } = req.body;
    let errors = [];
  
    if (!email || !password || !password2 || !position) {
      errors.push({ msg: 'Xin hãy điền hết thông tin' });
    }
  
    if (password != password2) {
      errors.push({ msg: 'Mật khẩu không khớp' });
    }
  
    if (password.length > 6) {
      errors.push({ msg: 'Mật khẩu phải ít hơn 6 kí tự' });
    }
  
    if (errors.length > 0) {
      res.render('admins/register', {
        errors
      });
    } else {
      Admin.findOne({ username: email }).then(admin => {
        if (admin) {
          errors.push({ msg: 'Email này đã tồn tại' });
          res.render('admins/register', {
            errors
          });
        } else {
          const newAdmin = new Admin({
              _id         : new mongoose.Types.ObjectId(),
              username: email,
              password,
             position: position

          });
  
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newAdmin.password, salt, (err, hash) => {
              if (err) throw err;
              newAdmin.password = hash;
              newAdmin
                .save()
                .then(admin => {
          
                  res.redirect('/admins/login');
                })
                .catch(err => console.log(err));
            });
          });
        }
      });
    }
};

exports.admin_login_post=function(req,res,next)
{
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/admins/login',})(req, res, next);
};

exports.admin_logout=function(req,res,next)
{
    req.logout();
    res.redirect('/admins/login');
};