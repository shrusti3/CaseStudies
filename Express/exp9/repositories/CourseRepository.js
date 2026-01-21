// Repository abstracts data storage
class CourseRepository {
  constructor() {
    this.courses = [];
  }

  findById(id) {
    return this.courses.find(course => course.id === id);
  }

  save(course) {
    const index = this.courses.findIndex(c => c.id === course.id);
    if (index >= 0) {
      this.courses[index] = course;
    } else {
      this.courses.push(course);
    }
  }

  enrollStudent(courseId, studentId) {
    const course = this.findById(courseId);
    if (course && !course.students.includes(studentId)) {
      course.students.push(studentId);
      this.save(course);
    }
  }

  findByStudentId(studentId) {
    return this.courses.filter(course =>
      course.students.includes(studentId)
    );
  }

  delete(courseId) {
    this.courses = this.courses.filter(c => c.id !== courseId);
  }
}

module.exports = CourseRepository;
