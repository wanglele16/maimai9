!function(i){function a(s){if(e[s])return e[s].exports;var n=e[s]={exports:{},id:s,loaded:!1};return i[s].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}var e={};return a.m=i,a.c=e,a.p="",a(0)}([function(i,a,e){i.exports=e(6)},,,,function(i,a){i.exports='<div class="goBack-index"></div><footer id = "footer-index">    <ul>        <li data-url="/build/index.html"><i class = "fr1-index active-index"></i><span>主页</span></li>        <li><i class = "fr2-index"></i><span></span>分类</li>        <li><i class = "fr3-index"></i><span>购物车</span></li>        <li data-url="/build/all.html"><i class = "fr4-index"></i><span>所有商品</span></li>        <li><i class = "fr5-index"></i><span>个人</span></li>    </ul></footer>'},function(i,a){var e={renderBody:function(i,a){i.prepend(a)},inner:function(i,a){i.html(a)},append:function(i,a){i.append(a)},switchPage:function(i){$("#footer-index i").removeClass("active-index").eq(i).addClass("active-index"),$("#footer-index li").on("tap",function(){location.href=$(this).attr("data-url")})}};i.exports=e},function(i,a,e){e(7)},function(i,a,e){var s=e(8),n=e(9),d=e(4),t=e(5);t.renderBody($("body"),s+d),t.append($(".main"),n),t.switchPage(0);var l;$(".goBack-index").hide(),$(function(){setTimeout(function(){l=new IScroll("#wrap-index",{bounce:!1}),$(".goBack-index").on("tap",function(){l.scrollTo(0,0,200)}),l.on("scrollEnd",function(){this.y<0?$(".goBack-index").show():$(".goBack-index").hide(),l.refresh()});new Swiper(".swiper-container",{pagination:".swiper-pagination",autoplay:3e3,autoplayDisableOnInteraction:!1,grabCursor:!0,loop:!0})},100)}),$.ajax({url:"/api/bannerIndex",success:function(i){var a=template("swi-index",i);t.inner($("#swiper-index"),a)}}),$.ajax({url:"/api/recSpeIndex",success:function(i){var a=template("recSpe-index",i);t.inner($("#rec1-index"),a)}}),$.ajax({url:"/api/newIndex",success:function(i){var a=template("newPro-index",i);t.inner($("#new1-index"),a)}}),$.ajax({url:"/api/hotIndex",success:function(i){var a=template("hotPro-index",i);t.inner($("#hot1-index"),a)}}),$.ajax({url:"/api/counIndex",success:function(i){var a=template("country-index",i);t.inner($("#coun1-index"),a)}}),$.ajax({url:"/api/hotSeIndex",success:function(i){var a=template("hotSearch-index",i);t.inner($("#hotSe1-index"),a)}})},function(i,a){i.exports='<div id="wrapbox-index">    <section id="wrap-index">        <div class="main">            <header class="in-head">                <h1><a href="/build/prd/index.html"></a></h1>                <div class="in-searchbox">                    <div class="in-searchwrap">                        <span class="in-search" id="search"></span>                        <input type="text" value="" class="in-searchtext" placeholder="搜索专属于您的味蕾体验" id="globalText">                    </div>                </div>            </header>        </div>    </section></div>'},function(i,a){i.exports='<div class="content-index">    <div class="swiper-container">        <div class="swiper-wrapper" id="swiper-index">           <!-- <div class="swiper-slide"><a href="javascript: void(0);"><img src="/build/images/ban-index0.jpg" alt=""></a>            </div>            <div class="swiper-slide"><a href="javascript: void(0);"><img src="/build/images/ban-index1.jpg" alt=""></a>            </div>            <div class="swiper-slide"><a href="javascript: void(0);"><img src="/build/images/ban-index2.jpg" alt=""></a>            </div>            <div class="swiper-slide"><a href="javascript: void(0);"><img src="/build/images/ban-index3.jpg" alt=""></a>            </div>            <div class="swiper-slide"><a href="javascript: void(0);"><img src="/build/images/ban-index4.jpg" alt=""></a>            </div>            <div class="swiper-slide"><a href="javascript: void(0);"><img src="/build/images/ban-index5.jpg" alt=""></a>            </div>-->        </div>        <div class="swiper-pagination"></div>    </div>    <div>        <div class="nav-index">            <a href=""><img src="/build/images/wine@2x.png" alt=""><span>葡萄酒</span></a>            <a href=""><img src="/build/images/per_10.png" alt=""><span>领优惠券</span></a>            <a href=""><img src="/build/images/200@2x.png" alt=""><span>200元以下</span></a>            <a href=""><img src="/build/images/per_11.png" alt=""><span>提货卡</span></a>        </div>        <div class="rec-index">            <div class="rec-indexBox">                <h2 class="recTil">特别推荐</h2>                <section id="rec1-index"></section>            </div>        </div>        <div class="new-index">            <div class="new-indexBox">                <h2 class="tilIndex ti1"><span>新品上架</span></h2>                <section id="new1-index"></section>            </div>        </div>        <div class="hot-index">            <div class="hot-indexBox">                <h2 class="tilIndex ti2"><span>热销推荐</span></h2>                <section id="hot1-index"></section>            </div>        </div>        <div class="coun-index">            <div class="coun-indexBox">                <h2 class="tilIndex ti3"><span>国家</span></h2>                <section id="coun1-index"></section>            </div>        </div>        <div class="hotSe-index">            <div class="hotSe-indexBox">                <h2 class="tilIndex ti4"><span>热门搜索</span></h2>                <section id="hotSe1-index"></section>            </div>        </div>        <div class="foot-index">            <ul>                <li>                    <i class="f-icon1"></i>                    <p>100%</p>                    <p>全球正品</p>                </li>                <li>                    <i class="f-icon2"></i>                    <p>341个</p>                    <p>城市送达</p>                </li>                <li>                    <i class="f-icon3"></i>                    <p>联合打假</p>                    <p>保护消费者</p>                </li>                <li>                    <i class="f-icon4"></i>                    <p>即时送服务</p>                </li>            </ul>            <div class=commit-index>                <p>买买酒 maim9.com All Rights Reserved                <p>                <p>京ICP备14040800号-1 京公网安备11010502027011</p>                <p class="pRed-index">买买酒承诺不销售任何含酒精产品给18岁以下人士</p>            </div>        </div>    </div>    <script id="swi-index" type="text/html">        {{each data as value i}}        <div class="swiper-slide"><a href="javascript: void(0);"><img src={{value.img}} alt=""></a>        </div>        {{/each}}    </script>    <script id="recSpe-index" type="text/html">        <ul>            <li><a href=""><img src={{data[0].img}} alt=""></a></li>            <li>                <a href=""><img src={{data[1].img}} alt=""></a>                <a href=""><img src={{data[2].img}} alt=""></a>            </li>        </ul>    </script>    <script id="newPro-index" type="text/html">        <ul>            {{each data as value i}}            <li>                <a href="#">                    <img src={{value.img}} alt="">                </a>            </li>            {{/each}}        </ul>    </script>    <script id="hotPro-index" type="text/html">        <ul>            <li><a href=""><img src={{data[0].img}} alt=""></a></li>            <li>                <a href=""><img src={{data[1].img}} alt=""></a>                <a href=""><img src={{data[2].img}} alt=""></a>            </li>        </ul>    </script>    <script id="country-index" type="text/html">        <ul>            {{each data as value i}}            <li>                <a href="#">                    <img src={{value.img}} alt="">                    <h4>{{value.name1}}</h4>                    <p>{{value.name2}}</p>                </a>            </li>            {{/each}}        </ul>    </script>    <script id="hotSearch-index" type="text/html">        <ul>            {{each data as value i}}            <li>                <a href="#">{{value.name}}</a>                <span></span>            </li>            {{/each}}        </ul>        <div>            <img src={{img[0].src}} alt="">        </div>    </script></div>'}]);