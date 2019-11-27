var mongoose = require('mongoose');
var MemberSchema = new mongoose.Schema({
  memberid: String,
  memfirstname: String,
  memlastname: String,
  cntdate: String,
  assesstype: String,
  status: String,
  locofvis: String,
  cntentity: String,
  cntname: String,
  intdispmem: String,
  elgbleissue: String,
  memserve: String,
  servegap: String,
  phycond: String,
  phychange: String,
  medappnt: String,
  phyenv: String,
  moodemo: String,
  recfall: String,
  servcare: String,
  memrisk: String,
  restintrv: String,
  memresult: String,
  othtopic: String,
  nursename: String,
  updated_date: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Member', MemberSchema);