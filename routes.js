'use strict';

module.exports = function(app){
    var MyJson = require('./controller');

    app.route('/')
    .get(MyJson.index);

    app.route('/ViewData')
    .get(MyJson.getalldata);

    app.route('/ViewData/:id')
    .get(MyJson.getbyID);
}