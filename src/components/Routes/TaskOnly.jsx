import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { TasksContext } from "../../Context/Tasks/TasksContext";

const TaskOnly = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { state } = useContext(TasksContext);

  const [matchedTask, setMatchedTask] = useState([]);

  useEffect(() => {
    const taskId = params.taskId;
    const filteredTask = state.tasks.filter((task) => taskId === task.id);
    if (!filteredTask.length) {
      navigate("/");
    }
    setMatchedTask(filteredTask);
  }, [navigate, params.taskId, state.tasks]);

  const title = matchedTask.length ? matchedTask[0].title : "";

  useDescriptionTitle(`Searching for ${title}`, "Task " + title);

  return <LayoutRoutes title={title} tasks={matchedTask} />;
};

export default TaskOnly;
