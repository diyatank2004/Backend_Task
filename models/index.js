const sequelize = require('../config/db');
const Course = require('./Course');
const Student = require('./Student');

Course.hasMany(Student, { foreignKey: 'course_id' });
Student.belongsTo(Course, { foreignKey: 'course_id' });

const initDB = async () => {
    try {
        await sequelize.sync({ force: false }); // 'force: true' would delete data on restart
        console.log("Database synced successfully! SQLite file created.");
    } catch (error) {
        console.error("Error syncing database:", error);
    }
};

module.exports = { sequelize, Course, Student, initDB };