var str = require('../tpls/cart.string');

var common = require('../utils/common.util.js');

var body = document.querySelector('body');

common.render($('body'),str);

// $.ajax({
//   url: '/api/list.php',
//   success: function (res) {
//     var html = T('test', res.data);
//     common.render($('#test'),html);
//     $('#test').show();
//   }
// });
window.onload = function(){
  var cartScroll = new IScroll('#cart-scroll');
}
