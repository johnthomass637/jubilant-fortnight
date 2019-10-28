var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Case = require('../models/Case.js');
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
	Case.create(req.body, function(err, post) {
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
router.get('/getCasememberid/:id', function(req, res, next) {
     const memberid =req.params.id
Case.findOne({memberid},{}).then((data)=>{
            res.json(data)
        })
}); 

module.exports = router;
