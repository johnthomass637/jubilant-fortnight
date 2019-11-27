var mongoose = require('mongoose');
var LogoutSchema = new mongoose.Schema({
	logout: Date
});

module.exports = mongoose.model('Logout', LogoutSchema);
