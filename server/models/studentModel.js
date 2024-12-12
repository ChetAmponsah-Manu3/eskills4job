const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')
const User = require('./userModel'); 


class Student extends Model{}
Student.init = (
    {
   student_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true, 
    
    },
    id: {
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            Model: User,
            key: 'id',
            },
     
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    
    },
     gender: {
        type: DataTypes.CHAR,
       
    },
    phone_number: {
        type: DataTypes.BIGINT,  
        allowNull: false,
        unique: true,
    },
     level: {
         type: DataTypes.STRING,
        allowNull: false,
         
    },
     year_of_entry: {
        type: DataTypes.INTEGER,

     },
},
{
sequelize: database,
modelName: "Student",
}
);
//Student.belongsTo(User,{foreignKey: 'id'});//


module.exports = Student; 