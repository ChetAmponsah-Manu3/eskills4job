const path = require('path');
console.log("Resolved authRoute path:", path.resolve(__dirname, './authRoute'));


const authRoute = require('./routers/authRoute');
const subjectRoute = require('./routers/subjectRoute');
const usersRoute = require('./routers/usersRoute');
const teacherRoute = require('./routers/teacherRoute');
const financeRoute = require('./routers/financeRoute');
const resultsRoute = require('./routers/resultsRoute');
const studentRoute = require('./routers/studentRoute'); 

module.exports = {
  authRoute,
  subjectRoute,
  studentRoute, 
  teacherRoute,
  resultsRoute,
  financeRoute,
  usersRoute,
};
