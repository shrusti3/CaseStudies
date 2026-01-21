const express = require("express");

const Course = require("./models/Course");
const CourseRepository = require("./repositories/CourseRepository");
const CourseService = require("./services/CourseService");

const app = express();
app.use(express.json());

// Dependency injection
const courseRepository = new CourseRepository();
const courseService = new CourseService(courseRepository);

// Seed data
courseRepository.save(new Course("1", "Physics 101", 2));
courseRepository.save(new Course("2", "Math 101", 3));

// Routes
app.post("/courses/:id/enroll", (req, res) => {
  try {
    const result = courseService.enroll(req.params.id, req.body.studentId);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/students/:id/courses", (req, res) => {
  const courses = courseService.getStudentCourses(req.params.id);
  res.json(courses);
});

app.delete("/courses/:id", (req, res) => {
  const result = courseService.deleteCourse(req.params.id);
  res.json(result);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
