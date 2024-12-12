const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')

class Finance extends Model{}
Finance.init = (
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
    },
    academic_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
   billing: {
        type: DataTypes.STRING,
        allowNull: false,
      
    },
     payment: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('paid', 'owning'),
        allowNull: false,
    },
     date: {
    type: DataTypes.DATE,
    allowNull: false,
    },
    student_id: {
     type: DataTypes.INTEGER,
     unique: true,
     references: {
        model: student,
        key: 'student id',
     },
    },
    
});
Finance.belongsTo(student,{foreignKey: 'student_id'});
    

module.exports = Finance; 