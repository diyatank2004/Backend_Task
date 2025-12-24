const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Course = sequelize.define('Course', {
    course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    course_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    course_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    course_duration: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }
});

module.exports = Course;