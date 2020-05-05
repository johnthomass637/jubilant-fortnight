const express = require('express');
const router = express.Router();
const secret = require('../../config/keys').secret;
//Load User model

const Member = require('../../model/Members');
/************************************************************************************************************/

// @route   GET api/getAllmembers
// @desc    Get all Users
// @acess   Public
router.post('/create', (req, res) => {
  let key = req.query.key;
  if (secret === key) {
    Member.findOne({ emailId: req.body.emailId }).then((members) => {
      if (members) {
        errors = { email: 'Email already exists' };
        return res.status(400).json(errors);
      } else {
        const member = new Member({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          memberid: req.body.memberid,
          emailId: req.body.emailId,
        });

        member.save().then((member) => {
          if (members) {
            res.status(200).json(members);
          } else {
            res.status(404).json({ MSG: 'MEMBER CREATED SUCCESSFULLY ' });
          }
        });
      }
    });
  } else {
    res.status(403).json({ MSG: 'Unauth request ' });
  }
});
/*********************************************************************************************************** */
// @route   GET api/getAllmembers
// @desc    Get all Users
// @acess   Public
router.get('/getAllmembers', (req, res) => {
  let key = req.query.key;
  if (secret === key) {
    Member.find({}).then((members) => {
      if (members) {
        res.status(200).json(members);
      } else {
        res.status(200).json({ MSG: 'FAILURE' });
      }
    });
  } else {
    res.status(403).json({ MSG: 'Unauth request ' });
  }
});

/*********************************************************************************************************/

// @route   GET api/getbyId/:id
// @desc    Get one member by id
// @acess   Public

router.get('/getbyId', (req, res) => {
  const memberid = req.query.id;
  let key = req.query.key;
  if (secret === key) {
    Member.findOne({ memberid }).then((members) => {
      if (members) {
        res.status(200).json({ MSG: 'SUCCESS' });
      } else {
        res.status(200).json({ MSG: 'FAILURE' });
      }
    });
  } else {
    res.status(403).json({ MSG: 'Unauth request ' });
  }
});

/*********************************************************************************************************/

/*********************************************************************************************************/

// @route   GET deleteAllmembers
// @desc    Get delete all
// @acess   Public

router.get('/deleteAllmembers', (req, res) => {
  let key = req.query.key;
  if (secret === key) {
    Member.remove()
      .exec()
      .then((members) => {
        if (members) {
          res.status(200).json({ MSG: 'ALL MEMBERS DELETED' });
        } else {
          res.status(404).json({ MSG: 'SOME ERROR OCCURED' });
        }
      });
  } else {
    res.status(403).json({ MSG: 'Unauth request ' });
  }
});

/*********************************************************************************************************/
module.exports = router;
