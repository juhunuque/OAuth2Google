// Class middleware between the app and Google Auth

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;


var client_id = 'YOUR CLIENT ID HERE';
var client_secret = 'YOUR CLIENT SECRET';
var redirect = 'http://127.0.0.1:3000/users';
var oauth2Client = new OAuth2(client_id, client_secret, redirect);

module.exports = oauth2Client;