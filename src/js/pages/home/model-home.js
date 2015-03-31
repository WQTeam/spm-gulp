var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var Product = Backbone.Model.extend({
	name: null
});

module.exports = Product;