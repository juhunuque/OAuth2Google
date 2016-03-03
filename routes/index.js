var express = require('express');
var router = express.Router();
var OAuth2 = require('../utils/auth.js');//Import middleware


/* GET home page. */
router.get('/', function(req, res, next) {

    // Generate a url that asks permissions for Google+ and Google Calendar scopes
    var scopes = [
      'https://www.googleapis.com/auth/plus.me',
      'https://www.googleapis.com/auth/calendar'
    ];

    var url = OAuth2.generateAuthUrl({
      access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
      scope: scopes // If you only need one scope you can pass it as string
    });
    
    //Redirect client to the url generated 
    res.redirect(url);
    
});

module.exports = router;
