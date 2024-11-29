const express = require("express");
const cors = require("cors");
const connectDb = require("./Config/db");
require("dotenv").config();

// Initialize express app
const app = express();

// Connect to the database
connectDb();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/auth", require("./Router/AddEmployeeRouter"));
app.use("/api/v1/employee", require("./Router/UserRouter"));
app.use("/api/v1/department", require("./Router/DepartmentRouter"));

// Root route
app.get("/", (req, resp) => {
  return resp.status(200).send("<h1>Hi Server Start</h1>");
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export for Vercel
module.exports = app;
