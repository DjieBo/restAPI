'use strict';

module.exports = function(app){
    var MyJson = require('./controller');

    app.route('/')
    .get(MyJson.index);
}