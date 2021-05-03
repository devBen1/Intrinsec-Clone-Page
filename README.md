# Intrinsec-Clone-Page
A basic clone page using ExpressJS handlebars as the templating engine, nodemailer as the mail client and sequelize as the SQL ORM.
The application demos' a use case of how a phishing page or attack can be executed.

Users have to be aware of cyber attacks and watchout for stuff they download, links they click and verify site they register on.


To use this app:
1. Make sure to have NodeJs and npm installed
2. In the application folder run npm i or npm install to install all the dependencies
3. Create a dotenv file and configure your database and mail smtp server details, also create a mysql database and give it a name then run database migrate with npx sequelize-cli db:migrate.
4. start the application with nodemon or by configuring the app.js file by adding "start": "node app.js" before the test key and run npm start in the terminal or you can start the application by typing node app.js in the terminal
5. Visit localhost:3000/ on the terminal to visit the application.


Reference on phishing can be found on this link https://www.imperva.com/learn/application-security/phishing-attack-scam/ and in other external sources.
Reference on keylogger which is a attack mechanism can be found here https://www.malwarebytes.com/keylogger/ and in other external sources too although keystrokes are not logged in this application.
