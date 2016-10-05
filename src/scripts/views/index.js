/**
 * Created by echo on 16/9/28.
 */

var inHead = require('../tpls/index-head.string');
var inBody = require('../tpls/index-body.string');
var inFoot = require('../tpls/index-foot.string');
var common = require('../utils/common.util.js');

common.renderBody($('body'), inHead + inFoot);
common.append($('.main'), inBody);


$(function () {
    var scrollIndex = new IScroll('#wrap-index');
    var indexSwiper = new Swiper('.swiper-container',
        {
            pagination: '.swiper-pagination',
            autoplay: 2000,
            autoplayDisableOnInteraction: false,
            grabCursor: true,
            effect: 'coverflow',
            loop: true

        });
});
/*
 $.ajax({
 url: '/api/list.php',
 success: function (res) {
 var html = T('test', res.data);
 common.render($('#test'), html);
 $('#test').show();
 }
 });*/
/*
 $.ajax({
 url: '/api/list.php',
 success: function (res) {
 var html = T('list', res);
 common.render($('#index-scroll'), html);
 // $('#list').show();
 }
 });


 var myScroll = new IScroll("#index-scroll");

 if(图片加载完毕) {
 myScroll.refresh();
 }*/
