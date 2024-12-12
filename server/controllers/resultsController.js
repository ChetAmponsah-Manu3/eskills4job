const Result = require('../models/results');

const getAllResults = async (req, res) => {
    try {
        const results = await Result.findAll();
        res.status(200).json(results);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getResultById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const result = await Result.findByPk(id);

        if (!result) {
            res.status(404).json({ message: 'Result not found' });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const createResult = async (req, res) => {
    try {
        const { subject_id, student_id, academic_year, semester, score, uploaded_by, approved_by } = req.body;
        const newResult = await Result.create({ subject_id, student_id, academic_year, semester, score, uploaded_by, approved_by });
        res.status(200).json({ message: 'Result created successfully', result: newResult });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateResult = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const result = await Result.findByPk(id);

        if (!result) {
            res.status(404).json({ message: 'Result not found' });
        } else {
            const { subject_id, student_id, academic_year, semester, score, uploaded_by, approved_by } = req.body;
            if (subject_id) result.subject_id = subject_id;
            if (student_id) result.student_id = student_id;
            if (academic_year) result.academic_year = academic_year;
            if (semester) result.semester = semester;
            if (score) result.score = score;
            if (uploaded_by) result.uploaded_by = uploaded_by;
            if (approved_by) result.approved_by = approved_by;
            await result.save();

            res.status(200).json({ message: 'Result updated' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteResult = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const result = await Result.findByPk(id);

        if (!result) {
            res.status(404).send('Result not found');
        } else {
            await result.destroy();
            res.status(200).send('Result deleted successfully');
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error deleting result');
    }
};

module.exports = {
    getAllResults,
    getResultById,
    createResult,
    updateResult,
    deleteResult
};
