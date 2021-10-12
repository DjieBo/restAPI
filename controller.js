'use strict';

var respone = require('./res');
var connection = require('./connection');


exports.index = function(req, res){
    respone.ok("Apps running!");
};