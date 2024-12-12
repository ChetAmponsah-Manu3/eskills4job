const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')

class Teacher extends Model{}
Teacher.init = (
    {
    teacher_id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        unique: true,
   
    },
    id: {
        type:DataTypes.INTEGER,
        unique: true,
        references: {
        Model: user,
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
     qualification: {
         type: DataTypes.STRING,
         allowNull: false,
         
    },
    
}
);
Teacher.belongsTo(user,{foreignKey: 'id'});

module.exports = Teacher; 
    