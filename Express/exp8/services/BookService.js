// Service contains business rules
class BookService {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  borrowBook(bookId) {
    const book = this.bookRepository.findById(bookId);

    if (!book) {
      throw new Error("Book not found");
    }

    if (book.isBorrowed) {
      throw new Error("Book already borrowed");
    }

    book.isBorrowed = true;
    this.bookRepository.update(book);
    return book;
  }

  // Challenge requirement
  returnBook(bookId) {
    const book = this.bookRepository.findById(bookId);

    if (!book) {
      throw new Error("Book not found");
    }

    book.isBorrowed = false;
    this.bookRepository.update(book);
    return book;
  }
}

module.exports = BookService;
