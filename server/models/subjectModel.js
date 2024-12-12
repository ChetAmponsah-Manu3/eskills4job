const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')

class Subject extends Model{}
Subject.init = (
    {
subject_id: {
    type: DataTypes.STRING,
    primaryKey: true,
},

    subject_name: {
     type: DataTypes.STRING    
    },
}
);

module.exports = Subject;