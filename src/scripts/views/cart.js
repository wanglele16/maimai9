var str = require('../tpls/cart.string');

var common = require('../utils/common.util.js');

var body = document.querySelector('body');

common.renderBody($('body'), str);





/*测试数据*/
// var oldCookie = $.fn.cookie("shopCarInfo");
// if (oldCookie) {
//     newCookie = oldCookie + "||" + "000002" + "&&" + "5" + "||" + "000003" + "&&" + "5" + "||" + "000004" + "&&" + "5" + "||" + "000005" + "&&" + "5" + "||" + "000006" + "&&" + "5" + "||" + "000007" + "&&" + "5";
// } else {
//     newCookie = "000001" + "&&" + "5";
// }
// $.fn.cookie("shopCarInfo", newCookie, {
//     expires: 30
// });


/*购物车操作*/
var sum = 0; //记录总商品数
var sumPrice = 0; //记录总价
var cartScroll = new IScroll('#cart-scroll',{
  click:true
});
//页面在入时，显示cookie中存在的购物信息


//获取所有购物车信息并显示
function find() {
    var strCookie = $.fn.cookie("shopCarInfo");
    var arrCookie = strCookie.split("||");
    var ajaxInfo = new Array();
    var ajaxCount = arrCookie.length;
    for (var i = 0; i < arrCookie.length; i++) {
        var itemCookie = arrCookie[i].split("&&");
        //用ajax获取对应id的信息
        //因为ajax是异步的，所以for循环不会等待，所以itemCookie的内容会发生改变，所以改成同步
        $.ajax({
            url: "/api/cart.json",
            success: function(data) {
                // var data = JSON.parse(data);
                var myCar = document.createElement("li"); //创建div
                myCar.setAttribute("class", "item-cart");
                for (var j = 0; j < data.length; j++) {
                    if (data[j].id == itemCookie[0]) {
                        myCar.innerHTML =
                            '<section id="' + data[j].id + '">' +
                            '<span class="check-cart" been="yes"></span>' +
                            '<a href="/build/specific.html?'+itemCookie[0]+'">' +
                            '<img src="/build/images/' + data[j].img + '">' +
                            '</a>' +
                            '<div class="cart-right">' +
                            '<h2>' + data[j].name + '</h2>' +
                            '<div class="cart-right-bt">' +
                            '<i><em>￥' + data[j].price + ' </em>赠送400积分</i>' +
                            '<b><span></span><strong>' + itemCookie[1] + '</strong><span></span></b>' +
                            '</div>' +
                            '<div class="cart-del"></div>' +
                            '</div>' +
                            '</section>'
                        $('#cart-list').append(myCar);
                        //给创建的div的按钮添加方法
                        $(myCar).find('b span').eq(1).on('tap', addFn);
                        $(myCar).find('b span').eq(0).on('tap', subFn);
                        $(myCar).find('.cart-del').on('tap', subKindFn);
                        $(myCar).find('.check-cart').on('tap', check);
                        ajaxCount--;
                        break;
                    }
                }
            },
            async: false
        })
    }
    sPrice();
    $('.check-cart').eq(0).on('tap', allCheck);
    //当所有的ajax完成时执行
    $.when($.ajax(), $.ajax()).then(function() {
        cartScroll.refresh();
    });
}

//增加一件商品

function addFn() {
    var strCookie = $.fn.cookie("shopCarInfo");
    var arrCookie = strCookie.split("||");
    for (var i = 0; i < arrCookie.length; i++) {
        var itemCookie = arrCookie[i].split("&&");
        if (itemCookie[0] == $(this).parent().parent().parent().parent().attr('id')) {
            var shopNum = parseInt(itemCookie[1]) + 1;
            arrCookie[i] = itemCookie[0] + "&&" + shopNum;
            $(this).parent().find('strong').html(shopNum);
            break;
        }
    }
    var newStrCookie = arrCookie.join("||");
    $.fn.cookie("shopCarInfo", newStrCookie, {
        expires: 30
    });
    sPrice();
}

//删除一件商品
function subFn() {
    var strCookie = $.fn.cookie("shopCarInfo");
    var arrCookie = strCookie.split("||");
    for (var i = 0; i < arrCookie.length; i++) {
        var itemCookie = arrCookie[i].split("&&");
        if (itemCookie[0] == $(this).parent().parent().parent().parent().attr('id')) {
            var shopNum = parseInt(itemCookie[1]) - 1;
            if (shopNum == 0) { //如果商品数为0，则删除cookie内的信息，且删除div
                shopNum = 1;
            } else { //如果不为1，商品数减一
                arrCookie[i] = $(this).parent().parent().parent().parent().attr('id') + "&&" + shopNum;
            }
            $(this).parent().find('strong').html(shopNum);
            break;
        }
    }
    var newStrCookie = arrCookie.join("||");
    $.fn.cookie("shopCarInfo", newStrCookie, {
        expires: 30
    });
    sPrice();
}

//删除一种商品
function subKindFn() {
    var strCookie = $.fn.cookie("shopCarInfo");
    var arrCookie = strCookie.split("||");
    for (var i = 0; i < arrCookie.length; i++) {
        var itemCookie = arrCookie[i].split("&&");
        if (itemCookie[0] == $(this).parent().parent().attr('id')) {
            arrCookie.splice(i, 1);
            $(this).parent().parent().parent().remove();
        }
    }
    var newStrCookie = arrCookie.join("||");
    $.fn.cookie("shopCarInfo", newStrCookie, {
        expires: 30
    });
    sPrice();
    cartScroll.refresh();
}

//计算总价/总数
function sPrice() {
    sumPrice = 0;
    sum = 0;
    for (var i = 0; i < $('.item-cart').length; i++) {
        if ($('.item-cart').eq(i).find('.check-cart').attr('been') == "yes") {
            sumPrice += parseInt($('.item-cart').eq(i).find('em').html().substring(1)) * parseInt($('.item-cart').eq(i).find('strong').html());
            sum += parseInt($('.item-cart').eq(i).find('strong').html());
        }
    }
    $('#sumPrice-cart').html('￥' + sumPrice);
    $('#sum-cart').html(sum);
}

//点击选定事件
function check() {
    if ($(this).attr('been') == 'yes') {
        $(this).css('background-position', '-0.17rem 0').attr('been', 'no');
        $('.check-cart').eq(0).css('background-position', '-0.17rem 0').attr('been', 'no');
    } else {
        $(this).css('background-position', '0.01rem 0').attr('been', 'yes');
    }
    sPrice();
}

//全选事件
function allCheck() {
    if ($(this).attr('been') == 'yes') {
        $('.check-cart').css('background-position', '-0.17rem 0').attr('been', 'no');
    } else {
        $('.check-cart').css('background-position', '0.01rem 0').attr('been', 'yes');
    }
}
window.onload = function() {
    find();
}
