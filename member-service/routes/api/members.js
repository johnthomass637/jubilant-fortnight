const express = require('express');
const router = express.Router();

//Load User model

const Member = require('../../model/Members');
/************************************************************************************************************/

// @route   GET api/getAllmembers
// @desc    Get all Users
// @acess   Public
router.post('/create', (req, res) => {
  Member.findOne({ emailId: req.body.emailId }).then(members => {
    if (members) {
      errors = { email: 'Email already exists' };
      return res.status(400).json(errors);
    } else {
      const member = new Member({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        memberid: req.body.memberid,
        emailId: req.body.emailId
      });

      member.save().then(member => {
        if (member) {
          res.status(200).json({ MSG: 'MEMBER CREATED SUCCESSFULLY ' });
        } else {
          res.status(404).json({ MSG: 'MEMBER NOT CREATED SUCCESSFULLY ' });
        }
      });
    }
  });
});
/*********************************************************************************************************** */
// @route   GET api/getAllmembers
// @desc    Get all Users
// @acess   Public
router.get('/getAllmembers', (req, res) => {
  Member.find({}).then(members => {
    if (members) {
      res.status(200).json(members);
    } else {
      res.status(200).json({ MSG: 'FAILURE' });
    }
  });
});
  
/*********************************************************************************************************/

// @route   GET api/getbyId/:id
// @desc    Get one member by id
// @acess   Public

router.get('/getbyId/:id', (req, res) => {
  const memberid = req.params.id;
  Member.findOne({ memberid }).then(members => {
    if (members) {
      res.status(200).json({ MSG: 'SUCCESS' });
    } else {
      res.status(200).json({ MSG: 'FAILURE' });
    }
  });
});

/*********************************************************************************************************/

/*********************************************************************************************************/

// @route   GET deleteAllmembers
// @desc    Get delete all
// @acess   Public

router.get('/deleteAllmembers', (req, res) => {
  Member.remove()
    .exec()
    .then(members => {
      if (members) {
        res.status(200).json({ MSG: 'ALL MEMBERS DELETED' });
      } else {
        res.status(404).json({ MSG: 'SOME ERROR OCCURED' });
      }
    });
});

/*********************************************************************************************************/
module.exports = router;
