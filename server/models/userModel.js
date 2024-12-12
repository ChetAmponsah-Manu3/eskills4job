const {DataTypes, Model} = require('sequelize')
const database = require('../config/database')

class User extends Model{}
User.init = (
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        unique: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'student', 'teacher'),
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
},
    
{
    sequelize: database,
    modelName: "User",
    }
);

module.exports = User; 