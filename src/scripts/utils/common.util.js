/**
 * Created by echo on 16/9/28.
 */
var common = {
    renderBody: function ($el, str) {
        $el.prepend(str);
    },
    inner: function ($el, str) {
        $el.html(str);
    },
    append: function ($el, str) {
        $el.append(str);
    },

    switchPage: function (index) {
        $('#footer-index i').removeClass('active-index').eq(index).addClass('active-index');
        $('#footer-index li').on('tap', function () {
            location.href = $(this).attr('data-url');
        });
    }

};

module.exports = common;
