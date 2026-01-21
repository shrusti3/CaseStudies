// Controller handles HTTP requests and responses
class BookController {
  constructor(bookService) {
    this.bookService = bookService;
  }

  borrowBook(req, res) {
    try {
      const book = this.bookService.borrowBook(req.params.id);
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  returnBook(req, res) {
    try {
      const book = this.bookService.returnBook(req.params.id);
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = BookController;
