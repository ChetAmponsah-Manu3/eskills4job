const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./config/database');


const {
  authRoute,
  subjectRoute,
  studentRoute,
  teacherRoute,
  resultsRoute,
  financeRoute,
  usersRoute,
} = require('./index');


const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/auth', authRoute);
app.use('/subject', subjectRoute);
app.use('/student', studentRoute);
app.use('/teacher', teacherRoute);
app.use('/results', resultsRoute);
app.use('/finance', financeRoute);
app.use('/users', usersRoute);


app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/api/', (req, res) => {
  res.send('Hello, API is working!');
});


database
  .sync({ alter: true })
  .then(() => {
    console.log('Database Synchronised')});
    const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

    