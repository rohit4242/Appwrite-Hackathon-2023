import React, { useContext } from "react";
import useCompletedTasks from "../hooks/useCompletedTasks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { TasksContext } from "../../Context/Tasks/TasksContext";

const DoneTasks = ({ done, title }) => {
  const { state } = useContext(TasksContext);

  const { tasks: tasksFiltered } = useCompletedTasks({
    tasks: state.tasks,
    done,
  });

  useDescriptionTitle("All tasks done", title);

  return <LayoutRoutes title={title} tasks={tasksFiltered}></LayoutRoutes>;
};

export default DoneTasks;
