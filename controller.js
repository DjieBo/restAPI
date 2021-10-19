'use strict';

var respone = require('./res');
var connection = require('./connection');


exports.index = function(req, res){
    respone.ok("Apps running!", res)
};

// Get Data

exports.getalldata = function(req, res){
    connection.query('Select * from mahasiswa', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else{
            respone.ok(rows, res)
        }
    });
};