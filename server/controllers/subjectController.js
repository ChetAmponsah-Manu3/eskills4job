const Subject = require('../models/subject');

const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.findAll();
        res.status(200).json(subjects);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getSubjectById = async (req, res) => {
    try {
        const id = req.params.id;
        const subject = await Subject.findByPk(id);

        if (!subject) {
            res.status(404).json({ message: 'Subject not found' });
        } else {
            res.status(200).json(subject);
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const createSubject = async (req, res) => {
    try {
        const { subject_name } = req.body;
        const newSubject = await Subject.create({ subject_name });
        res.status(200).json({ message: 'Subject created successfully', subject: newSubject });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateSubject = async (req, res) => {
    try {
        const id = req.params.id;
        const subject = await Subject.findByPk(id);

        if (!subject) {
            res.status(404).json({ message: 'Subject not found' });
        } else {
            const { subject_name } = req.body;
            if (subject_name) subject.subject_name = subject_name;
            await subject.save();

            res.status(200).json({ message: 'Subject updated' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteSubject = async (req, res) => {
    try {
        const id = req.params.id;
        const subject = await Subject.findByPk(id);

        if (!subject) {
            res.status(404).send('Subject not found');
        } else {
            await subject.destroy();
            res.status(200).send('Subject deleted successfully');
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error deleting subject');
    }
};

module.exports = {
    getAllSubjects,
    getSubjectById,
    createSubject,
    updateSubject,
    deleteSubject
};
