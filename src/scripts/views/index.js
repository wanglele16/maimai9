/**
 * Created by echo on 16/9/28.
 */

var inHead = require('../tpls/index-head.string');
var inBody = require('../tpls/index-body.string');
var inFoot = require('../tpls/index-foot.string');
var common = require('../utils/common.util.js');

common.renderBody($('body'), inHead + inFoot);
common.append($('.main'), inBody);

var scrollIndex;
$(function () {

    setTimeout(function() {
        scrollIndex = new IScroll('#wrap-index',
            {
                bounce : false
            });
        /*scrollIndex.refresh();*/

        $(".goBack-index").on("click",function(){
            scrollIndex.scrollTo(0, 0, 200);
        });
        scrollIndex.on('scrollEnd', function () {
            if (this.y < 0) {
                $('.goBack-index').show();
            } else {
                $('.goBack-index').hide();
            }
            scrollIndex.refresh();

        }, 100);
    /*var scrollIndex = new IScroll('#wrap-index');*/

    var indexSwiper = new Swiper('.swiper-container',
        {
            pagination: '.swiper-pagination',
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            grabCursor: true,
            /*effect: 'coverflow',*/
            loop: true




        });


    });

    /*$(window).on("scroll",function(){
        if($(this).scrollTop()>0){
            $("#rightFloat").show();
        }else{
            $("#rightFloat").hide();
        }
    })*/
});

$.ajax({
    url: '/api/bannerIndex',
    success: function (res) {
        var html = template('swi-index', res);
        common.inner($('#swiper-index'), html);
    }
});

$.ajax({
    url: '/api/recSpeIndex',
    success: function (res) {
        var html = template('recSpe-index', res);
        common.inner($('#rec1-index'), html);
    }
});

$.ajax({
    url: '/api/newIndex',
    success: function (res) {
        var html = template('newPro-index', res);
        common.inner($('#new1-index'), html);
    }
});

$.ajax({
    url: '/api/hotIndex',
    success: function (res) {
        var html = template('hotPro-index', res);
        common.inner($('#hot1-index'), html);
    }
});

$.ajax({
    url: '/api/counIndex',
    success: function (res) {
        var html = template('country-index', res);
        common.inner($('#coun1-index'), html);
    }
});

$.ajax({
    url: '/api/hotSeIndex',
    success: function (res) {
        var html = template('hotSearch-index', res);
        common.inner($('#hotSe1-index'), html);
    }
});







/* var myScroll = new IScroll("#index-scroll");

 if(图片加载完毕) {
 myScroll.refresh();
 }*!/*/
