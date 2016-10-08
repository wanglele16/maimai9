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

	module.exports = __webpack_require__(9);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = {
	  renderBody: function ($el, str) {
	    $el.prepend(str);
	  },
	  inner: function ($el, str) {
	    $el.html(str);
	  },
	  append: function ($el, str) {
	    $el.append(str);
	  },

	};

	module.exports = common;



/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(10);





/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common=__webpack_require__(4);
	var aaa = __webpack_require__(11);



	common.renderBody($('body'),aaa);

	 $(function(){

	        //验证用户名是否输入正确
	         $('.txt').eq(0).focus(function(){
	            
	            $('.onShow').eq(0).html("请输入正确的手机号");
	        })
	         
	        $('.txt').eq(0).blur(function(){
	            
	           var aaa=$('.txt').eq(0).val();
	            var reg=/^1[3578]\d{9}$/; 
	            if (reg.test(aaa)) {
	                $('.null').eq(0).html("");
	            }else{
	                $('.null').eq(0).html("输入错误");
	            }
	            
	        })
	        
	        
	        //验证密码是否输入正确
	        
	        var texst;
	        $('.txt').eq(1).focus(function(){
	            
	            $('.txt').eq(1).html("至少6个长度");
	        })
	        
	        
	        $('.txt').eq(1).blur(function(){
	            
	           var aaa=$('.txt').eq(1).val();
	           texst=aaa;
	            var reg=/^[0-9A-Za-z]{6,}$/; 
	            if (reg.test(aaa)) {
	                $('.null').eq(1).html("");
	            }else{
	                $('.null').eq(1).html("至少6个长度");
	            }
	            
	        })
	        
	         
	        //验证再次输入密码框是否输入正确
	        $('.txt').eq(2).focus(function(){
	            
	            $('.null').eq(2).html("至少6个长度");
	        })
	        
	        
	        $('.txt').eq(2).blur(function(){
	            
	           var aaa=$('.txt').eq(2).val();
	            var reg=/^[0-9A-Za-z]{6,}$/; 
	            if (reg.test(aaa)&&aaa==texst) {
	                $('.null').eq(2).html("");
	            }else if(reg.test(aaa)&&aaa!==texst){
	                $('.null').eq(2).html("两次输入不正确");
	            }else{
	                $('.null').eq(2).html("至少6个长度");
	            }
	            
	        })

	        $('.sublime').eq(0).click(function(event) {
	            
	            alert("注册成功");
	            
	        });

	       })


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = " <div class=\"main\">        <nav>            <a href=\"#\"></a><span>注册</span></nav>        <div class=\"content\">            <from>                <div class=\"playuser\">                    <div class=\"add\">用户名:</div>                    <input type=\"text\" placeholder=\"请输入手机或邮箱\" class=\"txt\" />                    <div class=\"red-icon\"><i></i></div>                </div>                <div class=\"null\"></div>                <div class=\"playuser\">                    <div class=\"add\">设置密码:</div>                    <input type=\"text\" placeholder=\"设置6位以上的密码\" class=\"txt\" />                    <div class=\"red-icon\"><i></i></div>                </div>                <div class=\"null\"></div>                <div class=\"playuser\">                    <div class=\"add\">确认密码:</div>                    <input type=\"text\" placeholder=\"请再次输入密码\" class=\"txt\" />                    <div class=\"red-icon\"><i></i></div>                </div>                <div class=\"null\"></div>                <div class=\"playuser\">                    <div class=\"add\"><i class=\"duihao\"></i></div>                    <div style=\"font-size: 12px; line-height: 26px; margin-left: 8px; float: left;\">我已同意并阅读</div>                </div>                <div class=\"null\"></div>                <div class=\"playuser\" style=\"height: 36px; margin-top: 18px; text-align: center;line-height: 36px;\"><a href=\"#\" class=\"sublime\">提交</a></div>            </from>        </div>    </div>"

/***/ }
/******/ ]);