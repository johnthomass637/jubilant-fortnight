const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create member schema

const MemberSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  memberid: {
    type: String
  },
  emailId: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model('members', MemberSchema);
