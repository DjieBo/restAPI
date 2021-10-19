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
            console.log(error);
        }else{
            respone.ok(rows, res)
        }
    });
};

//Get by ID
exports.getbyID = function(req, res){
    let id = req.params.id;
    connection.query('select * from mahasiswa where id = ?',[id], function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            respone.ok(rows, res);
        }
    });
}