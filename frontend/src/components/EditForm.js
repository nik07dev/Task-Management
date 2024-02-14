import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../utils";
import { useHistory } from "react-router-dom";

function EditForm() {
  const history = useHistory();
  const { id } = useParams();
  const [taskDetails, setTaskDetails] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskDetails) {
      setError("Empty task details cannot be submitted");
      return;
    }

    fetch(`${config.API_URL}/tasks/${id}`, {
      method: "put",
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

  useEffect(() => {
    fetch(`${config.API_URL}/tasks/${id}`)
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        setTaskDetails(data.taskDetails);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="mx-auto card col-sm-6">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Edit Task</h5>
        <input
          type="text"
          value={taskDetails}
          className="form-control my-4"
          placeholder="Write task details"
          onChange={(e) => setTaskDetails(e.target.value)}
        />
        {error && <p className="text-danger">{error}</p>}
        <button className="btn btn-primary" onClick={handleSubmit}>
          Edit Task
        </button>
      </div>
    </div>
  );
}

export default EditForm;
