!function(i){function t(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return i[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=i,t.c=e,t.p="",t(0)}([function(i,t,e){i.exports=e(7)},,,,,,function(i,t){var e={renderBody:function(i,t){i.prepend(t)},inner:function(i,t){i.html(t)},append:function(i,t){i.append(t)},switchPage:function(i){$("#footer-index i").removeClass("active-index").eq(i).addClass("active-index"),$("#footer-index li").on("tap",function(){location.href=$(this).attr("data-url")})}};i.exports=e},function(i,t,e){e(8)},function(i,t,e){var n=e(6),o=e(9);n.renderBody($("body"),o)},function(i,t){i.exports='<div class="mian">\t<div class="logo"><img src="/images/login_logo.png"></div>    <form class="login-form">    \t    \t<div class="login-text"><div class="person1"></div><input type="text" placeholder="请输入您的手机和邮箱"></div>    \t<div class="login-text"><div class="person2"></div><input type="text" placeholder="密码"></div>    \t<div class="login-text"><a href="./build/index.html">提交</a></div>    \t<div class="login-message"><a href="./build/app-zhuce.html">注册只需一步<i>&gt</i></a></div>    </form></div>'}]);