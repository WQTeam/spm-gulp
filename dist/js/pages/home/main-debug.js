;(function() {
var src_js_pages_home_model_home_debug, src_js_pages_home_collection_home_debug, src_js_pages_home_view_home_debug, src_js_pages_home_main_debug;
src_js_pages_home_model_home_debug = function (exports) {
  var $ = window.jQuery;
  var _ = window.underscore;
  var Backbone = window.Backbone;
  var Product = Backbone.Model.extend({ name: null });
  exports = Product;
  return exports;
}();
src_js_pages_home_collection_home_debug = function (exports) {
  var $ = window.jQuery;
  var _ = window.underscore;
  var Backbone = window.Backbone;
  var ProductCollection = Backbone.Collection.extend({
      initialize: function (models, options) {
        this.bind('add', options.view.addOne);
      }
    });
  exports = ProductCollection;
  return exports;
}();
src_js_pages_home_view_home_debug = function (exports) {
  var $ = window.jQuery;
  var _ = window.underscore;
  var Backbone = window.Backbone;
  var Product = src_js_pages_home_model_home_debug;
  var ProductCollection = src_js_pages_home_collection_home_debug;
  var ProductView = Backbone.View.extend({
      el: $('body'),
      initialize: function () {
        this.products = new ProductCollection(null, { view: this });
      },
      events: { 'click #addProduct': 'addProduct' },
      addProduct: function () {
        var name = prompt('\u8F93\u5165\u4EA7\u54C1\u7684\u540D\u79F0');
        var p = new Product({ name: name });
        this.products.add(p);
      },
      addOne: function (model) {
        $('#productList').append('<li>' + model.get('name') + '</li>');
      }
    });
  exports = ProductView;
  return exports;
}();
src_js_pages_home_main_debug = function () {
  var homeView = src_js_pages_home_view_home_debug;
  var app = new homeView();
}();
}());