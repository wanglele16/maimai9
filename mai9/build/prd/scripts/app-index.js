!function(i){function e(s){if(a[s])return a[s].exports;var n=a[s]={exports:{},id:s,loaded:!1};return i[s].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var a={};return e.m=i,e.c=a,e.p="",e(0)}([function(i,e,a){i.exports=a(1)},function(i,e,a){a(2)},function(i,e,a){var s=a(3),n=a(4),r=a(5),d=a(6);d.renderBody($("body"),s+r),d.append($(".main"),n),$(function(){new IScroll("#wrap-index"),new Swiper(".swiper-container",{pagination:".swiper-pagination",autoplay:2e3,autoplayDisableOnInteraction:!1,grabCursor:!0,effect:"coverflow",loop:!0})})},function(i,e){i.exports='<section id="wrap-index">    <div class="main">        <header class="in-head">            <h1><a href="/build/prd/index.html"></a></h1>            <div class="in-searchbox">                <div class="in-searchwrap">                    <span class="in-search" id="search"></span>                    <input type="text" value="" class="in-searchtext" placeholder="搜索专属于您的味蕾体验" id="globalText">                </div>            </div>        </header>    </div></section>'},function(i,e){i.exports='<div class="swiper-container">    <div class="swiper-wrapper">        <div class="swiper-slide"><a href=""><img src="/build/images/ban-index0.jpg" alt=""></a></div>        <div class="swiper-slide"><a href=""><img src="/build/images/ban-index1.jpg" alt=""></a></div>        <div class="swiper-slide"><a href=""><img src="/build/images/ban-index2.jpg" alt=""></a></div>        <div class="swiper-slide"><a href=""><img src="/build/images/ban-index3.jpg" alt=""></a></div>        <div class="swiper-slide"><a href=""><img src="/build/images/ban-index4.jpg" alt=""></a></div>        <div class="swiper-slide"><a href=""><img src="/build/images/ban-index5.jpg" alt=""></a></div>    </div>    <!-- 如果需要分页器 -->    <div class="swiper-pagination"></div>   <!--  如果需要导航按钮    <div class="swiper-button-prev"></div>    <div class="swiper-button-next"></div>    &lt;!&ndash; 如果需要滚动条 &ndash;&gt;    <div class="swiper-scrollbar"></div>--></div>'},function(i,e){i.exports='<footer id = "foot-index"></footer>'},function(i,e){var a={renderBody:function(i,e){i.prepend(e)},inner:function(i,e){i.html(e)},append:function(i,e){i.append(e)},switchPage:function(i){$("footer li").eq(i).addClass("active").siblings.removeClass("active"),$("#footer").on("tap","li",function(){location.href=$(this).attr("data-url")})}};i.exports=a}]);