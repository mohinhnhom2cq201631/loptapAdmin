const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://nhom2:mohinhhoanhom2@cluster0-lq7bm.mongodb.net/loptap';

const productDAO = require('../models/DAO/productDAO');
const brandDAO = require('../models/DAO/brandDAO');
const componentDAO = require('../models/DAO/componentDAO');

const Product = require('../models/products');

exports.product_list = async function(req, res) {
	const productList = await productDAO.get_Product_List();
	res.render('products/list', {
		pageTitle   : 'Danh sách sản phẩm',
		productList : productList
	});
};
exports.product_list = async function(req, res) {
	const productList = await productDAO.get_Product_List();
	res.render('products/list', {
		pageTitle   : 'Danh sách sản phẩm',
		productList : productList
	});
};

exports.product_add_get = async function(req, res) {
	const brands = await brandDAO.get_Brand_List();
	const purposeComponents = await componentDAO.get_Purpose_Component_List();
	const chipComponents = await componentDAO.get_Chip_Component_List();
	const ramComponents = await componentDAO.get_RAM_Component_List();
	const vgaComponents = await componentDAO.get_VGA_Component_List();

	res.render('products/add', {
		pageTitle         : 'Thêm sản phẩm',
		brands            : brands,
		purposeComponents : purposeComponents,
		chipComponents    : chipComponents,
		ramComponents     : ramComponents,
		vgaComponents     : vgaComponents
	});
};

exports.product_add_post = function(req, res) {
	mongoose.connect(mongoDB, function(error) {
		if (error) throw error;

		let product = new Product({
			_id         : new mongoose.Types.ObjectId(),
			name        : req.body.name,
			img         : 'img/' + req.body.img,
			brand       : req.body.brand,
			chip        : req.body.chip,
			ram         : req.body.ram,
			vga         : req.body.vga,
			purpose     : req.body.purpose,
			size        : req.body.size,
			price       : req.body.price,
			description : req.body.description
		});

		product.save(function(error) {
			if (error) throw error;
			res.redirect('list');
		});
	});
};

exports.product_update_get = async function(req, res) {
	const product = await productDAO.get_Product_By_ID(req.params.id);
	const brands = await brandDAO.get_Brand_List();
	const purposeComponents = await componentDAO.get_Purpose_Component_List();
	const chipComponents = await componentDAO.get_Chip_Component_List();
	const ramComponents = await componentDAO.get_RAM_Component_List();
	const vgaComponents = await componentDAO.get_VGA_Component_List();

	res.render('products/update', {
		pageTitle         : 'Cập nhật sản phẩm',
		product           : product,
		brands            : brands,
		purposeComponents : purposeComponents,
		chipComponents    : chipComponents,
		ramComponents     : ramComponents,
		vgaComponents     : vgaComponents
	});
};

exports.product_update_post = function(req, res) {
	mongoose.connect(mongoDB, function(error) {
		if (error) throw error;

		let id = mongoose.Types.ObjectId(req.params.id);

		Product.findOne({ _id: id }, function(err, foundProduct) {
			if (err) {
				console.log(err);
				res.status(500).send();
			}
			else {
				if (!foundProduct) {
					res.status(404).send();
				}
				else {
					foundProduct.name = req.body.name;
					foundProduct.img = 'img/' + req.body.img;
					foundProduct.brand = req.body.brand;
					foundProduct.chip = req.body.chip;
					foundProduct.ram = req.body.ram;
					foundProduct.vga = req.body.vga;
					foundProduct.purpose = req.body.purpose;
					foundProduct.size = req.body.size;
					foundProduct.price = req.body.price;
					foundProduct.description = req.body.description;

					foundProduct.save(function(err) {
						if (err) throw err;
						res.redirect('../list');
					});
				}
			}
		});
	});
};

exports.product_delete = function(req, res) {
	mongoose.connect(mongoDB, function(error) {
		if (error) throw error;

		let id = mongoose.Types.ObjectId(req.params.id);

		Product.findOne({ _id: id }, function(err, foundProduct) {
			if (err) {
				console.log(err);
				res.status(500).send();
			}
			else {
				if (!foundProduct) {
					res.status(404).send();
				}
				else {
					foundProduct.isDeleted = true;

					foundProduct.save(function(err) {
						if (err) throw err;
						res.redirect('../list');
					});
				}
			}
		});
	});
};