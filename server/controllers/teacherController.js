const Teacher = require('../models/teacher');

const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.findAll();
        res.status(200).json(teachers);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getTeacherById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const teacher = await Teacher.findByPk(id);

        if (!teacher) {
            res.status(404).json({ message: 'Teacher not found' });
        } else {
            res.status(200).json(teacher);
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const createTeacher = async (req, res) => {
    try {
        const { id, first_name, last_name, gender, phone_number, qualification } = req.body;
        const newTeacher = await Teacher.create({ id, first_name, last_name, gender, phone_number, qualification });
        res.status(200).json({ message: 'Teacher created successfully', teacher: newTeacher });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateTeacher = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const teacher = await Teacher.findByPk(id);

        if (!teacher) {
            res.status(404).json({ message: 'Teacher not found' });
        } else {
            const { first_name, last_name, gender, phone_number, qualification } = req.body;
            if (first_name) teacher.first_name = first_name;
            if (last_name) teacher.last_name = last_name;
            if (gender) teacher.gender = gender;
            if (phone_number) teacher.phone_number = phone_number;
            if (qualification) teacher.qualification = qualification;
            await teacher.save();

            res.status(200).json({ message: 'Teacher updated' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteTeacher = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const teacher = await Teacher.findByPk(id);

        if (!teacher) {
            res.status(404).send('Teacher not found');
        } else {
            await teacher.destroy();
            res.status(200).send('Teacher deleted successfully');
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error deleting teacher');
    }
};

module.exports = {
    getAllTeachers,
    getTeacherById,
    createTeacher,
    updateTeacher,
    deleteTeacher
};
