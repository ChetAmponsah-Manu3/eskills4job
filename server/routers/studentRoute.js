const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController'); 

router.route('/')
    .get((req, res) => {
        console.log('GET request to fetch all students');
        studentController.getAllStudents(req, res);
    })
    .post((req, res) => {
        console.log('POST request to create a student with data:', req.body);
        studentController.createStudent(req, res);
    });

router.route('/:id')
    .get((req, res) => {
        console.log(`GET request to fetch a student with ID: ${req.params.id}`);
        studentController.getStudentById(req, res);
    })
    .patch((req, res) => {
        console.log(`PATCH request to update a student with ID: ${req.params.id} and data:`, req.body);
        studentController.updateStudent(req, res);
    })
    .delete((req, res) => {
        console.log(`DELETE request to remove a student with ID: ${req.params.id}`);
        studentController.deleteStudent(req, res);
    });

module.exports = router;
