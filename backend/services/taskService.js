const taskRepository = require("../repository/taskRepository");
const logger = require("../utils/logger");

const getTask = async (id) => {
  try {
    const task = await taskRepository.get(id);
    return { data: task, status: 200 };
  } catch (error) {
    logger.error(`Error fetching tasks: ${error.message}`);
  }
};

const getAllTasks = async () => {
  try {
    const tasks = await taskRepository.getAll();
    return { data: tasks, status: 200 };
  } catch (error) {
    logger.error(`Error fetching tasks: ${error.message}`);
  }
};

const createTask = async (data) => {
  try {
    const { taskDetails } = data;
    if (!taskDetails || taskDetails.length === 0) {
      return { error: "Task cannot be empty", status: 400 };
    }
    const tasks = await taskRepository.create(taskDetails);
    return { message: "Created Successfully", data: tasks, status: 201 };
  } catch (error) {
    logger.error(`Error creating tasks: ${error.message}`);
  }
};

const updateTask = async (data) => {
  try {
    const { taskDetails, taskId } = data;
    if (!taskDetails || !taskId) {
      return { error: "Task or id cannot be empty", status: 400 };
    }
    const tasks = await taskRepository.update(taskId, taskDetails);
    return { message: "Updated Successfully", data: tasks, status: 200 };
  } catch (error) {
    logger.error(`Error updating tasks: ${error.message}`);
  }
};

const deleteTask = async (data) => {
  try {
    const { taskId } = data;
    if (!taskId) {
      return { error: "id cannot be empty", status: 400 };
    }
    const tasks = await taskRepository.destroy(taskId);
    return { message: "Deleted Successfully", data: tasks, status: 200 };
  } catch (error) {
    logger.error(`Error deleting tasks: ${error.message}`);
  }
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask, getTask };
