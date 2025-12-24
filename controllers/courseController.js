const { Course } = require('../models'); 

// 1. Create a new Course
exports.createCourse = async (req, res) => {
    try {
        const { course_name, course_code, course_duration } = req.body;
        
        const newCourse = await Course.create({ 
            course_name, 
            course_code, 
            course_duration 
        });
        
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 2. Get All Courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};