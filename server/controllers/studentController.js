const Student = require('../models/studentModel');

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.status(200).json(students);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getStudentById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const student = await Student.findByPk(id);

        if (!student) {
            res.status(404).json({ message: 'Student not found' });
        } else {
            res.status(200).json(student);
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const createStudent = (req, res) => {
    try {
        const { id, first_name, last_name, gender, phone_number, level, year_of_entry } = req.body;
        const newStudent =  Student.create({ id, first_name, last_name, gender, phone_number, level, year_of_entry });
        res.status(200).json({ message: 'Student created successfully', student: newStudent });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
}; 

/*app.post('/students', async (req, res) => {
    try {
      const newStudent = await Student.create({
        first_name: 'John',
        last_name: 'Doe',
        gender: 'M',
        phone_number: '123456789',
        level: 'M',
        year_of_entry: 2020
      });
      res.status(201).json(newStudent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }); */
  



const updateStudent = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const student = await Student.findByPk(id);

        if (!student) {
            res.status(404).json({ message: 'Student not found' });
        } else {
            const { first_name, last_name, gender, phone_number, level, year_of_entry } = req.body;
            if (first_name) student.first_name = first_name;
            if (last_name) student.last_name = last_name;
            if (gender) student.gender = gender;
            if (phone_number) student.phone_number = phone_number;
            if (level) student.level = level;
            if (year_of_entry) student.year_of_entry = year_of_entry;
            await student.save();

            res.status(200).json({ message: 'Student updated' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const student = await Student.findByPk(id);

        if (!student) {
            res.status(404).send('Student not found');
        } else {
            await student.destroy();
            res.status(200).send('Student deleted successfully');
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error deleting student');
    }
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};
