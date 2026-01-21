// Book model defines the structure of a book object
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false;
  }
}

module.exports = Book;
