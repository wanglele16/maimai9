/**
 * Created by echo on 16/10/5.
 */

var allBody = require('../tpls/all-body.string');
var inFoot = require('../tpls/index-foot.string');
var common = require('../utils/common.util.js');

common.renderBody($('body'), allBody + inFoot);
/*
common.append($('.main'), inBody);*/
