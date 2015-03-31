var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var ProductCollection= Backbone.Collection.extend({
	initialize: function(models, options) {
		this.bind('add', options.view.addOne);
	}
});

module.exports = ProductCollection;