# OAuth2Google
Lab about how to integrate OAuth2 using Google Api

# About
- This project was created using NodeJs and Express as framework, you must to have installed NodeJs on your machines.
- It is using a Google library in order to handle the Authentication, called google-api-nodejs-client
- In order to get more info, please refer to https://github.com/google/google-api-nodejs-client/
- You must to create an account in Google Cloud in order to get a client_id and client_secret. Follow this link: https://console.developers.google.com

# Preparing environment
- Before to run the app, execute npm install in order to get all the dependecies
- With all the dependecies already installed, run it using npm start ( Default port: 3000 )

# Steps
- The class utils/auth.js was created in order to implement the authentication with Google
- Class utils/globalVars.js works as a store of global vars

- First up, in your browser execute the request 127.0.0.1:3000 in order to make the authentication (routes/index.js)
- Then execute 127.0.0.1:3000/users in order to get a valid token (routes/users.js)
- Finally, execute 127.0.0.1:3000/users/test in order to get an info related with Google Plus(routes/users.js)


