const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://nhom2:mohinhhoanhom2@cluster0-lq7bm.mongodb.net/loptap';

const componentDAO = require('../models/DAO/componentDAO');
const Component = require('../models/components');

exports.component_list = async function(req, res) {
	const componentList = await componentDAO.get_Component_List();
	res.render('components/list', {
		pageTitle     : 'Danh sách thông số',
		componentList : componentList
	});
};

exports.component_add_get = function(req, res) {
	res.render('components/add', { pageTitle: 'Thêm thông số' });
};

exports.component_add_post = function(req, res) {
	mongoose.connect(mongoDB, function(error) {
		if (error) throw error;

		let component = new Component({
			_id         : new mongoose.Types.ObjectId(),
			name        : req.body.name,
			type        : req.body.type,
			description : req.body.description
		});

		component.save(function(error) {
			if (error) throw error;
			res.redirect('list');
		});
	});
};

exports.component_update_get = async function(req, res) {
	const component = await componentDAO.get_Component_By_ID(req.params.id);
	res.render('components/update', {
		pageTitle : 'Cập nhật thông số',
		component : component
	});
};

exports.component_update_post = function(req, res) {
	mongoose.connect(mongoDB, function(error) {
		if (error) throw error;

		let id = mongoose.Types.ObjectId(req.params.id);

		Component.findOne({ _id: id }, function(err, foundComponent) {
			if (err) {
				console.log(err);
				res.status(500).send();
			}
			else {
				if (!foundComponent) {
					res.status(404).send();
				}
				else {
					foundComponent.name = req.body.name;
					foundComponent.description = req.body.description;
					foundComponent.type = req.body.type;

					foundComponent.save(function(err) {
						if (err) throw err;
						res.redirect('../list');
					});
				}
			}
		});
	});
};

exports.component_delete = function(req, res) {
	mongoose.connect(mongoDB, function(error) {
		if (error) throw error;

		let id = mongoose.Types.ObjectId(req.params.id);

		Component.findOne({ _id: id }, function(err, foundComponent) {
			if (err) {
				console.log(err);
				res.status(500).send();
			}
			else {
				if (!foundComponent) {
					res.status(404).send();
				}
				else {
					foundComponent.isDeleted = true;

					foundComponent.save(function(err) {
						if (err) throw err;
						res.redirect('../list');
					});
				}
			}
		});
	});
};