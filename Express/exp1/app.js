const express = require("express");
const app = express();
const port = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Greenfield Community Center!");
});

// Events route
app.get("/events", (req, res) => {
  const events = [
    "Yoga Class - Monday 7pm",
    "Gardening Workshop - Wednesday 5pm",
    "Book Club - Friday 6pm",
  ];
  res.json(events);
});

// Contact route (challenge)
app.get("/contact", (req, res) => {
  res.json({
    email: "contact@greenfieldcenter.org",
    phone: "123-456-7890",
  });
});

// Start server
app.listen(port, () => {
  console.log(`Community Center server running at http://localhost:${port}`);
});
