const { Student, Course } = require('../models');

// 1. Register Student with Course
exports.registerStudent = async (req, res) => {
    try {
        const { name, email, password, role, course_id } = req.body;

        // REQUIREMENT: Validate that the course exists
        if (course_id) {
            const courseExists = await Course.findByPk(course_id);
            if (!courseExists) {
                return res.status(404).json({ message: "Error: Course ID not found." });
            }
        }

        const newStudent = await Student.create({
            name,
            email,
            password,
            role,
            course_id
        });

        res.status(201).json({ message: "Student registered!", student: newStudent });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 2. Get Students (With Course Info)
// REQUIREMENT: "Fetch all students along with their associated course details."
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll({
            include: Course // This performs the SQL JOIN automatically
        });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};