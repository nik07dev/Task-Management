let tasks = [{ id: 1, taskDetails: "Workout at 6am" }];

const get = (id) => {
  return tasks.find((item) => item.id === id);
};

const getAll = async () => {
  return tasks;
};

const create = async (data) => {
  const id = tasks.length + 1;
  tasks.push({ id, taskDetails: data });
  return tasks;
};

const update = (id, data) => {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, taskDetails: data };
    } else {
      return task;
    }
  });
  return tasks;
};

const destroy = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
  return tasks;
};

module.exports = { get, getAll, create, update, destroy };
