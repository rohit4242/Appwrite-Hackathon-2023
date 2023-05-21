import React, { useContext } from "react";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import { TasksContext } from "../../Context/Tasks/TasksContext";

const Home = () => {
  const { state } = useContext(TasksContext);

  useDescriptionTitle("Organize your tasks", "All tasks");
  return <LayoutRoutes title="All tasks" tasks={state.tasks}></LayoutRoutes>;
};

export default Home;
