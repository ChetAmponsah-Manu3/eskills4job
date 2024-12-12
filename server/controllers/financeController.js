const Finance = require('../models/finance');

const getAllFinanceRecords = async (req, res) => {
    try {
        const financeRecords = await Finance.findAll();
        res.status(200).json(financeRecords);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }};

const getFinanceRecordById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const financeRecord = await Finance.findByPk(id);

        if (!financeRecord) {
            res.status(404).json({ message: 'Finance record not found' });
        } else {
            res.status(200).json(financeRecord);
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const createFinanceRecord = async (req, res) => {
    try {
        const { academic_year, billing, payment, student_id, status, date } = req.body;
        const newFinanceRecord = await Finance.create({ academic_year, billing, payment, student_id, status, date });
        res.status(200).json({ message: 'Finance record created successfully', financeRecord: newFinanceRecord });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateFinanceRecord = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const financeRecord = await Finance.findByPk(id);

        if (!financeRecord) {
            res.status(404).json({ message: 'Finance record not found' });
        } else {
            const { academic_year, billing, payment, student_id, status, date } = req.body;
            if (academic_year) financeRecord.academic_year = academic_year;
            if (billing) financeRecord.billing = billing;
            if (payment) financeRecord.payment = payment;
            if (student_id) financeRecord.student_id = student_id;
            if (status) financeRecord.status = status;
            if (date) financeRecord.date = date;
            await financeRecord.save();

            res.status(200).json({ message: 'Finance record updated' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteFinanceRecord = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const financeRecord = await Finance.findByPk(id);

        if (!financeRecord) {
            res.status(404).send('Finance record not found');
        } else {
            await financeRecord.destroy();
            res.status(200).send('Finance record deleted successfully');
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error deleting finance record');
    }
};

module.exports = {
    getAllFinanceRecords,
    getFinanceRecordById,
    createFinanceRecord,
    updateFinanceRecord,
    deleteFinanceRecord
};
