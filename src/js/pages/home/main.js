/*
 home page entrance js
*/

var $ = require('jquery');

//home swipe init
var Swipe = require('../../components/swipe.js');
var homeSwipe = new Swipe(document.getElementById('swipe'), {
	speed: 400,
	auto: 3000,
	continuous: true,
	disableScroll: false,
	stopPropagation: false,
	callback: function(index, elem) {},
	transitionEnd: function(index, elem) {}
});


//backbone view init
var homeView = require('./view-home');
var app = new homeView();