import React, { useState, useEffect, useContext } from "react";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { TasksContext } from "../../Context/Tasks/TasksContext";

const ImportantTasks = () => {
  const [importantTasks, setImportantTasks] = useState([]);
  const { state } = useContext(TasksContext);

  useEffect(() => {
    const filteredTasks = state.tasks.filter((task) => task.important);
    setImportantTasks(filteredTasks);
  }, [state.tasks]);

  useDescriptionTitle("Tasks marked as important", "Important tasks");

  return (
    <LayoutRoutes title="Important tasks" tasks={importantTasks}></LayoutRoutes>
  );
};

export default ImportantTasks;
