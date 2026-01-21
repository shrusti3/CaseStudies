// Service contains business logic
class CourseService {
  constructor(courseRepository) {
    this.courseRepository = courseRepository;
  }

  enroll(courseId, studentId) {
    const course = this.courseRepository.findById(courseId);

    if (!course) {
      throw new Error("Course not found");
    }

    if (course.students.length >= course.capacity) {
      throw new Error("Course is full");
    }

    this.courseRepository.enrollStudent(courseId, studentId);
    return { message: "Student enrolled successfully" };
  }

  getStudentCourses(studentId) {
    return this.courseRepository.findByStudentId(studentId);
  }

  deleteCourse(courseId) {
    this.courseRepository.delete(courseId);
    return { message: "Course deleted" };
  }
}

module.exports = CourseService;
