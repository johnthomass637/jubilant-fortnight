var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Case = require('../models/Case.js');
var Logout = require('../models/Logout');
/* GET ALL CASES */
router.get('/', function(req, res, next) {
	Case.find(function(err, products) {
		if (err) return next(err);
		res.json(products);
	});
});
/* GET SINGLE CASE BY ID */
router.get('/getCase/:id', function(req, res, next) {
	Case.findById(req.params.id, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});
/* SAVE CASE */
router.post('/saveCase/', function(req, res, next) {
	console.log(req.body);
	let createdate = Date();
	const newCase = new Case({
		memberid: req.body.memberid,
		memname: req.body.memname,
		dateofbirth: req.body.dateofbirth,
		servicepvdid: req.body.servicepvdid,
		requestpvdid: req.body.requestpvdid,
		diagcode: req.body.diagcode,
		procode: req.body.procode,
		startdate: req.body.startdate,
		enddate: req.body.enddate,
		status: req.body.status,
		MMSStatus: req.body.MMSStatus,
		CallType: req.body.CallType,
		createddate: createdate
	});
	Case.create(newCase, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});
/* UPDATE CASE */
router.put('/updateCase/:id', function(req, res, next) {
	Case.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});
/* DELETE CASE */
router.delete('/deleteCase/:id', function(req, res, next) {
	Case.findByIdAndRemove(req.params.id, req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/*Get status with Member ID */
router.get('/getCasememberid/:id', function(req, res, next) {
	const memberid = req.params.id;
	Case.findOne({ memberid }, {}).then((data) => {
		res.json(data);
	});
});
/*POST Logout time */
router.post('/sendTime', function(req, res, next) {
	Logout.create(req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});
/*Get status with Member after Logout */
router.get('/getTime', function(req, res, next) {
	Logout.find({}).sort({ $natural: -1 }).then((result) => {
		Case.find({ updated_date: { $gte: result[0].logout } })
			.then((result) => {
				res.json(result);
			})
			.catch((err) => console.log(err));
	});
});
router.get('/getCountByMonth', (req, res, next) => {
	// Case.find({
	// 	startdate: { $gte: { $date: new Date('2019-07-01') }, $lt: { $date: new Date('2019-10-01') } }
	//})

	Case.aggregate([
		{
			$group: {
				_id: { $month: '$createddate' },
				createddate: { $sum: 1 }
			}
		}
	])
		.sort({ _id: 1 })
		.then((data) => {
			res.send(data);
		});
});

module.exports = router;
