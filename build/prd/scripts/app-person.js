!function(a){function s(l){if(i[l])return i[l].exports;var n=i[l]={exports:{},id:l,loaded:!1};return a[l].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}var i={};return s.m=a,s.c=i,s.p="",s(0)}([function(a,s,i){a.exports=i(14)},,,,,,function(a,s){var i={renderBody:function(a,s){a.prepend(s)},inner:function(a,s){a.html(s)},append:function(a,s){a.append(s)},switchPage:function(a){$("#footer-index i").removeClass("active-index").eq(a).addClass("active-index"),$("#footer-index li").on("tap",function(){location.href=$(this).attr("data-url")})}};a.exports=i},,,,,,,,function(a,s,i){i(15)},function(a,s,i){var l=i(6),n=i(16);l.renderBody($("body"),n)},function(a,s){a.exports=' <div class="main">        <nav>            <a href="#"></a><span>个人中心</span></nav>        <div class="content">            <div class="home_img">                <span class="headimg"><img src="/images/head_img.png" alt=""></span>                <p id="userName">9879868698</p>                <div class="stars">                    <p><img src="/images/star1.gif" alt=""></p>                </div>                <p class="m12">品尝200元好酒完成晋级</p>            </div>            <div class="homeList">                <ul>                    <li><a href="#">待付款订单<span class="whitePay">0</span></a></li>                    <li><a href="#">待收货订单<span class="whiteTake">0</span></a></li>                    <li><a href="#">待评价订单<span class="whiteTell">0</span></a></li>                </ul>            </div>            <div class="homeNav">                <a href="#"><img src="/images/per_01.png" alt=""><span>我的订单</span></a>                <a href="#"><img src="/images/per_09.png" alt=""><span>优惠卷</span></a>                <a href="#"><img src="/images/per_01.png" alt=""><span>我的订单</span></a>                <a href="#"><img src="/images/per_09.png" alt=""><span>优惠卷</span></a>                <a href="#"><img src="/images/per_01.png" alt=""><span>我的订单</span></a>                <a href="#"><img src="/images/per_09.png" alt=""><span>优惠卷</span></a>                <a href="#"><img src="/images/per_01.png" alt=""><span>我的订单</span></a>                <a href="#"><img src="/images/per_09.png" alt=""><span>优惠卷</span></a>            </div>            <div class="homeLove">                <h2><i class="i_icon"></i>猜你喜欢</h2>                <div class="homeLove_list">                    <ul>                        <li class="shop1">                            <a href="#"><img src="/images/pic1.jpg"></a>                            <p class="nav2">拉维德干红葡萄酒</p>                            <p class="nav2">KHKH</p>                            <p class="nav3"><span style="color: #fc395b; font-weight: bold;">￥238</span><span>298</span></p>                        </li>                        <li class="shop2" style="margin:0 2%;">                            <a href="#"><img src="/images/pic1.jpg"></a>                            <p class="nav2">拉维德干红葡萄酒</p>                            <p class="nav2">KHKH</p>                            <p class="nav3"><span style="color: #fc395b; font-weight: bold;">￥238</span><span>298</span></p>                        </li>                        <li class="shop3">                            <a href="#"><img src="/images/pic1.jpg"></a>                            <p class="nav2">拉维德干红葡萄酒</p>                            <p class="nav2">KHKH</p>                            <p class="nav3"><span style="color: #fc395b; font-weight: bold;">￥238</span><span>298</span></p>                        </li>                    </ul>                </div>            </div>        </div>    </div>    <footer>        <ul class="foot">            <li data-url="/build/index.html"><b class="hht1"></b><i>主页</i></li>            <li data-url="#"><b class="hht2"></b><i>分类</i></li>            <li data-url="/build/cart.html"><b class="hht3"></b><i>购物车</i></li>            <li data-url="/build/all.html"><b class="hht4"></b><i>所有商品</i></li>            <li data-url="#"><b class="hht5"></b><i style="color: #fc395b;">注销</i></li>                    </ul>    </footer>'}]);