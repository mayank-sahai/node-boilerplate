# node-boilerplate
The Project consists of 3 endpoints: signup, login and verify email.
It is basically a node-boilerplate with login,signup and verify email functionality where database used is mongoDB.

Steps -
1. You should have node.js and mongodb in your system.
2. Take clone of this project and run "npm install". It will install all dependencies.
3. Go to config folder and in development.json add email and password of gmail account from which you have to send verification mail to the user.
4. Run npm start to start the server.
5. You can view all the endpoints on swagger by going on localhost:5000/api-docs.

I have used modules like JOI for validations, Boom for error handling, bcrypt for encrypting passwords, jsonwebtoken for creating token, winston for logging etc.
