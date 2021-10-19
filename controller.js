'use strict';

var respone = require('./res');
var connection = require('./connection');


exports.index = function(req, res){
    respone.ok("Apps running!", res)
};

// Get Data

exports.getalldata = function(req, res){
    connection.query('Select * from mahasiswa', function(error, rows, fields){
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
    connection.query('select * from mahasiswa where id = ?',[id], function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            respone.ok(rows, res);
        }
    });
}

// Add Data
exports.addData = function(req, res){
    // let nim = req.body.nim;
    // let nama = req.body.nama;
    // let jurusan = req.body.jurusan;
    const {nim, nama, jurusan} = req.body;
    connection.query('insert into mahasiswa (nim, nama, jurusan) values (?,?,?)', [nim, nama, jurusan],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                respone.ok('New Data Added', res);
            }
        });
}