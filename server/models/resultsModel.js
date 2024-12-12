const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')

class Results extends Model{}
Results.init = (
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
    },
    subject_id: {
        type: DataTypes.STRING,
        references: {
            Model: subject,
            key: 'subject_id',
            },
    },
    score:  {
        type: DataTypes.INTEGER
    },
      
    student_id: {
        type: DataTypes.INTEGER,
         unique: true,
         references: {
            Model: student,
            key: 'student_id',
            },
    },
 academic_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    semester: {
        type: DataTypes.CHAR,
    
    },
    uploaded_by: {
        type: DataTypes.STRING,

    },
    approved_by: {
        type: DataTypes.STRING,
    },
}
);

Results.belongsTo(subject,{foreignKey: 'subject_id'});
Results.belongsTo(student,{foreignKey: 'student_id'});



module.export = Results; 