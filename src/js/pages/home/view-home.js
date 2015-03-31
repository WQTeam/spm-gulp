var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var Product = require('./model-home');
var ProductCollection = require('./collection-home');

var ProductView = Backbone.View.extend({
	
	el: $('body'),

	initialize: function() {
		this.products = new ProductCollection(null, {view: this});
	},

	events: {
		'click #addProduct': 'addProduct'
	},

	addProduct: function() {
		var name = prompt('输入产品的名称');
		var p = new Product({name: name});

		this.products.add(p);
	},

	addOne: function(model) {
		$('#productList').append('<li>' + model.get('name') + '</li>');
	}
});

module.exports = ProductView;