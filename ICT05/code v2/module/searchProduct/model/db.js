'use strict'

var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.connect('mongodb://localhost/spproject');
autoIncrement.initialize(connection);

module.exports = autoIncrement;