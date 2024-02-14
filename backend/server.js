const express = require("express");
const app = express();
const taskController = require("./controllers/taskController");
const errorHandler = require("./utils/genericErrorHandler");
const logger = require("./utils/logger");
const cors = require("cors");
const helmet = require("helmet");

//importing lib for parsing environment variables
require("dotenv").config();
//content security policy
app.use(helmet());

//for cors
app.use(cors());

app.use(express.json());

// Use the routes
app.use("/tasks", taskController);

// Use the generic error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
