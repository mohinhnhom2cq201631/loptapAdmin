const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://nhom2:mohinhhoanhom2@cluster0-lq7bm.mongodb.net/loptap';

const brandDAO = require('../models/DAO/brandDAO');
const Brand = require('../models/brands');
exports.brand_list = async function(req, res) {
	const brandList = await brandDAO.get_Brand_List();
	res.render('brands/list', {
		pageTitle : 'Danh sách thương hiệu',
		brandList : brandList
	});
};

exports.brand_add_get = function(req, res) {
	res.render('brands/add', { pageTitle: 'Thêm thương hiệu' });
};

exports.brand_add_post = function(req, res) {
	mongoose.connect(mongoDB, function(error) {
		if (error) throw error;

		let brand = new Brand({
			_id         : new mongoose.Types.ObjectId(),
			name        : req.body.name,
			img         : 'img/' + req.body.img,
			type        : req.body.type,
			description : req.body.description
		});

		brand.save(function(error) {
			if (error) throw error;
			res.redirect('list');
		});
	});
};

exports.brand_update_get = async function(req, res) {
	const brand = await brandDAO.get_Brand_By_ID(req.params.id);
	res.render('brands/update', {
		pageTitle : 'Cập nhật thương hiệu',
		brand     : brand
	});
};

exports.brand_update_post = function(req, res) {
	mongoose.connect(mongoDB, function(error) {
		if (error) throw error;

		let id = mongoose.Types.ObjectId(req.params.id);

		Brand.findOne({ _id: id }, function(err, foundBrand) {
			if (err) {
				console.log(err);
				res.status(500).send();
			}
			else {
				if (!foundBrand) {
					res.status(404).send();
				}
				else {
					foundBrand.name = req.body.name;
					foundBrand.description = req.body.description;
					foundBrand.img = 'img/' + req.body.img;

					foundBrand.save(function(err) {
						if (err) throw err;
						res.redirect('../list');
					});
				}
			}
		});
	});
};

exports.brand_delete = function(req, res) {
	mongoose.connect(mongoDB, function(error) {
		if (error) throw error;

		let id = mongoose.Types.ObjectId(req.params.id);

		Brand.findOne({ _id: id }, function(err, foundBrand) {
			if (err) {
				console.log(err);
				res.status(500).send();
			}
			else {
				if (!foundBrand) {
					res.status(404).send();
				}
				else {
					foundBrand.isDeleted = true;

					foundBrand.save(function(err) {
						if (err) throw err;
						res.redirect('../list');
					});
				}
			}
		});
	});
};
