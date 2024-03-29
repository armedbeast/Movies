'use strict';

const
    express = require('express'),
    bodyParser = require('body-parser');

module.exports = function() {
    let server = express(),
        create,
        start;

    create = function(config) {
        let routes = require('./routes');

        // Server settings
        //server.set('env', config.env);
        server.set('port', config.port);
        //server.set('hostname', config.hostname);

        // Returns middleware that parses json
        server.use(bodyParser.json());

        // Set up routes
        routes.init(server);
    };

    start = function() {
        
        let port = server.get('port');

        server.listen(port, function () {
            console.log('Express server listening on port :' + port);
        });
    };

    return {
        create: create,
        start: start
    };
};