!function(a){function l(t){if(i[t])return i[t].exports;var e=i[t]={exports:{},id:t,loaded:!1};return a[t].call(e.exports,e,e.exports,l),e.loaded=!0,e.exports}var i={};return l.m=a,l.c=i,l.p="",l(0)}([function(a,l,i){a.exports=i(2)},,function(a,l,i){i(3)},function(a,l,i){var t=i(4),e=i(5),r=i(6);r.renderBody($("body"),t+e),r.switchPage(3);var n={data:[]};$.ajax({url:"/api/show1-all",success:function(a){var l=template("show1-all",a);r.inner($("#all-pro"),l);for(var i=0;i<a.data.length;i++)n.data.push(a.data[i])}});var s;$(function(){var a=1;$(".nav-all a").on("tap",function(){function l(){if(a){var l={data:[]};l.data=n.data.sort(function(a,l){var i=a.newPrice.split("¥")[1],t=l.newPrice.split("¥")[1];return t-i});var i=template("show1-all",l);$("#all-pro").html(i),s.refresh()}else{var l={data:[]};l.data=n.data.sort(function(a,l){var i=a.newPrice.split("¥")[1],t=l.newPrice.split("¥")[1];return i-t});var i=template("show1-all",l);$("#all-pro").html(i),s.refresh()}}function i(l){if(a){var i={data:[]};i.data=n.data.sort(function(a,i){var t=a[l],e=i[l];return e-t});var t=template("show1-all",i);$("#all-pro").html(t),s.refresh()}else{var i={data:[]};i.data=n.data.sort(function(a,i){var t=a[l],e=i[l];return t-e});var t=template("show1-all",i);$("#all-pro").html(t),s.refresh()}}$(".nav-all a").removeClass("active-all"),$(".nav-all i").removeClass("icon2").removeClass("icon3"),$(this).addClass("active-all"),a?($(this).siblings("i").addClass("icon3"),a=0):($(this).siblings("i").addClass("icon2"),a=1);var t=$(this).html();"价格"==t&&l(),"销量"==t&&i("num"),"人气"==t&&i("hot")}),setTimeout(function(){s=new IScroll("#wrap-all",{probeType:3,bounce:!1,click:!0}),s.on("scroll",function(){var l=this.maxScrollY-this.y;l>=-30&&a(),s.refresh()});var a=function(){$.ajax({url:"/api/more-all",success:function(a){var l=template("show1-all",a);$("#all-pro").append(l),s.refresh();for(var i=0;i<a.data.length;i++)n.data.push(a.data[i])}})}},100)})},function(a,l){a.exports='<div id="wrapbox-all">    <section id="wrap-all">        <div class="main-all">            <header class="all-head">                所有商品                <a href="javascript: void(0)"></a>            </header>            <ul class="nav-all">                <li><a href="" class = "active-all">默认</a></li>                <li><a href="javascript: void(0);">价格</a><i class = "icon1"></i></li>                <li><a href="javascript: void(0);">销量</a><i class = "icon1"></i></li>                <li><a href="javascript: void(0);">人气</a><i class = "icon1"></i></li>            </ul>            <ul id = "all-pro">                <li></li>                <li></li>                <li></li>                <li></li>            </ul>        </div>    </section></div><script id="show1-all" type="text/html">        {{each data as value i}}        <li>            <a href=specific.html?{{value.id}}><img src={{value.img}} alt=""></a>            <h3>{{value.title}}</h3>            <h4>{{value.intro1}}</h4>            <h5>{{value.intro2}}</h5>            <h6><span>{{value.newPrice}}</span><del>{{value.oldPrice}}</del></h6>        </li>        {{/each}}</script>'},function(a,l){a.exports='<div class="goBack-index"></div><footer id = "footer-index">    <ul>        <li data-url="/build/index.html"><i class = "fr1-index active-index"></i><span>主页</span></li>        <li data-url="/build/index.html"><i class = "fr2-index"></i><span></span>分类</li>        <li data-url="/build/cart.html"><i class = "fr3-index"></i><span>购物车</span></li>        <li data-url="/build/all.html"><i class = "fr4-index"></i><span>所有商品</span></li>        <li data-url="/build/person.html"><i class = "fr5-index"></i><span>个人</span></li>    </ul></footer>'},function(a,l){var i={renderBody:function(a,l){a.prepend(l)},inner:function(a,l){a.html(l)},append:function(a,l){a.append(l)},switchPage:function(a){$("#footer-index i").removeClass("active-index").eq(a).addClass("active-index"),$("#footer-index li").on("tap",function(){location.href=$(this).attr("data-url")})}};a.exports=i}]);