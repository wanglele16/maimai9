/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(2);



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(3);

	var common = __webpack_require__(4);

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



/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container-cart\">  <div class=\"scroll-cart\" id=\"cart-scroll\">    <div class=\"main-cart\">      <header class=\"header-common\">        <a href=\"javascript:void(0)\" class=\"header-goback\"></a>        <span>购物车</span>      </header>      <section class=\"menu-cart\">        <ul>          <li><span class=\"check-cart\"></span> 全选</li>          <li>继续购物</li>        </ul>      </section>      <section class=\"list-cart\">      <ul>        <li class=\"item-cart\">          <section>            <span class=\"check-cart\"></span>            <a href=\"javascript:void(0)\">              <img src=\"/build/images/22529294675285164_M.jpg\" alt=\"\">            </a>            <div class=\"cart-right\">              <h2>玛斯家族科比干红葡萄酒</h2>              <div class=\"cart-right-bt\">                <i><em>￥363 </em>赠送400积分</i>                <b><span></span><strong></strong><span></span></b>              </div>            </div>          </section>        </li>        <li class=\"item-cart\">          <section>            <span class=\"check-cart\"></span>            <a href=\"javascript:void(0)\">              <img src=\"/build/images/22529294675285164_M.jpg\" alt=\"\">            </a>            <div class=\"cart-right\">              <h2>玛斯家族科比干红葡萄酒</h2>              <div class=\"cart-right-bt\">                <i><em>￥363 </em>赠送400积分</i>                <b><span></span><strong></strong><span></span></b>              </div>            </div>          </section>        </li>        <li class=\"item-cart\">          <section>            <span class=\"check-cart\"></span>            <a href=\"javascript:void(0)\">              <img src=\"/build/images/22529294675285164_M.jpg\" alt=\"\">            </a>            <div class=\"cart-right\">              <h2>玛斯家族科比干红葡萄酒</h2>              <div class=\"cart-right-bt\">                <i><em>￥363 </em>赠送400积分</i>                <b><span></span><strong></strong><span></span></b>              </div>            </div>          </section>        </li>        <li class=\"item-cart\">          <section>            <span class=\"check-cart\"></span>            <a href=\"javascript:void(0)\">              <img src=\"/build/images/22529294675285164_M.jpg\" alt=\"\">            </a>            <div class=\"cart-right\">              <h2>玛斯家族科比干红葡萄酒</h2>              <div class=\"cart-right-bt\">                <i><em>￥363 </em>赠送400积分</i>                <b><span></span><strong></strong><span></span></b>              </div>            </div>          </section>        </li>        <li class=\"item-cart\">          <section>            <span class=\"check-cart\"></span>            <a href=\"javascript:void(0)\">              <img src=\"/build/images/22529294675285164_M.jpg\" alt=\"\">            </a>            <div class=\"cart-right\">              <h2>玛斯家族科比干红葡萄酒</h2>              <div class=\"cart-right-bt\">                <i><em>￥363 </em>赠送400积分</i>                <b><span></span><strong></strong><span></span></b>              </div>            </div>          </section>        </li>        <li class=\"item-cart\">          <section>            <span class=\"check-cart\"></span>            <a href=\"javascript:void(0)\">              <img src=\"/build/images/22529294675285164_M.jpg\" alt=\"\">            </a>            <div class=\"cart-right\">              <h2>玛斯家族科比干红葡萄酒</h2>              <div class=\"cart-right-bt\">                <i><em>￥363 </em>赠送400积分</i>                <b><span></span><strong></strong><span></span></b>              </div>            </div>          </section>        </li>        <li class=\"item-cart\">          <section>            <span class=\"check-cart\"></span>            <a href=\"javascript:void(0)\">              <img src=\"/build/images/22529294675285164_M.jpg\" alt=\"\">            </a>            <div class=\"cart-right\">              <h2>玛斯家族科比干红葡萄酒</h2>              <div class=\"cart-right-bt\">                <i><em>￥363 </em>赠送400积分</i>                <b><span></span><strong></strong><span></span></b>              </div>            </div>          </section>        </li>        <li class=\"item-cart\">          <section>            <span class=\"check-cart\"></span>            <a href=\"javascript:void(0)\">              <img src=\"/build/images/22529294675285164_M.jpg\" alt=\"\">            </a>            <div class=\"cart-right\">              <h2>玛斯家族科比干红葡萄酒</h2>              <div class=\"cart-right-bt\">                <i><em>￥363 </em>赠送400积分</i>                <b><span></span><strong></strong><span></span></b>              </div>            </div>          </section>        </li>      </ul>    </section>    </div>  </div>  <footer class=\"bottom-cart\">    <span>总计金额:<i>￥3235</i></span>  </footer></div><!-- <header class=\"top-cart\">  <span></span>  <h2></h2></header> -->"

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = {
	    render: function($el, str) {
	        if ($el.get(0).tagName.toLowerCase() == 'body') {
	            $el.prepend(str);
	        } else {
	            $el.html(str);
	            console.log(1);
	        }
	    }
	};

	module.exports = common;



/***/ }
/******/ ]);