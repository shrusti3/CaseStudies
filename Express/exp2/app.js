const express = require("express");
const app = express();
const port = 3000;

const eventsRouter = require("./routes/events");
const classesRouter = require("./routes/classes");
const contactRouter = require("./routes/contact");

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to Greenfield Community Center!");
});

app.use("/events", eventsRouter);
app.use("/classes", classesRouter);
app.use("/contact", contactRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
