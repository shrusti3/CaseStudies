// Repository handles data storage (in-memory for now)
class BookRepository {
  constructor() {
    this.books = [];
  }

  findById(id) {
    return this.books.find(book => book.id === id);
  }

  save(book) {
    this.books.push(book);
  }

  update(book) {
    const index = this.books.findIndex(b => b.id === book.id);
    this.books[index] = book;
  }
}

module.exports = BookRepository;
