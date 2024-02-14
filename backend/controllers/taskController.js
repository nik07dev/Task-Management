const express = require("express");
const router = express.Router();
const taskService = require("../services/taskService");

router.get("/:id", async (req, res) => {
  const taskId = parseInt(req.params.id);
  const { data, status, error, message } = await taskService.getTask(taskId);
  return error
    ? res.status(status).json({ error })
    : res.status(status).json({ data, message });
});

router.get("/", async (req, res) => {
  const { data, status, error, message } = await taskService.getAllTasks();
  return error
    ? res.status(status).json({ error })
    : res.status(status).json({ data, message });
});

router.post("/", async (req, res) => {
  const { taskDetails } = req.body;
  const { data, status, error, message } = await taskService.createTask({
    taskDetails,
  });
  return error
    ? res.status(status).json({ error })
    : res.status(status).json({ data, message });
});

router.put("/:id", async (req, res) => {
  const taskId = parseInt(req.params.id);
  const { taskDetails } = req.body;
  const { data, status, error, message } = await taskService.updateTask({
    taskId,
    taskDetails,
  });
  return error
    ? res.status(status).json({ error })
    : res.status(status).json({ data, message });
});

router.delete("/:id", async (req, res) => {
  const taskId = parseInt(req.params.id);
  const { data, status, error, message } = await taskService.deleteTask({
    taskId,
  });
  return error
    ? res.status(status).json({ error })
    : res.status(status).json({ data, message });
});

module.exports = router;
