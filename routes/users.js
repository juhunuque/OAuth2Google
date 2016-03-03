var express = require('express');
var router = express.Router();

var google = require('googleapis');
var plus = google.plus('v1');

var OAuth2 = require('../utils/auth.js');//Import middleware
var globalV = require('../utils/globalVars.js');//Import global vars

/* GET users listing. */
router.get('/', function(req, res, next) {
    
    //After redirect, we will have a authorization code and we need to store it in order to get  a token later
    globalV.auth = req.query.code; //Store authorization code
    OAuth2.getToken(req.query.code, function(err, tokens) {
    // Now tokens contains an access_token and an optional refresh_token. Save them.
      if(!err) {
        OAuth2.setCredentials(tokens);
      }
        globalV.token = tokens;
    });
  res.send('Auth OK');
});

/* Authenticated method */
router.get('/test', function(req, res, next) {
    
    var item = {};
    
    //Set token before to request to the resource
    OAuth2.setCredentials({
      access_token: globalV.token.access_token,
    });

    // Requesting to the resource
    plus.people.get({ userId: '113551191017950459231', auth: OAuth2 }, function(err, response) {
      
        if(!err){
            console.log('Errorplus: ' + err);  
      }
        console.log('Errorplus: ' + err);
        item = response;
        console.log(JSON.stringify(response));
        res.send('Authenticated as: ' + item.nickname);
    });
    
    //res.send('Authenticated as: ' + item.nickname);
});

module.exports = router;



