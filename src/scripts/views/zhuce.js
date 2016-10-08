var common=require('../utils/common.util.js');
var aaa = require('../tpls/zhuce.string');



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