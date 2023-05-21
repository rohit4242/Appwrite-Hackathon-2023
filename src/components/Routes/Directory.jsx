import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { TasksContext } from "../../Context/Tasks/TasksContext";

const Directory = () => {
  const { state } = useContext(TasksContext);

  const params = useParams();
  const navigate = useNavigate();

  useDescriptionTitle(
    `Tasks in "${params.dir}"`,
    params.dir ? params.dir + " directory" : ""
  );

  const [tasksInCurrentDirectory, setTasksInCurrentDirectory] = useState([]);

  useEffect(() => {
    const dirExists = state.directories.includes(params.dir);
    if (!dirExists) {
      navigate("/");
    }
    const tasksFiltered = state.tasks.filter((task) => task.dir === params.dir);
    setTasksInCurrentDirectory(tasksFiltered);
  }, [state.directories, navigate, params.dir, state.tasks]);

  return (
    <LayoutRoutes
      title={`${params.dir}'s tasks`}
      tasks={tasksInCurrentDirectory}
    />
  );
};

export default Directory;
