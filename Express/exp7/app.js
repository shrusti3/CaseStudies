const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Validation rules
const applicationValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("birthdate").isISO8601().withMessage("Birthdate must be YYYY-MM-DD"),
  body("grades").isArray({ min: 1 }).withMessage("At least one grade is required"),
  body("grades.*").isNumeric().withMessage("Grades must be numbers"),
  body("essay")
    .isLength({ min: 100 })
    .withMessage("Essay must be at least 100 characters"),
  body("recommendationLetter")
    .isURL()
    .withMessage("Valid recommendation letter URL required"),
];

// Route
app.post("/apply", applicationValidation, (req, res) => {
  const errors = validationResult(req);

  // If validation fails
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "error",
      errors: errors.array(),
    });
  }

  // If validation passes
  res.json({
    status: "success",
    message: "Application received successfully",
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


/*{
  "name": "",
  "email": "wrong",
  "essay": "short"
}*/
//400 BAD REQUEST

/*{
  "name": "Ananya",
  "email": "ananya@gmail.com",
  "birthdate": "2004-06-15",
  "grades": [85, 90, 88],
  "essay": "This is a long essay that is definitely more than one hundred characters. I am passionate about learning and contributing to the university community.",
  "recommendationLetter": "https://example.com/letter.pdf"
}
*/
//shows success 200 OK