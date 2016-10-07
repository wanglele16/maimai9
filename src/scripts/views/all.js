/**
 * Created by echo on 16/10/5.
 */

var allBody = require('../tpls/all-body.string');
var inFoot = require('../tpls/index-foot.string');
var common = require('../utils/common.util.js');

common.renderBody($('body'), allBody + inFoot);
common.switchPage(3);
var tempObj = {
    "data": []
};
/*common.append($('.all-pro'), inBody);*/
$.ajax({
    url: '/api/show1-all',
    success: function (res) {
        var html = template('show1-all', res);
        common.inner($('#all-pro'), html);
        for (var i = 0; i < res.data.length; i++) {
            tempObj.data.push(res.data[i]);
        }
    }
});

var scrollAll;

$(function () {
    var redCount = 1;
    $('.nav-all a').on('tap', function() {
        $('.nav-all a').removeClass('active-all');
        $('.nav-all i').removeClass('icon2').removeClass('icon3');
        $(this).addClass('active-all');
        if (redCount) {
            $(this).siblings('i').addClass('icon3');
            redCount = 0;
        } else {
            $(this).siblings('i').addClass('icon2');
            redCount = 1;
        }
        var content = $(this).html();
        if(content == "默认") {
            location.href = "all.html";
        }
        if(content == "价格") {
            sortAll_price();
        }
        if (content == "销量") {
            sortAll_other("num");
        }
        if (content == "人气") {
            sortAll_other("hot");
        }


        function sortAll_price () {
            if (!redCount) {
                var tempObj1 = {"data": []};
                tempObj1.data = tempObj.data.sort( function(a,b) {
                    var newPa = a.newPrice.split("¥")[1];
                    var newPb = b.newPrice.split("¥")[1];
                    return newPa - newPb;

                });
                var html = template('show1-all', tempObj1);
                $('#all-pro').html(html);
                scrollAll.refresh();
            } else {
                var tempObj1 = {"data": []};
                tempObj1.data = tempObj.data.sort( function(a,b) {
                    var newPa = a.newPrice.split("¥")[1];
                    var newPb = b.newPrice.split("¥")[1];
                    return newPb - newPa;

                });
                var html = template('show1-all', tempObj1);
                $('#all-pro').html(html);
                scrollAll.refresh();
            }
        }

        function sortAll_other (arr) {
            if (!redCount) {
                var tempObj1 = {"data": []};
                tempObj1.data = tempObj.data.sort( function(a,b) {
                    var newPa = a[arr];
                    var newPb = b[arr];
                    return newPa - newPb;

                });
                var html = template('show1-all', tempObj1);
                $('#all-pro').html(html);
                scrollAll.refresh();
            } else {
                var tempObj1 = {"data": []};
                tempObj1.data = tempObj.data.sort( function(a,b) {
                    var newPa = a[arr];
                    var newPb = b[arr];
                    return newPb - newPa;

                });
                var html = template('show1-all', tempObj1);
                $('#all-pro').html(html);
                scrollAll.refresh();
            }
        }
    });



    setTimeout(function () {
        scrollAll = new IScroll('#wrap-all',
            {
                probeType: 3,
                bounce: false,
                click: true
            });

        scrollAll.on('scroll', function () {
            var maxY = this.maxScrollY - this.y;
            if (maxY >= -30) {
                /*console.log("ajax");*/
                moreAjax();
            }
            scrollAll.refresh();
        });

        var moreAjax = function () {
            $.ajax({
                url: '/api/more-all',
                success: function (res) {
                    var html = template('show1-all', res);
                    $('#all-pro').append(html);
                    scrollAll.refresh();
                    for (var i = 0; i < res.data.length; i++) {
                        tempObj.data.push(res.data[i]);
                    }
                }
            })
        };

    }, 100);
});
