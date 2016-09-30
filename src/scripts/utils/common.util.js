var common = {
    render: function($el, str) {
        if ($el.get(0).tagName.toLowerCase() == 'body') {
            $el.prepend(str);
        } else {
            $el.html(str);
            console.log(1);
        }
    }
};

module.exports = common;
