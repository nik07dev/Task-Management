// TaskForm.js
import React, { useState } from "react";
import config from "../utils";
import { useHistory } from "react-router-dom";

const TaskForm = () => {
  const history = useHistory();
  const [taskDetails, setTaskDetails] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskDetails) {
      setError("Empty task details cannot be submitted");
      return;
    }
    fetch(`${config.API_URL}/tasks`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taskDetails,
      }),
    })
      .then((res) => history.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-auto card col-sm-6">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Create Task</h5>
        <input
          type="text"
          value={taskDetails}
          className="form-control my-4"
          placeholder="Write task details"
          onChange={(e) => setTaskDetails(e.target.value)}
        />
        {error && <p className="text-danger">{error}</p>}
        <button className="btn btn-primary" onClick={handleSubmit}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
