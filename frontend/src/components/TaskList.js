import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../utils";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const onDelete = (taskId) => {
    fetch(`${config.API_URL}/tasks/${taskId}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        setTasks(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(`${config.API_URL}/tasks`)
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        setTasks(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      {tasks.map((task, index) => (
        <div className="row border p-3 mb-3" key={task.id}>
          <div className="col-md-8">
            <p className="mb-0">
              <strong>{index + 1}.</strong> {task.taskDetails}
            </p>
          </div>
          <div className="col-md-4 d-flex justify-content-md-end justify-content-center">
            <button
              className="btn btn-danger mx-2"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
            <Link to={`/edit/${task.id}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
