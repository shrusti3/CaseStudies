// Course model represents the domain object
class Course {
  constructor(id, name, capacity) {
    this.id = id;
    this.name = name;
    this.capacity = capacity;
    this.students = [];
  }
}

module.exports = Course;
