const express = require("express");

const Book = require("./models/Book");
const BookRepository = require("./repositories/BookRepository");
const BookService = require("./services/BookService");
const BookController = require("./controllers/BookController");

const app = express();
app.use(express.json());

// Dependency Injection
const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

// Seed data
bookRepository.save(new Book("1", "1984", "George Orwell"));
bookRepository.save(new Book("2", "Harry Potter", "J.K. Rowling"));

// Routes
app.post("/books/:id/borrow", (req, res) =>
  bookController.borrowBook(req, res)
);

app.post("/books/:id/return", (req, res) =>
  bookController.returnBook(req, res)
);

app.listen(3000, () => {
  console.log("Library system running on port 3000");
});
