/**
 * Created by echo on 16/10/5.
 */

var allBody = require('../tpls/all-body.string');
var inFoot = require('../tpls/index-foot.string');
var common = require('../utils/common.util.js');

common.renderBody($('body'), allBody + inFoot);

/*common.append($('.all-pro'), inBody);*/

$.ajax({
    url: '/api/show1-all',
    success: function (res) {
        var html = template('show1-all', res);
        common.inner($('#all-pro'), html);
    }
});

var scrollAll;
$(function () {

    setTimeout(function () {
        scrollAll = new IScroll('#wrap-all',
            {
                probeType: 3,
                bounce: false
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
                }
            })
        };

    }, 100);
});
